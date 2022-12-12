import React from 'react'
import Avatar from '../Avatar'
import DarkMode from '../DarkMode'
import Logout from '../auth/Logout'
import "../../assets/styles/components/movil/Header.css";


const Header = () => {
  return (
    <div className="main_header">
        <div className="header">
            <div className="header_items row">
               <div className="col-9">
               <Avatar />
               </div>
               <div className="col-3">
                  <div className="mainsettigs_header"> 
                    <DarkMode />
                    <Logout />
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Header