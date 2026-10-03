import { useState } from "react";
import "./Register.css";

function Register({ onRegisterSuccess }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (form.password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        phone: form.phone,
                        password: form.password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                setSuccess(
                    "Account created successfully! You can now login."
                );

                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: ""
                });

                setTimeout(() => {
                    if (onRegisterSuccess) {
                        onRegisterSuccess();
                    }
                }, 1500);

            } else {
                setError(
                    data.message || "Registration failed."
                );
            }

        } catch (error) {
            console.error(error);
            setError("Cannot connect to backend.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">

            <div className="register-card">

                {/* ==============================
                    LEFT PANEL
                ============================== */}

                <div className="register-left">

                    <div className="register-car">
                        🚗
                    </div>

                    <div className="register-brand">
                        Vehicle Service
                    </div>

                    <p className="register-left-text">
                        Everything your vehicle needs,
                        all in one place.
                    </p>

                    <div className="register-benefits">

                        <div className="register-benefit">
                            <span>✓</span>
                            <div>
                                <strong>Easy Booking</strong>
                                <small>
                                    Book your service in seconds
                                </small>
                            </div>
                        </div>

                        <div className="register-benefit">
                            <span>✓</span>
                            <div>
                                <strong>Track Service</strong>
                                <small>
                                    Follow your vehicle's progress
                                </small>
                            </div>
                        </div>

                        <div className="register-benefit">
                            <span>✓</span>
                            <div>
                                <strong>Service History</strong>
                                <small>
                                    Keep all your records organized
                                </small>
                            </div>
                        </div>

                    </div>

                    <div className="register-decoration">
                        <span>🔧</span>
                        <span>🛠️</span>
                        <span>⚙️</span>
                    </div>

                </div>


                {/* ==============================
                    RIGHT PANEL
                ============================== */}

                <div className="register-right">

                    <div className="register-heading">

                        <span className="register-small-title">
                            GET STARTED
                        </span>

                        <h1>
                            Create Account ✨
                        </h1>

                        <p>
                            Join us and take better care of your vehicle.
                        </p>

                    </div>


                    <form
                        className="register-form"
                        onSubmit={handleSubmit}
                    >

                        {/* NAME */}

                        <div className="register-field">

                            <label>
                                Full Name
                            </label>

                            <div className="register-input-wrapper">
                                <span>👤</span>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>


                        {/* EMAIL */}

                        <div className="register-field">

                            <label>
                                Email Address
                            </label>

                            <div className="register-input-wrapper">
                                <span>📧</span>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>


                        {/* PHONE */}

                        <div className="register-field">

                            <label>
                                Phone Number
                            </label>

                            <div className="register-input-wrapper">
                                <span>📱</span>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>


                        {/* PASSWORD */}

                        <div className="register-field">

                            <label>
                                Password
                            </label>

                            <div className="register-input-wrapper">

                                <span>🔒</span>

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    placeholder="Create a password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword
                                        ? "🙈"
                                        : "👁️"}
                                </button>

                            </div>

                        </div>


                        {/* CONFIRM PASSWORD */}

                        <div className="register-field">

                            <label>
                                Confirm Password
                            </label>

                            <div className="register-input-wrapper">

                                <span>🔐</span>

                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={
                                        form.confirmPassword
                                    }
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword
                                        ? "🙈"
                                        : "👁️"}
                                </button>

                            </div>

                        </div>


                        {/* ERROR */}

                        {error && (
                            <div className="register-message error">
                                ⚠️ {error}
                            </div>
                        )}


                        {/* SUCCESS */}

                        {success && (
                            <div className="register-message success">
                                ✅ {success}
                            </div>
                        )}


                        {/* CREATE ACCOUNT */}

                        <button
                            type="submit"
                            className="create-account-btn"
                            disabled={loading}
                        >

                            {loading
                                ? "Creating Account..."
                                : "✨ Create My Account"}

                        </button>

                    </form>


                    {/* BACK TO LOGIN */}

                    <div className="register-login">

                        <span>
                            Already have an account?
                        </span>

                        <button
                            type="button"
                            onClick={() => {
                                if (onRegisterSuccess) {
                                    onRegisterSuccess();
                                }
                            }}
                        >
                            ← Back to Login
                        </button>

                    </div>


                    <div className="register-footer">
                        🔒 Your information is securely protected
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;