import * as React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TripLayout } from "features/common";

export function Home() {
  return (
    <TripLayout>
      <div id="layout" className="Home-css" align="center">
        <Typography color="inherit" align="center" variant="h2" marked="center">
          당신의 여행을 떠나세요!
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 12, mt: { sx: 4, sm: 10 } }}
        >
          TripN은 당신에 의한 당신을 위한 당신의 성향에 의거한 맞춤 여행
          서비스를 제공합니다.
        </Typography>
        <Button
          // color="secondary"
          component={Link}
          to="/consultant"
          variant="contained"
          size="large"
          sx={{ minWidth: 200 }}
        >
          출발하기!!
        </Button>
        <Typography variant="body2" color="inherit" sx={{ mt: 4 }}>
          Discover the experience
        </Typography>
      </div>
    </TripLayout>
  );
}
