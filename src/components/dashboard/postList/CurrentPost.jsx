import React, { useContext } from "react";
import { ThemeContext } from "../../../context";

const CurrentPost = (props) => {
  const [state, dispatch] = useContext(ThemeContext);
  let currentPost = state.currentPost;

  if (currentPost && props.data) {
    const event = new Date(currentPost.timestamp);
    const options = { weekday: "short", month: "short", day: "numeric" };
    const fecha = event.toLocaleDateString("es-ES", options);

    let details = props.details;

    return (
      <div className="main_post_list_description">
        <div className="post_list_description">
          <div className="row">
            <div className="col-12">
              <div className="row header_post_description">
                <div className="col-3">
                  <div className="description_image">
                    <img
                      src={
                        currentPost.picture
                          ? currentPost.picture
                          : currentPost.imageUrl
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div className="post_description_date">
                    <span>{fecha}</span>
                  </div>
                  <div className="current_post_type">
                    <div className="type_post_item">
                      <span>
                        <i class="fa-light fa-square-plus"></i>
                      </span>
                      <span>Post</span>
                    </div>
                    <div className="type_post_item">
                      {
                        /* switch type posts */
                        currentPost.type === "photo" ? (
                          <span>
                            {" "}
                            <i class="fa-light fa-image"></i>{" "}
                          </span>
                        ) : currentPost.type === "video" ? (
                          <span>
                            {" "}
                            <i class="fa-light fa-film"></i>{" "}
                          </span>
                        ) : currentPost.type === "album" ? (
                          <span>
                            {" "}
                            <i class="fa-light fa-images"></i>{" "}
                          </span>
                        ) : (
                          <span>
                            {" "}
                            <i class="fa-light fa-square-plus"></i>{" "}
                          </span>
                        )
                      }

                      <span> {currentPost.type} </span>
                    </div>
                  </div>
                  <div className="current_post_link">
                    <a href="#" target="_blank">
                      Ver publicación
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="main_score_post">
                    <div className="score_post">
                      <span className="score_post_starts">
                        <i class="fa-light fa-star"></i>
                        <i class="fa-light fa-star"></i>
                        <i class="fa-light fa-star"></i>
                      </span>
                      <span className="score_post_name">
                        <span>Puntuación Post</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="analisys_post">
                  <div className="analisys_post_name">
                    <span>Análisis del post</span>
                  </div>
                  <div className="analisys_post_description">
                    <span>
                      Este post de facebook fue muy exitoso, ya que obtuvo 10
                      reacciones, 10 comentarios, 120 clicks y una gran cantidad
                      de impresiones. Además, fue visto y alcanzado por 324572
                      personas. El porcentaje de engagament fue también alto,
                      78,9%, lo cual es muy bueno. Esto significa que los
                      usuarios se sintieron interesados en el post y
                      respondieron lo que se les pidió. Lo único que no obtuvo
                      resultados fue el click en los links. En general, el post
                      fue un éxito y mejoró la imagen de la marca.
                    </span>
                  </div>
                </div>
              </div>
           
            <div className="row table_current_post">
              {Object.keys(details).map((item) => {
                return (
                  <div className="col-2 post_description_items">
                    <div className="post_description_item">
                      <span className="post_description_likes_number">
                        {Math.round(details[item] * 100) / 100}
                      </span>
                      <span className="post_description_likes_title">
                        {item}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
};

export default CurrentPost;
