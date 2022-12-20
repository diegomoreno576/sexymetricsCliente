import React,{useEffect, useContext} from "react";
import "../../../assets/styles/components/dashboard/PostList.css";
import CurrentPost from "./CurrentPost";
import PostLists from "./PostLists";
import { ThemeContext } from "../../../context";
import { setCurentPost } from "../../../actions";
import {ReactComponent as PostIcon} from '../../../assets/img/post.svg'

const PostList = (props) => {
  const [state, dispatch] = useContext(ThemeContext);

  useEffect(() => {
    dispatch(setCurentPost(props.data?.[0]));

  }, [props.data]);
  

  return (
    <div className="row">
      <div className="col-12 session_header_posts">
      <div className="main_header_posts">
        <div className="header_post_list_name">
          <span>Listado de publicaciones</span>
        </div>
        <div className="header_post_List_buttons">
        <div className="list_buttos_in">
            <span> <i class="fa-light fa-square-plus"></i> </span>
             <span>Posts</span>
          </div>
          <span></span>
        </div>
        <div className="header_post_List_buttons">
          <div className="list_buttos_in">
            <span><i class="fa-light fa-circle-plus"></i></span>
             <span>Stories</span>
          </div>
          
        </div>
        <div className="header_post_List_buttons">
        <div className="list_buttos_in">
            <span><i class="fa-light fa-clapperboard-play"></i></span>
             <span>Reels</span>
          </div>
        </div>
      </div>
      </div>
 
      <div className="row">
      <div className="col-6 col-post_list">
        <div className="main_post_list">
          {props.data?.map((item) => {
            const event = new Date(item.timestamp);
            const options = {
              weekday: "short",
              month: "short",
              day: "numeric",
            };
            const fecha = event.toLocaleDateString("es-ES", options);

            return (
              <PostLists
                id={item.postId}
                picture={item.picture ? item.picture : item.imageUrl}
                fecha={fecha}
                type={item.type}
                text={item.text ? item.text : item.content}
                Likes={item.reactions ? item.reactions : item.likes}
                data={props.data}
              />
            );
          })}
        </div>
      </div>
      {/* post details */}
      <div className="col-6 current_post_col">
        <CurrentPost data={props.data} details={props.postListDetails} />
      </div>
      </div>
    </div>
  );
};

export default PostList;
