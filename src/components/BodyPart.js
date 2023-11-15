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
        borderTop: bodyPart === item ? "4px solid #007AFF" : "",
        width: "240px",
        height: "90px",
        gap: "2rem",
        borderBottomLeftRadius: "20px",
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
