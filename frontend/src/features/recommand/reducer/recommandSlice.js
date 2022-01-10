import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { recommandAPI } from '..';


const RECOMMANDLIST = async (x) => {
    console.log(`서버 들어 가고 있다!!!!!!!!!!! ${JSON.stringify(x)} `)
    const res = await recommandAPI.recommandList(x)
    console.log(`아아아아아아앙 들어온 값이야 : ${JSON.stringify(res.data)}`)
    return res.data
  }
  
  const RECOMMANDSAVE = async (x) => {
    console.log('서버 들어 가고 있다!!!!!!!!!!!')
    const res = await recommandAPI.recommandSave(x)
    console.log(`아아아아아아앙 들어온 값이야 : ${JSON.stringify(res.data)}`)
    console.log('지혜한테 간다!!!!!!!!!!!!!!')
    // const payment = await recommandAPI.recommandSave(res.data[0])
    // console.log(`지혜한테 왔다!!!!!!!!!!!!!! : ${JSON.stringify(payment.data)}`)
    return res.data
  }
  
  
  export const recommandList = createAsyncThunk('/recommand', RECOMMANDLIST)
  export const recommandSave = createAsyncThunk('/rec/reservation', RECOMMANDSAVE)
  

const recommandSlice = createSlice({
  
    name: 'recommand',
    initialState: {
  
      recommandState:[],
      saveState:[],
    //   dataState: [],
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
      params: {}
    },
    reducers: {}, // 필수
    extraReducers: {
  
      [recommandList.fulfilled]: (state, action) => {
        console.log(`redux data_ recommandList ::::::::::::: ${JSON.stringify(action.payload)}`)
        state.recommandState = [...state.recommandState, action.payload]
        // document.location.href('/rec/reservation')
        // navigate("/rec/reservation")
        // window.location.assign(`/rec/reservation`)
       // console.log(`redux data: ${JSON.stringify(action.payload[2])['accommodation']}`)
       // state.dataState = {...state.dataState, departure_plane: JSON.stringify(action.payload)[0],
       // arrival_plane:JSON.stringify(action.payload)[1], accommodation: JSON.stringify(action.payload)[2], day: JSON.stringify(action.payload)[3],
       // activity:JSON.stringify(action.payload)[4], olle:JSON.stringify(action.payload)[5] }
      },
  
      [recommandSave.fulfilled]: ( state, action ) => { 
        // console.log(`redux data: ${action.payload}`)
        console.log(`redux data: ${JSON.stringify(action.payload[0])}`)
        console.log(`redux data 값이야!!!!  ${JSON.stringify(action.payload)}`)
        state.saveState = [...state.saveState, action.payload]
        // state.answersState = {...state.answersState, [action.payload['queryid']]:action.payload['chat']}
        // state.answersState = action.payload
      },
      

    //   [withWho.fulfilled]: (state, action) => {
    //     console.log(`redux data: ${action.payload}`)
    //     state.tourState = action.payload
    //   }
    }
  
  })
  export const currentRecommandState = state => state.recommand.recommandState
  export const currentSaveState = state => state.recommand.saveState
//   export const currentTourState = state => state.chat.tourState
  // export const currentBotParam = state => state.bot.param
  
  export default recommandSlice.reducer;