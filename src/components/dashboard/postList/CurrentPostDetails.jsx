import React from "react";
import { useSelector, shallowEqual } from "react-redux";;

const CurrentPostDetails = () => {

    let curretPostRedux = useSelector(
      (state) => state.analizePost.currentPost,
      shallowEqual
    );
  



  return (
    <div className="row table_current_post">
                {(() => {
                  if (curretPostRedux.reactions !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                            <i class="fa-light fa-heart"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.reactions}
                          </span>
                          <span className="post_description_likes_title">
                            Me gusta
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}

                {(() => {
                  if (curretPostRedux.comments !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                          <i class="fa-light fa-message-middle"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.comments}
                          </span>
                          <span className="post_description_likes_title">
                            Comentarios
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}

                {(() => {
                  if (curretPostRedux.shares !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                          <i class="fa-light fa-share"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.shares}
                          </span>
                          <span className="post_description_likes_title">
                            Compartidos
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}
              {(() => {
                  if (curretPostRedux.clicks !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                          <i class="fa-light fa-arrow-pointer"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.clicks}
                          </span>
                          <span className="post_description_likes_title">
                            Clicks
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}
                        {(() => {
                  if (curretPostRedux.linkclicks !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                          <i class="fa-light fa-link"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.linkclicks}
                          </span>
                          <span className="post_description_likes_title">
                            Cliks enlace
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}
                                {(() => {
                  if (curretPostRedux.videoViews !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                            <i class="fa-light fa-play"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.videoViews}
                          </span>
                          <span className="post_description_likes_title">
                           Reproducción
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}
                 {(() => {
                  if (curretPostRedux.impressions !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                            <i class="fa-light fa-eye"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.impressions}
                          </span>
                          <span className="post_description_likes_title">
                           Impresiones
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  if (curretPostRedux.impressionsUnique !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                          <i class="fa-regular fa-user"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.impressionsUnique}
                          </span>
                          <span className="post_description_likes_title">
                           Alcance
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}
                       {(() => {
                  if (curretPostRedux.engagement !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                          <i class="fa-light fa-face-smile"></i>
                          </span>
                          <span className="post_description_likes_number">
                             {Math.round(curretPostRedux.engagement * 100) / 100}
                          </span>
                          <span className="post_description_likes_title">
                            Engadment
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}
                   {(() => {
                  if (curretPostRedux.spend !== undefined) {
                    return (
                      <div className="post_description_items">
                        <div className="post_description_item">
                          <span className="post_description_icon">
                          <i class="fa-light fa-dollar-sign"></i>
                          </span>
                          <span className="post_description_likes_number">
                            {curretPostRedux.spend} €
                          </span>
                          <span className="post_description_likes_title">
                            Gasto
                          </span>
                        </div>
                      </div>
                    );
                  }
                })()}
                </div>
  )
}

export default CurrentPostDetails