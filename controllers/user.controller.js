import User from '../models/User.js';

const controller = {
    getUsers: (req, res) => {
    },
    createUser: async (req, res) => {
        try{
            const newUser = await User.create(req.body);
            return res.status(201).json({
                success: true,
                message: 'User created',
                data: newUser
            });
        } catch(error) {
            res.status(500).json({
                success: false,
                message: 'Error creating a user'
            });
        }
    },
    deleteUser: (req, res) => {

    }
};

export default controller;