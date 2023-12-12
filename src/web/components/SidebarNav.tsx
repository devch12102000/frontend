import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'



export const SidebarNav = () => {
    const [openMenu, setOpenMenu] = useState("contact");

    const handleDashboardDropdown = (e:any, value:string) => {
        e.preventDefault();
        e.stopPropagation();
        const tabName = document.querySelector(`.${value}`);
        const prevTab = document.querySelector(`.${openMenu}`);
        if(openMenu === value || openMenu === ""){
            tabName && tabName.classList.toggle('show')
        } else{
            tabName && tabName.classList.add('show')
            prevTab && prevTab.classList.remove('show')
        }
        setOpenMenu(value)     
    }

    useEffect(() => {
      },[openMenu]);

    return (
      <>
       
      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "contact")}>
          <FiSettings className="nav-icon" />
          <span>
              Contacts
              {/* <IoIosArrowDown className="nav-icon"/> */}
              </span>
          </div>
          <ul className="nav-group-items contact">
            <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                <FiSettings className="nav-icon" />
                    Manage Contacts
                </NavLink>
            </li>
          </ul>
      </li>
  </>
    )
}

