import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      style={{ cursor: "pointer" }}
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2321" : "",
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "270px",
        height: "280px",
        gap: "2rem",
      }}
    >
      <Typography>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
