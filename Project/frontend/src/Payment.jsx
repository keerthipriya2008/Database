import { useState } from "react";
import "./App.css";

function Payment({ booking }) {
    const [paid, setPaid] = useState(false);

    // Different prices based on service
    const getBill = () => {
        const service = String(booking?.service_type || "").toLowerCase();

        if (service.includes("oil")) {
            return {
                service: 800,
                parts: 0,
                labour: 200
            };
        }

        if (service.includes("brake")) {
            return {
                service: 1200,
                parts: 1800,
                labour: 500
            };
        }

        if (service.includes("ac")) {
            return {
                service: 1500,
                parts: 1000,
                labour: 600
            };
        }

        if (service.includes("general")) {
            return {
                service: 1000,
                parts: 500,
                labour: 400
            };
        }

        return {
            service: 900,
            parts: 300,
            labour: 300
        };
    };

    const bill = getBill();

    const subtotal =
        bill.service +
        bill.parts +
        bill.labour;

    const gst = Math.round(subtotal * 0.18);

    const total = subtotal + gst;

    const handlePayment = () => {
        setPaid(true);
    };

    return (
        <div className="payment-page">

            {/* HEADER */}

            <div className="payment-header">

                <div>
                    <span className="payment-label">
                        VEHICLE SERVICE CENTER
                    </span>

                    <h1>
                        💳 Service Payment
                    </h1>

                    <p>
                        Review your service bill and complete your payment.
                    </p>
                </div>

                <div className="secure-payment">
                    🔒 Secure Payment
                </div>

            </div>


            {/* MAIN PAYMENT CARD */}

            <div className="payment-container">

                {/* VEHICLE INFORMATION */}

                <div className="payment-vehicle">

                    <div className="payment-car-icon">
                        🚗
                    </div>

                    <div>
                        <span>VEHICLE</span>

                        <h2>
                            {booking?.vehicle_number || "TS09AB1234"}
                        </h2>

                        <p>
                            {booking?.vehicle_type || "Car"}
                        </p>
                    </div>

                    <div className="payment-booking">

                        <span>BOOKING ID</span>

                        <strong>
                            #{booking?.id || "5"}
                        </strong>

                    </div>

                </div>


                {/* SERVICE DETAILS */}

                <div className="payment-service">

                    <div>

                        <span>SERVICE</span>

                        <strong>
                            🔧 {booking?.service_type || "Vehicle Service"}
                        </strong>

                    </div>

                    <div>

                        <span>SERVICE DATE</span>

                        <strong>
                            📅{" "}
                            {booking?.booking_date
                                ? new Date(
                                    booking.booking_date
                                ).toLocaleDateString()
                                : "24 Sep 2026"}
                        </strong>

                    </div>

                </div>


                {/* BILL */}

                <div className="bill-card">

                    <div className="bill-title">

                        <div>
                            <span>BILL SUMMARY</span>

                            <h2>
                                Service Invoice
                            </h2>
                        </div>

                        <div className="invoice-icon">
                            🧾
                        </div>

                    </div>


                    <div className="bill-row">

                        <span>
                            Service Charge
                        </span>

                        <strong>
                            ₹{bill.service}
                        </strong>

                    </div>


                    <div className="bill-row">

                        <span>
                            Parts & Materials
                        </span>

                        <strong>
                            ₹{bill.parts}
                        </strong>

                    </div>


                    <div className="bill-row">

                        <span>
                            Labour Charge
                        </span>

                        <strong>
                            ₹{bill.labour}
                        </strong>

                    </div>


                    <div className="bill-row">

                        <span>
                            Subtotal
                        </span>

                        <strong>
                            ₹{subtotal}
                        </strong>

                    </div>


                    <div className="bill-row">

                        <span>
                            GST (18%)
                        </span>

                        <strong>
                            ₹{gst}
                        </strong>

                    </div>


                    <div className="bill-divider"></div>


                    <div className="bill-total">

                        <span>
                            Total Amount
                        </span>

                        <strong>
                            ₹{total}
                        </strong>

                    </div>


                    {/* PAYMENT STATUS */}

                    {!paid ? (

                        <div className="payment-action">

                            <div>

                                <span>
                                    PAYMENT STATUS
                                </span>

                                <strong className="pending-payment">
                                    ● PENDING
                                </strong>

                            </div>

                            <button
                                onClick={handlePayment}
                            >
                                💳 Pay ₹{total}
                            </button>

                        </div>

                    ) : (

                        <div className="payment-success">

                            <div className="success-icon">
                                ✓
                            </div>

                            <div>

                                <h3>
                                    Payment Successful
                                </h3>

                                <p>
                                    Your payment of ₹{total} has been received.
                                </p>

                                <span>
                                    Transaction ID: TXN-
                                    {Date.now().toString().slice(-8)}
                                </span>

                            </div>

                        </div>

                    )}

                </div>


                {/* PAYMENT METHODS */}

                {!paid && (

                    <div className="payment-methods">

                        <span>
                            ACCEPTED PAYMENT METHODS
                        </span>

                        <div>

                            <div>💳 Card</div>

                            <div>📱 UPI</div>

                            <div>🏦 Net Banking</div>

                            <div>💰 Wallet</div>

                        </div>

                    </div>

                )}


                {/* FOOTER */}

                <div className="payment-footer">

                    <span>
                        🔒
                    </span>

                    <div>

                        <strong>
                            Your payment is secure
                        </strong>

                        <p>
                            Payment information is protected
                            using secure processing.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Payment;