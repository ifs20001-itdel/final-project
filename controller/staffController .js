const { Staffs } = require('../models/')

class Controller {
    static async getAllStaff(req, res) {
        try {
            const allProduct = await Staffs.findAll()

            res.status(200).json({
                message: 'Success to Get All Data Staff',
                data: allProduct
            })
        } catch {
            res.json('Error to GET data')
        }
    }
}

module.exports = Controller