import { positions } from '@mui/system';
import { tour } from 'features/chatbot/reducer/chatSlice';
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { ProductCategories } from "..";
import { useEffect, useState, } from "react"
import DeparturePlaneCategories from './DeparturePlaneCategories';

export default function Product() {
   const dispatch = useDispatch()
   //const departure_plane = useSelector(state=>state.chatSlice.dataState['accommodation'])
   const recommand = useSelector(state=>state.chatSlice.dataState[0])
   const day = recommand[0]['day']
   const departure_plane = recommand[1]
   const arrival_plane = recommand[2]
   const accommodation_sever = recommand[3]
   const activity_sever = recommand[4]
   // const olle = recommand[5]
   console.log(`departure_plane==========${JSON.stringify(departure_plane[0])}`)
   console.log(`day==========${JSON.stringify(day)}`)
    // useEffect(()=>{
       //  dispatch(tour({
          //   "date1": localStorage.getItem("start"),
       //      "date2": localStorage.getItem("end"),
    //         "start": localStorage.getItem("airstart"),
    //         "Number": localStorage.getItem("number"),
    //         "user": 2,
    //         "mbti": "IEESSNFFFJJJ",
    //         "relationship": localStorage.getItem("relationship")
    //     }))},[]
   // )
     // ---------------------------------------- 토오통토토통
  const [depAirplane, setDepAirplane] = useState("");
  const [arrAirplane, setArrAirplane] = useState("");
  const [accomodation, setAccomodation] = useState("");
//   const [tourist, setTourist] = useState("");
  const [activity, setActivity] = useState([]);
  const [olle, setOlle] = useState("");
  const a = {
    plane: [depAirplane, arrAirplane],
    accomodation: accomodation,
   //  tourist: tourist,
    activity: activity,
    olle: olle,
  };
  console.log(a);
         return (<>
         <h1>Departure Flight</h1>
            <div name="departure_plane">
               <button onClick={() => setDepAirplane(JSON.parse(departure_plane[0]['id']))}>{JSON.stringify(departure_plane[0]['id'])}</button>
               <button onClick={() => setDepAirplane(JSON.parse(departure_plane[1]['id']))}>{JSON.stringify(departure_plane[1]['id'])}</button>
               <button onClick={() => setDepAirplane(JSON.parse(departure_plane[2]['id']))}>{JSON.stringify(departure_plane[2]['id'])}</button>
            </div>
            <div name="arrival_plane">
               <button onClick={() => setArrAirplane(JSON.parse(arrival_plane[0]['id']))}>{JSON.stringify(arrival_plane[0]['id'])}</button>
               <button onClick={() => setArrAirplane(JSON.parse(arrival_plane[1]['id']))}>{JSON.stringify(arrival_plane[1]['id'])}</button>
               <button onClick={() => setArrAirplane(JSON.parse(arrival_plane[2]['id']))}>{JSON.stringify(arrival_plane[2]['id'])}</button>
            </div>
            <div align="center">
               {/* <h1>{JSON.stringify(departure_plane[0][0]['departure_plane'][0]['id'])}</h1> */}
               <h1>{JSON.stringify(day)}</h1>
               <h1>{JSON.stringify(departure_plane[0]['id'])}</h1>
               <h1>{JSON.stringify(arrival_plane[0]['id'])}</h1>
               <h1>{JSON.stringify(accommodation_sever[0]['id'])}</h1>
               <h1>{JSON.stringify(activity_sever[0]['id'])}</h1>
               /
               <h1>Departure Flight</h1>
               <DeparturePlaneCategories/>
               <h1>Arrival Flight</h1>
               <ProductCategories/>
               <h1>Accomodation</h1>
               <ProductCategories/>
               <h1>Tourist Site</h1>
               <ProductCategories/>
               <h1>Activity</h1>
               <ProductCategories/>
               <h1>Shopping</h1>
               <ProductCategories/>
            </div>
         </>);
}