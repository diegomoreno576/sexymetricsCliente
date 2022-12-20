import React, { useState, useEffect, Fragment, useContext } from "react";
import Banner from "../assets/img/banner_superior.png";
import "../assets/styles/components/PageBanner.css";
import { SiFacebook } from "react-icons/si";
import useData from "../hooks/useData";
import openAi from "../services/openAi";
import { ThemeContext } from "../context";

//const openai = new OpenAIAPI("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");

const PageBanner = (props) => {
  const [msgPage, setmsgPage] = useState();
  const [state, dispatch] = useContext(ThemeContext);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const start = state.TimeStart;
  const end = state.TimeEnd;

  const startPast = state.TimeStartPast;
  const endPast = state.TimeEndPast;

  const Avatar = useData(`/admin/profile`);

  //FbBody
  const fbbody = useData(`/stats/aggregations/Facebook`, start, end);

  //FbBodyPast
  const fbbodyPast = useData(
    `/stats/aggregations/Facebook`,
    startPast,
    endPast
  );
  let ganados = fbbody.Follows;
  let ganadosPast = fbbodyPast.Follows;

  let start_year = start[0] + start[1] + start[2] + start[3];
  let start_month = start[4] + start[5];
  let start_day = start[6] + start[7];

  let end_year = end[0] + end[1] + end[2] + end[3];
  let end_month = end[4] + end[5];
  let end_day = end[6] + end[7];

  const meses = [
    "Ene",
    "Febr",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  let curret_start_time =
    start_day + " " + meses[start_month - 1] + " " + start_year;
  let curret_end_time = end_day + " " + meses[end_month - 1] + " " + end_year;

  let prompt = `
  Compara y comenta con no mas de 150 palabras y en puntuame de 0 sobre 3  los datos de crecimiento de mi página de facebook entre  las fechas :

  ${curret_start_time} a ${curret_end_time} con
34 Post
 Me gusta 35652
 ${ganados}  seguisores nuevos
 13 seguidores perdidos 

contra la fecha  ${startPast} al ${endPast} con 
 39 Post
 Me gusta 35498
 ${ganadosPast} seguisores nuevos
 14 seguidores perdido`;

  useEffect(() => {
    const getResponse = async () => {
      const response = await openAi(prompt);
      setmsgPage(response.choices[0].text);
    };
    getResponse();
  }, [start, end]);

  return (
    <div className="container main_page_banner">
      <div className=" page_banner">
        <div className="row page_items">
          <div className="main_score_page">
            <div className="score_page">
              <span className="score_page_starts">
                <i class="fa-light fa-star"></i>
                <i class="fa-light fa-star"></i>
                <i class="fa-light fa-star"></i>
              </span>
            </div>
          </div>
          <div className="seccion_title">
            <div className="seccionTitle">
              <span>Puntuación {props.title} </span>
            </div>
          </div>
          <div className="col-12 seccion_description">
            <span>{msgPage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
