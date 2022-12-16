import React,{ useContext } from 'react'
import { useActiveMenu } from "react-active-menu";
import { ThemeContext } from '../../../context';


const HeaderMenu = () => {
    const [state, dispatch] = useContext(ThemeContext);
    const { registerTrigger } = useActiveMenu({
        offset: 60,
        smooth: true
      });

  return (
    <nav className="triggers header_menu">
    <ul className="nav nav-pills">
    {state.FbDatos.map((item) => {
          return (
            <li>
            <a
              ref={registerTrigger(item.name)}
              className="menu-item"
              href={"#" + item.name}
            >
              {item.name}
            </a>
            </li>
          );
        })}
     
    </ul>

    
    </nav>
  )
}

export default HeaderMenu