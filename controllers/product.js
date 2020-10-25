const { httpStatus, responseCode } = require('../config/response_codes');
const productQuery = require('../queries/product_queries');
const productTierQuery = require('../queries/product_tier_queries');

class Product {
  static async createProduct(req, res) {
    try {
      req.checkBody({
        deskripsi: { notEmpty: true, errorMessage: 'deskripsi field is required' },
        nama_produk: { notEmpty: true, errorMessage: 'nama_produk field is required' },
        kode_produk: { notEmpty: true, errorMessage: 'kode_produk field is required' },
        kelompok: { notEmpty: true, errorMessage: 'kelompok field is required' },
        denom: { notEmpty: true, errorMessage: 'denom field is required' },
        nama_biller: { notEmpty: true, errorMessage: 'nama_biller field is required' },
        harga_biller: { notEmpty: true, errorMessage: 'harga_biller field is required' },
        harga_duitin: { notEmpty: true, errorMessage: 'harga_duitin field is required' },
        user_type: { notEmpty: true, errorMessage: 'user_type field is required' }
      })
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
        deskripsi: req.body.deskripsi,
        nama_produk: req.body.nama_produk,
        kode_produk: req.body.kode_produk,
        kelompok: req.body.kelompok,
        denom: req.body.denom,
        nama_biller: req.body.nama_biller,
        harga_biller: req.body.harga_biller,
        harga_duitin: req.body.harga_duitin,
        productTierId: productTier.id,
        user_type: req.body.user_type,
      };
      const productResult = await productQuery.createProduct(createProductRequest);
      return res.status(httpStatus.ok).json({
        msg: 'success create product',
        data: productResult,
        rc: responseCode.success,
      });
    } catch (error) {
      return res.status(httpStatus.internalServerError).json({
        msg: 'ERROR WHILE CREATING PRODUCT',
        data: error.message,
        rc: httpStatus.internalServerError,
      });
    }
  }

  static async findAllProduct(req, res) {
    try {
      req.checkQuery({
        user_type: { notEmpty: true, errorMessage: 'user_type field is required' }
      });
      const errors = req.validationErrors();
      if (errors) {
        return res.status(httpStatus.forbidden).json({
          success: false,
          msg: errors,
          rc: responseCode.missingParameter,
        });
      }
      const productResult = await productQuery.findAllProduct(req.query.user_type);
      return res.status(httpStatus.ok).json({
        msg: 'success returning products',
        data: productResult,
        rc: responseCode.success,
      });
    } catch (error) {
      return res.status(httpStatus.internalServerError).json({
        msg: 'PRODUCT NOT FOUND',
        data: error.message,
        rc: httpStatus.notFound
      });
    }
  }

  static async findProductByFilter(req, res) {
    try {
      req.checkQuery({
        user_type: { notEmpty: true, errorMessage: 'user_type field is required' }
      });
      const errors = req.validationErrors();
      if (errors) {
        return res.status(httpStatus.forbidden).json({
          success: false,
          msg: errors,
          rc: responseCode.missingParameter,
        });
      }
      const queryOptions = {
        user_type: req.body.user_type,
        ...req.query
      }
      const productResult = await productQuery.findProductByFilter(queryOptions);
      return res.status(httpStatus.ok).json({
        msg: 'success returning products',
        data: productResult,
        rc: responseCode.success,
      });
    } catch (error) {
      return res.status(httpStatus.notFound).json({
        msg: 'PRODUCT NOT FOUND',
        data: 'please check your query params',
        rc: httpStatus.notFound
      });
    }
  }

  static async findProductByName(req, res) {
    try {
      req.checkQuery({
        nama_produk: { notEmpty: true, errorMessage: 'nama_produk field is required' },
        user_type: { notEmpty: true, errorMessage: 'user_type field is required' }
      });
      req.checkBody({
        user_type: { notEmpty: true, errorMessage: 'user_type field is required' }
      });
      const errors = req.validationErrors();
      if (errors) {
        return res.status(httpStatus.forbidden).json({
          success: false,
          msg: errors,
          rc: responseCode.missingParameter,
        });
      }
      const productResult = await productQuery.findOneProduct({ 
        nama_produk: req.query.nama_produk,
        user_type: req.query.user_type 
      });
      return res.status(httpStatus.ok).json({
        msg: 'success returning products',
        data: productResult,
        rc: responseCode.success,
      });
    } catch (error) {
      return res.status(httpStatus.notFound).json({
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
        user_type: { notEmpty: true, errorMessage: 'user_type field is required' }
      });
      req.checkBody({
        user_type: { notEmpty: true, errorMessage: 'user_type field is required' }
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
        user_type: req.query.user_type,
        data: req.body
      });
      return res.status(httpStatus.ok).json({
        msg: 'success updating products',
        data: productResult,
        rc: responseCode.success,
      });
    } catch (error) {
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
    } catch (error) {
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
  router.get('/', Product.findAllProduct);
  router.get('/:filter', Product.findProductByFilter);
  router.get('/:nama_produk', Product.findProductByName);
  router.put('/:nama_produk', Product.updateProduct);
  router.delete('/delete', Product.deleteProduct);
}