import React from "react";
import { ReactDOM } from "react";
import { Box, Grid, Divider, Typography } from "@mui/material";
import { element } from "prop-types";

export default function ComTrip(props) {
  // D-day

  // function dday() {
  //   const setday = new Date("January 3, 2022").getTime();
  //   const today = new Date().getTime();
  //   const gap = setday - today;
  //   const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  //   const showdday = <h4>당신의 베리해피세드 졸업날 {day}</h4>;
  //   ReactDOM.render(showdday, document.getElementById("count"));
  // }
  // setInterval(dday, 1000);
  // {
  /*----------------------------------------------------------------*/
  // }
  // const setday = new Date("January 3, 2022").getTime();

  // setInterval(function () {
  //   const today = new Date().getTime();
  //   const gap = setday - today;
  //   const day = Math.ceil(gap / (1000 * 60 * 60 * 24));

  //   document.getElementById("count").innerHTML =
  //     "당신의 메리베리매우힘듬졸어뷰ㅠㅠㅠㅠ까지 " +
  //     day +
  //     "일 " +
  //     "남았습니다.";
  // }, 1000);

  // -> useEffect

  return (
    <>
      <Box sx={{ width: "100vh", height: "auto" }}>
        <Grid>
          <Typography color="textPrimary" gutterBottom variant="h4" align="">
            다가오는 여행
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography color="textPrimary" gutterBottom variant="body1">
            <h4 id="count" />
          </Typography>
          <h1>바우처 / 지도 / 스케줄 넣어주기 </h1>
        </Grid>
      </Box>
    </>
  );
}
