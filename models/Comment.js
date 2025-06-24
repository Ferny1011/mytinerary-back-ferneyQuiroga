import { Schema, model, Types } from "mongoose";

let collection = 'comments';

let schema = new Schema({
    content: { type: String, required: true },
    user: { type: Types.ObjectId, ref: 'users', required: true },
    itinerary: { type: Types.ObjectId, ref: 'itineraries', required: true }
}, {
    timestamps: true
});

let Comment = model(collection, schema);
export default Comment;