import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId

const Log = new Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    shipId: { type: objectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Log;
