import { Link } from "react-router-dom";
import './index.scss'
const AccesRequestPage = ()=> {
    return (
        <div className="main-container">
  
        <div className="title" >
             Access to this page is restricted
        </div>
    
        <div className="subtitle">
            Oops, You don't have permission to access this page.
        </div>
        
        <div className="btn-container">
            <Link to="/"><p>HOME</p></Link>
      </div>
    </div>
    );
}

export default AccesRequestPage;