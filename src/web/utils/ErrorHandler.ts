import Notification from './Notification';
const ErrorHandler =(error:any)=>{
    const { data } = error && error.response;
    const msg = data && data.message ? data.message : 'Something went wrong' 
    Notification.error(msg);
}

export default ErrorHandler;