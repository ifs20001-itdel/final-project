const { Versions } = require('../models/')

class Controller {
    static async getAllVersion(req, res) {
        try {
            const allProduct = await Versions.findAll()

            res.status(200).json({
                message: 'Success to Get All Data Version',
                data: allProduct
            })
        } catch {
            res.json('Error to GET data')
        }
    }
}

module.exports = Controller