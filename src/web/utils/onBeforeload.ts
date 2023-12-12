// import { getCurrentUserFromToken } from "../../models/auth/AuthModel";
// import { get } from 'lodash';
// import store from "../../store";
// import authStore from "./AuthStore";
// import Cookies from "js-cookie";
// function onBeforeload (){
//     const token = Cookies.get("appToken") || "";
//     const user:any = getCurrentUserFromToken(token);
//     store.dispatch.AuthModel.setUser({"token":token, "userDetails":user});
//     const employee_id= (get(getCurrentUserFromToken(authStore?.getAppToken()), "employee_id") || 0).toString();
//     store.dispatch.UserModel.getAllPages();
//     store.dispatch.BookmarkModel.loadBookmark(employee_id);
//     authStore.setAppToken(token);
// }
// onBeforeload();