import { Action, action, thunk, Thunk } from 'easy-peasy';
import axios from "axios";
import Notification from "../../web/utils/Notification";
import http from '../../web/utils/http';
import ErrorHandler from '../../web/utils/ErrorHandler';
import { get } from 'lodash';
export interface IUserAuthModel {
    /*****..........@...ANY TYPE...@.......*****/
    userAuth: Object;

    /*****..........@...ACTION TYPE...@.......*****/
    setUserAuth: Action<IUserAuthModel, any>;
    logOut:Action<IUserAuthModel, any>;

    /*****..........@...THUNK TYPE...@.......*****/
    login:  Thunk<IUserAuthModel, any>;
}

const UserAuthModel : IUserAuthModel = {
    userAuth:{},

    /*****..........@...ACTION TYPE...@.......*****/
    setUserAuth: action((state, payload)=>{
        state.userAuth = payload;
    }),

    logOut: action((state, payload)=>{
        state.userAuth = {};
    }),


     /*****..........@...THUNK TYPE...@.......*****/

    login:thunk(async (actions, data) => {
        
        const response = await http().post('user/login',data).then(res=>{
            const { data } = res;
            actions.setUserAuth(data);
            return new Promise((resolve, reject) =>resolve("success"));
        }).catch(error=>{
            ErrorHandler(error);
            return new Promise((resolve, reject) =>reject("error"));
        });

        return response;
    }),


}

export default UserAuthModel;