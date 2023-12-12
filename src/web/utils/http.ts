import axios from "axios";
import config from "./config";
import Cookies from "js-cookie";

const http = (headers?:any) => {
  const appToken = Cookies.get("contactsManagerToken");
  console.log("token", appToken)

  const defaultHeaders = {
    "authorization":''
  };
  if(appToken){
    defaultHeaders.authorization = `Bearer ${appToken}`
  }
  
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