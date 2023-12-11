import { Navigate } from "react-router-dom";
import { appState } from "../../store";
type Props ={
    isLogOut?:Boolean,
    children:any
}
const ProtectedRoute =({children}:Props)=> {
    const auth = appState((state: any) => state.UserAuthModel.userAuth);
    console.log("auth" , auth)
    if(true){
        return children;
    }else{
        return <Navigate to="/" replace />;
    }
}

export default ProtectedRoute