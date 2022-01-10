import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "..";

// const JOIN = async (x) => {
//   const res = await userAPI.join(x);
//   return res.data;
// };
// const LOGIN = async (x) => {
//   const res = await userAPI.login(x);
//   console.log("login fulfilled22222");
//   return res.data;
// };
// const MBTI = async (x) => {
//   const res = await userAPI.mbti(x);
//   console.log(" 값이 돌아온다 뿅뿅뿅 " + JSON.stringify(res.data));
//   return res.data;
// };
// const USERMODIFY = async (x) => {
//   const res = await userAPI.userModify(x);
//   console.log(" 값이 돌아온다 뿅뿅뿅 " + JSON.stringify(res.data));
//   return res.data;
// };
// const LIST = async ({ page }) => {
//   const res = await userAPI.list(page);
//   return res.data;
// };
// const EXIST = async (x) => {
//   const res = await userAPI.exist(x)
//   return res.data
// }
// const DETAIL = async (x) => {
//   const res = await userAPI.detail()
//   return res.data
// }
// const LIST = async ({page}) => {
//   const res = await userAPI.list(page)
//   return res.data
// }
// const MODIFY = async (x) => {
//   const res = await userAPI.modify(x)
//   return res.data
// }

//Dashborard
const TOTALPROFIT = async () => {
  // console.log("값 들어간다11111");
  const res = await adminAPI.totalProfit();
  // console.log("값 돌아왔다22222");
  return res.data;
};

const LASTSIXMONTH = async (x) => {
    console.log("값 들어간다11111");
  const res = await adminAPI.lastSixMonth(x)
  console.log("값 돌아왔다22222");

  return res.data
}

//Dashborard
export const totalProfit = createAsyncThunk("admin/dashboard/totalprofit",TOTALPROFIT);
export const lastSixMonth = createAsyncThunk("admin/dashboard/lastsixmonth", LASTSIXMONTH);
// console.log("login fulfilled");
// export const login = createAsyncThunk("users/login", LOGIN);
// export const mbti = createAsyncThunk("users/modify", MBTI); //mbti
// // console.log("login fulfilled");
// export const userModify = createAsyncThunk("users/update", USERMODIFY); //mbti
// export const list = createAsyncThunk("users/list", LIST);
// export const exist = createAsyncThunk('user/exist', EXIST)
// export const detail = createAsyncThunk('users/one', DETAIL)
// export const list = createAsyncThunk('users/list', LIST)
// export const modify = createAsyncThunk('users/modify', MODIFY)
// export const remove = createAsyncThunk('users/remove', REMOVE)

// const changeNull = (ls) => {
//   for (const i of ls) {
//     document.getElementById(i).value = "";
//   }
// };

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    totalProfitState: {
      price__sum: "",
    },
    lastSixMonthState:{
    },

    //     usersState: [],
    type: "",
    keyword: "",
    params: {},
  },
  reducers: {},
  extraReducers: {
    //dashboard
    [totalProfit.fulfilled]: (state, action) => {
      // console.log(`redux data: ${action.payload["price__sum"]}`); 
      state.totalProfitState = action.payload;
    },
    [lastSixMonth.fulfilled]: (state, action) => {
      console.log(`redux data: ${action.payload}`);
      console.log(`페이로드의 영번째를 알아보자: ${JSON.stringify(action.payload)}`);
      state.lastSixMonthState = action.payload;
    },
    //     [join.fulfilled]: (state, action) => {
    //       state.userState = action.payload; // 전체 리덕스 즉 스토어에서.userState
    //       // window.location.href = `/joinDetail`;
    //     },

    //     [login.fulfilled]: (state, { meta, payload }) => {
    //       console.log("토큰: " + JSON.stringify(payload.token));
    //       console.log("데이터: " + JSON.stringify(payload.mbti));
    //       if (payload.token !== "" && payload.mbti != null) {
    //         alert(`${payload.username}님 환영합니다`);
    //         window.localStorage.setItem("sessionUser", JSON.stringify(payload)); // window 전역

    //         window.location.href = `/`;
    //         // window.location.href = `/users/detail`; - 이전페이지로 이동 가능
    //         // location.replace('abc.php') - 이전페이지로 이동 불가능
    //       } else if (payload.token !== "" && payload.mbti == null) {
    //         alert(
    //           `${payload.username}님을 위한 개인 맞춤 분석을 위한 페이지로 이동합니다.`
    //         );
    //         window.localStorage.setItem("sessionUser", JSON.stringify(payload)); // window 전역
    //         window.location.href = `/mbti/home`;
    //       } else if (payload.token === "" && payload.mbti == null) {
    //         alert("아이디, 비번 오류로 로그인 실패");
    //         changeNull(["username", "password"]);
    //         // } else {
    //         //   alert("로그인 실패 사이트로 문의해주세요");
    //       } else if (payload.token === "" && payload.mbti !== null) {
    //         alert("에이 요 웰컴브로 사이트가 이상행 깔깔깔");
    //         changeNull(["username", "password"]);
    //       }
    //     },
    //     [mbti.fulfilled]: (state, action) => {
    //       // localStorage.setItem("sessionUser", JSON.stringify(action.payload));
    //       window.location.href = "/home";
    //     },

    //     [userModify.fulfilled]: (state, action) => {
    //       // localStorage.setItem('sessionUser', JSON.stringify(action.payload))
    //       console.log("수정된 상태를 확인해보쟙쟙쟙 + ");
    //       // window.location.href = "/";
    //     },
    //     [list.fulfilled]: (state, { meta, payload }) => {
    //       state.usersState = payload;
    //     },

    // [detailPage.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload },
    // [listPage.fulfilled]: ( state, {meta, payload} ) => {
    //      state.userState = payload },

    // -----------------------------------
    // [exist.fulfilled]: ( state, action ) => {
    //     if(action.payload){window.location.href='/users/add'}
    //     else{ alert(`사용가능함`) }
    //   },
    // [detail.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload},
    // [list.fulfilled]: ( state, {meta, payload} ) => {
    //     state.usersState = payload },

    // [modify.fulfilled]: ( state, action ) => {
    //     localStorage.setItem('sessionUser', JSON.stringify(action.payload))
    //     window.location.href = "/users/detail"
    // },
    // [remove.fulfilled]: () => {
    //     window.localStorage.removeItem("sessionUser")
    //     window.localStorage.clear();
    //     window.location.href = "/home"
    // },
  },
});

export const currentTotalState = (state) => state.admin.totalProfitState;
// export const currentUserState = (state) => state.users.userState;
// export const currentUsersState = (state) => state.users.usersState;
// export const currentUserParam = (state) => state.user.param;
export default adminSlice.reducer;
