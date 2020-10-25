'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    deskripsi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama_produk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validator: async (value) => {
          const status = await Product.findAll({ where: { nama_produk: value } });
          if (status.length > 0) {
            throw new Error('Product Already Exists');
          }
          return true;
        },
      },
    },
    kode_produk: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kelompok: {
      type: DataTypes.STRING,
      allowNull: false
    },
    denom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    //e.g nama_biller: "DAWANG"
    nama_biller: {
      type: DataTypes.STRING,
      allowNull: false
    },
    harga_biller: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    harga_duitin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productTierId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_type: {
      type: DataTypes.ENUM(['CONTRIBUTOR', 'PICKER']),
      allowNull: false
    } 
  }, {});
  Product.associate = function (models) {
    Product.belongsTo(models.productTier, { foreignKey: 'productTierId', as: 'tier' });
  };
  return Product;
};