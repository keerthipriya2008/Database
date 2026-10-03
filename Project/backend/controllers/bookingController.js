import db from "../config/db.js";

export const createBooking = async (req, res) => {
    try {
        const {
            user_id,
            vehicle_number,
            vehicle_type,
            service_type,
            booking_date
        } = req.body;

        if (!user_id || !vehicle_number || !vehicle_type || !service_type || !booking_date) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const [result] = await db.execute(
            `INSERT INTO bookings
            (user_id, vehicle_number, vehicle_type, service_type, booking_date)
            VALUES (?, ?, ?, ?, ?)`,
            [
                user_id,
                vehicle_number,
                vehicle_type,
                service_type,
                booking_date
            ]
        );

        res.status(201).json({
            message: "Booking created successfully",
            bookingId: result.insertId
        });

    } catch (error) {
        console.error("Booking error:", error);

        res.status(500).json({
            message: "Failed to create booking",
            error: error.message
        });
    }
};

export const getBookings = async (req, res) => {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM bookings ORDER BY created_at DESC"
        );

        res.json(rows);

    } catch (error) {
        console.error("Fetch bookings error:", error);

        res.status(500).json({
            message: "Failed to fetch bookings",
            error: error.message
        });
    }
};