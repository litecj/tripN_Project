import React from "react";
import { Box, Button, CardContent, Typography } from "@material-ui/core";
import mickey from "../imgs/mickey.png";
import { Icon } from "@iconify/react";

export default function Profile(props) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#ffff",
          height: "26vh",
          width: "25vh",
        }}
        style={{ minWidth: "200px", minHeight: "230px" }}
      >
        <CardContent>
          <Box
            sx={{
              margin: "10px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={mickey} height="100px" width="100px" />
            <Box sx={{ bgcolor: "#ffff", height: "2.5vh" }} />
            <div>김트립</div>
            <div>tripkim@gmail.com</div>
            <Button style={{ minWidth: "200px" }}>
              프로필 사진 변경
              <Icon
                icon="fluent:picture-in-picture-exit-20-regular"
                color="#553830"
                height={30}
              />
            </Button>
          </Box>
        </CardContent>
      </Box>
    </>
  );
}
