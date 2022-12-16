import React,{useContext} from 'react'
import useUser from '../../hooks/useUser';
import { LayoutContext } from '../../context/layoutContext';
import { FaPowerOff } from "react-icons/fa";

const Logout = () => {
  const [state, dispatch] = useContext(LayoutContext);
    const {isLogged, logout} = useUser()

    const handleLogoutClick = (e) =>  {
     e.preventDefault()
     logout()
     }
  
      return (
        <button className='LogoutButton' onClick={handleLogoutClick}>
           <FaPowerOff/>
           Cerrar sessión
        </button>
      )


}

export default Logout