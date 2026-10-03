import { useState } from "react";

import "./Dashboard.css";
import "./GlobalPolish.css";

import BookingForm from "./BookingForm";
import MyBookings from "./MyBookings";
import Services from "./Services";
import Profile from "./Profile";
import TrackService from "./pages/TrackService";
import Home from "./pages/Home";
import Payment from "./Payment";
import Notifications from "./Notifications";
import Technician from "./Technician";
import ServiceFeedback from "./ServiceFeedback";
import ServiceHistory from "./ServiceHistory";


function Dashboard({ user }) {

    const [page, setPage] = useState("home");


    const handleLogout = () => {
        window.location.reload();
    };


    return (

        <div className="dashboard">


            {/* =================================
                NAVIGATION BAR
            ================================= */}

            <nav className="navbar">


                {/* =================================
                    LOGO + WELCOME
                ================================= */}

                <div className="navbar-brand">

                    <div className="logo">
                        🚗 Vehicle Service
                    </div>

                    <div className="welcome-text">
                        Welcome, {user?.name || "User"}! 👋
                    </div>

                </div>


                {/* =================================
                    NAVIGATION LINKS
                ================================= */}

                <div className="nav-links">


                    {/* HOME */}

                    <button
                        className={
                            page === "home"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("home")
                        }
                    >
                        🏠 Home
                    </button>


                    {/* BOOK SERVICE */}

                    <button
                        className={
                            page === "booking"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("booking")
                        }
                    >
                        🔧 Book Service
                    </button>


                    {/* SERVICES */}

                    <button
                        className={
                            page === "services"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("services")
                        }
                    >
                        🛠️ Services
                    </button>


                    {/* MY BOOKINGS */}

                    <button
                        className={
                            page === "bookings"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("bookings")
                        }
                    >
                        📋 My Bookings
                    </button>


                    {/* TRACK SERVICE */}

                    <button
                        className={
                            page === "tracking"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("tracking")
                        }
                    >
                        📍 Track Service
                    </button>


                    {/* SERVICE HISTORY */}

                    <button
                        className={
                            page === "history"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("history")
                        }
                    >
                        📚 Service History
                    </button>


                    {/* PAYMENTS */}

                    <button
                        className={
                            page === "payment"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("payment")
                        }
                    >
                        💳 Payments
                    </button>


                    {/* NOTIFICATIONS */}

                    <button
                        className={
                            page === "notifications"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("notifications")
                        }
                    >
                        🔔 Notifications
                    </button>


                    {/* TECHNICIAN */}

                    <button
                        className={
                            page === "technician"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("technician")
                        }
                    >
                        👨‍🔧 Technician
                    </button>


                    {/* SERVICE FEEDBACK */}

                    <button
                        className={
                            page === "feedback"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("feedback")
                        }
                    >
                        ⭐ Feedback
                    </button>


                    {/* PROFILE */}

                    <button
                        className={
                            page === "profile"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setPage("profile")
                        }
                    >
                        👤 Profile
                    </button>


                    {/* LOGOUT */}

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        🚪 Logout
                    </button>

                </div>

            </nav>


            {/* =================================
                HOME
            ================================= */}

            {page === "home" && (

                <Home
                    onBookService={() =>
                        setPage("booking")
                    }
                />

            )}


            {/* =================================
                BOOK SERVICE
            ================================= */}

            {page === "booking" && (

                <BookingForm
                    userId={user?.id}
                />

            )}


            {/* =================================
                SERVICES
            ================================= */}

            {page === "services" && (

                <Services />

            )}


            {/* =================================
                MY BOOKINGS
            ================================= */}

            {page === "bookings" && (

                <MyBookings
                    userId={user?.id}
                />

            )}


            {/* =================================
                TRACK SERVICE
            ================================= */}

            {page === "tracking" && (

                <TrackService
                    userId={user?.id}
                />

            )}


            {/* =================================
                SERVICE HISTORY
            ================================= */}

            {page === "history" && (

                <ServiceHistory
                    userId={user?.id}
                />

            )}


            {/* =================================
                PAYMENT
            ================================= */}

            {page === "payment" && (

                <Payment />

            )}


            {/* =================================
                NOTIFICATIONS
            ================================= */}

            {page === "notifications" && (

                <Notifications
                    userId={user?.id}
                />

            )}


            {/* =================================
                TECHNICIAN
            ================================= */}

            {page === "technician" && (

                <Technician />

            )}


            {/* =================================
                SERVICE FEEDBACK
            ================================= */}

            {page === "feedback" && (

                <ServiceFeedback />

            )}


            {/* =================================
                PROFILE
            ================================= */}

            {page === "profile" && (

                <Profile
                    user={user}
                />

            )}

        </div>

    );
}


export default Dashboard;