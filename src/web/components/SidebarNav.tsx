import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome ,AiFillCaretDown ,AiOutlineFolder,AiOutlinePieChart,  } from 'react-icons/ai'
// import {GoSettings} from 'react-icons/go'
import {FiSettings} from 'react-icons/fi'
import {IoIosArrowDown , IoIosArrowUp } from 'react-icons/io'


var OpenMenu=true



export const SidebarNav = () => {
    const [openMenu, setOpenMenu] = useState("caseStudy");

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
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "caseStudy")}>
          <AiOutlineHome className="nav-icon" />
              Case Study Management{OpenMenu}
        {/* {openMenu?<IoIosArrowDown className="nav-icon"/>:<IoIosArrowUp className="nav-icon"/>} */}
          </div>
          <ul className="nav-group-items caseStudy">
            <li className="nav-item">
                <NavLink className="nav-link" to="/case-studies">
                <AiOutlineHome className="nav-icon" />
                    Manage Case Study
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/case-study/case-study-types">
                <AiOutlineHome className="nav-icon" />
                    Manage Case Study Type
                </NavLink>
            </li>
          </ul>
      </li>
     <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "client")}>
          <AiOutlineFolder className="nav-icon" />
              Client Management
              {/* <IoIosArrowDown className="nav-icon"/> */}
          </div>
          <ul className="nav-group-items client">
            <li className="nav-item">
                <NavLink className="nav-link" to="/clients">
                <AiOutlineFolder className="nav-icon" />
                    Manage Client
                </NavLink>
            </li>
          </ul>
      </li>

        <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "testimonial")}>
          <AiOutlinePieChart className="nav-icon" />
              Testimonial Management
              {/* <IoIosArrowDown className="nav-icon"/> */}
          </div>
          <ul className="nav-group-items testimonial">
            <li className="nav-item">
                <NavLink className="nav-link" to="/testimonial-list">
                <AiOutlinePieChart className="nav-icon" />
                    Manage Testimonials
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/testimonial-types">
                <AiOutlinePieChart className="nav-icon" />
                    Manage Testimonail Type
                </NavLink>
            </li>
          </ul>
      </li>


      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "post")}>
              Post Management
              {/* <IoIosArrowDown className="nav-icon"/> */}
          </div>
          <ul className="nav-group-items post">
            <li className="nav-item">
                <NavLink className="nav-link" to="/post-list">
                    Manage Post
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/post-types">
                    Manage Post Type
                </NavLink>
            </li>
          </ul>
      </li>
      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "job")}>
          <FiSettings className="nav-icon" />
              Job Management
              {/* <IoIosArrowDown className="nav-icon"/> */}
          </div>
          <ul className="nav-group-items job">
            <li className="nav-item">
                <NavLink className="nav-link" to="/jobs">
                <FiSettings className="nav-icon" />
                    Manage Job
                </NavLink>
            </li>
          </ul>
      </li>
      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "categories")}>
          <AiOutlineFolder className="nav-icon" />
          Categories Management
          {/* <IoIosArrowDown className="nav-icon"/> */}
          </div>
          <ul className="nav-group-items categories">
            <li className="nav-item">
                <NavLink className="nav-link" to="/categories">
                <AiOutlineFolder className="nav-icon" />
                    Manage Categories
                </NavLink>
            </li>
          </ul>
      </li>





      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "officialPartner")}>
          Official Partner Management
          {/* <IoIosArrowDown className="nav-icon"/> */}
          </div>
          <ul className="nav-group-items officialPartner">
            <li className="nav-item">
                <NavLink className="nav-link" to="/official-partner-list">
                    Manage Official Partner
                </NavLink>
            </li>
          </ul>
      </li>
      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "newsPress")}>
          <FiSettings className="nav-icon" />
          <span>
              News and Press Release
              {/* <IoIosArrowDown className="nav-icon"/> */}
              </span>
          </div>
          <ul className="nav-group-items newsPress">
            <li className="nav-item">
                <NavLink className="nav-link" to="/news-press-release">
                <FiSettings className="nav-icon" />
                    Manage News and Press Release
                </NavLink>
            </li>
          </ul>
      </li>

      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "awards")}>
          <FiSettings className="nav-icon" />
          <span>
              Awards
              {/* <IoIosArrowDown className="nav-icon"/> */}
              </span>
          </div>
          <ul className="nav-group-items awards">
            <li className="nav-item">
                <NavLink className="nav-link" to="/awards">
                <FiSettings className="nav-icon" />
                    Manage Awards
                </NavLink>
            </li>
          </ul>
      </li>
      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "global")}>
          <FiSettings className="nav-icon" />
          <span>
              Global Tech Series
              {/* <IoIosArrowDown className="nav-icon"/> */}
              </span>
          </div>
          <ul className="nav-group-items global">
            <li className="nav-item">
                <NavLink className="nav-link" to="/global-tech-series">
                <FiSettings className="nav-icon" />
                    Manage Global Tech Series
                </NavLink>
            </li>
          </ul>
      </li>
      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "feedback")}>
          <FiSettings className="nav-icon" />
          <span>
              Feedbacks
              {/* <IoIosArrowDown className="nav-icon"/> */}
              </span>
          </div>
          <ul className="nav-group-items feedback">
            <li className="nav-item">
                <NavLink className="nav-link" to="/feedback">
                <FiSettings className="nav-icon" />
                    Manage Feedbacks
                </NavLink>
            </li>
          </ul>
      </li>
      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "pdf")}>
          <FiSettings className="nav-icon" />
          <span>
              Pdfs
              {/* <IoIosArrowDown className="nav-icon"/> */}
              </span>
          </div>
          <ul className="nav-group-items pdf">
            <li className="nav-item">
                <NavLink className="nav-link" to="/create/pdf">
                <FiSettings className="nav-icon" />
                    Add Pdfs
                </NavLink>
            </li>
          </ul>
      </li>
      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "mail")}>
          <FiSettings className="nav-icon" />
          <span>
              Mails
              {/* <IoIosArrowDown className="nav-icon"/> */}
              </span>
          </div>
          <ul className="nav-group-items mail">
            <li className="nav-item">
                <NavLink className="nav-link" to="/create/mail">
                <FiSettings className="nav-icon" />
                    Add Mail
                </NavLink>
            </li>
          </ul>
      </li>

      <li className="nav-group">
          <div className="nav-link nav-group-toggle" onClick={(e) => handleDashboardDropdown(e, "types")}>
          <FiSettings className="nav-icon" />
          <span>
              Types
              {/* <IoIosArrowDown className="nav-icon"/> */}
              </span>
          </div>
          <ul className="nav-group-items types">
            <li className="nav-item">
                <NavLink className="nav-link" to="/types">
                <FiSettings className="nav-icon" />
                    Manage Types
                </NavLink>
            </li>
          </ul>
      </li>
  </>
    )
}

