import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import "../assets/styles/components/SelectorRedes.css";
import useComponentVisible from '../hooks/useComponentVisible';
import { LayoutContext } from "../context/layoutContext";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsMegaphoneFill
} from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { SiGooglemybusiness, SiGoogleads } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";



const SelectorRedes = () => {

  const [state, dispatch] = useContext(LayoutContext);
  const [selected, setIsSelected] = useState({
    Imagen: 'https://notecopies.app/wp-content/uploads/2022/06/DB_SM.png"', 
    Texto: 'Inicio',
  });

  const routes = [
    {
      path: "/",
      name: "Inicio",
      icon: <ImHome/>,
    },
    {
      path: "/facebook",
      name: "Facebook",
      icon: <BsFacebook/>,
    },
    {
      path: "/instagram",
      name: "Instagram",
      icon: <GrInstagram/>,
    },
    {
      path: "/twitter",
      name: "Twitter",
      icon: < BsTwitter/>,
    },
    {
      path: "/linkeding",
      name: "Linkeding",
      icon: <BsLinkedin/>,
    },
    {
      path: "/googlemybussines",
      name: "Google my Bussines",
      icon: <SiGooglemybusiness/>,
    },
    {
      path: "/web",
      name: "Web",
      icon: <FaGlobe/>,
    },
    {
      path: "/googleads",
      name: "Google Ads",
      icon: <SiGoogleads/>,
    },
    {
      path: "/facebookads",
      name: "Facebook Ads",
      icon: <BsMegaphoneFill/>,
    }
  ];


  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  if(state.changeLayout == true){
  return (
    <div ref={ref} className="selectorRedes">
      <div className="RedesMaindropdown">
        <div
          onClick={(e) => {
            setIsComponentVisible(!isComponentVisible);
          }}
          className="Redesdropdown-btn"
        >
           {selected.Imagen}
            <span className="RedesTextButton">{selected.Texto}</span>
          <span
            className={isComponentVisible ? "IconoCaret fas fa-caret-up" : "IconoCaret fas fa-caret-down"}
          />
        

        <div  className="Redesdropdown-content" style={{ display: isComponentVisible ? "block" : "none" }}>  
        <div  className="Redesdropdown-contentChild" >

          {routes.map((route, index) => {
            return (
              <div
            onClick={(e) => {
              setIsSelected({
                Imagen: route.icon, 
                Texto: route.name,
                })
              //  setIsComponentVisible(!isComponentVisible);
            }}
            className="Redesitem">
            <NavLink
                to={route.path}
                key={index}
                className="RedesLink"
                activeClassName="Redesactive"
              >
                <div className="icon">
                  {route.icon}
                  <span className="RedesText">
                    {route.name}
                    </span>
                    </div>
              </NavLink>
          </div>
            );
          })}
     
          </div>
        </div>
        </div>
      </div>
    </div>
  );
   }else{
    return(
      <div className="Redesdropdown-btn-close">
           <img className="RedesIcono-close" src={selected.Imagen} width="64" height="64" alt="Image" loading="lazy"/>    
      </div>
    )
   }
}

export default SelectorRedes