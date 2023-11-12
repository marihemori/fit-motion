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
        borderTop: bodyPart === item ? "4px solid #01C7F3" : "",
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "240px",
        height: "240px",
        gap: "2rem",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Typography fontSize="2rem" textTransform="capitalize" fontWeight="Bold">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
