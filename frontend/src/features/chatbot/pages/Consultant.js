import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { TripLayout } from "features/common";
import { Chat } from "..";


export function Consultant() {
  return (
    <TripLayout>
      <div align="center" style={{ margin: "30px" }}>
        <Chat/>
        <br />
        <br />
        <br />
        <Button
          component={Link}
          to="/recommand"
          sx={{
            border: "4px solid currentColor",
            borderRadius: 0,
            height: "auto",
            py: 2,
            px: 5,
          }}
        >
          <Typography variant="h4" component="span">
            선택하여 여행 떠나기!
          </Typography>
        </Button>
        <Typography variant="subtitle1" sx={{ my: 3 }}>
          버튼을 누르시면 선택 항목들을 추천해드립니다.
          <br />
          챗봇과의 상담을 원하시면 현재 페이지에서 진행해드리겠습니다.
        </Typography>
      </div>
    </TripLayout>
  );
}