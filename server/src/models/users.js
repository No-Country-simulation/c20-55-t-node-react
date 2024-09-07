import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["adopter", "admin"], required: true },
    birth: Date,
    name: String,
    surname: String,
    tel: String,
    photo: String,
    nationalID: String,
    address: String
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
