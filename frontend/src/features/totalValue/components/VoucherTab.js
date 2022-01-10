import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const Voucher = useSelector(state=>state.recommandSlice.saveState[0])
  const plan =  Voucher[1]
  const plane = Voucher[2]['plane']
  const acc = Voucher[3]['acc']
  const activity = Voucher[4]['activity']
  const day1 = plan[`day-${activity[0]}`]
  const day2 = plan[`day-${activity[1]}`]
  console.log(`Voucher 0 =========== ${JSON.stringify(JSON.parse(JSON.stringify(Voucher[0])))}`)
  console.log(`Voucher 1 =========== ${JSON.stringify(Voucher[1])}`)
  console.log(`dkkkkkkkkkkkkkkkkkk   ${plan[`day-${activity[0]}`]}`)
  console.log(`Voucher 2 =========== ${JSON.stringify(Voucher[2])}`) // 비행기
  console.log(`Voucher 3 =========== ${JSON.stringify(Voucher[3])}`) // 숙소
  console.log(`Voucher 4 =========== ${JSON.stringify(activity)}`) // 액티비티 name

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Voucher</h1>
      <Box component={Paper} sx={{ width: "100%", typography: "body1" }}>
        <TabContext sx={{ minWidth: 700 }} value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Flight" value="1" />
              <Tab label="Accomodation" value="2" />
              <Tab label="Activity" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {"출발편"}
            비행편: {plane[0]['vihicleId']}<br />
            비행시간: {plane[0]['depPlandTime']} - {plane[0]['arrPlandTime']} <br />
            요금: ₩ {plane[0]['economyCharge']}<br />
            <br/>
            {"도착편"}
            비행편: {plane[1]['vihicleId']}<br />
            비행시간: {plane[1]['depPlandTime']} - {plane[1]['arrPlandTime']} <br />
            요금: ₩ {plane[1]['economyCharge']}<br />
          </TabPanel>
          <TabPanel value="2">
            {"숙소"}
            이름 : {acc[0]['name']}<br />
            주소 : {acc[0]['loc']}<br />
            박당가격 : ₩ {acc[0]['price']} /박
            <br />
          </TabPanel>
          <TabPanel value="3">
            {" 엑티비티 "}
            이름 : {day1[0]['name']}<br />
            영업시간 : {day1[0]['start_business_time']} - {day1[0]['end_business_time']}
            <br />
            체험시간 : {day1[0]['time']}<br />
            주소 :  {day1[0]['loc']}<br />
            가격 : ₩ {day1[0]['price']} <br />
            <br />
            <br />
            이름 : {day2[0]['name']}<br />
            영업시간 : {day2[0]['start_business_time']} - {day2[0]['end_business_time']}
            <br />
            체험시간 : {day2[0]['time']}<br />
            주소 :  {day2[0]['loc']}<br />
            가격 : ₩ {day2[0]['price']} <br />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}