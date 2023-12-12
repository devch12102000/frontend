import { Action, action, thunk, Thunk } from 'easy-peasy';
import axios from "axios";
export interface DemoModel {
    /*****..........@...ANY TYPE...@.......*****/
    client: any;

    /*****..........@...ACTION TYPE...@.......*****/
    setClient: Action<DemoModel, any>;

    /*****..........@...THUNK TYPE...@.......*****/
    loadClient: Thunk<DemoModel, any>;
    loadClientwithPage: Thunk<DemoModel, any>;
}

const demoModel: DemoModel = {
    /*****..........@...ANY TYPE...@.......*****/
    client: [],

    /*****..........@...ACTION TYPE...@.......*****/
    setClient: action((state) => {
        const cl = [
            {
                id:1,
                'user_name':'parvez'        
            },
            {
                id:2,
                'user_name':'Ram'        
            },
            {
                id:3,
                'user_name':'Karan'        
            }
        ]
        state.client = cl;
    }),

    /*****..........@...THUNK TYPE...@.......*****/
    loadClient: thunk(async (actions) => {
        const response = await axios.get('http://localhost:8100/users');
        const { data } = response;
        actions.setClient(data.users);
    }),
    loadClientwithPage: thunk(async (actions) => {
        const response = await axios.get('http://localhost:8100/users?page=1&size=4');
        const { data } = response;
        console.log(response);
        actions.setClient(data.users);
    }),
}
export default demoModel;


