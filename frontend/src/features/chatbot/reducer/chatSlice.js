import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { chatAPI } from 'features/chatbot'

// const ANSWER = async (x) => {
//   //  const res = await chatbotAPI.findAnswer(x)
//   console.log(`넘겨받은 페이로드: ${x}`)
//   //  const res = await x
//   //  return res.data
// }
const ANSWER = async (x) => {
  const res = await chatAPI.chatAnswer(x)
  return res.data
}

const TOUR = async (x) => {
  const res = await chatAPI.tourData(x)
  console.log(`아아아아아아앙 들어온 값이야 : ${JSON.stringify(res.data)}`)
  return res.data
}

const WITH = async(x) =>{
  const res = await chatAPI.with_who(x)
  return res.data
}

export const tour = createAsyncThunk('/tour', TOUR)
export const answer = createAsyncThunk('/chatbot', ANSWER)
export const withWho = createAsyncThunk('/chat', WITH)


const chatSlice = createSlice({
  name: 'chat',
  initialState: {

    tourState:{with:''},
    answersState:{},
    dataState: [],
    // dataState: {departure_plane: [], arrival_plane: [], accommodation: [], day: [], activity:[], olle:[]},
    // { "date1": localStorage.getItem("start"),
    //   "date2": localStorage.getItem("end"),
    //   "start": localStorage.getItem("airstart"),
    //   "Number": localStorage.getItem("number"),
    //   "user": 12,
    //   "relationship": localStorage.getItem("relationship")}

    // 아래 세개는 필수
    type: '',
    keyword: '',
    params: {},
    departure_plane:[],
  },
  reducers: {}, // 필수
  extraReducers: {

    [tour.fulfilled]: (state, action) => {
      console.log(`redux data: ${JSON.stringify(action.payload[0])}`)
      state.dataState = [...state.dataState, action.payload]

    // [tour.fulfilled]: (state, action) => {
    //   console.log(`redux data: ${JSON.stringify(action.payload[0])}`)
    //   const dataState = action.payload
    //   state.departure_plane = dataState.departure_plane
    //   state.
    
     // console.log(`redux data: ${JSON.stringify(action.payload[2])['accommodation']}`)
     // state.dataState = {...state.dataState, departure_plane: JSON.stringify(action.payload)[0],
     // arrival_plane:JSON.stringify(action.payload)[1], accommodation: JSON.stringify(action.payload)[2], day: JSON.stringify(action.payload)[3],
     // activity:JSON.stringify(action.payload)[4], olle:JSON.stringify(action.payload)[5] }
    },

    [answer.fulfilled]: ( state, action ) => { 
      console.log(`redux data: ${action.payload}`)
      state.answersState = {...state.answersState, [action.payload['queryid']]:action.payload['chat']}
      // state.answersState = action.payload
    },
    
    [withWho.fulfilled]: (state, action) => {
      console.log(`redux data: ${action.payload}`)
      state.tourState = action.payload
    }
  }

})
export const currentDataState = state => state.chat.dataState
export const currentAnswersState = state => state.chat.answersState
export const currentTourState = state => state.chat.tourState
// export const currentBotParam = state => state.bot.param

export default chatSlice.reducer;