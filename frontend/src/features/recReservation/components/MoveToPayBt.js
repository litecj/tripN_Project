import * as React from "react";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function MoveToPayBt() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Button
        component={Link}
        to="/invoice"
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          결제하기
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        버튼을 누르시면 결제창으로 이동합니다.
      </Typography>
      {/* <Box
        component="img"
        src="/static/themes/onepirate/producBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      /> */}
    </Container>
  );
}

export default MoveToPayBt;
