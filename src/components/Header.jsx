import React from 'react'
import Avatar from './Avatar';
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
                  <div className="perfil_type">
                  <div className="perfil_type_button">
                  <i class="fa-regular fa-medal"></i>
                    <span>Perfil Oro</span>
                  </div>
                </div>
                    <Avatar />
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Header