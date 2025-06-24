import { Schema, model, Types } from "mongoose";

let collection = 'activities';

let schema = new Schema({
    title: { type: String, required: true },
    photo: { type: String, required: true },
    itinerary: { type: Types.ObjectId, ref: 'itineraries', required: true }
}, {
    timestamps: true
});

let Activity = model(collection, schema);
export default Activity;