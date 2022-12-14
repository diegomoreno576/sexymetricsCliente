import React,{useContext} from "react";
import { ThemeContext } from "../../../context";
import { setCurentPost } from "../../../actions";

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
        <div className="post_image">
          <img src={props.picture} alt="" />
        </div>
        <div className="description_date">
          <div className="post_date">
            <h5> {props.fecha} </h5>
          </div>
          <div className="post_title">
            <span>
              {props.text.length < 60
                ? props.text.substr(0, 60) + "..."
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