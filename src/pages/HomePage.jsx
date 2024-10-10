import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import TopBar from "../components/dashboard/TopBar";

const HomePage = () => {
    return (
        <div className="bg-gray-100">
            <TopBar />
            <Dashboard />
        </div>
    );
};

export default HomePage;
