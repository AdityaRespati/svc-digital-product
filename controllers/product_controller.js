const { httpStatus, responseCode } = require('../config/response_codes');
const productQuery = require('../queries/product_queries');
const productTierQuery = require('../queries/product_tier_queries');

class Product {
  static async createProduct(req, res) {
    try {
      const errors = req.validationErrors();
      if (errors) {
        return res.status(httpStatus.forbidden).json({
          success: false,
          msg: errors,
          rc: responseCode.missingParameter,
        });
      }
      const productTier = await productTierQuery.createProductTier();

      const createProductRequest = {
        operator: req.body.operator,
        nama_produk: req.body.nama_produk,
        kelompok: req.body.kelompok,
        denom: req.body.denom,
        nama_biller: req.body.nama_biller,
        harga_biller: req.body.harga_biller,
        harga_duitin: req.body.harga_duitin,
        productTierId: productTier.id
      };
      const productResult = await productQuery.createProduct(createProductRequest);
      return res.status(httpStatus.ok).json({
        msg: 'success create product',
        data: productResult,
        rc: responseCode.success,
      });
    } catch {
      return res.status(httpStatus.internalServerError).json({
        msg: 'ERROR WHILE CREATING PRODUCT',
        data: error.message,
        rc: httpStatus.internalServerError,
      });
    }
  }

  static async findAllProduct(req, res) {
    try {
      const errors = req.validationErrors();
      if (errors) {
        return res.status(httpStatus.forbidden).json({
          success: false,
          msg: errors,
          rc: responseCode.missingParameter,
        });
      }
      const productResult = await productQuery.findProduct({ status: 'active' });
      return res.status(httpStatus.ok).json({
        msg: 'success returning products',
        data: productResult,
        rc: responseCode.success,
      });
    } catch {
      return res.status(httpStatus.internalServerError).json({
        msg: 'PRODUCT NOT FOUND',
        data: error.message,
        rc: httpStatus.notFound
      });
    }
  }

  static async findProductByName(req, res) {
    try {
      req.checkQuery({
        nama_produk: { notEmpty: true, errorMessage: 'nama_produk field is required' },
      });
      const errors = req.validationErrors();
      if (errors) {
        return res.status(httpStatus.forbidden).json({
          success: false,
          msg: errors,
          rc: responseCode.missingParameter,
        });
      }
      const productResult = await productQuery.findProduct({ nama_produk: req.query.nama_produk });
      return res.status(httpStatus.ok).json({
        msg: 'success returning products',
        data: productResult,
        rc: responseCode.success,
      });
    } catch {
      return res.status(httpStatus.internalServerError).json({
        msg: 'PRODUCT NOT FOUND',
        data: error.message,
        rc: httpStatus.notFound
      });
    }
  }

  static async updateProduct(req, res) {
    try {
      req.checkQuery({
        nama_produk: { notEmpty: true, errorMessage: 'nama_produk field is required' },
      });
      const errors = req.validationErrors();
      if (errors) {
        return res.status(httpStatus.forbidden).json({
          success: false,
          msg: errors,
          rc: responseCode.missingParameter,
        });
      }
      const productResult = await productQuery.updateProduct({
        nama_produk: req.query.nama_produk,
        data: req.body
      });
      return res.status(httpStatus.ok).json({
        msg: 'success updating products',
        data: productResult,
        rc: responseCode.success,
      });
    } catch {
      return res.status(httpStatus.internalServerError).json({
        msg: 'ERROR WHILE UPDATING PRODUCR',
        data: error.message,
        rc: httpStatus.internalServerError
      });
    }
  }

  static async deleteProduct(req, res) {
    try {
      req.checkQuery({
        nama_produk: { notEmpty: true, errorMessage: 'nama_produk field is required' },
      });
      const errors = req.validationErrors();
      if (errors) {
        return res.status(httpStatus.forbidden).json({
          success: false,
          msg: errors,
          rc: responseCode.missingParameter,
        });
      }
      const productResult = await productQuery.findOne({
        nama_produk: req.query.nama_produk
      });
      const productTierResult = await productTierQuery.updateProductTier({
        tierId: productResult.productTierId,
        status: 'deleted'
      })
      return res.status(httpStatus.ok).json({
        msg: 'success deleting products',
        data: { productResult, productTierResult },
        rc: responseCode.success,
      });
    } catch {
      return res.status(httpStatus.internalServerError).json({
        msg: 'ERROR WHILE DELETING PRODUCT',
        data: error.message,
        rc: httpStatus.internalServerError
      });
    }
  }
}

module.exports = (router) => {
  router.post('/', Product.createProduct);
  router.get('/', Product.createProduct);
  router.get('/:nama_produk', Product.createProduct);
  router.put('/:nama_produk', Product.createProduct);
  router.delete('/delete', Product.createProduct);
}