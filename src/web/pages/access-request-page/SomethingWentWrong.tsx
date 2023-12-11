import { Link } from "react-router-dom";
import "./index.scss"
const SomethingWentWrong = () => {
  return (
    <div className="main-container">
      <h3 className="heading">
      Something went wrong
      </h3>
      <p id="subtitle">
        We're working on it and we'll get it fixed as soon as we can.
      </p>
      <div className="btn-container">
      <Link  to="/">
      <div className="hexa-primary-btn" onClick={()=>window.location.reload()}>
      <p >back</p>
      </div>
      </Link>
      </div>
    </div>
  );
};

export default SomethingWentWrong;
