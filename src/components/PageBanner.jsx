import React,{useState, useEffect, Fragment, useContext} from 'react'
import Banner from "../assets/img/banner_superior.png"
import '../assets/styles/components/PageBanner.css'
import { SiFacebook } from "react-icons/si";
import useData from '../hooks/useData';
import ComunityVitual from './ComunityVitual';
import OpenAIAPI from "react-openai-api";
import openAi from '../services/openAi';
import { ThemeContext } from '../context';

//const openai = new OpenAIAPI("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");

const PageBanner = (props) => {
  const [msgPage, setmsgPage] = useState()
  const [state, dispatch] = useContext(ThemeContext);
   
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


        
     const start = state.TimeStart;
     const end = state.TimeEnd;

     const startPast = state.TimeStartPast;
     const endPast = state.TimeEndPast;


    const Avatar = useData(
      `/admin/profile`,
     );

      //FbBody
  const fbbody = useData(`/stats/aggregations/Facebook`, start, end);

  //FbBodyPast
  const fbbodyPast = useData(
    `/stats/aggregations/Facebook`,
    startPast,
    endPast
  );
  let ganados = fbbody.Follows;
  let ganadosPast = fbbodyPast.Follows;


  //   //  let prompt = `Comparame los datos del like en mi págnina de 
  //   //  facebook del dia 01 de diciembre que fueron 20 likes con los del 10 de diciembre que 
  //   //  fueron 200 likes y dame una conclusión`
    let prompt = `Comparame los usuarios ganados en mi pagina de facebook de la fecha ${start} a ${end}  que fueron ${ganados} con los del
    ${startPast} al ${endPast} que fueron ${ganadosPast} y dime una conclusion y dame un consejo y una valoración con iconos de estrellas`
    console.log(prompt)
    useEffect(() => {
      const getResponse = async () => {
        const response = await openAi(prompt);
        
        setmsgPage(response.choices[0].text)
      }
      getResponse();


    }, [start,end ])
    
  
  return (
<div className="container main_page_banner">
  <div className=" page_banner">
    <div className="row page_items">
      <div className="col-12   page_main_avatar">
        <div className="page_avatar">
          <img src={Avatar.facebookPicture} alt={Avatar.facebook}/>
        </div>
        <div className="page_name_and_data">
          <div className="page_name">
            <span>{Avatar.facebook}</span>
          </div>
        </div>
      </div>
      <div className="seccion_title">
      <div className="seccionTitle">
              <h3>{props.title} </h3>
            </div>
      </div>
      <div className="col-12 seccion_description">
          <span>
        {msgPage}
          </span>
        </div>
    </div>
  </div>
</div>
  )
}

export default PageBanner