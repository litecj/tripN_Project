import * as React from "react";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Join_button() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 2,
      }}
    >
      <Button
        color="success"
        to="/joinDetail"
        component={RouterLink}
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Trip N 회원가입하기
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        버튼을 누르시면 회원가입 페이지로 이동합니다.
      </Typography>
    </Container>
  );
}

export default Join_button;
