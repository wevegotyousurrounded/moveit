import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // ✅ Ensure Router is imported
import { Routes, Route, Navigate } from "react-router-dom"; // ✅ Ensure Navigate is imported
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WorkoutTracker from "./pages/WorkoutTracker";
import Goals from "./pages/Goals";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./assets/css/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Redirect to Home correctly */}
        <Route path="/" element={<Navigate to="/home" />} />  

        {/* Ensure paths include move-it for GitHub Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/workout" element={<WorkoutTracker />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
