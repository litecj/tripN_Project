import React from "react";
import { Box, Grid, Container, Divider } from "@mui/material";
import { UserModifyCom } from "..";
import { MyLayout } from "features/common";

export default function UserModify() {
  return (
    <>
      <MyLayout>
        <Box sx={{ width: "90%", height: "auto" }}>
          <Container>
            <Box sx={{ height: "10vh", width: "auto" }} />
            <Grid container spacing={2}>
              <Grid>
                <Divider />
              </Grid>
              <UserModifyCom />
            </Grid>
          </Container>
        </Box>
      </MyLayout>
    </>
  );
}
