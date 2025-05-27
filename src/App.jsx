import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/Homepage.jsx";
import BusinessServices from "./components/pages/BusinessServices";
import CareerServices from "./components/pages/CareerServices";
import NotFound from "./components/pages/NotFound.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="business-services" element={<BusinessServices />} />
          <Route path="career-services" element={<CareerServices />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
