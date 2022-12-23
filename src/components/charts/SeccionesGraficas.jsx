import MixedGrafica from "./MixedGrafica";
import BotonGrafica from "./BotonGrafica";
import "../../assets/styles/components/seccionesGraficas.css";
import { useActiveMenu } from "react-active-menu";
import PageBanner from "../PageBanner";
import PostList from "../dashboard/postList/Posts";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const SeccionesGraficas = (props) => {
  const { registerContainer, registerSection } = useActiveMenu(
    {
      smooth: true,
    }
  );

let current_list_posts = useSelector((state) => state.customTooltip.current_tooltip_posts, shallowEqual);
   


  return (
    
    <div ref={registerContainer}>
      <div ref={registerSection(props.name)} id={props.name}>
        <div className="row secciones-graficas-row">

          <div className="row page_banner_dashboard">
            <div className="col-3">
              <PageBanner title={props.name} />
            </div>
            <div className="col-9 seccion_posts">
              <PostList/>
            </div>
          </div>
          <div className="row">
            <div className="col-4">

             <div className="current_grafic_hover">
              {
                current_list_posts.map((post) => {
                  return (
                    <div className="current_grafic_hover_item">
                      <img src={post.image
                      } alt="post_image" />
                      <div className="current_grafic_hover_item_text">
                        <img src={post.picture} alt="" />
                      </div>
                    </div>
                  )
                })

              }


             </div>

            <div className="row">
            {props.data.map((items) => {
            return (
              <div key={items.id} className="col-lg-6 col-md-6 col-12 grafic_button_container">
                <BotonGrafica
                  idMixed={props.id}
                  datos={items.data}
                  Timeline={props.timeLine}
                  type={items.type}
                  id={items.id}
                  name={items.name}
                  group={items.group}
                  color={items.color}
                  dataNumber={items.dataNumber}
                  dataNumberPast={items.dataNumberPast}
                  icono={items.icono}
                />
              </div>
            );
          })}
            </div>
            </div>
            <div className="col-8">
            <div className="mainGraficMixed">
            <MixedGrafica
              id={props.id}
              Timeline={props.timeLine}
              MixedData={props.data}
              colors={props.colors}
            />
          </div>
            </div>

          </div>
        

         
        </div>
      </div>
    </div>
  );
};

export default SeccionesGraficas;
