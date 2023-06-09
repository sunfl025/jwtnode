const User = require("../models/User");

const userController = {
    //GET ALL USERS
    getAllUsers: async(req,res) => {
        try {
            const list = await User.find();
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteUser: async(req,res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json("Delete successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }

}


module.exports = userController;