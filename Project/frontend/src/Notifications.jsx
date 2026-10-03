import { useState } from "react";
import "./Notifications.css";

function Notifications() {

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            icon: "🔧",
            title: "Service Started",
            message:
                "Your vehicle service has been started by our technician.",
            time: "10 minutes ago",
            type: "service",
            unread: true
        },
        {
            id: 2,
            icon: "🚗",
            title: "Vehicle Received",
            message:
                "Your vehicle has been successfully received at the service center.",
            time: "1 hour ago",
            type: "vehicle",
            unread: true
        },
        {
            id: 3,
            icon: "💰",
            title: "Payment Reminder",
            message:
                "Your service payment is pending. Please complete the payment after the final bill is generated.",
            time: "2 hours ago",
            type: "payment",
            unread: true
        },
        {
            id: 4,
            icon: "🔍",
            title: "Quality Check",
            message:
                "The final quality inspection will be performed after servicing.",
            time: "Yesterday",
            type: "inspection",
            unread: false
        },
        {
            id: 5,
            icon: "📅",
            title: "Service Reminder",
            message:
                "Your scheduled vehicle service is coming up soon.",
            time: "Yesterday",
            type: "reminder",
            unread: false
        }
    ]);

    const unreadCount = notifications.filter(
        (notification) => notification.unread
    ).length;

    const markAsRead = (id) => {

        setNotifications((previous) =>
            previous.map((notification) =>
                notification.id === id
                    ? { ...notification, unread: false }
                    : notification
            )
        );

    };

    const markAllAsRead = () => {

        setNotifications((previous) =>
            previous.map((notification) => ({
                ...notification,
                unread: false
            }))
        );

    };

    const deleteNotification = (id) => {

        setNotifications((previous) =>
            previous.filter(
                (notification) => notification.id !== id
            )
        );

    };

    return (
        <div className="notifications-page">

            {/* HEADER */}

            <div className="notifications-header">

                <div>

                    <span className="notification-label">
                        SERVICE CENTER
                    </span>

                    <h1>
                        Notifications 🔔
                    </h1>

                    <p>
                        Stay updated about your vehicle service.
                    </p>

                </div>

                <div className="notification-count">

                    🔔 {unreadCount} New

                </div>

            </div>


            {/* TOP ACTION BAR */}

            <div className="notification-actions">

                <div>

                    <strong>
                        Recent Updates
                    </strong>

                    <span>
                        {notifications.length} notifications
                    </span>

                </div>

                {unreadCount > 0 && (
                    <button
                        onClick={markAllAsRead}
                        className="mark-all-btn"
                    >
                        ✓ Mark all as read
                    </button>
                )}

            </div>


            {/* NOTIFICATIONS */}

            {notifications.length === 0 ? (

                <div className="notifications-empty">

                    <div className="empty-notification-icon">
                        🔔
                    </div>

                    <h2>
                        You're all caught up!
                    </h2>

                    <p>
                        There are no new notifications right now.
                    </p>

                </div>

            ) : (

                <div className="notification-list">

                    {notifications.map((notification) => (

                        <div
                            key={notification.id}
                            className={`notification-card ${
                                notification.unread
                                    ? "unread"
                                    : ""
                            }`}
                            onClick={() =>
                                markAsRead(notification.id)
                            }
                        >

                            {/* ICON */}

                            <div
                                className={`notification-icon ${notification.type}`}
                            >
                                {notification.icon}
                            </div>


                            {/* CONTENT */}

                            <div className="notification-content">

                                <div className="notification-title-row">

                                    <h3>
                                        {notification.title}
                                    </h3>

                                    {notification.unread && (
                                        <span className="new-badge">
                                            NEW
                                        </span>
                                    )}

                                </div>

                                <p>
                                    {notification.message}
                                </p>

                                <span className="notification-time">
                                    🕒 {notification.time}
                                </span>

                            </div>


                            {/* DELETE */}

                            <button
                                className="delete-notification"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    deleteNotification(
                                        notification.id
                                    );
                                }}
                                title="Remove notification"
                            >
                                ×
                            </button>

                        </div>

                    ))}

                </div>

            )}


            {/* FOOTER INFO */}

            <div className="notification-footer">

                <div className="notification-footer-icon">
                    🚗
                </div>

                <div>

                    <strong>
                        Vehicle Service Updates
                    </strong>

                    <p>
                        We'll notify you whenever there is
                        an important update about your vehicle.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Notifications;