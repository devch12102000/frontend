import React from 'react'

import { SidebarNav } from './SidebarNav'
// import logo from '../../assets/brand/logoWhite.svg'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'


const Sidebar = () => {


  const handleSideBarController = (e:any) =>{
    var docs = document.querySelector('.sidebar-fixed')
    if(e.target.href){
      docs && docs.classList.remove('show')
    } 
}


  return (
    // <CSidebar
    <div className='sidebar sidebar-fixed'
    onClick={handleSideBarController}
    >
      <div className="sidebar-brand d-none d-md-flex">
        {/* <img className="sidebar-brand-full" src={logo} alt="logo" /> */}
       </div>
      <div className='sidebar-nav'>
        <SimpleBar>
          <SidebarNav />
        </SimpleBar>
      </div>

    </div>
  )
}

export default React.memo(Sidebar)
