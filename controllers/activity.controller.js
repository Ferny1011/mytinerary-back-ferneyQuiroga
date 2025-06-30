import Activity from '../models/Activity.js';

const controller = {
    createActivity: async (req, res) => {
        try {
            const activity = await Activity.create(req.body);
            return res.status(201).json({ success: true, activity });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    getActivities: async (req, res) => {
        try {
            const activities = await Activity.find().populate('itinerary');
            return res.status(200).json({ success: true, activities });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    getActivitiesByItinerary: async (req, res) => {
        try {
            const activities = await Activity.find({ itinerary: req.params.id });
            return res.status(200).json({ success: true, activities });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    updateActivity: async (req, res) => {
        try {
            const updated = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json({ success: true, activity: updated });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    deleteActivity: async (req, res) => {
        try {
            await Activity.findByIdAndDelete(req.params.id);
            return res.status(200).json({ success: true, message: 'Activity deleted' });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};

export default controller;
