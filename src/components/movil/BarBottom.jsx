import React from 'react'
import "../../assets/styles/components/movil/BarBottom.css";
import SelectorRedes from '../SelectorRedes';


const barBottom = () => {
  return (
    <div className="main_bar_movil">
        <div className="bar_movil row">
            <div className="bar_movil_item col-6">
                Calendar 
            </div>
            <div className="bar_movil_item col-6">
            <SelectorRedes />
            </div>
         </div>
    </div>
  )
}

export default barBottom