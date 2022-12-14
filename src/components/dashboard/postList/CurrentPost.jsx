import React,{ useContext} from "react";
import {ReactComponent as PostIcon} from '../../../assets/img/more.svg'
import { ThemeContext } from "../../../context";

const CurrentPost = (props) => {
  const [state, dispatch] = useContext(ThemeContext);
  let currentPost = state.currentPost

  

  if (currentPost && props.data){

  
  const event = new Date(currentPost.timestamp);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const fecha = event.toLocaleDateString('es-ES',options);

 

  return (
    <div className="main_post_list_description">
    <div className="post_list_description">
    <div className="row">
      <div className="col-12">
        <div className="row header_post_description">
        <div className="col-4">
          <div className="description_image">
            <img
                src={currentPost.picture}
                alt=""
              />
          </div>
          </div>
          <div className="col-4">
            <div className="post_description_redes"> 
            <PostIcon/>
            </div>
          </div>
          <div className="col-4 col_post_description_date">
            <div className="post_description_date"> 
              <span>{fecha}</span>
            </div>
          </div>
        </div>
      </div>
    {
      
          <div className="col-3 post_description_items">
            <div className="post_description_item">
              <span className="post_description_likes_title">likes</span>
              <span className="post_description_likes_number">5</span>
            </div>
          </div>
    
      
    }

    </div>
    <div className="post_post_description">
      <span>
          { currentPost.text }
      </span>
    </div>
  </div>
  </div>
  )
  }
}

export default CurrentPost