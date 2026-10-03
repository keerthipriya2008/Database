function Home({ onBookService }) {
    return (
        <div className="new-home">

            {/* HERO SECTION */}
            <section className="home-hero">

                <div className="hero-left">

                    <div className="hero-badge">
                        ⚡ SMART VEHICLE SERVICE
                    </div>

                    <h1>
                        Your Vehicle.
                        <br />
                        <span>Our Responsibility.</span>
                    </h1>

                    <p>
                        Book professional vehicle servicing, track
                        every stage of the service, and manage your
                        vehicle records — all in one place.
                    </p>

                    <div className="hero-buttons">

                        <button
                            className="hero-book-btn"
                            onClick={onBookService}
                        >
                            Book a Service 🚗
                        </button>

                        <div className="hero-trust">
                            🛡️ Reliable &nbsp; • &nbsp;
                            🔧 Professional &nbsp; • &nbsp;
                            📍 Trackable
                        </div>

                    </div>

                </div>


                {/* VEHICLE VISUAL */}
                <div className="hero-vehicle">

                    <div className="vehicle-glow"></div>

                    <div className="big-car">
                        🚘
                    </div>

                    <div className="floating-card card-service">

                        <span>🔧</span>

                        <div>
                            <small>ACTIVE SERVICE</small>
                            <strong>Oil Change</strong>
                        </div>

                    </div>

                    <div className="floating-card card-status">

                        <span>✓</span>

                        <div>
                            <small>STATUS</small>
                            <strong>Service Confirmed</strong>
                        </div>

                    </div>

                </div>

            </section>


            {/* QUICK STATS */}
            <section className="home-stats">

                <div className="stat-box">
                    <span>🚗</span>
                    <div>
                        <strong>4+</strong>
                        <p>Service Types</p>
                    </div>
                </div>

                <div className="stat-box">
                    <span>⚡</span>
                    <div>
                        <strong>24/7</strong>
                        <p>Booking Access</p>
                    </div>
                </div>

                <div className="stat-box">
                    <span>📍</span>
                    <div>
                        <strong>LIVE</strong>
                        <p>Service Tracking</p>
                    </div>
                </div>

                <div className="stat-box">
                    <span>💳</span>
                    <div>
                        <strong>Easy</strong>
                        <p>Payment Management</p>
                    </div>
                </div>

            </section>


            {/* SERVICES */}
            <section className="home-services">

                <div className="section-heading">

                    <div>
                        <span>WHAT WE OFFER</span>

                        <h2>
                            Everything your vehicle needs
                        </h2>
                    </div>

                    <p>
                        Professional services designed to keep
                        your vehicle safe and reliable.
                    </p>

                </div>


                <div className="home-service-grid">

                    <div className="home-service-card">
                        <div className="service-circle">
                            🛢️
                        </div>

                        <h3>Oil Change</h3>

                        <p>
                            Keep your engine smooth with regular
                            oil replacement.
                        </p>

                        <strong>
                            Starting from ₹800
                        </strong>
                    </div>


                    <div className="home-service-card">
                        <div className="service-circle">
                            🔧
                        </div>

                        <h3>General Service</h3>

                        <p>
                            Complete inspection and maintenance
                            for your vehicle.
                        </p>

                        <strong>
                            Starting from ₹1,500
                        </strong>
                    </div>


                    <div className="home-service-card">
                        <div className="service-circle">
                            🛑
                        </div>

                        <h3>Brake Service</h3>

                        <p>
                            Inspection and maintenance of your
                            vehicle braking system.
                        </p>

                        <strong>
                            Starting from ₹1,200
                        </strong>
                    </div>


                    <div className="home-service-card">
                        <div className="service-circle">
                            ❄️
                        </div>

                        <h3>AC Service</h3>

                        <p>
                            Improve cooling performance and
                            maintain your vehicle AC.
                        </p>

                        <strong>
                            Starting from ₹1,000
                        </strong>
                    </div>

                </div>

            </section>


            {/* HOW IT WORKS */}
            <section className="how-section">

                <div className="section-heading center">

                    <span>HOW IT WORKS</span>

                    <h2>
                        Service your vehicle in 4 simple steps
                    </h2>

                </div>


                <div className="steps-container">

                    <div className="home-step">
                        <div className="step-number">01</div>

                        <h3>Book</h3>

                        <p>
                            Select your vehicle and choose the
                            service you need.
                        </p>
                    </div>


                    <div className="home-step">
                        <div className="step-number">02</div>

                        <h3>Drop Off</h3>

                        <p>
                            Bring your vehicle to the service
                            center on your selected date.
                        </p>
                    </div>


                    <div className="home-step">
                        <div className="step-number">03</div>

                        <h3>Track</h3>

                        <p>
                            Follow your vehicle's service journey
                            in real time.
                        </p>
                    </div>


                    <div className="home-step">
                        <div className="step-number">04</div>

                        <h3>Pickup</h3>

                        <p>
                            Complete payment and collect your
                            serviced vehicle.
                        </p>
                    </div>

                </div>

            </section>


            {/* BOTTOM CTA */}
            <section className="home-cta">

                <div>

                    <span>READY WHEN YOU ARE</span>

                    <h2>
                        Give your vehicle the care it deserves.
                    </h2>

                    <p>
                        Schedule your next service in just a few clicks.
                    </p>

                </div>

                <button onClick={onBookService}>
                    Book Service 🚗
                </button>

            </section>

        </div>
    );
}

export default Home;