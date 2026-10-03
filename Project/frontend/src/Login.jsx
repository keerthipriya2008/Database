import { useState } from "react";

function Login({ onLogin, onShowRegister }) {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form)
                }
            );

            const data = await response.json();

            if (response.ok) {

                if (onLogin) {
                    onLogin(data.user || data);
                }

            } else {
                setError(
                    data.message || "Login failed"
                );
            }

        } catch (error) {
            console.error(error);

            setError(
                "Cannot connect to backend"
            );
        }
    };

    return (
        <div className="login-modern-page">

            <div className="login-modern-card">

                {/* =================================
                    LEFT SIDE
                ================================= */}

                <div className="login-modern-left">

                    <div className="login-modern-car">
                        🚗
                    </div>

                    <h1>
                        Vehicle Service
                    </h1>

                    <p>
                        Your vehicle deserves the best care.
                    </p>

                    <div className="login-modern-features">

                        <span>
                            ✓ Easy Booking
                        </span>

                        <span>
                            ✓ Quick Service
                        </span>

                        <span>
                            ✓ Track Your Service
                        </span>

                    </div>

                </div>


                {/* =================================
                    RIGHT SIDE
                ================================= */}

                <div className="login-modern-right">

                    <h2>
                        Welcome Back! 👋
                    </h2>

                    <p className="login-modern-subtitle">
                        Login to manage your vehicle services
                    </p>


                    <form onSubmit={handleSubmit}>

                        {/* EMAIL */}

                        <label>
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />


                        {/* PASSWORD */}

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />


                        {/* ERROR */}

                        {error && (
                            <div className="login-modern-error">
                                {error}
                            </div>
                        )}


                        {/* LOGIN */}

                        <button
                            type="submit"
                            className="login-main-button"
                        >
                            Login
                        </button>

                    </form>


                    {/* =================================
                        SIGN UP
                    ================================= */}

                    <div className="signup-section">

                        <p>
                            Don't have an account?
                        </p>

                        <button
                            type="button"
                            className="signup-button"
                            onClick={onShowRegister}
                        >
                            Create Account
                        </button>

                    </div>


                    <p className="login-modern-footer">
                        Vehicle Service Management System
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;