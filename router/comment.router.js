import express from "express";
import controller from "../controllers/comment.controller.js";

const router = express.Router();

const {
    createComment,
    getComments,
    getCommentsByItinerary,
    updateComment,
    deleteComment
} = controller;

router.get('/', getComments);
router.post('/', createComment);
router.get('/itinerary/:id', getCommentsByItinerary);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;
