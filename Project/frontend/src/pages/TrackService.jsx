import { useEffect, useState } from "react";
import "../TrackService.css";

function TrackService({ userId }) {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadBookings = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/bookings"
                );

                const data = await response.json();

                if (!response.ok) {
                    setError("Unable to load your bookings.");
                    return;
                }

                const myBookings = data.filter(
                    (booking) =>
                        Number(booking.user_id) === Number(userId)
                );

                setBookings(myBookings);
            } catch (err) {
                console.error(err);
                setError(
                    "Cannot connect to the vehicle service server."
                );
            } finally {
                setLoading(false);
            }
        };

        loadBookings();
    }, [userId]);

    /* =========================================
       SERVICE PROGRESS
    ========================================= */

    const getProgress = (status) => {
        const value = String(status || "Pending").toLowerCase();

        if (value.includes("ready")) return 5;
        if (value.includes("quality")) return 4;
        if (value.includes("progress")) return 3;
        if (value.includes("received")) return 2;

        return 1;
    };

    /* =========================================
       SERVICE PRICES
    ========================================= */

    const servicePrices = {
        "Oil Change": 800,
        "General Service": 1500,
        "Brake Service": 2200,
        "AC Service": 1800
    };

    /* =========================================
       SERVICE STAGES
    ========================================= */

    const stages = [
        {
            title: "Booking Confirmed",
            icon: "✓",
            text: "Your service appointment has been confirmed."
        },
        {
            title: "Vehicle Received",
            icon: "🚘",
            text: "Your vehicle has arrived at the service center."
        },
        {
            title: "Service in Progress",
            icon: "🔧",
            text: "Our technicians are working on your vehicle."
        },
        {
            title: "Quality Check",
            icon: "🔍",
            text: "Final inspection is being performed."
        },
        {
            title: "Ready for Pickup",
            icon: "🎉",
            text: "Your vehicle is ready for pickup."
        }
    ];

    /* =========================================
       LOADING
    ========================================= */

    if (loading) {
        return (
            <div className="track-page">
                <div className="track-loading">
                    <div className="loading-car">🚗</div>

                    <h2>
                        Loading your service...
                    </h2>

                    <p>
                        Connecting to the service center
                    </p>
                </div>
            </div>
        );
    }

    /* =========================================
       ERROR
    ========================================= */

    if (error) {
        return (
            <div className="track-page">
                <div className="track-error">

                    <div className="error-icon">
                        ⚠️
                    </div>

                    <h2>
                        Unable to load tracking
                    </h2>

                    <p>
                        {error}
                    </p>

                </div>
            </div>
        );
    }

    /* =========================================
       MAIN PAGE
    ========================================= */

    return (
        <div className="track-page">

            {/* HEADER */}

            <div className="track-top">

                <div>

                    <span className="small-title">
                        VEHICLE SERVICE CENTER
                    </span>

                    <h1>
                        Track Your Vehicle 🚗
                    </h1>

                    <p>
                        Follow your vehicle's service journey
                        and payment details.
                    </p>

                </div>

                <div className="live-badge">
                    <span>●</span>
                    SERVICE CENTER
                </div>

            </div>


            {/* NO BOOKINGS */}

            {bookings.length === 0 ? (

                <div className="no-service">

                    <div className="empty-car">
                        🚘
                    </div>

                    <h2>
                        No Active Service
                    </h2>

                    <p>
                        You don't have any vehicle service
                        bookings yet.
                    </p>

                    <div className="empty-note">
                        🔧 Book a service and your vehicle
                        will automatically appear here.
                    </div>

                </div>

            ) : (

                <div className="booking-list">

                    {bookings.map((booking) => {

                        /* SERVICE PROGRESS */

                        const progress =
                            getProgress(booking.status);

                        const percentage =
                            progress * 20;


                        /* SERVICE PAYMENT */

                        const serviceCharge =
                            servicePrices[
                                booking.service_type
                            ] || 800;

                        const gst =
                            serviceCharge * 0.18;

                        const total =
                            serviceCharge + gst;


                        return (

                            <div
                                className="vehicle-track-card"
                                key={booking.id}
                            >

                                {/* =================================
                                    VEHICLE HEADER
                                ================================= */}

                                <div className="vehicle-banner">

                                    <div className="vehicle-icon">

                                        {booking.vehicle_type === "Bike"
                                            ? "🏍️"
                                            : "🚗"}

                                    </div>


                                    <div className="vehicle-title">

                                        <span>
                                            YOUR VEHICLE
                                        </span>

                                        <h2>
                                            {booking.vehicle_number}
                                        </h2>

                                        <p>
                                            {booking.vehicle_type}
                                        </p>

                                    </div>


                                    <div className="booking-number">

                                        <span>
                                            BOOKING
                                        </span>

                                        <strong>
                                            #{booking.id}
                                        </strong>

                                    </div>

                                </div>


                                {/* =================================
                                    SERVICE DETAILS
                                ================================= */}

                                <div className="service-details">

                                    <div className="detail-box">

                                        <span>
                                            SERVICE
                                        </span>

                                        <strong>
                                            🔧{" "}
                                            {booking.service_type}
                                        </strong>

                                    </div>


                                    <div className="detail-box">

                                        <span>
                                            SERVICE DATE
                                        </span>

                                        <strong>
                                            📅{" "}
                                            {new Date(
                                                booking.booking_date
                                            ).toLocaleDateString()}
                                        </strong>

                                    </div>


                                    <div className="detail-box">

                                        <span>
                                            STATUS
                                        </span>

                                        <strong className="status-text">

                                            ●{" "}
                                            {booking.status ||
                                                "Pending"}

                                        </strong>

                                    </div>

                                </div>


                                {/* =================================
                                    CURRENT PROGRESS
                                ================================= */}

                                <div className="current-status">

                                    <div>

                                        <span className="section-tag">
                                            SERVICE PROGRESS
                                        </span>

                                        <h2>
                                            {
                                                stages[
                                                    progress - 1
                                                ].title
                                            }
                                        </h2>

                                        <p>
                                            {
                                                stages[
                                                    progress - 1
                                                ].text
                                            }
                                        </p>

                                    </div>


                                    <div className="progress-number">

                                        {percentage}%

                                        <span>
                                            COMPLETE
                                        </span>

                                    </div>

                                </div>


                                {/* PROGRESS BAR */}

                                <div className="progress-area">

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill"
                                            style={{
                                                width:
                                                    `${percentage}%`
                                            }}
                                        />

                                    </div>

                                </div>


                                {/* =================================
                                    SERVICE JOURNEY
                                ================================= */}

                                <div className="journey-card">

                                    <div className="journey-header">

                                        <div>

                                            <span className="section-tag">
                                                SERVICE JOURNEY
                                            </span>

                                            <h2>
                                                Vehicle Service Timeline
                                            </h2>

                                        </div>


                                        <div className="step-count">
                                            {progress}/5
                                        </div>

                                    </div>


                                    <div className="timeline">

                                        {stages.map(
                                            (stage, index) => {

                                                const number =
                                                    index + 1;

                                                const completed =
                                                    number <=
                                                    progress;

                                                const current =
                                                    number ===
                                                    progress;


                                                return (

                                                    <div
                                                        className={
                                                            `timeline-item ${
                                                                completed
                                                                    ? "completed"
                                                                    : ""
                                                            } ${
                                                                current
                                                                    ? "current"
                                                                    : ""
                                                            }`
                                                        }
                                                        key={
                                                            stage.title
                                                        }
                                                    >

                                                        <div className="timeline-left">

                                                            <div className="timeline-icon">

                                                                {completed
                                                                    ? "✓"
                                                                    : stage.icon}

                                                            </div>

                                                        </div>


                                                        <div className="timeline-content">

                                                            <div className="timeline-heading">

                                                                <h3>
                                                                    {
                                                                        stage.title
                                                                    }
                                                                </h3>


                                                                {current && (

                                                                    <span>
                                                                        CURRENT
                                                                    </span>

                                                                )}

                                                            </div>


                                                            <p>

                                                                {completed
                                                                    ? stage.text
                                                                    : "Waiting for previous stage."}

                                                            </p>

                                                        </div>

                                                    </div>

                                                );

                                            }
                                        )}

                                    </div>

                                </div>


                                {/* =================================
                                    BILL SUMMARY
                                ================================= */}

                                <div className="bill-card">

                                    <div className="bill-header">

                                        <div>

                                            <span className="section-tag">
                                                PAYMENT
                                            </span>

                                            <h2>
                                                💰 Bill Summary
                                            </h2>

                                        </div>


                                        <div className="payment-pending">
                                            PENDING
                                        </div>

                                    </div>


                                    {/* SERVICE CHARGE */}

                                    <div className="bill-row">

                                        <span>
                                            {booking.service_type}
                                        </span>

                                        <strong>
                                            ₹
                                            {serviceCharge.toFixed(0)}
                                        </strong>

                                    </div>


                                    {/* GST */}

                                    <div className="bill-row">

                                        <span>
                                            GST (18%)
                                        </span>

                                        <strong>
                                            ₹
                                            {gst.toFixed(0)}
                                        </strong>

                                    </div>


                                    <div className="bill-line"></div>


                                    {/* TOTAL */}

                                    <div className="bill-total">

                                        <span>
                                            Total Amount
                                        </span>

                                        <strong>
                                            ₹
                                            {total.toFixed(0)}
                                        </strong>

                                    </div>


                                    {/* PAYMENT BUTTON */}

                                    <button
                                        className="pay-button"
                                        onClick={() =>
                                            alert(
                                                `Payment of ₹${total.toFixed(
                                                    0
                                                )} will be processed here.`
                                            )
                                        }
                                    >

                                        💳 PAY NOW

                                    </button>


                                    <p className="payment-note">

                                        🔒 Secure payment processing

                                    </p>

                                </div>


                                {/* =================================
                                    FOOTER
                                ================================= */}

                                <div className="service-footer">

                                    <span>
                                        🔧
                                    </span>

                                    <div>

                                        <strong>
                                            Your vehicle is in good hands.
                                        </strong>

                                        <p>
                                            Our service team is taking
                                            care of your vehicle.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            )}

        </div>
    );
}

export default TrackService;