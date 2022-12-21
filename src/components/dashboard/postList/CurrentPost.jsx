import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context";
import openAi from "../../../services/openAi";
import ContentLoader from "react-content-loader";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { analizePost } from "../../../slices/analizisPost";

const CurrentPost = (props) => {
  const [state, dispatch] = useContext(ThemeContext);
  let currentPost = state.currentPost;
  const dispatchRedux = useDispatch();
  let analizispostMsg = useSelector(
    (state) => state.analizePost.currentPost.analizis
  );
  let analizispostLoading = useSelector((state) => state.analizePost.loading);
  let curretPostRedux = useSelector((state) => state.analizePost.currentPost);

  let prompt = `Explícame, comenta con no mas de 80 palabras y puntúame de 0 a 3 
     los  resultados de este post de facebook que obtuvo los siguientes resultados: 
     likes: ${currentPost?.reactions}, 
     comentarios: ${currentPost?.comments},
     compartidos: ${currentPost?.shares}
     link clicks: ${currentPost?.linkclicks}
     impresiones: ${currentPost?.impressions} 
     alcance: ${currentPost?.impressionsUnique},`;

  // let prompt =
  // `dame una  puntuacion de 0 a 3 con numeros enteros sobre
  //  los  resultados de este post de facebook que obtuvo los siguientes datos:
  //  likes: ${currentPost?.reactions},
  //  comentarios: ${currentPost?.comments},
  //  compartidos: ${currentPost?.shares}
  //  link clicks: ${currentPost?.linkclicks}
  //  impresiones: ${currentPost?.impressions}
  //  alcance: ${currentPost?.impressionsUnique},`;

  function handleOnAnalizisPost() {
    dispatchRedux(analizePost(prompt));
  }

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
                      <span> Ir a publicación</span>
                      <i class="fa-light fa-share-from-square"></i>
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

                {analizispostMsg === undefined ? (
                  analizispostLoading ? (
                    <ContentLoader viewBox="0 0 400 130" height={130} width={400} >
                    <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
                    <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
                    <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
                    <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
                    <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
                    <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
                  </ContentLoader>
                  ) : (
                    <div className="main_analizis_post">
                      <div className="analisys_post">
                        <div className="analisys_post_description">
                          <span>
                            <div class="CurrentPostButton">
                              <button
                                className="analisys_post_name"
                                onClick={handleOnAnalizisPost}
                              >
                                Analizar
                              </button>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="main_analizis_post">
                    <div className="analisys_post_text">
                      <div className="analisys_post_description">
                        <span>{analizispostMsg}</span>
                      </div>
                    </div>
                  </div>
                )}
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
