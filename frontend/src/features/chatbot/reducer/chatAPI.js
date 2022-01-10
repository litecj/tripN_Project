// A mock function to mimic making an async request for data
import axios from "axios"
const SERVER = 'http://127.0.0.1:8000/api/'
// const SERVER = 'http://192.168.0.35:8000/api/'

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}

const chatAnswer = x => axios.post(`${SERVER}chat/chat`, JSON.stringify(x), {headers})
//  const getStatus = () => axios.get(`${SERVER}/find-all`)
const with_who = (x) => axios.post(`${SERVER}chat/with`, JSON.stringify(x), {headers})
// const exist = x => axios.get(`${SERVER}/exist/${x}`)
const tourData = x => axios.post(`${SERVER}jeju/recommendation`, JSON.stringify(x), {headers})

export default {
  chatAnswer,
  with_who,
  tourData
}