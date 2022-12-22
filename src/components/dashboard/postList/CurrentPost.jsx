import React, { useContext } from "react";
import { ThemeContext } from "../../../context";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { analizePost, scorePost } from "../../../slices/analizisPost";
import ContentLoader from "react-content-loader";
import { BsQuestionLg } from "react-icons/bs";

const CurrentPost = (props) => {
  const [state, dispatch] = useContext(ThemeContext);
  let currentPost = state.currentPost;
  const dispatchRedux = useDispatch();
  let analizispostMsg = useSelector(
    (state) => state.analizePost.currentPost.analizis
  );
  let analizispostLoading = useSelector(
    (state) => state.analizePost.loadingAnalizis,
    shallowEqual
  );
  let curretPostRedux = useSelector(
    (state) => state.analizePost.currentPost,
    shallowEqual
  );

  let postScore = curretPostRedux.postScore ? curretPostRedux.postScore.trim() : "?"
    console.log(postScore === "2")

  let prompt = `Explícame, comenta con no mas de 80 palabras
     los  resultados de este post de facebook que obtuvo los siguientes resultados: 
     likes: ${curretPostRedux?.reactions}, 
     comentarios: ${curretPostRedux?.comments},
     compartidos: ${curretPostRedux?.shares}
     link clicks: ${curretPostRedux?.linkclicks}
     impresiones: ${curretPostRedux?.impressions} 
     alcance: ${curretPostRedux?.impressionsUnique},`;

  let prompt_puntuacion = `dame una  puntuacion de 0 a 3 con numeros enteros sobre
   los  resultados de este post de facebook que obtuvo los siguientes datos:
   likes: ${curretPostRedux?.reactions},
   comentarios: ${curretPostRedux?.comments},
   compartidos: ${curretPostRedux?.shares}
   link clicks: ${curretPostRedux?.linkclicks}
   impresiones: ${curretPostRedux?.impressions}
   alcance: ${curretPostRedux?.impressionsUnique},`;
  
  function handleOnAnalizisPost() {
    dispatchRedux(analizePost(prompt));
    dispatchRedux(scorePost(prompt_puntuacion));
  }

  if (curretPostRedux && props.data) {
    const event = new Date(curretPostRedux.timestamp);
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
                        curretPostRedux.picture
                          ? curretPostRedux.picture
                          : curretPostRedux.imageUrl
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
                        curretPostRedux.type === "photo" ? (
                          <span>
                            {" "}
                            <i class="fa-light fa-image"></i>{" "}
                          </span>
                        ) : curretPostRedux.type === "video" ? (
                          <span>
                            {" "}
                            <i class="fa-light fa-film"></i>{" "}
                          </span>
                        ) : curretPostRedux.type === "album" ? (
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

                      <span> {curretPostRedux.type} </span>
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
                      {
                      
                      (() => {
                              switch (postScore) {
                                case "1":
                                  return  <i class="fa-light fa-star"></i>
                                case "2" :
                                  return (
                                    <>
                                    <i class="fa-light fa-star"></i>
                                    <i class="fa-light fa-star"></i>
                                    </>
                                  )
                                case "3":
                                  return (
                                    <>
                                    <i class="fa-light fa-star"></i>
                                    <i class="fa-light fa-star"></i>
                                    <i class="fa-light fa-star"></i>
                                    </>
                                  )
                                default:
                                  return (
                                    <BsQuestionLg/>
                                  )
                              }
                            })()}
                      </span>
                      <span className="score_post_name">
                        <span>Puntuación Post</span>
                      </span>
                    </div>
                  </div>
                </div>

                {!analizispostMsg ? (
                  analizispostLoading ? (
                    <div className="main_analizis_post">
                      <div className="analisys_post_text">
                        <div className="analisys_post_description">
                        <ContentLoader 
    speed={2}
    width={466}
    height={192}
    viewBox="0 0 466 192"
    backgroundColor="#d2e5f3"
    foregroundColor="#c9d8e4"
    {...props}
  >
    <rect x="109" y="48" rx="3" ry="3" width="53" height="11" /> 
    <rect x="169" y="48" rx="3" ry="3" width="72" height="11" /> 
    <rect x="0" y="48" rx="3" ry="3" width="100" height="11" /> 
    <rect x="0" y="71" rx="3" ry="3" width="37" height="11" /> 
    <rect x="0" y="23" rx="3" ry="3" width="140" height="11" /> 
    <rect x="148" y="23" rx="3" ry="3" width="173" height="11" /> 
    <rect x="331" y="24" rx="0" ry="0" width="221" height="11" /> 
    <rect x="252" y="50" rx="0" ry="0" width="215" height="11" /> 
    <rect x="47" y="72" rx="0" ry="0" width="192" height="10" /> 
    <rect x="247" y="71" rx="0" ry="0" width="150" height="11" /> 
    <rect x="409" y="72" rx="0" ry="0" width="52" height="10" /> 
    <rect x="-1" y="93" rx="0" ry="0" width="183" height="11" /> 
    <rect x="200" y="95" rx="0" ry="0" width="46" height="11" /> 
    <rect x="257" y="94" rx="0" ry="0" width="139" height="12" /> 
    <rect x="0" y="115" rx="0" ry="0" width="87" height="11" /> 
    <rect x="105" y="117" rx="0" ry="0" width="122" height="11" /> 
    <rect x="239" y="118" rx="0" ry="0" width="228" height="12" /> 
    <rect x="-1" y="139" rx="0" ry="0" width="128" height="10" /> 
    <rect x="145" y="140" rx="0" ry="0" width="74" height="10" /> 
    <rect x="240" y="140" rx="0" ry="0" width="83" height="11" /> 
    <rect x="343" y="141" rx="0" ry="0" width="113" height="11" /> 
    <rect x="0" y="160" rx="0" ry="0" width="66" height="11" /> 
    <rect x="89" y="161" rx="0" ry="0" width="168" height="12" /> 
    <rect x="269" y="162" rx="0" ry="0" width="205" height="11" /> 
    <rect x="-3" y="181" rx="0" ry="0" width="154" height="13" /> 
    <rect x="173" y="181" rx="0" ry="0" width="56" height="14" /> 
    <rect x="242" y="182" rx="0" ry="0" width="88" height="15" /> 
    <rect x="339" y="182" rx="0" ry="0" width="133" height="12" />
  </ContentLoader>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="main_analizis_post">
                      <div className="analisys_post">
                        <div className="analisys_post_description">
                          <span>
                            <div class="CurrentPostButton">
                              <div className="analizis_button_icon">
                                <i class="fa-light fa-user-robot"></i>
                              </div>
                              <div
                                className="analizis_button"
                                onClick={handleOnAnalizisPost}
                              >
                                <span>Analizar Post</span>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div className="text_post_analizis_about">
                          <span>
                            Análisis de datos mediante Inteligencia artifical.
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
