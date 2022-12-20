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

const routes = [
  {
    path: "/planificacion",
    name: "Planificación",
    icon: <BsCalendar2WeekFill />,
  },
  {
    path: "/chat",
    name: "chat",
    icon: <BsFillChatLeftDotsFill />,
  },
];



const Sidebar = () => {
  const [state, dispatch] = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    dispatch(setchangeLayout(isOpen));
  }, [isOpen]);

  return (
    <>
      <div className="main-container">
        <div className={isOpen ? "sidebar" : "sidebar closeSidebar"}>
          <div className="sidebarElements">
            <div className="logo">
 
              <section className="MainTeam">
                <Team />
              </section>
              <div className="calendar_and_monthpicker_active">
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
