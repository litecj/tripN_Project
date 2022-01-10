import React from "react";
import styled from "styled-components";
import { Box, Container, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { EmailApi, Join_button } from "..";
import { TripLayout } from "features/common";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  // padding: theme.spacing(12, 0)
}));

export default function JoinFrist() {
  return (
    <>
      <TripLayout>
        <Container>
          <ContentStyle>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                Get started make your trip.
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Make your trip, Simply and Faster!
              </Typography>
            </Box>
            <EmailApi />
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                OR
              </Typography>
            </Divider>
            <Join_button />
          </ContentStyle>
        </Container>
      </TripLayout>
    </>
  );
}
