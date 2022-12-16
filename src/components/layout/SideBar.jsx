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
            <div className="HeaderSection">
              <div className="sidebarName"></div>

              <div className="UltilsButtons">
                <DarkMode />
                <Logout />
              </div>
            </div>
            <div className="logo">
              <section className="MainTeam">
                <Team />
              </section>
              <div className="calendar_and_monthpicker_active">
                <section className="MainRedes">
                  <SelectorRedes />
                </section>
                <div className="select_range_date_text">
                  <p>Selecciona rango de fechas</p>
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
