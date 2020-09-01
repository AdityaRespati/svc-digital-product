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
    productTierId }) => {
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
        productTierId
      })
      return result;
    } catch (error) {
      throw (error)
    }
  },
  findAllProduct: async () => {
    try {
      const result = await product.findAll();
      return result;
    } catch (error) {
      throw (error)
    }
  },
  findProductByFilter: async (query) => {
    const filter = {}
    for(const prop in query){
      filter[prop] = {[Op.like]: '%'+ query[prop] + '%'}
    }
    try {
      const result = await product.findAll({where: filter});
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
    data
  }) => {
    try {
      await product.update(data, {
        where: {
          nama_produk,
        },
      });

      const result = await product.findOne({
        where: {
          nama_produk,
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = productQuery;