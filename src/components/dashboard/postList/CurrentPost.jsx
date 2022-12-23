import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import CurrentPostDetails from "./CurrentPostDetails";

const CurrentPost = () => {
 
  // let analizispostMsg = useSelector(
  //   (state) => state.analizePost.currentPost.analizis
  // );
  // let analizispostLoading = useSelector(
  //   (state) => state.analizePost.loadingAnalizis,
  //   shallowEqual
  // );
  let curretPostRedux = useSelector(
    (state) => state.analizePost.currentPost,
    shallowEqual
  );
  // let postScore = curretPostRedux.postScore ? curretPostRedux.postScore.trim() : "?"






  // let prompt = `Explícame, comenta con no mas de 80 palabras
  //    los  resultados de este post de facebook que obtuvo los siguientes resultados: 
  //    likes: ${curretPostRedux?.reactions}, 
  //    comentarios: ${curretPostRedux?.comments},
  //    compartidos: ${curretPostRedux?.shares}
  //    link clicks: ${curretPostRedux?.linkclicks}
  //    impresiones: ${curretPostRedux?.impressions} 
  //    alcance: ${curretPostRedux?.impressionsUnique},`;

  // let prompt_puntuacion = `dame una  puntuacion de 0 a 3 con numeros enteros sobre
  //  los  resultados de este post de facebook que obtuvo los siguientes datos:
  //  likes: ${curretPostRedux?.reactions},
  //  comentarios: ${curretPostRedux?.comments},
  //  compartidos: ${curretPostRedux?.shares}
  //  link clicks: ${curretPostRedux?.linkclicks}
  //  impresiones: ${curretPostRedux?.impressions}
  //  alcance: ${curretPostRedux?.impressionsUnique},`;

  // function handleOnAnalizisPost() {
  //   dispatchRedux(analizePost(prompt));
  //   dispatchRedux(scorePost(prompt_puntuacion));
  // }

  if (curretPostRedux) {
    const event = new Date(curretPostRedux.timestamp);
    const options = { weekday: "short", month: "short", day: "numeric" };
    const fecha = event.toLocaleDateString("es-ES", options);





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
                <div className="current_post_header_details col-9">
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
              </div>

             <CurrentPostDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentPost;
