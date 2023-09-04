import { Schema, model, Types } from "mongoose";

let collection = 'itineraries';

let schema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true, min: 1, max: 5 },
    duration: { type: Number, required: true },
    hashtags:{ type: Array, required: true, minlenght: 1, maxlenght: 3 },
    likes: { type: Number, required: true, default: 0 },
    comments: { type: Array, required: true, default: [] },
    user: { type: Types.ObjectId, ref: 'users' },
    city: { type: Types.ObjectId, ref: 'cities' }
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);
export default Itinerary;
