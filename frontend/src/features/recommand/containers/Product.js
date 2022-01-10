import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCategories } from "..";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

// import { positions } from "@mui/system";
import "features/recommand/styles/Product.scss";
import { recommandList } from "../reducer/recommandSlice";

export default function Product() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const recommand = useSelector(state=>state.chatSlice.dataState[0])
   const day = recommand[0]['day']
   const departure_plane = recommand[1]
   const dep_plane1 = departure_plane[0]
   const dep_plane2 = departure_plane[1]
   const dep_plane3 = departure_plane[2]
   const arrival_plane = recommand[2]
   const ar_plane1 = arrival_plane[0]
   const ar_plane2 = arrival_plane[1]
   const ar_plane3 = arrival_plane[2]
   const accommodation_sever = recommand[3]
   const acc_1 = accommodation_sever[0]
   const acc_2 = accommodation_sever[1]
   const acc_3 = accommodation_sever[2]
   const activity_sever = recommand[4]
   const act_1 = activity_sever[0]
   const act_2 = activity_sever[1]
   const act_3 = activity_sever[2]
   const act_4 = activity_sever[3]
   const act_5 = activity_sever[4]
   // const olle_sever = recommand[5]
   // const olle = recommand[5]
   console.log(`departure_plane==========${JSON.stringify(departure_plane[0])}`)
   console.log(`day==========${JSON.stringify(day)}`)
   console.log("도착비행기"+ JSON.stringify(departure_plane))
   // console.log(`olle_sever  ==== ${JSON.stringify(olle_sever[1])}`)
  // ---------------------------------------- 토오통토토통
  const [depAirplane, setDepAirplane] = useState("");
  const [arrAirplane, setArrAirplane] = useState("");
  const [accomodation, setAccomodation] = useState("");

  const [activity1, setActivity1] = useState("");
  const [activity2, setActivity2] = useState("");
