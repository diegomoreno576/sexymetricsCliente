import React,{useEffect, useContext} from "react";
import "../../../assets/styles/components/dashboard/PostList.css";
import CurrentPost from "./CurrentPost";
import PostLists from "./PostLists";
import { ThemeContext } from "../../../context";
import { setCurentPost } from "../../../actions";

const PostList = (props) => {
  const [state, dispatch] = useContext(ThemeContext);

  useEffect(() => {
    dispatch(setCurentPost(props.data?.[0]));

  }, [props.data]);
  
 

  return (
    <div className="row">
        {/* post list */}
       <div className="col-6">
       <div className="main_post_list">
      {props.data?.map((item) => {
        const event = new Date(item.timestamp);
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
              const fecha = event.toLocaleDateString('es-ES',options);

              return (
                <PostLists
                  id={item.postId}
                  picture={item.picture}
                  fecha={fecha}
                  type={item.type}
                  text={item.text}
                  Likes={item.reactions}
                  data={props.data}
                />
              );
            })}
     </div>
     </div>
      {/* post details */}
      <div className="col-6">
       
          <CurrentPost data={props.data} />
       
      </div>
    </div>
  );
};

export default PostList;
