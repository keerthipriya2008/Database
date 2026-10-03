import "./Technician.css";

function Technician() {

    const technicians = [
        {
            id: 1,
            name: "Rahul Kumar",
            role: "Senior Vehicle Technician",
            specialization: "Engine & General Service",
            experience: "6 Years",
            rating: "4.8",
            completed: "1,240+",
            status: "Working",
            icon: "👨‍🔧"
        },
        {
            id: 2,
            name: "Arjun Reddy",
            role: "Diagnostic Technician",
            specialization: "Electrical & Diagnostics",
            experience: "5 Years",
            rating: "4.7",
            completed: "980+",
            status: "Available",
            icon: "👨‍🔧"
        },
        {
            id: 3,
            name: "Vikram Sharma",
            role: "AC Specialist",
            specialization: "AC & Cooling Systems",
            experience: "7 Years",
            rating: "4.9",
            completed: "1,560+",
            status: "Working",
            icon: "👨‍🔧"
        },
        {
            id: 4,
            name: "Kiran Kumar",
            role: "Mechanical Technician",
            specialization: "Brakes & Suspension",
            experience: "4 Years",
            rating: "4.6",
            completed: "760+",
            status: "Available",
            icon: "👨‍🔧"
        },
        {
            id: 5,
            name: "Sandeep Rao",
            role: "Vehicle Service Expert",
            specialization: "Full Vehicle Service",
            experience: "8 Years",
            rating: "4.9",
            completed: "1,820+",
            status: "Available",
            icon: "👨‍🔧"
        }
    ];


    return (
        <div className="technician-page">

            {/* =================================
                HEADER
            ================================= */}

            <div className="technician-header">

                <div>

                    <span className="technician-label">
                        SERVICE CENTER
                    </span>

                    <h1>
                        Our Technicians 👨‍🔧
                    </h1>

                    <p>
                        Meet our experienced team taking care
                        of your vehicle.
                    </p>

                </div>

                <div className="technician-count">
                    👨‍🔧 {technicians.length} Technicians
                </div>

            </div>


            {/* =================================
                TECHNICIAN GRID
            ================================= */}

            <div className="technician-grid">

                {technicians.map((technician) => (

                    <div
                        className="technician-card"
                        key={technician.id}
                    >

                        {/* PROFILE */}

                        <div className="technician-profile">

                            <div className="technician-avatar">
                                {technician.icon}
                            </div>

                            <div>

                                <span className="assigned-text">
                                    TECHNICIAN
                                </span>

                                <h2>
                                    {technician.name}
                                </h2>

                                <p>
                                    {technician.role}
                                </p>

                                <div className="rating">
                                    ⭐ <strong>
                                        {technician.rating}
                                    </strong>

                                    <span>
                                        / 5.0
                                    </span>
                                </div>

                            </div>

                        </div>


                        {/* DETAILS */}

                        <div className="technician-details">

                            <div className="detail-box">

                                <span>🛠️</span>

                                <div>

                                    <small>
                                        SPECIALIZATION
                                    </small>

                                    <strong>
                                        {technician.specialization}
                                    </strong>

                                </div>

                            </div>


                            <div className="detail-box">

                                <span>📅</span>

                                <div>

                                    <small>
                                        EXPERIENCE
                                    </small>

                                    <strong>
                                        {technician.experience}
                                    </strong>

                                </div>

                            </div>


                            <div className="detail-box">

                                <span>🏆</span>

                                <div>

                                    <small>
                                        SERVICES COMPLETED
                                    </small>

                                    <strong>
                                        {technician.completed}
                                    </strong>

                                </div>

                            </div>

                        </div>


                        {/* STATUS */}

                        <div className="technician-service">

                            <div>

                                <span>
                                    CURRENT STATUS
                                </span>

                                <h3>
                                    {technician.status === "Working"
                                        ? "🔧 Currently servicing a vehicle"
                                        : "✨ Ready for a new service"
                                    }
                                </h3>

                            </div>


                            <div
                                className={
                                    technician.status === "Working"
                                        ? "working-badge"
                                        : "available-badge"
                                }
                            >
                                ● {technician.status}
                            </div>

                        </div>


                        {/* FOOTER */}

                        <div className="technician-footer">

                            <span>
                                ⭐ Highly rated technician
                            </span>

                        </div>

                    </div>

                ))}

            </div>


            {/* =================================
                BOTTOM INFORMATION
            ================================= */}

            <div className="technician-bottom">

                <div className="technician-bottom-icon">
                    🛠️
                </div>

                <div>

                    <strong>
                        Professional Vehicle Care
                    </strong>

                    <p>
                        Our technicians are trained to handle
                        different types of vehicle services.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Technician;