import axios from "axios"
const SERVER = 'http://127.0.0.1:8000/api/'
// const SERVER = 'http://192.168.0.35:8000/api/'

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
  }

const recommandList = x => axios.post(`${SERVER}jeju/days`, JSON.stringify(x), {headers})
const recommandSave = x => axios.post(`${SERVER}jeju/save_days`, JSON.stringify(x), {headers})

export default {
    recommandList,
    recommandSave
  }