import mongoose, { Document, Schema } from "mongoose";

interface IConfiguration extends Document {
  imageUrl: string;
  width: number;
  height: number;
  croppedImageUrl: string;
}

const configurationSchema: Schema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  croppedImageUrl: {
    type: String,
  },
});

const Configuration = mongoose.models.Configuration || mongoose.model<IConfiguration>("Configuration", configurationSchema);

export default Configuration;