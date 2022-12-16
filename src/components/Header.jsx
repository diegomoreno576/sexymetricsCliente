import React from 'react'
import Avatar from './Avatar'
import DarkMode from './DarkMode'
import Logout from './auth/Logout'
import "../assets/styles/components/Header.css";
import HeaderMenu from '../assets/styles/components/HeaderMenu';


const Header = () => {
  return (
    <div className="main_header">
        <div className="header">
            <div className="header_items row">
               <div className="col-3">
              
               </div>
               <div className="col-6 header_menu_main">
              <HeaderMenu/>
              </div>
               <div className="col-3">
                  <div className="mainsettigs_header"> 
                    <Avatar />
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Header