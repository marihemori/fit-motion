import React, { useState } from "react";
import { Box } from "@mui/material";

// Components
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

function Home() {
  return (
    <>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </>
  );
}

export default Home;