//   const [olle, setOlle] = useState("");

  const result = ({
    depAirplane: depAirplane['id'],
    arrAirplane: arrAirplane['id'],
    accomodation: accomodation['id'],
    activity1: activity1['id'],
    activity2: activity2['id'],
   //  olle: [olle['id']],
  });

  console.log(result);
  console.log(`acc localStorage :::::::::: ${localStorage.getItem("acc")}`)
  




  return (
    <>
      <div align="center">
        <h1>Departure Flight</h1>
        <div name="departure_plane">
          <Button onClick={(() => setDepAirplane(dep_plane1))} >
            <div >
            비행편: {JSON.parse(JSON.stringify(dep_plane1['vihicleId']))}<br/>
            비행시간: {JSON.parse(JSON.stringify(dep_plane1['depPlandTime']))} - {JSON.parse(JSON.stringify(dep_plane1['arrPlandTime']))} <br/>
            요금: {JSON.parse(JSON.stringify(dep_plane1['economyCharge']))}<br/>
            </div>
          </Button>
          <Button onClick={(() => setDepAirplane(dep_plane2))} >
            <div >
            비행편: {JSON.parse(JSON.stringify(dep_plane2['vihicleId']))}<br/>
            비행시간: {JSON.parse(JSON.stringify(dep_plane2['depPlandTime']))} - {JSON.parse(JSON.stringify(dep_plane2['arrPlandTime']))} <br/>
            요금: {JSON.parse(JSON.stringify(dep_plane2['economyCharge']))}<br/>
            </div>
          </Button>
          <Button onClick={(() => setDepAirplane(dep_plane3))} >
            <div >
            비행편: {JSON.parse(JSON.stringify(dep_plane3['vihicleId']))}<br/>
            비행시간: {JSON.parse(JSON.stringify(dep_plane3['depPlandTime']))} - {JSON.parse(JSON.stringify(dep_plane3['arrPlandTime']))} <br/>
            요금: {JSON.parse(JSON.stringify(dep_plane3['economyCharge']))}<br/>
            </div>
          </Button>

          <br/>출발 비행편 {depAirplane['vihicleId']} 이 선택되었습니다 
        
        </div>
        <h1>Arrival Flight</h1>
        <div name="departure_plane">
          <Button onClick={(() => setArrAirplane(ar_plane1))} >
            <div >
            비행편: {JSON.parse(JSON.stringify(ar_plane1['vihicleId']))}<br/>
            비행시간: {JSON.parse(JSON.stringify(ar_plane1['depPlandTime']))} - {JSON.parse(JSON.stringify(ar_plane1['arrPlandTime']))} <br/>
            요금: {JSON.parse(JSON.stringify(ar_plane1['economyCharge']))}<br/>
            </div>
          </Button>
          <Button onClick={(() => setArrAirplane(ar_plane2))} >
            <div >
            비행편: {JSON.parse(JSON.stringify(ar_plane2['vihicleId']))}<br/>
            비행시간: {JSON.parse(JSON.stringify(ar_plane2['depPlandTime']))} - {JSON.parse(JSON.stringify(ar_plane2['arrPlandTime']))} <br/>
            요금: {JSON.parse(JSON.stringify(ar_plane2['economyCharge']))}<br/>
            </div>
          </Button>
          <Button onClick={(() => setArrAirplane(ar_plane3))} >
            <div >
            비행편: {JSON.parse(JSON.stringify(ar_plane3['vihicleId']))}<br/>
            비행시간: {JSON.parse(JSON.stringify(ar_plane3['depPlandTime']))} - {JSON.parse(JSON.stringify(ar_plane3['arrPlandTime']))} <br/>
            요금: {JSON.parse(JSON.stringify(ar_plane3['economyCharge']))}<br/>
            </div>
          </Button>

          <br/>도착 비행편 {arrAirplane['vihicleId']} 이 선택되었습니다 
          {window.localStorage.setItem("depplane", result.depAirplane)}
          {window.localStorage.setItem("arrplane", result.arrAirplane)}
        </div>
        <h1>Accomodation</h1>
        <div name="tourist">
      
          <Button onClick={() => setAccomodation(acc_1)}>
          <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url()`,
                // marginTop: '-30px'
              }}/>
            이름 : {JSON.parse(JSON.stringify(acc_1['name']))}<br/>
            주소 : {JSON.parse(JSON.stringify(acc_1['loc']))}<br/>
            박당가격 : {JSON.parse(JSON.stringify(acc_1['price']))} ₩/박 <br/>
          </Button>
          <Button onClick={() => setAccomodation(acc_2)}>
            이름 : {JSON.parse(JSON.stringify(acc_2['name']))}<br/>
            주소 : {JSON.parse(JSON.stringify(acc_2['loc']))}<br/>
            박당가격 : {JSON.parse(JSON.stringify(acc_2['price']))} ₩/박 <br/>
          </Button>
          <Button onClick={() => setAccomodation(acc_3)}>
            이름 : {JSON.parse(JSON.stringify(acc_3['name']))}<br/>
            주소 : {JSON.parse(JSON.stringify(acc_3['loc']))}<br/>
            박당가격 : {JSON.parse(JSON.stringify(acc_3['price']))} ₩/박 <br/>
          </Button>
          <br/> {accomodation['name']}이(가) 선택되었습니다 
          {window.localStorage.setItem("acc", result.accomodation)}
        
        </div>
        <h1>Activity</h1>
        <div name="activity">
        <br/>Activity와 Olle를 여행 예정 날짜인 {day}일에 맞추어 선택해 주세요
        {window.localStorage.setItem("day", day)}
        <br/>
          <Button onClick={() => setActivity1(act_1)}>
            이름 : {JSON.parse(JSON.stringify(act_1['name']))}<br/>
            영업시간 : {JSON.parse(JSON.stringify(act_1['start_business_time']))} - {JSON.parse(JSON.stringify(act_1['end_business_time']))}<br/>
            체험시간 : {JSON.parse(JSON.stringify(act_1['time']))}<br/>
            주소 : {JSON.parse(JSON.stringify(act_1['loc']))}<br/>
            가격 : ₩{JSON.parse(JSON.stringify(act_1['price']))}<br/>
          </Button>
          <Button onClick={() => setActivity1(act_2)}>
            이름 : {JSON.parse(JSON.stringify(act_2['name']))}<br/>
            영업시간 : {JSON.parse(JSON.stringify(act_2['start_business_time']))} - {JSON.parse(JSON.stringify(act_2['end_business_time']))}<br/>
            체험시간 : {JSON.parse(JSON.stringify(act_2['time']))}<br/>
            주소 : {JSON.parse(JSON.stringify(act_2['loc']))}<br/>
            가격 : ₩{JSON.parse(JSON.stringify(act_2['price']))}<br/>
          </Button>
          <Button onClick={() => setActivity1(act_3)}>
            이름 : {JSON.parse(JSON.stringify(act_3['name']))}<br/>
            영업시간 : {JSON.parse(JSON.stringify(act_3['start_business_time']))} - {JSON.parse(JSON.stringify(act_3['end_business_time']))}<br/>
            체험시간 : {JSON.parse(JSON.stringify(act_3['time']))}<br/>
            주소 : {JSON.parse(JSON.stringify(act_3['loc']))}<br/>
            가격 : ₩{JSON.parse(JSON.stringify(act_3['price']))}<br/>
          </Button>

          <Button onClick={() => setActivity2(act_4)}>
            이름 : {JSON.parse(JSON.stringify(act_4['name']))}<br/>
            영업시간 : {JSON.parse(JSON.stringify(act_4['start_business_time']))} - {JSON.parse(JSON.stringify(act_4['end_business_time']))}<br/>
            체험시간 : {JSON.parse(JSON.stringify(act_4['time']))}<br/>
            주소 : {JSON.parse(JSON.stringify(act_4['loc']))}<br/>
            가격 : ₩{JSON.parse(JSON.stringify(act_4['price']))}<br/>
          </Button>
          <Button onClick={() => setActivity2(act_5)}>
            이름 : {JSON.parse(JSON.stringify(act_5['name']))}<br/>
            영업시간 : {JSON.parse(JSON.stringify(act_5['start_business_time']))} - {JSON.parse(JSON.stringify(act_5['end_business_time']))}<br/>
            체험시간 : {JSON.parse(JSON.stringify(act_5['time']))}<br/>
            주소 : {JSON.parse(JSON.stringify(act_5['loc']))}<br/>
            가격 : ₩{JSON.parse(JSON.stringify(act_5['price']))}<br/>
          </Button>
          <br/>Activity {activity1['name']} {activity2['name']} 이 선택되었습다
          {window.localStorage.setItem("activty1", result.activity1)}
          {window.localStorage.setItem("activty2", result.activity2)}
          </div>
        {/* <h1>olle</h1>
        <div name="olle">
          <Button onClick={() => setOlle(olle_sever[1][0])}>
            이름 : {JSON.stringify(olle_sever[1][0]['name'])}<br/>
            소개 : {JSON.stringify(olle_sever[1][0]['explanation'])}<br/>
          </Button>
      
      </div>
      <br/>olle {olle['name']}  선택되었습다 */}
        </div>
        <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <button onClick={()=>{dispatch(recommandList({
              "date1": localStorage.getItem("start"),
              "date2": localStorage.getItem("end"),
              "start": localStorage.getItem("airstart"),
              "Number": localStorage.getItem("number"),
              "user": 5,
              "mbti": "iiesnsfttppp",
              "relationship": localStorage.getItem("relationship"),
              "plane": [localStorage.getItem("depplane"), localStorage.getItem("arrplane")],
              "acc": localStorage.getItem("acc"),
              "activty": [localStorage.getItem("activty1"),localStorage.getItem("activty2")],
              "olle": []
          }))}}>저장</button>
      <Button 
      onClick={()=>{navigate("/rec/reservation")}}
        // {window.localStorage.setItem("plane", [a.depAirplane, a.arrAirplane]), window.localStorage.setItem("acc", a.accomodation), window.localStorage.setItem("activty", [a.activity1, a.activity2])}}
        // component={Link}
        // to="/rec/reservation"
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      //   onClick={()=>{dispatch(recommandList({
      //     "date1": localStorage.getItem("start"),
      //     "date2": localStorage.getItem("end"),
      //     "start": localStorage.getItem("airstart"),
      //     "Number": localStorage.getItem("number"),
      //     "user": 5,
      //     "mbti": "iiesnsfttppp",
      //     "relationship": localStorage.getItem("relationship"),
      //     "plane": [localStorage.getItem("depplane"), localStorage.getItem("arrplane")],
      //     "acc": localStorage.getItem("acc"),
      //     "activty": [localStorage.getItem("activty1"),localStorage.getItem("activty2")],
      //     "olle": []
      // }))}}
      // href="/rec/reservation"
      >
      
        <Typography variant="h4" component="span">
          여행 일정 확인하기
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        버튼을 누르시면 일정 페이지로 이동합니다.
      </Typography>
      {/* <Box
        component="img"
        src="/static/themes/onepirate/producBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      /> */}
    </Container>
       
    </>
  );
}












