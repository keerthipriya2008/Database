import { useEffect, useState } from "react";
import "./ServiceHistory.css";

function ServiceHistory({ userId }) {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/bookings"
                );

                const data = await response.json();

                if (!response.ok) {
                    setError("Unable to load service history.");
                    return;
                }

                // Get ALL bookings belonging to this user
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

        fetchHistory();
    }, [userId]);


    /* =========================================
       SERVICE ICON
    ========================================= */

    const getServiceIcon = (service) => {
        const value = String(service || "").toLowerCase();

        if (value.includes("oil")) return "🛢️";
        if (value.includes("wash")) return "🧼";
        if (value.includes("battery")) return "🔋";
        if (value.includes("tyre") || value.includes("tire"))
            return "🛞";
        if (value.includes("brake")) return "🛑";
        if (value.includes("ac")) return "❄️";
        if (value.includes("general")) return "🔧";
        if (value.includes("repair")) return "🔩";

        return "🧰";
    };


    /* =========================================
       SERVICE PRICE
    ========================================= */

    const getAmount = (service) => {
        const value = String(service || "").toLowerCase();

        if (value.includes("oil")) return 944;
        if (value.includes("wash")) return 590;
        if (value.includes("battery")) return 2360;
        if (value.includes("tyre") || value.includes("tire"))
            return 3540;
        if (value.includes("brake")) return 1770;
        if (value.includes("ac")) return 2124;
        if (value.includes("general")) return 1770;

        return 1180;
    };


    /* =========================================
       GROUP BOOKINGS BY VEHICLE
    ========================================= */

    const groupedVehicles = bookings.reduce((groups, booking) => {

        const vehicleNumber =
            booking.vehicle_number || "Unknown Vehicle";

        if (!groups[vehicleNumber]) {
            groups[vehicleNumber] = {
                vehicle_number: vehicleNumber,
                vehicle_type: booking.vehicle_type,
                services: []
            };
        }

        groups[vehicleNumber].services.push(booking);

        return groups;

    }, {});


    const vehicles = Object.values(groupedVehicles);


    /* =========================================
       TOTAL SPENDING
    ========================================= */

    const totalSpending = bookings.reduce(
        (total, booking) =>
            total + getAmount(booking.service_type),
        0
    );


    /* =========================================
       LOADING
    ========================================= */

    if (loading) {
        return (
            <div className="history-page">
                <div className="history-loading">

                    <div className="history-loading-icon">
                        🚗
                    </div>

                    <h2>
                        Loading service history...
                    </h2>

                    <p>
                        Preparing your vehicle records.
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
            <div className="history-page">

                <div className="history-error">

                    <div>⚠️</div>

                    <h2>
                        Unable to load history
                    </h2>

                    <p>
                        {error}
                    </p>

                </div>

            </div>
        );
    }


    return (
        <div className="history-page">

            {/* =================================
                HEADER
            ================================= */}

            <div className="history-header">

                <div>

                    <span className="history-label">
                        VEHICLE RECORDS
                    </span>

                    <h1>
                        Service History 📚
                    </h1>

                    <p>
                        Complete maintenance history of your vehicles.
                    </p>

                </div>


                <div className="history-counter">

                    <strong>
                        {bookings.length}
                    </strong>

                    <span>
                        SERVICE RECORDS
                    </span>

                </div>

            </div>


            {/* =================================
                SUMMARY
            ================================= */}

            <div className="history-summary">

                <div className="summary-box">

                    <div className="summary-icon blue">
                        🚗
                    </div>

                    <div>

                        <strong>
                            {vehicles.length}
                        </strong>

                        <span>
                            Vehicles Serviced
                        </span>

                    </div>

                </div>


                <div className="summary-box">

                    <div className="summary-icon green">
                        🔧
                    </div>

                    <div>

                        <strong>
                            {bookings.length}
                        </strong>

                        <span>
                            Total Services
                        </span>

                    </div>

                </div>


                <div className="summary-box">

                    <div className="summary-icon orange">
                        💰
                    </div>

                    <div>

                        <strong>
                            ₹{totalSpending}
                        </strong>

                        <span>
                            Total Spending
                        </span>

                    </div>

                </div>

            </div>


            {/* =================================
                EMPTY
            ================================= */}

            {bookings.length === 0 ? (

                <div className="history-empty">

                    <div className="empty-history-icon">
                        📚
                    </div>

                    <h2>
                        No service history yet
                    </h2>

                    <p>
                        Your completed vehicle services
                        will appear here.
                    </p>

                </div>

            ) : (

                <div className="history-list">

                    {/* =================================
                        EACH VEHICLE
                    ================================= */}

                    {vehicles.map((vehicle) => {

                        const vehicleTotal =
                            vehicle.services.reduce(
                                (total, booking) =>
                                    total +
                                    getAmount(
                                        booking.service_type
                                    ),
                                0
                            );

                        return (

                            <div
                                className="vehicle-history-card"
                                key={vehicle.vehicle_number}
                            >

                                {/* VEHICLE HEADER */}

                                <div className="vehicle-history-header">

                                    <div className="vehicle-history-icon">

                                        {vehicle.vehicle_type === "Bike"
                                            ? "🏍️"
                                            : "🚗"}

                                    </div>


                                    <div>

                                        <span>
                                            VEHICLE SERVICE HISTORY
                                        </span>

                                        <h2>
                                            {vehicle.vehicle_number}
                                        </h2>

                                        <p>
                                            {vehicle.vehicle_type}
                                            {" • "}
                                            {vehicle.services.length}
                                            {" "}
                                            {vehicle.services.length === 1
                                                ? "Service"
                                                : "Services"}
                                        </p>

                                    </div>


                                    <div className="vehicle-total">

                                        <span>
                                            TOTAL SPENT
                                        </span>

                                        <strong>
                                            ₹{vehicleTotal}
                                        </strong>

                                    </div>

                                </div>


                                {/* SERVICES */}

                                <div className="vehicle-services">

                                    {vehicle.services
                                        .slice()
                                        .sort(
                                            (a, b) =>
                                                new Date(
                                                    b.booking_date
                                                ) -
                                                new Date(
                                                    a.booking_date
                                                )
                                        )
                                        .map((booking) => {

                                            const amount =
                                                getAmount(
                                                    booking.service_type
                                                );

                                            return (

                                                <div
                                                    className="service-history-row"
                                                    key={booking.id}
                                                >

                                                    {/* ICON */}

                                                    <div className="service-history-icon">

                                                        {getServiceIcon(
                                                            booking.service_type
                                                        )}

                                                    </div>


                                                    {/* SERVICE */}

                                                    <div className="service-history-name">

                                                        <strong>
                                                            {booking.service_type}
                                                        </strong>

                                                        <span>
                                                            Service #{booking.id}
                                                        </span>

                                                    </div>


                                                    {/* DATE */}

                                                    <div className="service-history-date">

                                                        <span>
                                                            SERVICE DATE
                                                        </span>

                                                        <strong>

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


                                                    {/* TECHNICIAN */}

                                                    <div className="service-history-tech">

                                                        <span>
                                                            TECHNICIAN
                                                        </span>

                                                        <strong>
                                                            👨‍🔧 Service Team
                                                        </strong>

                                                    </div>


                                                    {/* STATUS */}

                                                    <div className="service-history-status">

                                                        <span>
                                                            {String(
                                                                booking.status ||
                                                                    "Completed"
                                                            ).toUpperCase()}
                                                        </span>

                                                    </div>


                                                    {/* AMOUNT */}

                                                    <div className="service-history-amount">

                                                        <strong>
                                                            ₹{amount}
                                                        </strong>

                                                    </div>

                                                </div>

                                            );

                                        })}

                                </div>


                                {/* VEHICLE FOOTER */}

                                <div className="vehicle-history-footer">

                                    <span>
                                        🔒 All service records securely stored
                                    </span>

                                    <span>
                                        🚗 {vehicle.services.length} service
                                        {vehicle.services.length !== 1
                                            ? "s"
                                            : ""} for this vehicle
                                    </span>

                                </div>

                            </div>

                        );

                    })}

                </div>

            )}

        </div>
    );
}

export default ServiceHistory;