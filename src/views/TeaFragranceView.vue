<template>
  <div>
    <div class="title">
      <p>{{ title }}</p>
    </div>
    <p class="sub-title" style="padding: 0;">TEA FRAGRANCE</p>
    <div class="content-container" style="margin-top: 12px;">
      <div class="note-container">
        <p>{{ $t('截至目前，已确认存在700多种茶叶芳香物质，但其核心成分仅约数十种。下表列出了一些主要成分以供参考。') }}</p>
        <p>{{ $t('普遍来说，发酵程度轻、受热程度低的茶叶，其香气特性的沸点更低，香型更靠前；而发酵程度高、受热程度高的茶叶则相反，沸点更高，香型更靠后。另外，由于黑茶类的发酵原理独特，通常带有陈香的特性。') }}</p>
      </div>
      <div class="chart-container">
        <div class="fragrance" id="fragrance"></div>
      </div>
    </div>

  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';

echarts.use([SVGRenderer, CanvasRenderer]);

export default {
  name: 'TeaFragranceView',
  data() {
    return {
      title: '茶韵山峦'
    };
  },
  watch: {
    //监听语言是否变化，若变化调用createPieChart()
    '$i18n.locale': {
      handler() {
        // 处理语言变化的逻辑
        this.handleResize()
      },
      immediate: true // 立即执行一次回调函数
    }
  },
  mounted() {

    this.createFragrance();
  },
  methods: {
    handleResize() {
      let myChart = this.$echarts.init(document.getElementById("fragrance"), null, { renderer: 'svg' });

      this.createFragrance();
    },
    createFragrance() {
      let myChart = this.$echarts.init(document.getElementById("fragrance"), null, { renderer: 'svg' });

      let option = {
        tooltip: {
          position: 'top',
          formatter: (params) => {
            // params 是一个对象，包含悬浮的相关信息
            var name = params.name; // 获取气泡的名称
            var color = params.color; // 获取气泡的颜色

            // 返回自定义的内容字符串
            return '<span style="color:' + color + '">●</span> ' + this.$t(name);
          }
        },
        xAxis: {
          type: 'value',
          min: 0,
          max: 15,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false,
            color: '#000000'
          },
          show: false
        },
        yAxis: {
          type: 'value',
          min: 0, // y 轴最小值
          max: 12, // y 轴最大值
          axisLine: {
            show: true, // 取消 y 轴的轴线
            lineStyle: {
              color: '#000000',
              width: 5
            }
          },
          splitLine: {
            show: false // 取消 y 轴的网格线
          },
          show: false
        },
        series: [
          {
            symbol: 'path://M152.5,232.5v-265a80,80,0,0,1,80-80h0a80,80,0,0,1,80,80v265a80,80,0,0,1-160,0Z',
            symbolSize: [30, 55],
            itemStyle: {
              // color: '#FFFEF2',
              borderColor: '#FFFEF2', // 设置边框颜色
              borderWidth: 1, // 设置边框宽度
              // shadowColor: 'rgba(0, 0, 0, 0.1)',
              // shadowBlur: 15080
            },
            label: {
              show: true,
              position: 'inside',
              formatter: function (params) {
                var name = params.data.name;
                var nameArr = name.split(''); // 将文字分割成单个字
                var result = '';
                result += '\n';
                for (var i = 0; i < nameArr.length; i++) {
                  result += nameArr[i] + '\n'; // 每个字后面加上换行符
                }
                return result;
              },
              textStyle: {
                fontSize: 14, // 设置字体大小
                //color: 'white', // 设置字体颜色
                fontWeight: 'bold',
                //fontStyle: 'oblique',
                fontFamily: 'monospace'
              }
            },
            tooltip: {
              show: true
            },
            z: 2,
            type: 'scatter',
            animation: true,
            data: [
              {
                name: '绿茶',
                symbolSize: [30, 80],
                value: [3, 10.5],
                itemStyle: {
                  color: '#D0DC89'
                },

              },
              {
                name: '西湖龙井',
                value: [4, 10],
                symbolSize: [30, 75],
                itemStyle: {
                  color: '#D0DC89'
                }
              },
              {
                name: '黄山毛峰',
                value: [5, 10.3],
                symbolSize: [30, 75],
                itemStyle: {
                  color: '#D0DC89'
                }
              },
              {
                name: '碧螺春',
                symbolSize: [30, 70],
                value: [6, 10.3],
                itemStyle: {
                  color: '#D0DC89'
                }
              },
              {
                name: '滇青',
                symbolSize: [30, 70],
                value: [7, 10.75],
                itemStyle: {
                  color: '#D0DC89'
                }
              },
              {
                name: '玉露',
                symbolSize: [30, 75],
                value: [8, 10.9],
                itemStyle: {
                  color: '#D0DC89'
                }
              },
              {
                name: '黄茶',
                symbolSize: [30, 85],
                value: [7, 8.85],
                itemStyle: {
                  color: '#E9CB6A'
                }
              },
              {
                name: '霍山黄芽',
                symbolSize: [30, 80],
                value: [8, 9],
                itemStyle: {
                  color: '#E9CB6A'
                }
              },
              {
                name: '蒙顶黄芽',
                symbolSize: [30, 75],
                value: [9, 8.7],
                itemStyle: {
                  color: '#E9CB6A'
                }
              },
              {
                name: '广东大叶青',
                symbolSize: [30, 90],
                value: [10, 8],
                itemStyle: {
                  color: '#E9CB6A'
                }
              },
              {
                name: '海马宫茶',
                symbolSize: [30, 75],
                value: [11, 8.3],
                itemStyle: {
                  color: '#E9CB6A'
                }
              },
              {
                name: '北港毛尖',
                symbolSize: [30, 75],
                value: [12, 8.5],
                itemStyle: {
                  color: '#E9CB6A'
                }
              },
              {
                name: '白茶',
                symbolSize: [30, 85],
                value: [10, 10],
                itemStyle: {
                  color: '#D9D9D9'
                }
              },
              {
                name: '白毫银针',
                symbolSize: [30, 85],
                value: [11, 10],
                itemStyle: {
                  color: '#D9D9D9'
                }
              },
              {
                name: '白牡丹',
                symbolSize: [30, 60],
                value: [12, 11],
                itemStyle: {
                  color: '#D9D9D9'
                }
              },
              {
                name: '寿眉',
                symbolSize: [30, 60],
                value: [12, 9.8],
                itemStyle: {
                  color: '#D9D9D9'
                }
              },
              {
                name: '贡眉',
                symbolSize: [30, 70],
                value: [13, 9.8],
                itemStyle: {
                  color: '#D9D9D9'
                }
              },
              {
                name: '黄山白茶',
                symbolSize: [30, 75],
                value: [14, 10.2],
                itemStyle: {
                  color: '#D9D9D9'
                }
              },
              {
                name: '乌龙茶',
                symbolSize: [30, 120],
                value: [7.5, 5.2],
                itemStyle: {
                  color: '#EC8924'
                }
              },
              {
                name: '铁观音',
                symbolSize: [30, 75],
                value: [8.5, 4.8],
                itemStyle: {
                  color: '#EC8924'
                }
              },
              {
                name: '北斗',
                symbolSize: [30, 80],
                value: [9.5, 5.5],
                itemStyle: {
                  color: '#EC8924'
                }
              },
              {
                name: '水仙',
                symbolSize: [30, 85],
                value: [10.5, 5.1],
                itemStyle: {
                  color: '#EC8924'
                }
              },
              {
                name: '肉桂',
                symbolSize: [30, 70],
                value: [11.5, 6.1],
                itemStyle: {
                  color: '#EC8924'
                }
              },
              {
                name: '大红袍',
                symbolSize: [30, 70],
                value: [11.5, 4.75],
                itemStyle: {
                  color: '#EC8924'
                }
              },
              {
                name: '红茶',
                symbolSize: [30, 110],
                value: [3, 2.5],
                itemStyle: {
                  color: '#C54522'
                }
              },
              {
                name: '祁门红茶',
                symbolSize: [30, 80],
                value: [5, 3],
                itemStyle: {
                  color: '#C54522'
                }
              },
              {
                name: '滇红',
                symbolSize: [30, 70],
                value: [6, 3.25],
                itemStyle: {
                  color: '#C54522'
                }
              },
              {
                name: '金骏眉',
                symbolSize: [30, 70],
                value: [6, 1.9],
                itemStyle: {
                  color: '#C54522'
                }
              },
              {
                name: '正山小种',
                symbolSize: [30, 75],
                value: [4, 2.25],
                itemStyle: {
                  color: '#C54522'
                }
              },
              {
                name: '黑茶',
                symbolSize: [30, 80],
                value: [8, 0.75],
                itemStyle: {
                  color: '#594445'
                }
              },
              {
                name: '六堡茶',
                symbolSize: [30, 75],
                value: [10, 0.9],
                itemStyle: {
                  color: '#594445'
                }
              },
              {
                name: '普洱茶',
                symbolSize: [30, 90],
                value: [9, 0.9],
                itemStyle: {
                  color: '#594445'
                }
              },
              {
                name: '泾阳茯砖茶',
                symbolSize: [30, 90],
                value: [13, 1],
                itemStyle: {
                  color: '#594445'
                }
              },
              {
                name: '安化黑茶',
                symbolSize: [30, 85],
                value: [11, 1.5],
                itemStyle: {
                  color: '#594445'
                }
              },
              {
                name: '千两茶',
                symbolSize: [30, 80],
                value: [12, 1.25],
                itemStyle: {
                  color: '#594445'
                }
              }
            ],
            markArea: {
              tooltip: { show: true },
              silent: true,
              label: {
                position: 'insideLeft',
                textStyle: {
                  fontSize: 15, // 设置字体大小
                  color: 'white', // 设置字体颜色
                  fontWeight: 'bold',
                  //fontStyle: 'oblique',
                  fontFamily: 'monospace'
                }
              },
              itemStyle: {
                borderWidth: 0,
                borderColor: '#FFFFFF',
                //borderRadius: 5,
              },
              data: [
                [
                  { valueDim: 'y' },
                  {
                    yAxis: 1,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#D5A9A0'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('陈香')
                  }
                ],
                [
                  { yAxis: '2' },
                  {
                    yAxis: 1,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#D7B1A0'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('火香')
                  }
                ],
                [
                  { yAxis: '3' },
                  {
                    yAxis: 2,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#D5B195'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('烤番薯香')
                  }
                ],
                [
                  { yAxis: '4' },
                  {
                    yAxis: 3,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#DFBA9D'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('蜜香')
                  }
                ],
                [
                  { yAxis: '5' },
                  {
                    yAxis: 4,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#E0BA93'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('熟果香')
                  }
                ],
                [
                  { yAxis: '6' },
                  {
                    yAxis: 5,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#E6BC92'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('果香')
                  }
                ],
                [
                  { yAxis: '7' },
                  {
                    yAxis: 6,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#ECCE9C'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('花果香')
                  }
                ],
                [
                  { yAxis: '8' },
                  {
                    yAxis: 7,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#EFD3A2'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('桂花香')
                  }
                ],
                [
                  { yAxis: '9' },
                  {
                    yAxis: 8,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#E2C694'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1

                    },
                    name: this.$t('兰花香')
                  }
                ],
                [
                  { yAxis: '10' },
                  {
                    yAxis: 9,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#C1B688'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1
                    },
                    name: this.$t('板栗香')
                  }
                ],
                [
                  { yAxis: '11' },
                  {
                    yAxis: 10,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#9EA184'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1
                    },
                    name: this.$t('清香')
                  }
                ],
                [
                  { yAxis: '12' },
                  {
                    yAxis: 11,
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                          offset: 0, color: '#879078'
                        }, {
                          offset: 1, color: '#FFF9E8'
                        }],
                      },
                      opacity: 1
                    },
                    name: this.$t('青草气')
                  },
                  { valueDim: 'y' }
                ]
              ]
            }
          }
        ]
      };

      myChart.setOption(option);

      //屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize();
      });
    }
  },

};
</script>

<style scoped>
.fragrance {
  width: 120%;
  height: 780px;
  margin-left: -50px;
  margin-top: -50px;
  /* background-color: #000000; */
}

.title {
  text-align: left;
  font-size: 18px;
  /* font-weight: bold; */
  color: var(--td-brand-color-6);
  line-height: 26.06px;

}

.sub-title {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.note-container {
  padding: 16px 24px;
}

.note-container p {
  text-align: left;
  text-indent: 2em;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5em;
  color: rgba(50, 132, 110, 0.5);
}

.content-container {
  background-color: var(--td-bg-color-container);
}

.chart-container {

  padding: 0 24px;
}
</style>