import { Action, action, thunk, Thunk } from 'easy-peasy';
import http from '../../web/utils/http';
import ErrorHandler from '../../web/utils/ErrorHandler';
export interface IUserAuthModel {
    /*****..........@...ANY TYPE...@.......*****/
    userAuth: Object;

    /*****..........@...ACTION TYPE...@.......*****/
    setUserAuth: Action<IUserAuthModel, any>;
    logOut:Action<IUserAuthModel, any>;

    /*****..........@...THUNK TYPE...@.......*****/
    login:  Thunk<IUserAuthModel, any>;
    register: Thunk<IUserAuthModel, any>;
}

const UserAuthModel : IUserAuthModel = {
    userAuth:{},

    /*****..........@...ACTION TYPE...@.......*****/
    setUserAuth: action((state, payload)=>{
        state.userAuth = payload;
    }),

    logOut: action((state)=>{
        state.userAuth = {};
    }),


     /*****..........@...THUNK TYPE...@.......*****/

    login:thunk(async (actions, data) => {
        
        const response = await http().post('/api/users/login',data).then(res=>{
            const { data } = res;
            actions.setUserAuth(data);
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