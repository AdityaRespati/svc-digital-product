const { Product } = require('../models');

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
      const result = await Product.create({
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
      const result = await Product.findAll();
      return result;
    } catch (error) {
      throw (error)
    }
  },
  findOneProduct: async (filter) => {
    try {
      const result = await Product.findOne({ where: filter });
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
      await Product.update(data, {
        where: {
          nama_produk,
        },
      });

      const result = await Product.findOne({
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