import City from '../models/City.js';

const controller = {
    getCities: async (req, res) => {
        let queries = {};
        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name.trim()}`, 'i');
        }

        try{
            const cities = await City.find(queries).populate('user')
            if(cities.length>0){
                return res.status(200).json({
                    success: true,
                    cities: cities
                });
            }
            return res.status(404).json({
                success: false,
                message: 'Cities not found'
            });
        }catch(error){
            return res.status(500).json({
                success: false,
                message: 'Error getting city'
            });
        }
    },
    getCityById: async (req, res) =>{
        try{
            const city = await City.findById(req.params.id);
            if(city){
                return res.status(200).json({
                    success: true,
                    city: city
                });
            }
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });

        } catch(error){
            return res.status(500).json({
                success: false,
                message: 'Error getting city'
            });
        }
    },
    createCity: async (req, res) => {
        try {
            const newCity = await City.create(req.body);
            return res.status(201).json({
                success: true,
                message: 'City created successfully'
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating city'
            });
        }
    },
    updateCity: async (req, res) => {
        try {
            const city = await City.findById(req.params.id);
            if(city){
                await City.updateOne({_id: req.params.id}, req.body);
                return res.status(200).json({
                    success: true,
                    message: 'City updated successfully'
                });
            }
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error updating city'
            });
        }
    },
    deleteCity: async (req, res) => {
        try {
            const city = await City.findById(req.params.id);
            if(city){
                await City.deleteOne({_id: req.params.id});
                return res.status(200).json({
                    success: true,
                    message: 'City deleted successfully'
                });
            }
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error deleting city'
            });
        }
    }
};

export default controller;