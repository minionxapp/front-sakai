import axios from "axios";

// 1111111
const custumFetch = axios.create({
    // baseURL :'/api/v1' 
    baseURL :'https://backend02-gamma.vercel.app/api/v1'

})

export default custumFetch