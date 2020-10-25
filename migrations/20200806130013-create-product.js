'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      kode_produk:{
        type: Sequelize.STRING
      },
      kelompok: {
        type: Sequelize.STRING
      },
      denom: {
        type: Sequelize.INTEGER
      },
      nama_biller: {
        type: Sequelize.STRING
      },
      harga_biller: {
        type: Sequelize.INTEGER
      },
      harga_duitin: {
        type: Sequelize.INTEGER
      },
      productTierId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_type: {
        allowNull: false,
        type: Sequelize.ENUM(['CONTRIBUTOR', 'PICKER'])
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};