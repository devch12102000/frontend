import axios from "axios";
import config from "./config";
type Props ={
headers ?:any,
  anonymous?:any
}
const http = (headers?:any,anonymous?:any) => {

    const defaultHeaders = {};
  
    return axios.create({
      baseURL: config.BASE_API_URLS,
      timeout: config.TIMEOUT,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    })
  };
  
  export default http;