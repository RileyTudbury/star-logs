import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId

const Comment = new Schema(
  {
    shipId: { type: objectId, required: true },
    logId: { type: objectId, required: true },
    date: { type: String, required: true },
    author: { type: String, required: true },
    entry: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;
