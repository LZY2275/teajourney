<template>
    <div class="tea-province">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div>
        <div id="pie" class="pie"></div>
      </div>
    </div>
</template>
  
<script>
import * as echarts from "echarts/core";
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
  
  echarts.use([SVGRenderer, CanvasRenderer]);

  export default {
    name: 'TeaGardenChartView',
    data(){
      return{
        title:'茶园面积图',
        //cell_ratio : 0.026836,
      };
    },    
    mounted() {
      this.createPie();
    },    
    methods:{
      createPie(){
        let myChart = this.$echarts.init(document.getElementById("pie"), null, { renderer: 'svg' });
        let myCharts = this.$echarts.init(document.getElementById("pie"), null, { renderer: 'svg' });
        let radarData = [
          [149.31, 123.13, 104.08, 100.12, 93.014],
          [307.52, 295.73, 286.32, 280.25, 254.51],
          [310.82, 298.13, 274.01, 266.31, 253.31],
          [310.51, 307.71, 307.51, 306.01, 298.81],
          [708.34, 714.61, 716.31, 698.71, 684.31],
          [756.92, 720.25, 709.71, 699.91, 666.81],
          [151.73, 142.44, 118.23, 115.61, 115.61],
          [51.012, 51.454, 50.829, 50.843, 50.639],
          [605.38, 596.21, 586.01, 575.01, 545.01],
          [352.05, 341.22, 335.41, 327.81, 310.81],
          [235.73, 233.66, 233.01, 215.41, 207.01],
          [558.03, 545.01, 513.71, 495.01, 449.01]
        ];
        let option = {
          // title: {
          //   text: '茶园面积',
          //   left: '1%',
          //   top: '1%',
          //   textStyle: {
          //     color: '#000000',
          //     fontSize: 30
          //   }
          // },
          tooltip: {
            //trigger: 'item'
          },
          // legend: {
          //   top: '5%',
          //   left: 'center',
          //   // doesn't perfectly work with our tricks, disable it
          // // selectedMode: false
          // },
          radar: {
            radius: '40%', 
            // shape: 'circle',
            indicator: [
              { name: '2022年', max: 760 },
              { name: '2021年', max: 760 },
              { name: '2020年', max: 760 },
              { name: '2019年', max: 760 },
              { name: '2018年', max: 760 },
            ],
            axisName: {
              color: 'rgb(255, 255, 255)'
            },
            splitNumber: 5,
            splitLine: {
              lineStyle: {
                color: [
                  'rgba(129,195,170, 1)',
                  'rgba(129,195,170, 1)',
                  'rgba(129,195,170, 0.4)',
                  'rgba(129,195,170, 0.6)',
                  'rgba(129,195,170, 0.8)',
                  'rgba(129,195,170, 1)'
                ].reverse()
              }
            },
            splitArea: {
              show: true
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(70,144,124, 0.4)'
              }
            }
          },
          series: [
            {
              //name: 'Access From',
              type: 'pie',
              radius: ['50%', '60%'],
              center: ['50%', '50%'],
              // adjust the start angle
              startAngle: 270,
              label: {
                show: true,
                formatter(param) {
                  // correct the percentage
                  return param.name;
                }
              },
              labelLine: {
                length: 5, // 调整标签线的长度
                length2: 5, // 调整标签线的长度
              },
              itemStyle: {
                borderRadius: 50,
                borderColor: '#FFFEF2',
                borderWidth: 2
              },
              tooltip:{
                show: false,
              },
              data: [
                { 
                  value: 1, 
                  name: '粤' ,
                  itemStyle: {
                    color: '#81C3AA',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '皖' ,
                  itemStyle: {
                    color: '#ED657F',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '湘' ,
                  itemStyle: {
                    color: '#2D2D2D',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '浙' ,
                  itemStyle: {
                    color: '#353880',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '黔' ,
                  itemStyle: {
                    color: '#E57B3F',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '滇' ,
                  itemStyle: {
                    color: '#32846E',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                {
                  // make an record to fill the bottom 50%
                  value: 6,
                  itemStyle: {
                    color: 'none',
                    decal: {
                      symbol: 'none'
                    },
                    borderWidth: 0,
                  },
                  label: {
                    show: false
                  }
                }
              ]
            },
            {
              //name: 'Access From',
              type: 'pie',
              radius: ['80%', '90%'],
              center: ['50%', '50%'],
              // adjust the start angle
              startAngle: 270,
              label: {
                show: true,
                formatter(param) {
                  // correct the percentage
                  return param.name;
                }
              },
              labelLine: {
                length: 5, // 调整标签线的长度
                length2: 5, // 调整标签线的长度
              },
              itemStyle: {
                borderRadius: 50,
                borderColor: '#FFFEF2',
                borderWidth: 2
              },
              tooltip:{
                show: false,
              },
              data: [
                { 
                  value: 1, 
                  name: '桂' ,
                  itemStyle: {
                    color: '#BE1224',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '苏' ,
                  itemStyle: {
                    color: '#5865B1',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '川' ,
                  itemStyle: {
                    color: '#289AC7',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '闽' ,
                  itemStyle: {
                    color: '#F7B527',
                  },
                  label: {
                    show: true,
                    position: 'left',
                  }
                },
                { 
                  value: 1, 
                  name: '陕' ,
                  itemStyle: {
                    color: '#CACDEA',
                  },
                  label: {
                    show: true,
                  }
                },
                { 
                  value: 1, 
                  name: '鄂' ,
                  itemStyle: {
                    color: '#EC2F20',
                  },
                  label: {
                    show: true,
                  }
                },
                {
                  // make an record to fill the bottom 50%
                  value: 6,
                  selected: false,
                  itemStyle: {
                    color: 'none',
                    decal: {
                      symbol: 'none'
                    },
                    borderWidth: 0,
                  },
                  label: {
                    show: false
                  }
                }
              ]
            },
            {
              //name: 'Access From',
              type: 'pie',
              radius: ['45%', '95%'],
              center: ['51%', '50%'],
              roseType: 'area',
              // adjust the start angle
              startAngle: 90,
              label: {
                show: true,
                position: 'inside',
                fontWeight: 500,
                fontFamily: 'Arial'
              },
              itemStyle: {
                borderRadius: 15,
                borderColor: '#FFFEF2',
                borderWidth: 5
              },
              data: [
                { 
                  value: 10, 
                  name: '平均数' ,
                  itemStyle: {
                    color: 'rgba(50,132,110,0.9)',
                  },
                },
                { 
                  value: 10, 
                  name: '中位数' ,
                  itemStyle: {
                    color: 'rgba(50,132,110,0.7)',
                  },
                },
                { 
                  value: 10, 
                  name: '方差' ,
                  itemStyle: {
                    color: 'rgba(50,132,110,0.5)',
                  },
                },
                {
                  // make an record to fill the bottom 50%
                  value: 3,
                  itemStyle: {
                    // stop the chart from rendering this piece
                    color: 'none',
                    decal: {
                      symbol: 'none'
                    },
                    borderWidth: 0,
                  },
                  label: {
                    show: false
                  }
                },
                {
                  // make an record to fill the bottom 50%
                  value: 3,
                  itemStyle: {
                    // stop the chart from rendering this piece
                    color: 'none',
                    decal: {
                      symbol: 'none'
                    },
                    borderWidth: 0,
                  },
                  label: {
                    show: false
                  }
                },
                {
                  // make an record to fill the bottom 50%
                  value: 3,
                  itemStyle: {
                    // stop the chart from rendering this piece
                    color: 'none',
                    decal: {
                      symbol: 'none'
                    },
                    borderWidth: 0,
                  },
                  label: {
                    show: false
                  }
                }
              ]
            },
            {
              //name: 'Budget vs spending',
              type: 'radar',
              z: 10,
              label: {
                show: false,
              },
              tooltip: {
                trigger: 'item',
                position: 'right',
              },
              itemStyle: {
                color: 'rgba(106,196,130, 1)', // 设置点的颜色
              },
              lineStyle: {
                color: 'rgba(106,196,130, 0.8)', // 设置线条的颜色
              },
              areaStyle: {
                //color: 'rgba(106,196,130, 0.6)', // 设置区域的颜色
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: 'rgba(106,196,130, 0.1)',
                    offset: 0
                  },
                  {
                    color: 'rgba(106,196,130, 0.9)',
                    offset: 1
                  },
                  {
                    color: 'rgba(106,196,130, 0.5)',
                    offset: 0.5
                  },
                ])
              },
              emphasis: {
                // 设置高亮样式
                lineStyle: {
                  width: 3,
                },
                itemStyle: {
                  color: 'rgba(97,185,127)',
                },
                areaStyle: {
                  //color: 'rgba(106,196,130, 0.6)', // 设置区域的颜色
                  color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: 'rgba(106,196,130, 0.3)',
                      offset: 0
                    },
                    {
                      color: 'rgba(106,196,130, 1)',
                      offset: 1
                    },
                    {
                      color: 'rgba(106,196,130, 0.7)',
                      offset: 0.5
                    },
                  ])
                },
              },
              data: [
                {
                  name: '近5年茶园面积对比(万亩)',
                  value: [0,0,0,0,0],
                }
              ]
            }
          ]
        };
        myChart.setOption(option);
        // Define the event handler for the first pie chart
        myChart.on('click', function (params) {
          if (params.componentType === 'series') {
            if (params.seriesType === 'pie' && params.name) {
              // Update the data for the radar chart based on the clicked pie chart data
              if (params.name === '粤') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[0];
                let avg = 113.93;
                let mid = 104.08;
                let v = 412.32;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '皖') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[1];
                let avg = 284.87;
                let mid = 286.32;
                let v = 315.23;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '湘') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[2];
                let avg = 280.52;
                let mid = 274.01;
                let v = 442.58;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '浙') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[3];
                let avg = 306.11;
                let mid = 307.51;
                let v = 15.436;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '黔') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[4];
                let avg = 704.46;
                let mid = 708.34;
                let v = 139.52;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '滇') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[5];
                let avg = 710.72;
                let mid = 709.71;
                let v = 854.25;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '桂') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[6];
                let avg = 128.72;
                let mid = 118.23;
                let v = 234.29;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '苏') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[7];
                let avg = 50.955;
                let mid = 50.843;
                let v = 0.0761;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '川') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[8];
                let avg = 581.52;
                let mid = 586.01;
                let v = 436.12;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '闽') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[9];
                let avg = 333.46;
                let mid = 335.41;
                let v = 190.91;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '陕') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[10];
                let avg = 224.96;
                let mid = 233.01;
                let v = 133.98;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              } else if (params.name === '鄂') {
                let option = myChart.getOption();
                option.series[3].data[0].value = radarData[11];
                let avg = 512.15;
                let mid = 513.71;
                let v = 1493.5;
                option.series[2].data[0].value = avg;
                option.series[2].data[1].value = mid;
                option.series[2].data[2].value = v;
                myChart.setOption(option);
              }
  
            }
          }
        });
        //屏幕自适应
        window.addEventListener('resize', function (){
          myChart.resize();
        });
      }
    }
  }
</script>

<style scoped>
  .pie{
    width: 100%; 
    height: 32vh;
  }
  .title{
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    color: var(--td-brand-color-6);
    line-height: 49px;
    padding: 0 10px;
    margin-left: 10px;
  }
</style>