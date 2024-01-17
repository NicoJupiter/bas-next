import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cardSchema = new Schema({
    id: ObjectId,
    title: String,
    content: String
});

export const CardModel = mongoose.models.Card || mongoose.model('Card', cardSchema);
export default CardModel;