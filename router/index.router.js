import express from 'express';
import cityRouter from './city.router.js';
import userRouter from './user.router.js';
import commentRouter from './comment.router.js';
import activityRouter from './activity.router.js';
import itineraryRouter from './itinerary.router.js';
import authRouter from './auth.router.js';

const router = express.Router();

router.use('/cities', cityRouter);
router.use('/user', userRouter);
router.use('/comments', commentRouter);
router.use('/activities', activityRouter);
router.use('/itineraries', itineraryRouter);
router.use('/auth', authRouter);

export default router;