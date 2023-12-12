import { Action, action, thunk, Thunk } from 'easy-peasy';
import http from '../../web/utils/http';
import ErrorHandler from '../../web/utils/ErrorHandler';
import axios from 'axios';
import config from '../../web/utils/config';
import Cookies from "js-cookie";

export interface IUserAuthModel {
    /*****..........@...ANY TYPE...@.......*****/
    userAuth: Object;
    userCreds: Object;

    /*****..........@...ACTION TYPE...@.......*****/
    setUserAuth: Action<IUserAuthModel, any>;
    setUserCreds: Action<IUserAuthModel, any>;
    logOut:Action<IUserAuthModel, any>;

    /*****..........@...THUNK TYPE...@.......*****/
    login:  Thunk<IUserAuthModel, any>;
    register: Thunk<IUserAuthModel, any>;
}

const UserAuthModel : IUserAuthModel = {
    userAuth:{},
    userCreds: {},

    /*****..........@...ACTION TYPE...@.......*****/
    setUserAuth: action((state, payload)=>{
        state.userAuth = payload;
    }),

    setUserCreds: action((state, payload)=>{
        state.userCreds = payload;
    }),

    logOut: action((state)=>{
        state.userAuth = {};
    }),


     /*****..........@...THUNK TYPE...@.......*****/

    login:thunk(async (actions, payload) => {
        
        const response = await axios.create({baseURL: config.BASE_API_URLS,
            timeout: config.TIMEOUT,
            }).post('/api/users/login',payload).then(async(res:any)=>{
            const { data } = res;
            actions.setUserCreds(payload);
            console.log("data", payload)
            actions.setUserAuth(data);
            await Cookies.set("contactsManagerToken", data.accessToken)
            return new Promise((resolve) =>resolve("success"));
        }).catch(error=>{
            ErrorHandler(error);
            return new Promise((reject) =>reject("error"));
        });

        return response;
    }),


    register:thunk(async (_actions,data) => {
        console.log("data", data)
        const response = await http().post('/api/users/register',data).then(()=>{
            // const { data } = res;
            // actions.setUserAuth(data);
            return new Promise((resolve) =>resolve("success"));
        }).catch(error=>{
            ErrorHandler(error);
            return new Promise((reject) =>reject("error"));
        });

        return response;
    }),


}

export default UserAuthModel;