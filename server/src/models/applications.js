import mongoose from 'mongoose';

const { Schema } = mongoose;

const applicationSchema = new mongoose.Schema({
  adopterId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  petId: { type: Schema.Types.ObjectId, ref: 'Pets', required: true },
  status: {
    type: String,
    // enum: ['pending', 'approved', 'rejected', 'moreInfo', 'adopted'],
    default: 'Pendiente'
  },
  applicationDate: { type: Date, default: Date.now },
  adopterInfo: {
    name: { type: String, required: true },
    age: { type: Number },
    phone: { type: String },
    // email: { type: String, required: true },
    nationalID: { type: String },
    housingType: {
      type: String,
      // enum: ['house', 'apartment']
    },
    housingOwnership: {
      type: String,
      // enum: ['owned', 'rented']
    },
    outdoorSpace: { type: Boolean },
    totalFamily: { type: Number },
    hasChildren: { type: Boolean },
    otherPets: { type: Boolean },
    typePets: { type: String },
    hadPets: { type: Boolean },
    sizeHasPets: { type: String },
    surrenderPet: { type: Boolean },
    reasonSurrender: { type: String },
    commitments: {
      coverCosts: { type: Boolean, required: true },
      returnPet: { type: Boolean, required: true }
    },
    contract: { type: String },
  }
});

const applicationModel = mongoose.model('Applications', applicationSchema);

export default applicationModel;
