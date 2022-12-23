import MixedGrafica from "./MixedGrafica";
import BotonGrafica from "./BotonGrafica";
import "../../assets/styles/components/seccionesGraficas.css";
import { useActiveMenu } from "react-active-menu";
import PageBanner from "../PageBanner";
import PostList from "../dashboard/postList/Posts";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const SeccionesGraficas = (props) => {
  const { registerContainer, registerSection } = useActiveMenu({
    smooth: true,
  });

  let current_list_posts = useSelector(
    (state) => state.customTooltip.current_tooltip_posts,
    shallowEqual
  );

  let current_grafic_on_hover_time = useSelector(
    (state) => state.customTooltip.tooltip_data.pointTime,
    shallowEqual
  );

  return (
    <div ref={registerContainer}>
      <div ref={registerSection(props.name)} id={props.name}>
        <div className="row secciones-graficas-row">
          <div className="row page_banner_dashboard">
            <div className="col-3">
              <PageBanner title={props.name} />
            </div>
            <div className="col-9 seccion_posts">
              <PostList />
            </div>
          </div>
          <div className="main_seccions row">
            <div className="col-4">
              <div className="current_grafic_hover_header">
                <div className="header_post_List_buttons grafic_on_hover_buttons button_list_posts">
                  <div className="list_buttos_in">
                    <span>
                      <i class="fa-light fa-square-plus"></i>
                    </span>
                    <span>Posts</span>
                  </div>
                  <span></span>
                </div>
                <div className="header_post_List_buttons grafic_on_hover_buttons button_list_stories">
                  <div className="list_buttos_in">
                    <span>
                      <i class="fa-light fa-circle-plus"></i>
                    </span>
                    <span>Stories</span>
                  </div>
                </div>
                <div className="header_post_List_buttons grafic_on_hover_buttons button_list_reels">
                  <div className="list_buttos_in">
                    <span>
                      <i class="fa-light fa-clapperboard-play"></i>
                    </span>
                    <span>Reels</span>
                  </div>
                </div>
              </div>
              <div className="grafic_on_hover_current_time">
                <span>
                  {new Date(current_grafic_on_hover_time?.[0]).toLocaleDateString(
                    "es-ES",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}{" "}
                </span>
              </div>
              <div className="current_grafic_hover">
                <div className="main_on_hover_posts">
                  <div className="row">              
                {current_list_posts.map((post) => {
                  return (
                    <div className="curren_on_hover_posts_col col-3">
                      <div className="current_grafic_hover_item">
                        <div
                        style={{  
                          backgroundImage: "url(" + post.picture + ")",
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat'
                        }}
                         className="current_grafic_hover_item_img">
                          <span>Likes {post.reactions} </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                  </div>
                </div>
              </div>

              <div className="row">
                {props.data.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="col-lg-6 col-md-6 col-12 grafic_button_container"
                    >
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
