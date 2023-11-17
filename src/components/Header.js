import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import styled from "styled-components";

import Logo from "../assets/images/fit-motion-logo.svg";

const Header = styled.header`
  background-color: #000000;
  z-index: 50;
`;

const LogoText = styled.h1`
  text-decoration: none;
  color: #ffffff;
  font-size: 2.5rem;
`;

const NavLink = styled(Link)`
  color: #ffffff;
`;

function Navbar() {
  return (
    <Header>
      <Stack
        direction="row"
        gap="40px"
        justifyContent="space-between"
        alignItems="center"
        width="400px"
        maxWidth="1250px"
        sx={{ width: { xl: "1250px" } }}
        m="auto"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Fit Motion"
            style={{ width: "55px", height: "55px" }}
          />
        </Link>
        <Link to="/">
          <LogoText className="title">fit.motion</LogoText>
        </Link>
        <Stack direction="row" gap="8rem" justifyContent="space-between">
          <NavLink to="/">Home</NavLink>
        </Stack>
      </Stack>
    </Header>
  );
}

export default Navbar;
