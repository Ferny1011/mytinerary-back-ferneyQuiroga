import express from "express";
import controller from "../controllers/activity.controller.js";

const router = express.Router();

const {
    createActivity,
    getActivities,
    getActivitiesByItinerary,
    updateActivity,
    deleteActivity
} = controller;

router.get('/', getActivities);
router.post('/', createActivity);
router.get('/itinerary/:id', getActivitiesByItinerary);
router.put('/:id', updateActivity);
router.delete('/:id', deleteActivity);

export default router;
