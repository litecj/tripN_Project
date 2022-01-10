import ChatBot from "react-simple-chatbot";
import React from "react";
import { ThemeProvider } from "styled-components";
// import { useDispatch } from "react-redux";
// import { initStatus } from "../reducer/chatSlice";
// import CalendarComponent, { AlertMessage, Ask, CheckStatus, ResetMessage, WithWho, DatePickerComponent, DateP, DATE, CheckDate, End } from "./ChatModules";
import {WithWho, DATE, CheckDate, End }from "./ChatModules";
// import styled from "styled-components";




export default function Chat() {
  // const animal_list = ['강아지', '개', '멍멍이', '애견동물', '반려동물', '야옹이', '고슴도치', '너구리', '사막여우', '북극여우', '여우', '스컹크', '라쿤',
  //                    '고양이','수달', '미어캣', '햄스터', '다람쥐', '하늘다람쥐', '쥐', '생쥐', '기니피그', '카피바라', '새', '구관조', '참새', '닭',
  //                    '병아리', '오리','거위', '비둘기', '앵무새', '자라', '거북', '거북이', '도마뱀', '뱀', '개구리', '장수풍뎅이', '사슴벌레', '장수풍뎅이', '사슴벌레', '토끼']
  // const preferred_list = ['선생님', '은사님', '중요한 사람', '소중한 사람', '귀하신 분', '고마운 사람']
  // const club_list = ['동호회', '친구 가족', '지인', '동창', '동창 가족 모임', '가족 모임']
  // const company_list = ['회사동료', '동료', '직장동료', '직장친구', '직장상사', ]
  
  return (
    <ThemeProvider
      theme={{
        background: "#f5f8fb", 
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
        style={{textAlign:"left"}}
        steps={[
          {
            id: 'welcome',
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
            trigger: 'start'
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
  );
};

