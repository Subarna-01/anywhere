import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PackageDetail } from "../pages/PackageDetail";

export const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package/:id" element={<PackageDetail />} />
        </Routes>
    );
};
