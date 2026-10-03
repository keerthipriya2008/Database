import "./Profile.css";

function Profile({ user }) {

    const userName = user?.name || "Vehicle Owner";
    const userEmail = user?.email || "No email available";
    const userPhone = user?.phone || "Not provided";

    const firstLetter = userName
        .charAt(0)
        .toUpperCase();

    return (
        <div className="profile-page">

            {/* =================================
                PROFILE HERO
            ================================= */}

            <div className="profile-hero">

                <div className="profile-avatar">
                    {firstLetter}
                </div>

                <div className="profile-hero-info">

                    <span className="profile-label">
                        VEHICLE SERVICE MEMBER
                    </span>

                    <h1>
                        {userName} 👋
                    </h1>

                    <p>
                        Manage your account and vehicle service details
                        from one place.
                    </p>

                </div>

                <div className="account-status">
                    <span className="status-dot"></span>
                    Active Account
                </div>

            </div>


            {/* =================================
                MAIN CONTENT
            ================================= */}

            <div className="profile-content">


                {/* =================================
                    PERSONAL INFORMATION
                ================================= */}

                <div className="profile-card">

                    <div className="card-heading">

                        <div className="heading-icon">
                            👤
                        </div>

                        <div>
                            <h2>Personal Information</h2>
                            <p>Your registered account details</p>
                        </div>

                    </div>


                    <div className="profile-details">

                        <div className="detail-item">

                            <span className="detail-icon">
                                👤
                            </span>

                            <div>
                                <small>FULL NAME</small>
                                <strong>{userName}</strong>
                            </div>

                        </div>


                        <div className="detail-item">

                            <span className="detail-icon">
                                📧
                            </span>

                            <div>
                                <small>EMAIL ADDRESS</small>
                                <strong>{userEmail}</strong>
                            </div>

                        </div>


                        <div className="detail-item">

                            <span className="detail-icon">
                                📱
                            </span>

                            <div>
                                <small>PHONE NUMBER</small>
                                <strong>{userPhone}</strong>
                            </div>

                        </div>


                        <div className="detail-item">

                            <span className="detail-icon">
                                🛡️
                            </span>

                            <div>
                                <small>ACCOUNT STATUS</small>
                                <strong className="active-text">
                                    Verified & Active
                                </strong>
                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    VEHICLE CARE
                ================================= */}

                <div className="vehicle-care-card">

                    <div className="care-top">

                        <div>

                            <span className="profile-label">
                                VEHICLE CARE
                            </span>

                            <h2>
                                Keep Your Vehicle
                                <br />
                                Running Smoothly 🚗
                            </h2>

                            <p>
                                Regular servicing helps keep your
                                vehicle safe, reliable and ready
                                for every journey.
                            </p>

                        </div>

                        <div className="car-illustration">
                            🚘
                        </div>

                    </div>


                    <div className="care-points">

                        <div>
                            <span>✓</span>
                            Regular maintenance
                        </div>

                        <div>
                            <span>✓</span>
                            Professional technicians
                        </div>

                        <div>
                            <span>✓</span>
                            Easy service booking
                        </div>

                    </div>

                </div>


                {/* =================================
                    QUICK STATS
                ================================= */}

                <div className="profile-stats">

                    <div className="stat-card">

                        <div className="stat-icon">
                            📋
                        </div>

                        <div>
                            <strong>My Bookings</strong>
                            <span>View service bookings</span>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon">
                            📍
                        </div>

                        <div>
                            <strong>Track Service</strong>
                            <span>Follow your vehicle</span>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon">
                            ⭐
                        </div>

                        <div>
                            <strong>Feedback</strong>
                            <span>Share your experience</span>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
}

export default Profile;