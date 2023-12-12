import { Navigate } from "react-router-dom";
import { appState } from "../../store";
type Props ={
    isLogOut?:Boolean,
    children:any
}
const ProtectedRoute =({children}:Props)=> {
    const auth = appState((state: any) => state.UserAuthModel.userAuth);
    if(auth && auth.accessToken){
        console.log("csdkhcbkdsc", auth.accessToken)
        return children;
    }else{
        return <Navigate to="/" replace />;
    }
}

export default ProtectedRoute