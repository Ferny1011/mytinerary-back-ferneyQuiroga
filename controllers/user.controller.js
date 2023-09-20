import User from '../models/User.js';

const controller = {
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            return res.status(201).json({
                success: true,
                message: 'User created',
                data: newUser
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error creating a user'
            });
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (user) {
                await User.updateOne({ _id: req.params.id }, req.body);
                return res.status(200).json({
                    success: true,
                    message: 'User updated successfully'
                });
            }
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });


        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error updating user'
            });
        }

    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (user) {
                await User.deleteOne({ _id: req.params.id });
                return res.status(200).json({
                    success: true,
                    message: 'User deleted successfully'
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error deleting user'
            });
        }
    }
};

export default controller;