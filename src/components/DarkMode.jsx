import React,{ useEffect, useContext} from "react";
import useDarkMode from "../hooks/useDarkMode";
import '../assets/styles/components/Darkmode.css';
import { LayoutContext } from "../context/layoutContext";
import { setTheme } from "../actions";
import { ThemeContext } from "../context";


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
  <i class="fa-solid fa-circle-half-stroke"></i>
  </button>
</div>
)
 }
};

export default DarkMode;



