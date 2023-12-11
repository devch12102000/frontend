import React from 'react'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap'
import avatar8 from './../../../assets/images/avatars/8.jpg'

const HeaderDropdown = () => {
  
  return (
    <li className='nav-item dropdown'>
      <div className='profileSection'>
      <Dropdown>
          <Dropdown.Toggle className='userProfile' variant="success" id="dropdown-basic">
          <img src={avatar8} alt="logo" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item href="/profile"> 
                  person icon
                  Profile
          </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      </div>
    </li>
  )
}

export default HeaderDropdown
