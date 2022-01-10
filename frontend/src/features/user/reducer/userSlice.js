import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "..";

const JOIN = async (x) => {
  const res = await userAPI.join(x);
  return res.data;
};
const LOGIN = async (x) => {
  const res = await userAPI.login(x);
  console.log("login fulfilled22222");
  return res.data;
};
const MBTI = async (x) => {
  const res = await userAPI.mbti(x);
  console.log(" 값이 돌아온다 뿅뿅뿅 " + JSON.stringify(res.data));
  return res.data;
};
const USERMODIFY = async (x) => {
  const res = await userAPI.userModify(x);
  console.log(" 값이 돌아온다 뿅뿅뿅 " + JSON.stringify(res.data));
  return res.data;
};
// const LIST = async ({ page }) => {
//   console.log("값을 보냈다.")
//   const res = await userAPI.list(page);
//   console.log("값이 왔다.")
//   return res.data;
// };
const LIST = async (x) => {
  console.log("값을 보냈다.")
  const res = await userAPI.list(x);
  console.log("값이 왔다.")
  return res.data;
};
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
// const REMOVE = async (x) => {
//   const res = await userAPI.remove(x)
//   return res.data
// }

export const join = createAsyncThunk("users/join", JOIN);
export const login = createAsyncThunk("users/login", LOGIN);
export const mbti = createAsyncThunk("users/modify", MBTI); //mbti
// console.log("login fulfilled");
export const userModify = createAsyncThunk("users/update", USERMODIFY); //mbti
export const list = createAsyncThunk("users/list", LIST);

// export const exist = createAsyncThunk('user/exist', EXIST)
// export const detail = createAsyncThunk('users/one', DETAIL)
// export const list = createAsyncThunk('users/list', LIST)
// export const modify = createAsyncThunk('users/modify', MODIFY)
// export const remove = createAsyncThunk('users/remove', REMOVE)

const changeNull = (ls) => {
  for (const i of ls) {
    document.getElementById(i).value = "";
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    userState: {
      userId: "",
      userName: "",
      password: "",
      checkPassword: "",
      name: "",
      lastName: "",
      firstName: "",
      phoneNumber: "",
      email: "",
      address: "",
      passport: "",
      birth: "",
      gender: "",
      cardCompany: "",
      cardNumber: "",
      regDate: "",
      token: "",
      mbti: "",
      mbti_list: "",
    },
    usersState: [],
    type: "",
    keyword: "",
    params: {},
  },
  reducers: {},
  extraReducers: {
    [join.fulfilled]: (state, action) => {
      state.userState = action.payload; // 전체 리덕스 즉 스토어에서.userState
      // window.location.href = `/joinDetail`;
    },

    [login.fulfilled]: (state, { meta, payload }) => {
      console.log("토큰: " + JSON.stringify(payload.token));
      console.log("데이터: " + JSON.stringify(payload.mbti));
      if (payload.token !== "" && payload.mbti != null) {
        alert(`${payload.userName}님 환영합니다`);
        window.localStorage.setItem("sessionUser", JSON.stringify(payload)); // window 전역
        window.localStorage.setItem("userId", JSON.stringify(payload.userId));
        window.localStorage.setItem("user_mbti", JSON.stringify( payload.mbti));

        window.location.href = `/`;
        // window.location.href = `/users/detail`; - 이전페이지로 이동 가능
        // location.replace('abc.php') - 이전페이지로 이동 불가능
      } else if (payload.token !== "" && payload.mbti == null) {
        alert(
          `${payload.userName}님을 위한 개인 맞춤 분석을 위한 페이지로 이동합니다.`
        );
        window.localStorage.setItem("sessionUser", JSON.stringify(payload)); // window 전역
        window.location.href = `/mbti/home`;
      } else if (payload.token === "" && payload.mbti == null) {
        alert("아이디, 비번 오류로 로그인 실패");
        changeNull(["username", "password"]);
        // } else {
        //   alert("로그인 실패 사이트로 문의해주세요");
      } else if (payload.token === "" && payload.mbti !== null) {
        alert("에이 요 웰컴브로 사이트가 이상행 깔깔깔");
        changeNull(["username", "password"]);
      }
    },
    [mbti.fulfilled]: (state, action) => {
      // localStorage.setItem("sessionUser", JSON.stringify(action.payload));
      window.location.href = "/home";
    },

    [userModify.fulfilled]: (state, action) => {
      // localStorage.setItem('sessionUser', JSON.stringify(action.payload))
      console.log("수정된 상태를 확인해보쟙쟙쟙 + ");
      // window.location.href = "/";
    },
    [list.fulfilled]: (state, { meta, payload }) => {
      state.usersState = payload;
    },

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

export const currentUserState = (state) => state.users.userState;
export const currentUsersState = (state) => state.users.usersState;
export const currentUserParam = (state) => state.user.param;
export default userSlice.reducer;
