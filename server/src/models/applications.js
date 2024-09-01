import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  adopterId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  petId: { type: Schema.Types.ObjectId, ref: 'Pets', required: true },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'moreInfo', 'adopted'],
    default: 'pending'
  },
  applicationDate: { type: Date, default: Date.now },
  adopterInfo: {
    name: { type: String, required: true },
    age: { type: Number },
    phone: { type: String },
    email: { type: String, required: true },
    housingType: { type: String, enum: ['house', 'apartment'] },
    housingOwnership: { type: String, enum: ['owned', 'rented'] },
    outdoorSpace: { type: Boolean },
    numPeople: { type: Number },
    hasChildren: { type: Boolean },
    otherPets: { type: Boolean },
    hadPets: { type: Boolean },
    surrenderPet: { type: Boolean },
    reasonSurrender: { type: Boolean },
    commitments: {
      coverCosts: { type: Boolean, required: true },
      returnPet: { type: Boolean, required: true }
    }
  }
});

const applicationModel = mongoose.model('Applications', applicationSchema);

export default applicationModel;
