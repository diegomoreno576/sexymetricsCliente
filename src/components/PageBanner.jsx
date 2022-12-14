import React,{useState, useEffect, Fragment} from 'react'
import Banner from "../assets/img/banner_superior.png"
import '../assets/styles/components/PageBanner.css'
import { SiFacebook } from "react-icons/si";
import useData from '../hooks/useData';
import ComunityVitual from './ComunityVitual';

const PageBanner = (props) => {

   
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);



    const Avatar = useData(
      `/admin/profile`,
     );
    
  
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati 
          </span>
        </div>
    </div>
  </div>
</div>
  )
}

export default PageBanner