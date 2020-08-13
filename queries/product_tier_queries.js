const { productTier } = require('../models');

const ProductTierQuery = {
  createProductTier: async () => {
    try {
      const result = await productTier.create({
        status: 'active'
      })
      return result;
    } catch (error) {
      throw (error)
    }
  },
  updateProductTier: async ({ tierId, data, }) => {
    try {
      const result = await productTier.update(data, {
        where: {
          id: tierId
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ProductTierQuery;