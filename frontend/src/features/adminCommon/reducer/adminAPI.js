import axios from "axios";

const SERVER = "http://192.168.36.51:8000";

const headers = {
  "Content-type": "application/json",
  Authorization: "JWT fefege..", // 일종의 토큰 블라블라로 바꿔준다
};

//dashboard
const totalProfit = () => axios.get(`${SERVER}/api/ledger/profit`)
const lastSixMonth = () => axios.get(`${SERVER}/api/reservation/count`)

// const join = (x) =>
//   axios.post(`${SERVER}/users/join`, JSON.stringify(x), { headers });
// const login = (x) =>
//   axios.post(`${SERVER}/users/login`, JSON.stringify(x), { headers });
//   const exist = x => axios.get(`${SERVER}/users/exist/${x}`)
//   const detail = x => axios.get(`${SERVER}/users/${x.userId}`) 
//   const list = x => axios.get(`${SERVER}/users/list/${x}`)
//   const modify = x => axios.put(`${SERVER}/users`, JSON.stringify(x),{headers})
//   const remove = x => axios.delete(`${SERVER}/users/${x}`,JSON.stringify(x),{headers})

export default {
  totalProfit,
  lastSixMonth,
  // login,
  // exist,
  // detail,
  // list,
  // modify,
  // remove
};