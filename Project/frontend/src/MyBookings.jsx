import { useEffect, useState } from "react";
import "./MyBookings.css";

function MyBookings({ userId }) {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/bookings"
                );

                const data = await response.json();

                if (!response.ok) {
                    setError("Unable to load bookings.");
                    return;
                }

                const userBookings = data.filter(
                    (booking) =>
                        Number(booking.user_id) === Number(userId)
                );

                setBookings(userBookings);
            } catch (err) {
                console.error(err);
                setError("Cannot connect to backend.");
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [userId]);

    const getStatus = (status) => {
        const value = String(status || "Pending").toLowerCase();

        if (value.includes("ready")) {
            return {
                className: "ready",
                icon: "🎉",
                text: "Ready for Pickup"
            };
        }

        if (value.includes("complete")) {
            return {
                className: "completed",
                icon: "✓",
                text: "Completed"
            };
        }

        if (
            value.includes("progress") ||
            value.includes("received")
        ) {
            return {
                className: "progress",
                icon: "🔧",
                text: status
            };
        }

        return {
            className: "pending",
            icon: "⏳",
            text: status || "Pending"
        };
    };

    const getServiceIcon = (service) => {
        const value = String(service || "").toLowerCase();

        if (value.includes("oil")) return "🛢️";
        if (value.includes("wash")) return "🧼";
        if (value.includes("repair")) return "🔧";
        if (value.includes("tyre") || value.includes("tire")) return "🛞";
        if (value.includes("battery")) return "🔋";
        if (value.includes("brake")) return "🛑";

        return "🧰";
    };

    if (loading) {
        return (
            <div className="my-bookings-page">
                <div className="bookings-loading">
                    <div className="loading-car">🚗</div>
                    <h2>Loading your garage...</h2>
                    <p>Getting your service history ready.</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="my-bookings-page">
                <div className="bookings-error-card">
                    <div>⚠️</div>
                    <h2>Something went wrong</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="my-bookings-page">

            {/* HEADER */}

            <div className="bookings-hero">

                <div>
                    <div className="booking-eyebrow">
                        YOUR GARAGE
                    </div>

                    <h1>
                        My Service Bookings
                    </h1>

                    <p>
                        Everything about your vehicle service,
                        all in one place.
                    </p>
                </div>

                <div className="booking-stat">
                    <div className="stat-icon">
                        🚗
                    </div>

                    <div>
                        <strong>{bookings.length}</strong>
                        <span>Total Bookings</span>
                    </div>
                </div>

            </div>


            {/* QUICK STATS */}

            {bookings.length > 0 && (
                <div className="quick-stats">

                    <div className="quick-stat">
                        <span className="quick-icon blue">
                            📋
                        </span>

                        <div>
                            <strong>{bookings.length}</strong>
                            <p>Total Services</p>
                        </div>
                    </div>


                    <div className="quick-stat">
                        <span className="quick-icon orange">
                            ⏳
                        </span>

                        <div>
                            <strong>
                                {
                                    bookings.filter(
                                        (b) =>
                                            !String(b.status)
                                                .toLowerCase()
                                                .includes("complete")
                                    ).length
                                }
                            </strong>

                            <p>Active Services</p>
                        </div>
                    </div>


                    <div className="quick-stat">
                        <span className="quick-icon green">
                            ✓
                        </span>

                        <div>
                            <strong>
                                {
                                    bookings.filter(
                                        (b) =>
                                            String(b.status)
                                                .toLowerCase()
                                                .includes("complete")
                                    ).length
                                }
                            </strong>

                            <p>Completed</p>
                        </div>
                    </div>

                </div>
            )}


            {/* NO BOOKINGS */}

            {bookings.length === 0 ? (

                <div className="empty-bookings">

                    <div className="empty-garage">
                        🚘
                    </div>

                    <h2>
                        Your garage is empty
                    </h2>

                    <p>
                        You don't have any service bookings yet.
                    </p>

                    <div className="empty-tip">
                        🔧 Book your first service and it will
                        appear here automatically.
                    </div>

                </div>

            ) : (

                <div className="booking-list">

                    {bookings.map((booking) => {

                        const status =
                            getStatus(booking.status);

                        return (
                            <div
                                className="booking-premium-card"
                                key={booking.id}
                            >

                                {/* TOP SECTION */}

                                <div className="booking-top">

                                    <div className="vehicle-area">

                                        <div className="vehicle-avatar">
                                            {booking.vehicle_type === "Bike"
                                                ? "🏍️"
                                                : "🚗"}
                                        </div>

                                        <div>

                                            <span className="small-label">
                                                VEHICLE
                                            </span>

                                            <h2>
                                                {booking.vehicle_number}
                                            </h2>

                                            <p>
                                                {booking.vehicle_type}
                                            </p>

                                        </div>

                                    </div>


                                    <div className="booking-reference">

                                        <span>
                                            BOOKING
                                        </span>

                                        <strong>
                                            #{booking.id}
                                        </strong>

                                    </div>

                                </div>


                                {/* SERVICE STRIP */}

                                <div className="service-strip">

                                    <div className="service-main">

                                        <div className="service-icon">
                                            {getServiceIcon(
                                                booking.service_type
                                            )}
                                        </div>

                                        <div>

                                            <span>
                                                SERVICE
                                            </span>

                                            <h3>
                                                {booking.service_type}
                                            </h3>

                                        </div>

                                    </div>


                                    <div className="service-date">

                                        <span>
                                            SERVICE DATE
                                        </span>

                                        <strong>
                                            📅{" "}
                                            {new Date(
                                                booking.booking_date
                                            ).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric"
                                                }
                                            )}
                                        </strong>

                                    </div>


                                    <div
                                        className={`booking-status ${status.className}`}
                                    >

                                        <span>
                                            STATUS
                                        </span>

                                        <strong>
                                            {status.icon}{" "}
                                            {status.text}
                                        </strong>

                                    </div>

                                </div>


                                {/* SERVICE JOURNEY */}

                                <div className="mini-journey">

                                    <div className="journey-heading">

                                        <div>
                                            <span>
                                                SERVICE JOURNEY
                                            </span>

                                            <strong>
                                                Booking #{booking.id}
                                            </strong>
                                        </div>

                                        <span className="journey-live">
                                            ● LIVE
                                        </span>

                                    </div>


                                    <div className="journey-line">

                                        <div className="journey-step active">
                                            <div>✓</div>
                                            <span>Booked</span>
                                        </div>

                                        <div className="journey-connector"></div>

                                        <div
                                            className={
                                                String(booking.status)
                                                    .toLowerCase()
                                                    .includes("progress") ||
                                                String(booking.status)
                                                    .toLowerCase()
                                                    .includes("received") ||
                                                String(booking.status)
                                                    .toLowerCase()
                                                    .includes("ready")
                                                    ? "journey-step active"
                                                    : "journey-step"
                                            }
                                        >
                                            <div>🔧</div>
                                            <span>Servicing</span>
                                        </div>

                                        <div className="journey-connector"></div>

                                        <div
                                            className={
                                                String(booking.status)
                                                    .toLowerCase()
                                                    .includes("ready") ||
                                                String(booking.status)
                                                    .toLowerCase()
                                                    .includes("complete")
                                                    ? "journey-step active"
                                                    : "journey-step"
                                            }
                                        >
                                            <div>✓</div>
                                            <span>Ready</span>
                                        </div>

                                    </div>

                                </div>


                                {/* ACTION AREA */}

                                <div className="booking-bottom">

                                    <div className="secure-info">
                                        🔐 Secure booking
                                    </div>

                                    <div className="booking-buttons">

                                        <button
                                            className="track-button"
                                            onClick={() =>
                                                alert(
                                                    "Please open Track Service to see the complete vehicle journey."
                                                )
                                            }
                                        >
                                            📍 Track
                                        </button>

                                        <button
                                            className="payment-button"
                                            onClick={() =>
                                                alert(
                                                    "Payment for this booking will be connected next."
                                                )
                                            }
                                        >
                                            💳 Payment
                                        </button>

                                        <button
                                            className="feedback-button"
                                            onClick={() =>
                                                alert(
                                                    "Feedback will be available after service completion."
                                                )
                                            }
                                        >
                                            ⭐ Feedback
                                        </button>

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

export default MyBookings;