import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { exerciseOptions, fetchData } from "../utils/fetchData";

// Components
import HorizontalScrollBar from "./HorizontalScrollbar";

const ButtonColor = styled.button`
  background: #000000;
  color: #ffffff;
  border: none;
  font-size: 2rem;
  padding: 2rem 4rem;
  cursor: pointer;
  border: 1px solid #ffffff;
`;

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" m="10rem" justifyContent="center">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "4rem", xs: "2rem" } }}
        textAlign="center"
        mb="6rem"
      >
        Awesome exercises you <br /> should know
      </Typography>
      <Box position="relative">
        <TextField
          sx={{
            input: {
              backgroundColor: "none",
              color: "#000000",
              fontSize: "2rem",
              border: "2px solid #000000",
            },
            width: { lg: "80rem", xs: "40rem" },
          }}
          height="3rem"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search exercises"
          type="text"
        />
        <ButtonColor onClick={handleSearch}>Search</ButtonColor>
      </Box>
      <Box sx={{ position: "relative" }}></Box>
      <HorizontalScrollBar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyParts={setBodyPart}
      />
    </Stack>
  );
}

export default SearchExercises;
