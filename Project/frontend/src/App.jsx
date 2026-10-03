import { useState } from "react";
import "./App.css";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {

    const [user, setUser] = useState(null);
    const [showRegister, setShowRegister] = useState(false);


    // =================================
    // LOGGED IN
    // =================================

    if (user) {

        return (
            <Dashboard
                user={user}
            />
        );

    }


    // =================================
    // REGISTER PAGE
    // =================================

    if (showRegister) {

        return (
            <Register
                onRegisterSuccess={() => {
                    setShowRegister(false);
                }}

                onBackToLogin={() => {
                    setShowRegister(false);
                }}
            />
        );

    }


    // =================================
    // LOGIN PAGE
    // =================================

    return (
        <Login

            onLogin={(loggedInUser) => {
                setUser(loggedInUser);
            }}

            onShowRegister={() => {
                setShowRegister(true);
            }}

        />
    );
}

export default App;