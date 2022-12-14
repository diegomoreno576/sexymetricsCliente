import React,{useEffect} from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import "../../assets/styles/components/MixedGrafica.css";
import { setTooltipData, setCurrentTooltipPosts }  from '../../slices/customTooltip' 
import { useDispatch, useSelector, shallowEqual } from "react-redux";

function MixedGrafica(props) {
  //
  const dispatch = useDispatch();
  const customTooltip = useSelector((state) => state.customTooltip.tooltip_data, shallowEqual);
  const post_list = useSelector((state) => state.analizePost.post_list, shallowEqual);





  

  return (
    <div className="ChartsMixed">
      
      <Chart
        series={props.MixedData}
        options={{
          chart: {
            id: props.id,
            stacked: false,
          },
          stroke: {
            width: [1, 1, 4],
          },
          dataLabels: {
            enabled: false,
          },
          labels: props.Timeline,
          
          xaxis: {
            type: "datetime",
            labels: {
              datetimeFormatter: {
                day: "dd",
              },
            },
          },
     
          stroke: {
            width: 5,
            curve: "smooth",
            lineCap: "round",
          },
          markers: {
            size: 0,
          },
          grid: {
            borderColor: "#333333",
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: props.colors,
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              gradientToColors: ["#42a5f5"],
              shadeIntensity: 1,
              type: "horizontal",
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          yaxis: [
            {
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
                color: "white",
              },
              lines: {
                show: false,
              },
              labels: {
                style: {
                  colors: "white",
                },
                minWidth: 40,
              },
              title: {
                text: "Me gusta",
                style: {
                  color: "white",
                },
              },
            },
            {
              seriesName: "Revenue",
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#FEB019",
              },
              labels: {
                style: {
                  colors: "#FEB019",
                },
              },
              title: {
                text: "Revenue (thousand crores)",
                style: {
                  color: "#FEB019",
                },
              },
            },
          ],
          tooltip: {
            custom: function({seriesIndex, dataPointIndex, w}) {

              let customTooltip = {
               data: [],
               name:[],
              pointTime: [],
              }
             
              for (var i = 0; i < w.globals.initialSeries.length; i++) {
               var data = w.globals.initialSeries[i].data[dataPointIndex];
               var name = w.globals.initialSeries[i].name;
               var pointTime = w.globals.seriesX[0][dataPointIndex];
             

                customTooltip.data.push(data)
                customTooltip.name.push(name)
                customTooltip.pointTime.push(pointTime)

              }
              dispatch(setTooltipData(customTooltip))

              const event2 = new Date(customTooltip.pointTime[0]);
              const options2 = { weekday: "short", month: "short", day: "numeric" };
              const fecha2 = event2.toLocaleDateString("es-ES", options2);
          
            
            const post_list_by_date = post_list.filter((post) => {
              const post_date = new Date(post.created);
              const options = { weekday: "short", month: "short", day: "numeric" };
              const fecha = post_date.toLocaleDateString("es-ES", options);
              
              return fecha === fecha2;
            });
            
           
              dispatch(setCurrentTooltipPosts(post_list_by_date));
          
              },
              enabled: true,
              enabledOnSeries: undefined,
              shared: true,
              followCursor: true,
              intersect: false,
              inverseOrder: false,
              theme: "dark",
              fillSeriesColor: false,
              style: {
                fontSize: "12px",
                fontFamily: undefined,
              },
  
              x: {
                show: true,
                format: "dd MMM",
                formatter: undefined,
              },
              y: {
                formatter: undefined,
                title: {
                  formatter: (seriesName) => seriesName,
                },
              },
              z: {
                formatter: undefined,
                title: "Size: ",
              },

            
              
          },
          legend: {
            show: false,
            horizontalAlign: "left",
            offsetX: 40,
          },
        }}
        type={props.type}
        height={350}
      />
    </div>
  );
}

export default MixedGrafica;
