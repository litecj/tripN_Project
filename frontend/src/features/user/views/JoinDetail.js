import React from "react";
import styled from "styled-components";
import { Container, Typography } from "@mui/material";
import { TripLayout } from "features/common";
import { Join_personal } from "..";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function JoinDetail() {
  return (
    <>
      <TripLayout>
        <Container>
          <ContentStyle>
            <Typography variant="h4" gutterBottom margin="30px">
              Get started make your trip.
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Make your trip, Simply and Faster!
            </Typography>
            <Join_personal />
          </ContentStyle>
          {/* <Mbti_button/> */}
        </Container>
      </TripLayout>
    </>
  );
}
