import * as React from "react";
import { Container, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function MoveHomeBt() {
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
        to="/home"
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          홈페이지로 이동하기
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        버튼을 누르시면 홈페이지로 이동합니다.
      </Typography>

      {/* <Button
        href="/invoice"
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          공유하기
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
          버튼을 누르시면 이메일을 통해 공유하실 수 있습니다.
      </Typography> */}
    </Container>
  );
}

export default MoveHomeBt;
