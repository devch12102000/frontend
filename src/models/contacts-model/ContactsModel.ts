import { Action, action, thunk, Thunk } from 'easy-peasy';
import http from '../../web/utils/http';
import ErrorHandler from '../../web/utils/ErrorHandler';
import Notification from '../../web/utils/Notification';


export interface contactType {
    "user_id": string,
    "name": string,
    "email": string,
    "phone": string,
    "createdAt": string,
    "updatedAt": string,
}

export interface createContactPayloadtype {
    "name": string,
    "email": string,
    "phone": string,
    "id"?: string,
}
export interface IContactsModel {
    /*****..........@...ANY TYPE...@.......*****/
    contacts: object[];

    /*****..........@...ACTION TYPE...@.......*****/
    setContacts: Action<IContactsModel, any>;

    /*****..........@...THUNK TYPE...@.......*****/
    getAllContacts:  Thunk<IContactsModel, contactType[]>;
    getContactByID:  Thunk<IContactsModel, contactType>;
    createContact:  Thunk<IContactsModel, createContactPayloadtype>;
    updateContact:  Thunk<IContactsModel, createContactPayloadtype>;
    deleteContact:  Thunk<IContactsModel, string>;
}

const ContactsModel : IContactsModel = {
    contacts:[],


    /*****..........@...ACTION TYPE...@.......*****/
    setContacts: action((state, payload)=>{
        state.contacts = payload;
    }),

    getAllContacts:thunk(async (actions, data) => {
        console.log("data params", data)
        const response = await http().get('/api/contacts', {params: data}).then((res:any)=>{
            const { data } = res;
            actions.setContacts(data);
            return new Promise((resolve) =>resolve(data));
        }).catch(error=>{
            ErrorHandler(error);
            return new Promise((reject) =>reject("error"));
        });

        return response;
    }),

    getContactByID:thunk(async (_actions, id) => {
        
        const response = await http().get(`/api/contacts/${id}`).then((res:any)=>{
            return new Promise((resolve) =>resolve(res));
        }).catch(error=>{
            ErrorHandler(error);
            return new Promise((reject) =>reject("error"));
        });

        return response;
    }),

    createContact:thunk(async (_actions, data) => {
        
        const response = await http().post(`/api/contacts/`, data).then(()=>{
            Notification.success("Contact Created")
            return new Promise((resolve) =>resolve("Contact Created"));
        }).catch(error=>{
            ErrorHandler(error);
            return new Promise((reject) =>reject("error"));
        });

        return response;
    }),

    updateContact:thunk(async (_actions, data) => {
        const {id , ...rest} = data
        const response = await http().put(`/api/contacts/${data.id}`, rest).then(()=>{
            Notification.success("Contact Created")
            // actions.getAllContacts;
            return new Promise((resolve) =>resolve("Contact Created"));
        }).catch(error=>{
            ErrorHandler(error);
            return new Promise((reject) =>reject("error"));
        });

        return response;
    }),

    deleteContact:thunk(async (_actions, id) => {
        const response = await http().delete(`/api/contacts/${id}`).then(()=>{
            Notification.success("Contact Deleted")
            // actions.getAllContacts;
            return new Promise((resolve) =>resolve("Contact Deleted"));
        }).catch(error=>{
            ErrorHandler(error);
            return new Promise((reject) =>reject("error"));
        });

        return response;
    }),
}

export default ContactsModel