module.exports = (sequelize, DataTypes) => {
  const productTier = sequelize.define('productTier', {
    status: DataTypes.ENUM(['active', 'deleted']),
  }, {});
  productTier.associate = (models) => {
  };
  return productTier;
};
