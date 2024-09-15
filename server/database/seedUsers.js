import { createHash } from "../src/utils/bcrypt.js";

export const seedUsers = [
    {
        email: "leonel@example.com",
        password: createHash("12345Ll$"),
        role: "adopter"
    },
    {
        email: "camila@example.com",
        password: createHash("12345Ll$"),
        role: "adopter"
    },
    {
        email: "andres@example.com",
        password: createHash("12345Ll$"),
        role: "adopter"
    },
    {
        email: "angel@example.com",
        password: createHash("12345Ll$"),
        role: "adopter"
    },
    {
        email: "agustin@example.com",
        password: createHash("12345Ll$"),
        role: "adopter"
    }
];