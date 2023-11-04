const { Supervisors } = require('../models/')

class Controller {
    static async getAllSupervisor(req, res) {
        try {
            const allProduct = await Supervisors.findAll()

            res.status(200).json({
                message: 'Success to Get All Data Supervisor',
                data: allProduct
            })
        } catch {
            res.json('Error to GET data')
        }
    }
}

module.exports = Controller