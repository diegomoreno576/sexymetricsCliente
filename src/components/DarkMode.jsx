import React,{ useEffect, useContext} from "react";
import useDarkMode from "../hooks/useDarkMode";
import '../assets/styles/components/Darkmode.css';
import { LayoutContext } from "../context/layoutContext";
import { setTheme } from "../actions";
import { ThemeContext } from "../context";
import { BsSunFill } from "react-icons/bs";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [state, dispatch] = useContext(LayoutContext);
  const [stateApp, dispatchApp] = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      dispatchApp(setTheme(true));
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      dispatchApp(setTheme(false));
    }
  }, [darkMode]);

  if(state.changeLayout == true){
return(
  <div className="dark-mode-toggle">
  <button className="DakmodeButton" onClick={() => setDarkMode(!darkMode)}>
    <BsSunFill/>
  Cambiar color
  </button>
</div>
)
 }
};

export default DarkMode;



