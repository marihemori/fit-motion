import React, { useState } from "react";

// Components
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </>
  );
}

export default Home;
