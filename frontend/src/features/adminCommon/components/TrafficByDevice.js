import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme,
} from "@material-ui/core";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIcon from "@material-ui/icons/Phone";
import TabletIcon from "@material-ui/icons/Tablet";

const TrafficByDevice = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
        ],
        borderWidth: 5,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["항공", "숙박", "액티비티"],
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [
    {
      title: "항공",
      value: 63,
      icon: LaptopMacIcon,
      color: colors.indigo[500],
    },
    {
      title: "숙박",
      value: 15,
      icon: TabletIcon,
      color: colors.red[600],
    },
    {
      title: "액티비티",
      value: 22,
      icon: PhoneIcon,
      color: colors.orange[600],
    },
  ];

  return (
    <>
      <Card {...props}>
        <h1 align="center">항목별 매출</h1>
        {/* <CardHeader title="항목별 매출" /> */}
        <Divider />
        <CardContent>
          <Box
            sx={{
              height: 285,
              position: "relative",
            }}
          >
            <Doughnut data={data} options={options} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {devices.map(({ color, icon: Icon, title, value }) => (
              <Box
                key={title}
                sx={{
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Icon color="action" />
                <Typography color="textPrimary" variant="body1">
                  {title}
                </Typography>
                <Typography style={{ color }} variant="h4">
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default TrafficByDevice;
