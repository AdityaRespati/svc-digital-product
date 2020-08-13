const Product = require('../models/product');

const productQuery = {
  createProduct: async ({
    operator,
    nama_produk,
    kelompok,
    denom,
    nama_biller,
    harga_biller,
    harga_duitin,
    productTierId}) => {
    try {
      const result = await Product.create({
        operator,
        nama_produk,
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
  findAllProduct: async (filter) => {
    try {
      const result = await Product.find({where:filter});
      return result;
    } catch(error){
      throw (error)
    }
  },
  findOneProduct: async (filter) => {
    try {
      const result = await Product.findOne({where:filter});
      return result;
    } catch(error){
      throw (error)
    }
  },
  updateProduct: async ({
    nama_produk,
    data
  }) => {
    try {
      const result = await Product.update(data, {
        where: {
          nama_produk,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = productQuery;