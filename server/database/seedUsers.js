import { createHash } from "../src/utils/bcrypt.js";

export const seedUsers = [
    {
        email: "leonel@example.com",
        password: createHash("12345Ll$"),
        role: "adopter",
        name: "Leonel",
        surname: "Vargas",
        age: 30
    },
    {
        email: "camila@example.com",
        password: createHash("12345Ll$"),
        role: "adopter",
        name: "Camila",
        surname: "Magallanes",
        age: 22
    },
    {
        email: "andres@example.com",
        password: createHash("12345Ll$"),
        role: "adopter",
        name: "Andres",
        surname: "Campos",
        age: 25
    },
    {
        email: "angel@example.com",
        password: createHash("12345Ll$"),
        role: "adopter",
        name: "Angel",
        surname: "Zumbay",
        age: 35
    },
    {
        email: "agustin@example.com",
        password: createHash("12345Ll$"),
        role: "adopter",
        name: "Agustin",
        surname: "Campastro",
        age: 19
    },
    {
        email: "admin@example.com",
        password: createHash("12345Ll$"),
        role: "admin",
        name: "Administrador",
        age: 33
    }
];