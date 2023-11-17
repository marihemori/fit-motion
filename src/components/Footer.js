import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/fit-motion-logo.svg";

function Footer() {
  return (
    <Box mt="2rem" bgcolor="#000000">
      <Stack gap="40px" alignItems="center" p="40px">
        <img src={Logo} alt="Logo" width="90px" />
      </Stack>
    </Box>
  );
}

export default Footer;
