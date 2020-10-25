const { product } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const productQuery = {
  createProduct: async ({
    deskripsi,
    nama_produk,
    kode_produk,
    kelompok,
    denom,
    nama_biller,
    harga_biller,
    harga_duitin,
    productTierId,
    user_type
  }) => {
    try {
      const result = await product.create({
        deskripsi,
        nama_produk,
        kode_produk,
        kelompok,
        denom,
        nama_biller,
        harga_biller,
        harga_duitin,
        productTierId,
        user_type
      })
      return result;
    } catch (error) {
      throw (error)
    }
  },
  findAllProduct: async (user_type) => {
    try {
      const result = await product.findAll({
        where: { user_type }
      });
      return result;
    } catch (error) {
      throw (error)
    }
  },
  findProductByFilter: async (query) => {
    const filter = {}
    for (const prop in query) {
      filter[prop] = { [Op.like]: '%' + query[prop] + '%' }
    }
    try {
      const result = await product.findAll({ where: filter });
      return result;
    } catch (error) {
      throw (error)
    }
  },
  findOneProduct: async (filter) => {
    try {
      const result = await product.findOne({ where: filter });
      return result;
    } catch (error) {
      throw (error)
    }
  },
  updateProduct: async ({
    nama_produk,
    user_type,
    data
  }) => {
    try {
      await product.update(data, {
        where: {
          nama_produk,
          user_type
        },
      });

      const result = await product.findOne({
        where: {
          nama_produk,
          user_type
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = productQuery;