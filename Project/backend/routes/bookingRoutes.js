import express from "express";
import {
    createBooking,
    getBookings
} from "../controllers/bookingController.js";

const router = express.Router();

// Create a new booking
router.post("/", createBooking);

// Get all bookings
router.get("/", getBookings);

export default router;