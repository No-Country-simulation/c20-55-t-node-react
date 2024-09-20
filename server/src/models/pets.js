import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  specie: { type: String, enum: ["perro", "gato"], required: true },
  breed: { type: String },
  description: { type: String },
  size: { type: String },
  healthStatus: {
    type: String,
    // enum: ['sano', 'enfermo', 'en tratamiento', 'recuperado'],
    default: "Sano"
  },
  idDeleted: { type: Boolean, default: false },
  imgs: [String],
  category: { type: String, enum: ["perros", "gatos"] },
  // userAdmin: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  post: { type: Boolean }
});

const petModel = mongoose.model("Pets", petSchema);

export default petModel;
