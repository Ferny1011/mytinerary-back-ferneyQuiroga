import Itinerary from '../models/Itinerary.js';

const controller = {
    getItineraries: async (req, res) => {
        let queries = {};
        if(req.query.cityId){
            queries.city= req.query.cityId;
        }
        try{
            const itineraries = await Itinerary.find(queries).populate('user');
            return res.status(200).json({
                success: true,
                itineraries: itineraries
            });
        } catch(error){
            return res.status(500).json({
                success: false,
                message: 'Error getting itineraries'
            });

        }
    },
    getItinerayById: async (req, res) =>{
        try{
            const itinerary = await Itinerary.findById(req.params.id);
            if(itinerary){
                return res.status(200).json({
                    success: true,
                    itinerary: itinerary
                });
            }

            return res.status(404).json({
                success: false,
                message: 'Itineary not found'
            });

        } catch(error){
            return res.status(500).json({
                success: false,
                message: 'Error getting Itinerary'
            });
        }
    },
    getItinerariesByCity: async (req, res) => {
        try{
            const itineraries = await Itinerary.find({city: req.params.cityId});
            return res.status(200).json({
                success: true,
                itineraries: itineraries
            });
        } catch(error){
            return res.status(500).json({
                success: false,
                message: 'Error getting itineraries'
            });
        }
    },
    createItinerary: async (req, res) => {
        try {
            const newItinerary = await Itinerary.create(req.body);
            return res.status(201).json({
                success: true,
                message: 'Itinerary created successfully'
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating itinerary'
            });
        }
    },
    updateItinerary: async (req, res) => {
        try {
            const itinerary = await Itinerary.findById(req.params.id);
            if(itinerary){
                await Itinerary.updateOne({_id: req.params.id}, req.body);
                return res.status(200).json({
                    success: true,
                    message: 'Itinerary updated successfully'
                });
            }
            return res.status(404).json({
                success: false,
                message: 'Intinerary not found'
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error updating Itinerary'
            });
        }
    },
    deleteItinerary: async (req, res) => {
        try {
            const itinerary = await Itinerary.findById(req.params.id);
            if(itinerary){
                await Itinerary.deleteOne({_id: req.params.id});
                return res.status(200).json({
                    success: true,
                    message: 'Itinerary deleted successfully'
                });
            }
            return res.status(404).json({
                success: false,
                message: 'Itinerary not found'
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error deleting Itinerary'
            });
        }
    }
};

export default controller;