const { Products } = require('../models/')

class Controller {
    static async getAllProduct(req, res) {
        try {
            const allProduct = await Products.findAll()

            res.status(200).json({
                message: 'Success to Get All Data Product',
                data: allProduct
            })
        } catch {
            res.json('Error to GET data')
        }
    }
}

module.exports = Controller