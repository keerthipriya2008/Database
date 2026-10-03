import bcrypt from "bcryptjs";
import db from "../config/db.js";


/* =========================================
   REGISTER USER
========================================= */

export const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            password
        } = req.body;


        /* -----------------------------
           VALIDATION
        ----------------------------- */

        if (
            !name ||
            !email ||
            !phone ||
            !password
        ) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }


        if (password.length < 6) {

            return res.status(400).json({
                message:
                    "Password must be at least 6 characters"
            });

        }


        /* -----------------------------
           CHECK EXISTING EMAIL
        ----------------------------- */

        const [existingUsers] = await db.execute(
            "SELECT id FROM users WHERE email = ?",
            [email]
        );


        if (existingUsers.length > 0) {

            return res.status(409).json({
                message:
                    "An account with this email already exists"
            });

        }


        /* -----------------------------
           HASH PASSWORD
        ----------------------------- */

        const hashedPassword =
            await bcrypt.hash(password, 10);


        /* -----------------------------
           CREATE USER
        ----------------------------- */

        const [result] = await db.execute(

            `INSERT INTO users
            (name, email, phone, password)
            VALUES (?, ?, ?, ?)`,

            [
                name,
                email,
                phone,
                hashedPassword
            ]

        );


        /* -----------------------------
           SUCCESS
        ----------------------------- */

        res.status(201).json({

            message:
                "Account created successfully! You can now login.",

            userId:
                result.insertId

        });


    } catch (error) {

        console.error(
            "Registration error:",
            error
        );


        res.status(500).json({

            message:
                "Registration failed",

            error:
                error.message

        });

    }

};


/* =========================================
   LOGIN USER
========================================= */

export const loginUser = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        /* -----------------------------
           VALIDATION
        ----------------------------- */

        if (!email || !password) {

            return res.status(400).json({
                message:
                    "Email and password are required"
            });

        }


        /* -----------------------------
           FIND USER
        ----------------------------- */

        const [users] = await db.execute(

            "SELECT * FROM users WHERE email = ?",

            [email]

        );


        if (users.length === 0) {

            return res.status(401).json({

                message:
                    "Invalid email or password"

            });

        }


        const user = users[0];


        /* -----------------------------
           CHECK PASSWORD
        ----------------------------- */

        const passwordMatch =
            await bcrypt.compare(
                password,
                user.password
            );


        if (!passwordMatch) {

            return res.status(401).json({

                message:
                    "Invalid email or password"

            });

        }


        /* -----------------------------
           LOGIN SUCCESS
        ----------------------------- */

        res.json({

            message:
                "Login successful",

            user: {

                id:
                    user.id,

                name:
                    user.name,

                email:
                    user.email,

                phone:
                    user.phone

            }

        });


    } catch (error) {

        console.error(
            "Login error:",
            error
        );


        res.status(500).json({

            message:
                "Login failed",

            error:
                error.message

        });

    }

};