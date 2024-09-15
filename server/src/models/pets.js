import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  specie: { type: String, enum: ['perro', 'gato'], required: true },
  breed: { type: String, required: true },
  description: { type: String, required: true },
  size: { type: String, required: true },
  healthStatus: {
    type: String,
    // enum: ['sano', 'enfermo', 'en tratamiento', 'recuperado'],
    default: 'Sano'
  },
  idDeleted: { type: Boolean, default: false },
  imgs: [String],
  category: { type: String, enum: ['perros', 'gatos'], required: true },
  // userAdmin: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  post: { type: Boolean, required: true }
});

const petModel = mongoose.model('Pets', petSchema);

export default petModel;
