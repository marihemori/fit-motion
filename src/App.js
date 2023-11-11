import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";

// Pages
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
