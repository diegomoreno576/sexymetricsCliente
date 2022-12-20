import { useState, useContext, useEffect } from "react";
import { LayoutContext } from "../../context/layoutContext";
import DarkMode from "../DarkMode";
import "../../assets/styles/components/SideBar.css";
import Logout from "../auth/Logout";
import SelectorRedes from "../SelectorRedes";
import MonthYearCalendar from "../MonthCalendar";
import { setchangeLayout } from "../../actions";
import Team from "../Team";
import { NavLink } from "react-router-dom";
import { BsFillChatLeftDotsFill, BsCalendar2WeekFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { set } from "date-fns";


const routes = [
  {
    path: "/planificacion",
    name: "Planificación",
    icon: <BsCalendar2WeekFill />,
  },
  {
    path: "/documentos",
    name: "Documentos",
    icon: <BsFillChatLeftDotsFill />,
  },
  {
    path: "/chat",
    name: "chat",
    icon: <BsFillChatLeftDotsFill />,
  },
];



const Sidebar = () => {
  const [activeRed, setAtiveRed] = useState(true);
  const [state, dispatch] = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    dispatch(setchangeLayout(isOpen));
  }, [isOpen]);

  const location = useLocation();

  //swit pathname to change the sidebar
  useEffect(() => {
    if (location.pathname === "/planificacion") {
      setAtiveRed(false);
    } else if (location.pathname === "/documentos") {
      setAtiveRed(false);
    } else if (location.pathname === "/chat") {
      setAtiveRed(false);
     } else{
      setAtiveRed(true);
     }
  }, [location]);
  


  return (
    <>
      <div className="main-container">
        <div className={isOpen ? "sidebar" : "sidebar closeSidebar"}>
          <div className="sidebarElements">
            <div className="logo">
 
              <section className="MainTeam">
                <Team />
              </section>
              <div className={activeRed ? "calendar_and_monthpicker_active button_active" : "calendar_and_monthpicker_active"}>
               <div className="selec_red_text">
               <span className="select_red">Selecciona red</span>
               </div>
                <section className="MainRedes">
                  <SelectorRedes />
                </section>
                <div className="select_range_date_text">
                  <span className="selec_range_dates">Selecciona rango de fechas</span>
                </div>
                <div className="monthPicker">
                  <section className="mainCalendar">
                    <MonthYearCalendar />
                  </section>
                </div>
              </div>
            
              <section className="outSideMenu">
                {routes.map((route, index) => {
                  return (
                    <div className="Redesitem">
                      <NavLink
                        to={route.path}
                        key={index}
                        className="RedesLink_outside"
                        activeClassName="Redesactive"
                      >
                        <div className="icon_red_outside">
                          {route.icon}
                          <span className="RedesText">{route.name}</span>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
          <div className="UltilsButtons">
                <DarkMode />
                <Logout />
              </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
