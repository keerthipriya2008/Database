import { useState } from "react";
import "./ServiceFeedback.css";

function ServiceFeedback() {

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (rating === 0) {
            alert("Please select a rating ⭐");
            return;
        }

        setSubmitted(true);
    };

    const handleReset = () => {
        setRating(0);
        setHoverRating(0);
        setFeedback("");
        setSubmitted(false);
    };

    return (
        <div className="feedback-page">

            {/* HEADER */}

            <div className="feedback-header">

                <span className="feedback-label">
                    VEHICLE SERVICE CENTER
                </span>

                <h1>
                    Service Feedback ⭐
                </h1>

                <p>
                    Tell us about your recent vehicle service experience.
                </p>

            </div>


            {/* MAIN CARD */}

            <div className="feedback-card">

                {!submitted ? (

                    <form onSubmit={handleSubmit}>

                        {/* SERVICE SUMMARY */}

                        <div className="feedback-service">

                            <div className="service-icon">
                                🚗
                            </div>

                            <div>
                                <span>
                                    RECENT SERVICE
                                </span>

                                <h2>
                                    Vehicle Service
                                </h2>

                                <p>
                                    Thank you for choosing our service center.
                                </p>
                            </div>

                        </div>


                        {/* RATING */}

                        <div className="rating-section">

                            <h3>
                                How was your experience?
                            </h3>

                            <p>
                                Your rating helps us improve our service.
                            </p>

                            <div className="stars">

                                {[1, 2, 3, 4, 5].map((star) => (

                                    <button
                                        type="button"
                                        key={star}
                                        className={
                                            star <=
                                            (hoverRating || rating)
                                                ? "star active"
                                                : "star"
                                        }
                                        onClick={() =>
                                            setRating(star)
                                        }
                                        onMouseEnter={() =>
                                            setHoverRating(star)
                                        }
                                        onMouseLeave={() =>
                                            setHoverRating(0)
                                        }
                                    >
                                        ★
                                    </button>

                                ))}

                            </div>


                            <div className="rating-text">

                                {rating === 0 &&
                                    "Select your rating"}

                                {rating === 1 &&
                                    "Poor 😕"}

                                {rating === 2 &&
                                    "Needs Improvement 😐"}

                                {rating === 3 &&
                                    "Good 🙂"}

                                {rating === 4 &&
                                    "Very Good 😊"}

                                {rating === 5 &&
                                    "Excellent! 🤩"}

                            </div>

                        </div>


                        {/* FEEDBACK */}

                        <div className="feedback-input-section">

                            <label>
                                Share your experience
                            </label>

                            <textarea
                                value={feedback}
                                onChange={(event) =>
                                    setFeedback(event.target.value)
                                }
                                placeholder="Tell us what you liked about our service..."
                                rows="5"
                            />

                            <span className="character-count">
                                {feedback.length}/500
                            </span>

                        </div>


                        {/* QUICK OPTIONS */}

                        <div className="quick-feedback">

                            <span>
                                Quick feedback:
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    setFeedback(
                                        "The service was quick and professional."
                                    )
                                }
                            >
                                ⚡ Quick Service
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setFeedback(
                                        "The technician was professional and helpful."
                                    )
                                }
                            >
                                👨‍🔧 Helpful Technician
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setFeedback(
                                        "The overall service experience was excellent."
                                    )
                                }
                            >
                                ⭐ Excellent Service
                            </button>

                        </div>


                        {/* SUBMIT */}

                        <button
                            type="submit"
                            className="submit-feedback"
                        >
                            Submit Feedback ⭐
                        </button>

                    </form>

                ) : (

                    /* SUCCESS */

                    <div className="feedback-success">

                        <div className="success-icon">
                            🎉
                        </div>

                        <h2>
                            Thank You!
                        </h2>

                        <p>
                            Your feedback has been submitted successfully.
                        </p>

                        <div className="submitted-rating">

                            Your Rating

                            <div>
                                {"★".repeat(rating)}
                                {"☆".repeat(5 - rating)}
                            </div>

                        </div>

                        {feedback && (

                            <div className="submitted-message">

                                <strong>
                                    Your feedback
                                </strong>

                                <p>
                                    "{feedback}"
                                </p>

                            </div>

                        )}

                        <button
                            className="another-feedback"
                            onClick={handleReset}
                        >
                            Give Another Feedback
                        </button>

                    </div>

                )}

            </div>


            {/* FOOTER */}

            <div className="feedback-footer">

                <span>
                    💙
                </span>

                <div>

                    <strong>
                        Your feedback matters
                    </strong>

                    <p>
                        Every review helps us provide better
                        vehicle service.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default ServiceFeedback;