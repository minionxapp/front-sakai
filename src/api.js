import axios from "axios";
import { defineStore } from "pinia";
// axios.defaults.withCredentials = true;
const custumFetch =  axios.create({
    // baseURL :'/api/v1' 
    baseURL :'https://backend02-gamma.vercel.app/api/v1',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'token' :  localStorage.getItem('token')
        },

}

)

export default custumFetch