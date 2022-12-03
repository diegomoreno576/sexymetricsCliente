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
//     <Fragment>
//         <div className="page-banner"  >  
    
//     <div className="page-banner-container">
//     <div
//     className={
//       offset > 10 ? "page-banner-img" : "page-banner-img-active"
//     }
//   >
//             <img src={Banner} alt="" />
//         </div>
//         </div> 
// </div>
//        <div className="row descripcion-container">
//             <div className="main_page_avatar">
//                 <div className="avatar_page">
//                     <img src={Avatar.picture} alt="" />
//                     <div>
//                   </div> 
                 
//               </div> 
//               <div className="page_name">
//                        <h2>{Avatar.facebook}</h2>
//                        </div>        
//             </div>
//             </div>
//     </Fragment>

<div className="container main_page_banner">
  <div className=" page_banner">
    <div className="row page_items">
      <div className="col-6 page_main_avatar">
        <div className="page_avatar">
          <img src={Avatar.facebookPicture} alt={Avatar.facebook}/>
        </div>
        <div className="page_name_and_data">
          <div className="page_name">
            <h2>{Avatar.facebook}</h2>
          </div>
          <div className="page_main_feature_data">
              <div className="feature_data">
                <span>likes  {props.likes}</span>
              </div>
              <div className="feature_data">
               <span> Posts {props.posts}</span>
              </div>
          </div>
        </div>
      </div>
      <div className="col-6 page_banner_img">
        <img src={Banner} alt=""/>
    </div>
    </div>
  </div>
</div>
  )
}

export default PageBanner