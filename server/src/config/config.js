import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3001;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://santiagobalbarrey:90VqgZElZIGsS0rd@nocountry.xzhf6.mongodb.net/adoppet"
export const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY;

