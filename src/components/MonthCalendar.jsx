import React, { useContext, useEffect} from 'react';
import { DateRangePicker } from 'rsuite';
import { ThemeContext } from '../context';
import { setLoading, setTimeStart } from '../actions';
import { setTimeEnd } from '../actions';
import { setTimeStartPast } from '../actions';
import { setTimeEndPast } from '../actions';
import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';
import 'rsuite/dist/rsuite.min.css';
import "../assets/styles/components/MonthCalendar.css";
import { LayoutContext } from '../context/layoutContext';

const MonthCalendar = () => {
  const [stateLayout, dispatchLayout] = useContext(LayoutContext);
  const [state, dispatch] = useContext(ThemeContext);

  let date = new Date();
  const startInitial = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-01');

  const [value, setValue] = React.useState([new Date(startInitial), new Date()]);

  const start = String(value[0].getFullYear() + String(value[0].getMonth() + 1).padStart(2, '0') + String(value[0].getDate()).padStart(2, '0'));
  const end = String(value[1].getFullYear() + String(value[1].getMonth() + 1).padStart(2, '0') + String(value[1].getDate()).padStart(2, '0'));

  const startPast = String(value[1].getFullYear() + String(value[1].getMonth()).padStart(2, '0') + String(value[1].getDate()).padStart(2, '0'));
  const endPast = String(value[0].getFullYear() + String(value[0].getMonth()).padStart(2, '0') + String(value[0].getDate()).padStart(2, '0'));

  useEffect( () => {
    dispatch(setTimeStart(start));
    dispatch(setTimeEnd(end));
    dispatch(setTimeStartPast(startPast));
    dispatch(setTimeEndPast(endPast));
    dispatch(setLoading(true));
  }, [value]); 
  const Ranges = [
  
    {
      label: 'Últimos 7 días',
      value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())]
    },
    {
      label: 'Últimos 15 días',
      value: [startOfDay(subDays(new Date(), 15)), endOfDay(new Date())]
    },
    {
      label: 'Últimos 30 días',
      value: [startOfDay(subDays(new Date(), 29)), endOfDay(new Date())]
    }
    
  ];
  if(stateLayout.changeLayout == true){

    // let start_year = start[0] + start[1] + start[2] + start[3]
    // let start_month = start[4] + start[5]
    // let start_day = start[6] + start[7]

    

    // let end_year = end[0] + end[1] + end[2] + end[3] 
    // let end_month = end[4] + end[5]
    // let end_day = end[6] + end[7]


    // const meses = ["Ene", "Febr", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    
    // let curret_start_time = start_day + " " + meses[start_month - 1] + " " + start_year 
    // let curret_end_time = end_day + " " + meses[end_month - 1] + " " +  end_year

     
    return (
     <div>
      {/* <div className="monthpickerTime">
         <span>{curret_start_time + " - " + curret_end_time}</span>
      </div> */}
       <DateRangePicker
       placeholder="Selecciona un rango de fecha"
       className='MonthCalendar'  
       editable={false}
       cleanable={false}
       container={document.querySelector(".sidebarElements")}
       block={true}
        ranges={Ranges}
        format="dd-MM-yyyy" 
        value={value} 
      // open={true}
        onChange={setValue} />
     </div>
    )
  }

  
   
  
  }

export default MonthCalendar


