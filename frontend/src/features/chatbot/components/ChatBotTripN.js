import ChatBot from "react-simple-chatbot";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Ask, CheckDate, DATE, End, WithWho } from "./ChatModules";
import styles from "../../chatbot/styles/chatbot.module.css";
import stoneBrother from "../data/돌하르방.png";
import { Container } from "@mui/material";

export default function ChatBotTripN() {

  const some = () => {
    var x = document.getElementById("chatbot");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <>
      <button onClick={() => some()}>
        <img className={styles.chatbotIMG} src={stoneBrother} alt="" />
      </button>
      <div
        id="chatbot"
        style={{
          display: "none",
          right: "5vh",
          bottom: "22vh",
          position: "fixed",
          zIndex: "10px",
        }}
      >
    <ThemeProvider
      theme={{
        // background: "#f5f8fb", 
        background: "#fff", 
        fontFamily: "Helvetica Neue",
        headerBgColor: "#81d8cf",
        headerFontColor: "#4f555b",
        headerFontSize: "15px",
        botBubbleColor: "#bce7d6",
        botFontColor: "##4f555b",
        userBubbleColor: "#e3eca6",
        userFontColor: "#4a4a4a",
      }}
    >
      <ChatBot
        headerTitle="TripN"
        recognitionEnable={{ enable: true, lang: 'ko' }}  // 듣기 해서 받아쓰기 
        speechSynthesis={{ enable: true, lang: 'ko' }}
        botAvatar={require("../data/user.png").default}
        userAvatar={require("../data/icon.png").default}
        steps={[
          {
            id: 'welcome',
            message: '안녕하세요~ TripN 입니다. 무엇을 도와드릴까요?',
            trigger: 'question',
          },
          {
            id: 'welcome_2',
            message: '다른 도움이 필요하시면 말씀해 주세요.',
            trigger: 'question',
          },
          { 
            id: "question", 
            user: true,
            trigger: 'answer'
          }, 
          {
            id: 'answer',
            component: <Ask/>,
            asMessage: true,
            trigger: 'question'
          },
          {
            id: 'welcome_reservation',
            message: '당신의 여행을 위해, TripN에게 몇 가지 답을 해주세요.',
            trigger: 'start',
          },
          { 
            id: "start", 
            options: [ 
              { value: "y", label: "질문해 주세요", trigger: "travel" }, 
              { value: "n", label: "싫어요", trigger: "retrun_start" }, 
            ], 
          },
          {
            id: 'retrun_start',
            message: '몇 가지 질문에 답해주시면 당신을 위한 여행 일정이 작성 됩니다.',
            trigger: 'retrun_start1',
          },
          {
            id: 'retrun_start1',
            options: [ 
              { value: "y", label: "질문해 주세요", trigger: "travel" }, 
              { value: "n", label: "예약을 원하지 않아요", trigger: "welcome_2" }, 
            ],
          },
          {
            id: 'travel',
            message: '누구와 함께 여행을 가시나요?',
            trigger: 'travel_with'
          },
          {
            id: 'travel_with',
            options: [ 
              { value: "alone", label: "혼자", trigger: "output_travel_with" }, 
              { value: "family", label: "가족", trigger: "output_travel_with" }, 
              { value: "friend", label: "친구", trigger: "output_travel_with" }, 
              { value: "lover", label: "연인", trigger: "output_travel_with" }, 
              { label: "해당 없음", trigger: "travel_with_other" }, 
            ], 
          },
          {
            id: 'travel_with_other',
            message: '함께 가시는 분의 유형이 없으시면 작성해 주세요.',
            trigger: 'userinput_travel_with_other'
          },
          {
            id: 'userinput_travel_with_other',
            user: true,
            trigger: 'output_travel_with'
          },
          {
            id: 'output_travel_with',
            component: <WithWho/>,
            asMessage: true,
            trigger: 'q_how'
          },
          {
            id:'q_how',
            message:'여행의 인원은 몇명인가요?',
            trigger: 'a_how'
          },
          {
            id:'a_how',
            user: true,
            validator: (value) => {
              if (isNaN(value)) {
              //  return 'value should be a number';
              return '숫자의 값만 입력해 주세요.';
              }
              window.localStorage.setItem("number", value)
              console.log(localStorage.getItem("number"))
              return true;
            },
            trigger: 'q_data',
          },
          {
            id: 'q_data',
            message: '여행의 일정을 알려주세요.',
            trigger: 'choice_data'
          },
          {
            id: 'choice_data',
            component: <DATE/>,
            asMessage: true,
            waitAction: true,
            trigger: 'q_where'
          },
          {
            id:'q_where',
            message: '어느 공항을 이용하시나요?',
            trigger: 'a_where'
          },
          {
            id:'a_where',
            user: true,
            validator: (value) => {
              if(value == null) {
                return '값을 입력해 주세요.';
              }
              if(value.includes("대구")){
                window.localStorage.setItem("airstart", 'TAE')
                window.localStorage.setItem("airstartword", '대구공항')
                console.log(localStorage.getItem("airstart"))
                return true;
              }
              if(value.includes("김해"))
                {window.localStorage.setItem("airstart", 'PUS')
                window.localStorage.setItem("airstartword", '김해공항')
                console.log(localStorage.getItem("airstart"))
                return true;}
              if(value.includes("김포"))
                {window.localStorage.setItem("airstart", 'GMP')
                window.localStorage.setItem("airstartword", '김포공항')
                console.log(localStorage.getItem("airstart"))
                return true;}
              if(value.includes("광주"))
                {window.localStorage.setItem("airstart", 'KWJ')
                window.localStorage.setItem("airstartword", '광주공항')
                console.log(localStorage.getItem("airstart"))
                return true;}
              if(value.includes("청주"))
                {window.localStorage.setItem("airstart", 'CJJ')
                window.localStorage.setItem("airstartword", '청주공항')
                console.log(localStorage.getItem("airstart"))
                return true;}
              else{
                return '공항의 이름에 맞는 값을 입력해주세요.'
              }
            },
            trigger: 'check'
          },
          
          {
            id: 'check',
            component: <CheckDate/>,
            asMessage: true,
            // waitAction: true,
            trigger: 'check_check'
          },
          {
            id: 'check_check',
            options: [ 
              { value: "YES", label: "맞아요", trigger: "go" }, 
              { value: "NO", label: "아니요. 다시 선택하고 싶어요.", trigger: "travel" }, 
            ],
          },
          {
            id: 'go',
            component: <End/>,
            asMessage: true,
            // user: true,
            end: true,
          },
        ]}
        botAvatar={require("../data/user.png").default}
        userAvatar={require("../data/icon.png").default}
      />
    </ThemeProvider>
    </div>
    </>
  );
};