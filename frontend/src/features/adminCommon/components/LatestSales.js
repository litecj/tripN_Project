import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors,
} from "@material-ui/core";
import { lastSixMonth } from "../reducer/adminSlice";

const MonthReports = (props) => {
  const dispatch = useDispatch();
  const sixMonth = useSelector((state) => state.admin.lastSixMonthState);

  useEffect(() => {
    dispatch(lastSixMonth());
    console.log("보낸다");
  }, []); // 계속 리퀘스트를 보내서 빈 배열을 넣어서 콜백을 잡았음
  // const theme = useTheme();
  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],              
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [
          // sixMonth[5][1],
          // sixMonth[4][1],
          // sixMonth[3][1],
          // sixMonth[2][1],
          // sixMonth[1][1],
          // sixMonth[0][1],
          3,4,9,10,12,20


        ],
        // 근데 그러고 나니까 값이 먹히질 않아... 왜???? 왜 안먹히지? 빈 배열을 넣으니까 한번은 리퀘스트가 되서 값이 나오는데 새로 고침을 하고 나면 값이 사라져
        // 왜??? 리퀘스트가 가고 다시 되돌아 오는 값이 없으니까
        // 식스 먼스는 유스 셀랙터야 그렇다면... 계속해서 값을 요청하지 그럼? 식스 먼스는 값이 여러개니까 계속 요청해
        // 그럼 저걸 어디에 담지?
        // 어딘가에 담아두면 답이 고정될거야 어디에 담아야하지? 유즈스테이트..?? 값을 가져오고나면 서버와 연결을 끊어야해 어디서?? 

        label: "이번년도",
        maxBarThickness: 10,
      },
      {
        backgroundColor: colors.grey[200],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [11, 5, 12, 29, 20, 25],
        label: "전년도",
        maxBarThickness: 10,
      },
    ],
    labels: [
      // sixMonth[5][0],
      // sixMonth[4][0],
      // sixMonth[3][0],
      // sixMonth[2][0],
      // sixMonth[1][0],
      // sixMonth[0][0],
      '7월', "8월" ,"9월", "10월", "11월", "12월"
    ],
  };
  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    // scales: {
    //   xAxes: [
    //     {
    //       ticks: {
    //         fontColor: theme.palette.text.secondary,
    //       },
    //       gridLines: {
    //         display: false,
    //         drawBorder: false,
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       ticks: {
    //         fontColor: theme.palette.text.secondary,
    //         beginAtZero: true,
    //         min: 0
    //       },
    //       gridLines: {
    //         borderDash: [2],
    //         borderDashOffset: [2],
    //         color: theme.palette.divider,
    //         drawBorder: false,
    //         zeroLineBorderDash: [2],
    //         zeroLineBorderDashOffset: [2],
    //         zeroLineColor: theme.palette.divider
    //       }
    //     }
    //   ]
    // },

    // tooltips: {
    //   backgroundColor: theme.palette.background.paper,
    //   bodyFontColor: theme.palette.text.secondary,
    //   borderColor: theme.palette.divider,
    //   borderWidth: 1,
    //   enabled: true,
    //   footerFontColor: theme.palette.text.secondary,
    //   intersect: false,
    //   mode: "index",
    //   titleFontColor: theme.palette.text.primary,
    // },
  };

  return (
    <Card {...props}>
      <CardHeader title="최근 6개월 예약 건수" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MonthReports;
