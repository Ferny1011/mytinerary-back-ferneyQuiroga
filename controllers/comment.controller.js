import Comment from '../models/Comment.js';

const controller = {
    createComment: async (req, res) => {
        try {
            const comment = await Comment.create(req.body);
            return res.status(201).json({ success: true, comment });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    getComments: async (req, res) => {
        try {
            const comments = await Comment.find().populate('user itinerary');
            return res.status(200).json({ success: true, comments });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    getCommentsByItinerary: async (req, res) => {
        try {
            const comments = await Comment.find({ itinerary: req.params.id }).populate('user');
            return res.status(200).json({ success: true, comments });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    updateComment: async (req, res) => {
        try {
            const updated = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json({ success: true, comment: updated });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Comment.findByIdAndDelete(req.params.id);
            return res.status(200).json({ success: true, message: 'Comment deleted' });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};

export default controller;
