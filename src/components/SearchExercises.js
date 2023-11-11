import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const ButtonColor = styled.button`
  background: none;
  color: #ffffff;
  border: none;
  font-size: 2rem;
  padding: 2rem 4rem;
  cursor: pointer;
  border: 1px solid #ffffff;
`;

function SearchExercises() {
  return (
    <Stack alignItems="center" m="10rem" justifyContent="center">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "4rem", xs: "2rem" } }}
        textAlign="center"
        mb="8rem"
      >
        Awesome exercises you <br /> should know
      </Typography>
      <Box position="relative">
        <TextField
          sx={{
            input: {
              backgroundColor: "#ffffff",
              fontSize: "2rem",
              border: "2px solid #ffffff",
            },
            width: { lg: "80rem", xs: "40rem" },
          }}
          height="3rem"
          value=""
          onChange={(e) => {}}
          placeholder="Search exercises"
          type="text"
        />
        <ButtonColor>Search</ButtonColor>
      </Box>
    </Stack>
  );
}

export default SearchExercises;
