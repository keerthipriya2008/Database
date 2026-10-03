import { useState } from "react";
import "./BookingForm.css";

function BookingForm({ userId }) {

    const [form, setForm] = useState({
        vehicle_number: "",
        vehicle_type: "Car",
        service_type: "Oil Change",
        booking_date: ""
    });

    const [message, setMessage] = useState("");


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");


        try {

            const response = await fetch(
                "http://localhost:5000/api/bookings",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        user_id: userId || 1,

                        vehicle_number:
                            form.vehicle_number,

                        vehicle_type:
                            form.vehicle_type,

                        service_type:
                            form.service_type,

                        booking_date:
                            form.booking_date

                    })
                }
            );


            const data = await response.json();


            if (response.ok) {

                // Save ONLY the newly created booking
                // for Track Service

                const activeBooking = {

                    id: data.bookingId,

                    user_id: userId || 1,

                    vehicle_number:
                        form.vehicle_number,

                    vehicle_type:
                        form.vehicle_type,

                    service_type:
                        form.service_type,

                    booking_date:
                        form.booking_date,

                    status: "Pending"

                };


                localStorage.setItem(
                    "activeBooking",
                    JSON.stringify(activeBooking)
                );


                setMessage(
                    `Booking successful! Booking ID: ${data.bookingId}`
                );


                // Clear form

                setForm({

                    vehicle_number: "",

                    vehicle_type: "Car",

                    service_type: "Oil Change",

                    booking_date: ""

                });


            } else {

                setMessage(
                    data.message || "Booking failed"
                );

            }


        } catch (error) {

            console.error(error);

            setMessage(
                "Cannot connect to backend"
            );

        }

    };


    return (

        <div className="booking-page">

            <div className="booking-card">

                {/* =========================
                    HEADER
                ========================== */}

                <h1>
                    🚗 Book a Service
                </h1>


                <p className="subtitle">
                    Enter your vehicle details and
                    choose a service.
                </p>


                {/* =========================
                    BOOKING FORM
                ========================== */}

                <form
                    className="booking-form"
                    onSubmit={handleSubmit}
                >


                    {/* VEHICLE NUMBER */}

                    <label>
                        Vehicle Number
                    </label>

                    <input
                        type="text"
                        name="vehicle_number"
                        placeholder="Example: TS09AB1234"
                        value={form.vehicle_number}
                        onChange={handleChange}
                        required
                    />


                    {/* VEHICLE TYPE */}

                    <label>
                        Vehicle Type
                    </label>

                    <select
                        name="vehicle_type"
                        value={form.vehicle_type}
                        onChange={handleChange}
                    >

                        <option value="Car">
                            🚗 Car
                        </option>

                        <option value="Bike">
                            🏍️ Bike
                        </option>

                        <option value="SUV">
                            🚙 SUV
                        </option>

                        <option value="Other">
                            🚘 Other
                        </option>

                    </select>


                    {/* SERVICE */}

                    <label>
                        Select Service
                    </label>

                    <select
                        name="service_type"
                        value={form.service_type}
                        onChange={handleChange}
                    >

                        <option value="Oil Change">
                            🛢️ Oil Change
                        </option>

                        <option value="General Service">
                            🔧 General Service
                        </option>

                        <option value="Brake Service">
                            🛑 Brake Service
                        </option>

                        <option value="AC Service">
                            ❄️ AC Service
                        </option>

                    </select>


                    {/* SERVICE DATE */}

                    <label>
                        Service Date
                    </label>

                    <input
                        type="date"
                        name="booking_date"
                        value={form.booking_date}
                        onChange={handleChange}
                        required
                    />


                    {/* SUBMIT */}

                    <button type="submit">
                        🚗 Book Service
                    </button>

                </form>


                {/* =========================
                    MESSAGE
                ========================== */}

                {message && (

                    <div className="success-message">
                        {message}
                    </div>

                )}

            </div>

        </div>

    );

}


export default BookingForm;