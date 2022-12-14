import React,{useContext} from "react";
import { ThemeContext } from "../../../context";
import { setCurentPost } from "../../../actions";
import {ReactComponent as PostIcon} from '../../../assets/img/post.svg'


const PostLists = (props) => {
  const [state, dispatch] = useContext(ThemeContext);

  //find de pos id onClick  
  const findPost = () => {
    const post = props.data.find((item) => item.postId === props.id);
    dispatch(setCurentPost(post));
  };





  return (
    <div key={props.id} className="post_list" onClick={findPost}>
      <div className="image_title">
        <div className="contain_post_image">
        <div className="type_post_img">
           <i class="fa-light fa-square-plus"></i>
        </div>
        <div className="post_image">
          <img src={props.picture} alt="" />
        </div>
     
        </div>
        <div className="description_date">
          <div className="post_date">
            <span> {props.fecha} </span>
          </div>
          <div className="post_title">
            <span>
              {props.text.length > 40
                ? props.text.substr(0, 40) + "..."
                : props.text}
            </span>
          </div>
        </div>
      </div>

      <div className="post_post_like">
        <span>Likes</span>
        <span class="post_likes_number">
          {" "}
          <strong> {props.Likes} </strong>{" "}
        </span>
      </div>
    </div>
  );
}

export default PostLists