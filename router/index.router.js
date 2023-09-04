import express from 'express';
import cityRouter from './city.router.js';
import userRouter from './user.router.js';
import itineraryRouter from './itinerary.router.js';

const router = express.Router();

router.use('/cities', cityRouter);
router.use('/users', userRouter);
router.use('/itineraries', itineraryRouter);

export default router;