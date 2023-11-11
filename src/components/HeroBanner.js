import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import imageBanner from "../assets/images/class-gym.jpg";

const Container = styled.div`
  color: #ffffff;
  height: 100vh;
`;

const Banner = styled(Box)`
  color: #ffffff;
  background-image: url(${imageBanner});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: -webkit-fill-available;
  background-position: center;
  left: 0;
  z-index: 10;
`;

const Button = styled.button`
  background-color: #ffffff;
  border: none;
  font-size: 2rem;
  padding: 2rem 4rem;
  margin-top: 5rem;
  cursor: pointer;
`;

function HeroBanner() {
  return (
    <Container>
      <Banner>
        <Stack
          width="400px"
          sx={{ width: { xl: "1488px" } }}
          m="auto"
          style={{ height: "100vh", placeContent: "center" }}
        >
          <p
            style={{
              fontSize: "3rem",
              textTransform: "uppercase",
              fontWeight: "bolder",
            }}
          >
            Fitness club
          </p>
          <h1 style={{ fontSize: "13rem" }}>
            be one step
            <br /> ahead
          </h1>
          <p style={{ fontSize: "2rem" }}>
            Check the best, most efficient exercises that take effect faster,{" "}
            <br />
            chosen by several athletes.
          </p>
          <Link>
            <Button>Explore exercises</Button>
          </Link>
        </Stack>
      </Banner>
    </Container>
  );
}

export default HeroBanner;
