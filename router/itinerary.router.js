import express from 'express';
import itinerariesController from '../controllers/itinerary.controller.js';

const router = express.Router();
const {getItineraries, createItinerary, getItinerayById, updateItinerary, deleteItinerary} = itinerariesController;

router.get('/', getItineraries);
router.post('/', createItinerary);
router.get('/:id', getItinerayById);
router.put('/:id', updateItinerary);
router.delete('/:id', deleteItinerary);


export default router;