import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderDropdown } from './header/index'
import { appActions } from "../../store";
import { BsEnvelopeOpen, BsBell } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi"
import { AiOutlineMenu } from "react-icons/ai"
import logo from '../../assets/brand/logoWhite.svg'

const Header = () => {
  const [size, setSize] = useState(0);
  const navigate = useNavigate();

  const logOut = appActions((actions: any) => actions.UserAuthModel.logOut);



  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleSideBarControlButton = (e:any) => {
    e.preventDefault();
    e.stopPropagation();
    var docs = document.querySelector('.sidebar-fixed')
    if(size < 768){
      docs && docs.classList.toggle('show')
    }else{
      docs && docs.classList.toggle('hide')
    }
  }
  const handleLogOut =()=>{
    logOut();
    navigate("/login",{ replace: true });
  }







  return (
    <div className="header header-sticky mb-4">
      <div className="container-fluid headerMenu">
       <div className='d-flex align-items-center'>
        <button
            className="header-toggler"
            onClick={handleSideBarControlButton}
          >
            <AiOutlineMenu />
          </button>
          <ul className="header-nav d-none d-md-flex mr-auto">
            <div className="navbar-nav ms-auto">
              {/* <form className="d-flex">
                <input className="form-control form-control-sm me-sm-2" placeholder="Search" />
                <button color="light" className="btn btn-light my-2 my-sm-0" type="submit">
                  <AiOutlineSearch />
                </button>
              </form> */}
            </div>
          </ul>
       </div>
       <a className="header-brand mx-auto d-md-none">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="header-nav ms-3">
          <HeaderDropdown />

          <div className='nav-item'>
            <div className='nav-link'>
            <BsEnvelopeOpen className='icon'/>
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <BsBell className='icon'/>
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <FiLogOut className='icon' onClick={handleLogOut}/>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header
