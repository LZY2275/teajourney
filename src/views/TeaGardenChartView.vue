<template>
    <div class="tea-province">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div style="display: flex;">
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
        title:'各省份茶数据',
        //cell_ratio : 0.026836,
      };
    },    
    mounted() {
      this.createPie();
    },    
    methods:{
      createPie(){
        let myChart = this.$echarts.init(document.getElementById("pie"), null, { renderer: 'svg' });
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
              { name: '2022年', max: 6500 },
              { name: '2021年', max: 16000 },
              { name: '2020年', max: 30000 },
              { name: '2019年', max: 38000 },
              { name: '2018年', max: 52000 },
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
              radius: ['43%', '90%'],
              center: ['51%', '50%'],
              // adjust the start angle
              startAngle: 90,
              label: {
                show: false,
              },
              itemStyle: {
                borderRadius: 15,
                borderColor: '#FFFEF2',
                borderWidth: 5
              },
              data: [
                { 
                  value: 1, 
                  name: '平均数' ,
                  itemStyle: {
                    color: 'rgba(50,132,110,0.9)',
                  },
                  label: {
                    show: false,
                    position: 'inside',
                  } 
                },
                { 
                  value: 1, 
                  name: '中位数' ,
                  itemStyle: {
                    color: 'rgba(50,132,110,0.7)',
                  },
                  label: {
                    show: false,
                    position: 'inside',
                  } 
                },
                { 
                  value: 1, 
                  name: '方差' ,
                  itemStyle: {
                    color: 'rgba(50,132,110,0.5)',
                  },
                  label: {
                    show: false,
                    position: 'inside',
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
              // tooltip: {
              //   trigger: 'item',
              //   position: 'right',
              //   formatter: function(params) {
              //     return `<div style="text-align: left">${params.seriesName}<br>${params.marker} ${params.name}: ${params.value}</div>`;
              //   },
              // },
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
                  name: '近5年数据对比',
                  value: [5000, 14000, 28000, 26000, 42000],
                }
              ]
            }
          ]
        };
        myChart.setOption(option);

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
    height: 290px;
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