import axios from "axios";
import config from "./config";

const http = (headers?:any) => {

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