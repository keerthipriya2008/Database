import "./Services.css";

function Services() {

    const services = [
        {
            icon: "🛢️",
            title: "Oil Change",
            description: "Fresh oil and filter replacement for a smoother engine.",
            price: "₹799",
            duration: "30–45 min",
            tag: "Quick Service",
            features: [
                "Engine oil replacement",
                "Oil filter inspection",
                "Fluid level check"
            ]
        },
        {
            icon: "🔧",
            title: "General Service",
            description: "A complete inspection to keep your vehicle running smoothly.",
            price: "₹1,499",
            duration: "1–2 hours",
            tag: "Most Popular",
            features: [
                "Full vehicle inspection",
                "Fluid & battery check",
                "Basic maintenance"
            ]
        },
        {
            icon: "🛑",
            title: "Brake Service",
            description: "Inspection and maintenance of your braking system.",
            price: "₹1,199",
            duration: "1–2 hours",
            tag: "Safety First",
            features: [
                "Brake inspection",
                "Brake pad check",
                "Brake system testing"
            ]
        },
        {
            icon: "❄️",
            title: "AC Service",
            description: "Keep your vehicle cool and comfortable throughout your journey.",
            price: "₹999",
            duration: "45–60 min",
            tag: "Comfort",
            features: [
                "AC performance check",
                "Cooling inspection",
                "Air filter check"
            ]
        }
    ];

    return (
        <div className="services-page">

            {/* HEADER */}

            <div className="services-header">

                <span className="services-label">
                    VEHICLE CARE CENTER
                </span>

                <h1>
                    Choose Your Service 🚗
                </h1>

                <p>
                    Professional care for every journey.
                    Pick a service that fits your vehicle's needs.
                </p>

            </div>


            {/* SERVICE CARDS */}

            <div className="services-grid">

                {services.map((service, index) => (

                    <div
                        className={`service-card service-${index + 1}`}
                        key={service.title}
                    >

                        {/* TAG */}

                        <div className="service-tag">
                            {service.tag}
                        </div>


                        {/* ICON */}

                        <div className="service-icon">
                            {service.icon}
                        </div>


                        {/* TITLE */}

                        <h2>
                            {service.title}
                        </h2>


                        {/* DESCRIPTION */}

                        <p className="service-description">
                            {service.description}
                        </p>


                        {/* PRICE + TIME */}

                        <div className="service-info">

                            <div>
                                <span>STARTING FROM</span>
                                <strong>{service.price}</strong>
                            </div>

                            <div>
                                <span>EST. TIME</span>
                                <strong>{service.duration}</strong>
                            </div>

                        </div>


                        {/* FEATURES */}

                        <div className="service-features">

                            {service.features.map((feature) => (

                                <div
                                    className="service-feature"
                                    key={feature}
                                >
                                    <span>✓</span>
                                    {feature}
                                </div>

                            ))}

                        </div>


                        {/* BUTTON */}

                        <button
                            className="service-book-btn"
                            onClick={() => {
                                window.dispatchEvent(
                                    new CustomEvent("openBooking")
                                );
                            }}
                        >
                            Book This Service
                            <span>→</span>
                        </button>

                    </div>

                ))}

            </div>


            {/* BOTTOM BANNER */}

            <div className="service-bottom-banner">

                <div className="banner-icon">
                    🛠️
                </div>

                <div>
                    <h3>
                        Not sure which service you need?
                    </h3>

                    <p>
                        Our service team can help you choose
                        the right care for your vehicle.
                    </p>
                </div>

                <div className="banner-badge">
                    🚗 Drive Safe
                </div>

            </div>

        </div>
    );
}

export default Services;