const ProductTier = require('../models/productTier');

const ProductTierQuery = {
  createProductTier: async () => {
    try {
      const result = await ProductTier.create({
        status:'active'
      })
      return result;
    } catch (error) {
      throw (error)
    }
  },
  updateProductTier: async ({tierId, data, }) => {
    try {
      const result = await contributorTier.update(data, {
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