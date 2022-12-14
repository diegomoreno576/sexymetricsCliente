import React,{useContext} from 'react'
import { LayoutContext } from '../../context/layoutContext';
import Sidebar from './SideBar'
import '../../assets/styles/components/Layout.css';
import Footer from './Footer';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Header from '../movil/Header';
import BarBottom from '../movil/BarBottom';

const Layout = ({children}) => {
  const [state, dispatch] = useContext(LayoutContext);
  const  changeLayout  = state.changeLayout;
  const { height, width } = useWindowDimensions();
  
    if (width < 768) {
     return(
      <div className='mainApp'>
          <Header/>
          
      <div className='row'>
          <div className={"col-12 mainContainer"}>     
           {children}
           <BarBottom/>
           </div>
         </div>
         <Footer/>
     </div>
     )
    }else{
      return (
        <div className='mainApp'>
         <div className='row'>
              <div className="col-2">
                 <Sidebar/>
              </div>
             
        
             <div className="col-10 mainContainer">     
              {children}
              </div>
              
            </div>
            <Footer/>
        </div>
          )
    }
  
 
}

export default Layout