import React, { useEffect, useState, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { answer, tour, withWho } from "../reducer/chatSlice"
import { useNavigate } from "react-router-dom"

// import { DateRange } from 'react-date-range';
// import { Component } from 'react';

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { DateRangePicker } from "react-date-range";
// import { currentTourState } from "../reducer/chatSlice";
// import { StyleSheetConsumer } from "styled-components";
// import { toBeRequired } from "@testing-library/jest-dom";
// import { tour, setTour } from "./Chat";
// import { SendButton } from "@chatscope/chat-ui-kit-react";


export function WithWho(props){
  const [ text, setText] = useState('')
  const text_2 = useSelector(state=>state.chatSlice.tourState['with'])
  console.log(`text : ${text_2}`)
  const dispatch = useDispatch()
    console.log(props.steps)
    useEffect(()=>{
      props.steps.travel_with.message != "해당 없음"
      ? <>{setText(props.steps.travel_with.message)}
        {window.localStorage.setItem("relationship", text)}</>
      // : setText(props.steps.userinput_travel_with_other.value)
      : dispatch(withWho({'sentence':props.steps.userinput_travel_with_other.value}))
    },[text])
    // window.localStorage.setItem("relationship", text)
    // console.log(localStorage.getItem("relationship"))
      return (
        <>
        {props.steps.travel_with.message == "혼자"
        ? <div>홀로 떠나는 여행이시군요.</div>
        : <div>{text !='' ? text : <>{text_2}{window.localStorage.setItem("relationship", text_2)}</>}와 함께 가시는 군요.</div>}
        </>
      );
}

export function DATE(props){
  const a = new Date()
  return(
    <div>
    출발 일 : <input id="start" type="date" min={`${a.getFullYear()}-${('0'+ (a.getMonth()+1)).slice(-2)}-${('0'+a.getDate()).slice(-2)}`}/>
    <br/>
    도착 일 : <input id="end" type="date" min={`${a.getFullYear()}-${('0'+ (a.getMonth()+1)).slice(-2)}-${('0'+a.getDate()).slice(-2)}`}/>
    <button onClick={()=>{
      // setTour({...tour, "start":document.getElementById("start").value, "end":document.getElementById("end").value})
      window.localStorage.setItem("start", document.getElementById("start").value)
      window.localStorage.setItem("end", document.getElementById("end").value)
      // console.log(localStorage.getItem("start"), localStorage.getItem("end"))
      props.triggerNextStep({trigger: 'q_where'})
      //useDispatch(Send(
      //  {
      //    "id": "token Key",
      //    "start": localStorage.getItem("start"),
      //    "end": localStorage.getItem("end")
      //</div>  }
      //))
    }}>확인</button>
    </div>)
}

export function CheckDate(props){
  return(
    <div onChange={()=>{props.triggerNextStep({trigger : 'check_check'})}}>
      이번 여행은
      {localStorage.getItem("relationship") == "혼자"
        ? <p>나 홀로 떠나는 여행으로,</p>
        : <>{localStorage.getItem("number")==1
            ? <p>{localStorage.getItem("relationship")}와(과) 함께 하는 여행으로,</p>
            : <p>{localStorage.getItem("relationship")}와(과) 함께 {localStorage.getItem("number")}명에서 떠나는 여행으로, </p>}</>
        // : <p>{localStorage.getItem("number")}명의 {localStorage.getItem("relationship")}와(과) 함께 하는 여행으로,</p>
      }
      {localStorage.getItem("start")}에 {localStorage.getItem("airstartword")}에서 출발하여, {localStorage.getItem("end")}까지의 일정 맞나요?
      
    </div>
    
  );
}


export function End(props){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(props.steps)
  useEffect(()=>{
    dispatch(tour({
        "date1": localStorage.getItem("start"),
        "date2": localStorage.getItem("end"),
        "start": localStorage.getItem("airstart"),
        "Number": localStorage.getItem("number"),
        "user": 5,
        "mbti": "iiesnsfttppp",
        "relationship": localStorage.getItem("relationship")
    }))},[]
  )
  console.log({ "date1": localStorage.getItem("start"),
  "date2": localStorage.getItem("end"),
  "start": localStorage.getItem("airstart"),
  "Number": localStorage.getItem("number"),
  "user": JSON.parse(window.localStorage.getItem("user_id")),
  "mbti": JSON.parse(window.localStorage.getItem("user_mbti")),
  "relationship": localStorage.getItem("relationship")})
  return(
    <>
      당신에게 맞는 여행을 추천해 드릴께요.
      <br/>
      <button onClick={()=>{navigate("/recommand");}}>출바아알!</button>
    </>
  )
}


export function Ask(props){
  const dispatch = useDispatch()
  const [ text, setText ] = useState('')
  const key = props.previousStep.key
  console.log(props.previousStep.key)
  console.log(props)
  const text_2 = useSelector((state)=>state.chatSlice.answersState['chat'])
  const botAnswer = {[key]:useSelector((state)=>state.chatSlice.answersState[key])}
  useEffect(()=>{
    setText(props.steps.question.value)
    dispatch(answer({'key': props.previousStep.key,'value':props.steps.question.value}))
  },[text])
    return (
      <>
      {text == "여행 예약하기" 
      ?<div>여행을 예약하시려면 '여행 예약 시작' 버튼을, <br/> 상담을 하시려면 '취소' 버튼을 눌러주세요.
      <button onClick={() => props.triggerNextStep({trigger: 'welcome_reservation'})} style={{background:'#bce7d6', margin: '3px'}} >여행 예약 시작</button>
      {/* <button onClick={() => props.triggerNextStep({trigger: 'welcome_reservation'})} 
        style={{border:"0.5px", background:'#bce7d6', borderRadius: "9px", margin: "1em 2em 5px 2em", cursor: "pointer", boxShadow: "1px 1px 3px 1px #cbbab0"}} >
        여행 예약</button> */}
        <button onClick={() => props.triggerNextStep({trigger: 'welcome_2'})} style={{background:'#bce7d6', margin: '3px'}} >취소</button></div>
        // :<div>{text_2}</div>}
        :<div>{botAnswer[key]}</div>}
      </>
    );
}