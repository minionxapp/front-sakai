import axios from "axios";

// axios.defaults.withCredentials = true;
const custumFetch = axios.create({
    baseURL :'/api/v1' 
    // baseURL :'https://backend02-gamma.vercel.app/api/v1'

})

export default custumFetch