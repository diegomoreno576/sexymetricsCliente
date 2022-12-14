import React,{ useContext} from "react";
import { ThemeContext } from "../../../context";

const CurrentPost = (props) => {
  const [state, dispatch] = useContext(ThemeContext);
  let currentPost = state.currentPost

  

  if (currentPost && props.data){

  
  const event = new Date(currentPost.timestamp);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const fecha = event.toLocaleDateString('es-ES',options);

 let details = props.details


  return (
    <div className="main_post_list_description">
      <div className="post_list_description">
        <div className="row">
          <div className="col-12">
            <div className="row header_post_description">
              <div className="col-4">
                <div className="description_image">
                  <img src={currentPost.picture} alt="" />
                </div>
              </div>
              <div className="col-8">
                <div className="post_description_date">
                  <span>{fecha}</span>
                </div>
                <div className="current_post_type">
                  <div className="type_post_item">
                    <span> <i class="fa-light fa-square-plus"></i> </span>
                    <span>Post</span>
                  </div>
                  <div className="current_post_link">
                    <a href="#" target="_blank">Ver publicación</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {
            Object.keys(details).map((item) => {
              return (
                <div className="col-3 post_description_items">
                  <div className="post_description_item">
                    <span className="post_description_likes_title">{item}</span>
                    <span className="post_description_likes_number">{details[item]}</span>
                  </div>
                </div>
              )
            }
            )
          }
        <div className="row table_current_post">
        <div className="col-3 post_description_items">
            <div className="post_description_item">
              <span className="post_description_likes_title">Likes</span>
              <span className="post_description_likes_number">15000</span>
            </div>
          </div>
          <div className="col-3 post_description_items">
          <div className="post_description_item">
            <span className="post_description_likes_title">Comentrios</span>
            <span className="post_description_likes_number">15000</span>
          </div>
        </div>
        <div className="col-3 post_description_items">
          <div className="post_description_item">
            <span className="post_description_likes_title">Clicks</span>
            <span className="post_description_likes_number">15000</span>
          </div>
        </div>
        <div className="col-3 post_description_items">
          <div className="post_description_item">
            <span className="post_description_likes_title">Link</span>
            <span className="post_description_likes_number">15000</span>
          </div>
        </div>
        <div className="col-3 post_description_items">
          <div className="post_description_item">
            <span className="post_description_likes_title">Impresiones</span>
            <span className="post_description_likes_number">15000</span>
          </div>
        </div>
        <div className="col-3 post_description_items">
          <div className="post_description_item">
            <span className="post_description_likes_title">Alcance</span>
            <span className="post_description_likes_number">15000</span>
          </div>
        </div>
        <div className="col-3 post_description_items">
          <div className="post_description_item">
            <span className="post_description_likes_title">Reproducciones</span>
            <span className="post_description_likes_number">15000</span>
          </div>
        </div>
        <div className="col-3 post_description_items">
          <div className="post_description_item">
            <span className="post_description_likes_title">Puntuación</span>
            <span className="post_description_likes_number">15000</span>
          </div>
        </div>
        </div>
        </div>
        {/* <div className="post_post_description">
          <span>{currentPost.text}</span>
        </div> */}
      </div>
    </div>
  );
  }
}

export default CurrentPost