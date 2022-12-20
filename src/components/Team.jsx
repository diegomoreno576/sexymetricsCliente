import React, { useContext } from "react";
import "../assets/styles/components/Team.css";
import { LayoutContext } from "../context/layoutContext";
import { ThemeContext } from "../context";

const Team = () => {
  const [stateLayout, dispatch] = useContext(LayoutContext);
  const [stateApp] = useContext(ThemeContext);

  const ntcTeam = [
    {
      avatarImg:
        "https://notecopies.app/wp-content/uploads/2021/06/david-1.png",
      avatarName: "David",
      avatarEmployment: "Marketing",
    },
    {
      avatarImg:
        "https://notecopies.app/wp-content/uploads/2022/01/DIEGO_baja.png",
      avatarName: "Diego",
      avatarEmployment: "Web",
    },
  ];
  if (stateLayout.changeLayout === true) {
    return (
      <div className="TeamContainer">
        <div className="notecopiesLogo">
          <div className="notecopiesLogoimg">
            <img
              src={
                stateApp.darkmode
                  ? "https://notecopies.es/wp-content/uploads/2021/03/notecopies-blanco.gif"
                  : "https://notecopies.es/wp-content/uploads/2021/12/notecopies-azul_firma_correo.gif"
              }
              alt=""
            />
          </div>
        </div>
        <div className="add_meet_container">
          <div className="add_meet_button">
            <span>Convocar reunión</span>
          </div>
        </div>

        <div className="mainAvatarTeam">
          <div className="avatarList">
            {ntcTeam.map((item) => {
              return (
                <div className="avatarItem">
                  <div className="avatarImg">
                    <img src={item.avatarImg} alt="" />
                  </div>
                  <div className="avatarDescriptcion">
                    <div className="avatarName">
                      <span>{item.avatarName}</span>
                    </div>
                    <div className="avatarWorking">
                      <span>{item.avatarEmployment}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Team;
