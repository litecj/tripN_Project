import React from "react";
import {
  Box,
  Grid,
  Container,
  Divider,
  Pagination,
  Stack,
} from "@mui/material";
import { Invoice, VoucherTab } from "features/totalValue";
import { ScheduleAcc } from "features/recommand";
import "features/myPage/styles/Reservation.css";
import PreInvoice from "../components/PreInvoice";
import { MyLayout } from "features/common";

export default function Reservation(props) {
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
              {/* <ScheduleAcc class='ScheduleAcc'/>
                <VoucherTab class='VoucherTab'/> */}
              예약날짜별 리스트형
              <div style={{ margin: "30px" }}>
                <PreInvoice />
              </div>
              <div style={{ alignItems: "center" }}></div>
            </Grid>
          </Container>
        </Box>
        <div style={{ width: "80%" }}>
          <Stack spacing={2}>
            <Pagination count={10} />
          </Stack>
        </div>
      </MyLayout>
    </>
  );
}
