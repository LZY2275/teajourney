<template>
    <div>
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div style="display: flex;">
        <div id="calendar" class="calendar"></div>
        <div ref="ganttChart" class="gantt"></div>
      </div>
    </div>
  </template>
  
<script>
  import * as echarts from "echarts/core";

  export default {
    name: 'PickView',
    data(){
      return{
        title:'2022年各茶采制时间表',
        cell_ratio : 0.026836,
      };
    },
    mounted() {
      this.createCalendar();
      this.createGantt();
    },

    methods: {
      getVirtualData(year) {
        const date = +echarts.time.parse(year + '-01-01');
        const end = +echarts.time.parse(+year + 1 + '-01-01');
        const dayTime = 3600 * 24 * 1000;
        const data = [];
        for (let time = date; time < end; time += dayTime) {
          const day = echarts.time.format(time, '{yyyy}-{MM}-{dd}', false);
          let value = 0;

          // 判断日期
          //1
          if ((day >= year + '-02-15' && day <= year + '-03-09') || (day >= year + '-11-12' && day <= year + '-11-14')) {
            value = 1;
          }
          //2
          if ((day >= year + '-11-05' && day <= year + '-11-11')) {
            value = 2;
          }
          //3
          if ((day >= year + '-03-10' && day <= year + '-03-11') || (day >= year + '-06-10' && day <= year + '-07-15') || (day >= year + '-08-24' && day <= year + '-10-04') || (day >= year + '-10-15' && day <= year + '-11-04')) {
            value = 3;
          }
          //4
          if ((day >= year + '-03-12' && day <= year + '-03-13') || (day >= year + '-05-30' && day <= year + '-06-09') || (day >= year + '-07-16' && day <= year + '-08-23') || (day >= year + '-10-05' && day <= year + '-10-14')) {
            value = 4;
          }
          //5
          if ((day == year + '-03-14') || (day >= year + '-05-25' && day <= year + '-05-29')) {
            value = 5;
          }
          //无6
          //7
          if ((day >= year + '-05-15' && day <= year + '-05-24')) {
            value = 7;
          }
          //8
          if ((day >= year + '-03-15' && day <= year + '-03-18')) {
            value = 8;
          }
          //9
          if ((day == year + '-03-19') || (day == year + '-05-14')) {
            value = 9;
          }
          //10
          if ((day >= year + '-05-10' && day <= year + '-05-13')) {
            value = 10;
          }
          //11
          if ((day == year + '-03-20') || (day >= year + '-05-08' && day <= year + '-05-09')) {
            value = 11;
          }
          //12
          if ((day >= year + '-03-21' && day <= year + '-03-23') || (day >= year + '-04-19' && day <= year + '-04-23') || (day == year + '-04-15') || (day == year + '-05-07')) {
            value = 12;
          }
          //13
          if ((day == year + '-03-24') || (day >= year + '-04-16' && day <= year + '-04-18') || (day >= year + '-04-24' && day <= year + '-04-26')) {
            value = 13;
          }
          //14
          if ((day >= year + '-03-25' && day <= year + '-03-31') || (day >= year + '-04-12' && day <= year + '-04-14') || (day == year + '-04-08') || (day >= year + '-04-28' && day <= year + '-04-30') || (day == year + '-05-06')) {
            value = 14;
          }
          //15
          if ((day >= year + '-04-01' && day <= year + '-04-03') || (day == year + '-04-07') || (day == year + '-04-09') || (day == year + '-04-11') || (day == year + '-04-27') || (day >= year + '-05-02' && day <= year + '-05-05')) {
            value = 15;
          }
          //16
          if ((day >= year + '-04-04' && day <= year + '-04-06') || (day == year + '-04-10') || (day == year + '-05-01')) {
            value = 16;
          }
          data.push([day, value]);
        }
        return data;
      },
      createCalendar(){
        let myChart = this.$echarts.init(document.getElementById("calendar"));
        let data1 = this.getVirtualData('2022');

        var cell_height = this.cell_ratio*(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
        const timeData = [
          {name: '2022-02-15', value: 1, begin: '六堡茶', end: '无'},
          {name: '2022-03-10', value: 3, begin: '普洱茶、白毫银针', end: '无'},
          {name: '2022-03-12', value: 4, begin: '碧螺春', end: '无'},
          {name: '2022-03-14', value: 5, begin: '蒙顶黄芽', end: '无'},
          {name: '2022-03-15', value: 8, begin: '滇青、祁门红茶、霍山黄芽', end: '无'},
          {name: '2022-03-18', value: 8, begin: '西湖龙井', end: '白毫银针'},
          {name: '2022-03-19', value: 9, begin: '玉露', end: '无'},
          {name: '2022-03-20', value: 11, begin: '白牡丹、滇红', end: '无'},
          {name: '2022-03-21', value: 12, begin: '黄山白茶', end: '无'},
          {name: '2022-03-24', value: 13, begin: '黄山毛峰', end: '无'},
          {name: '2022-03-25', value: 14, begin: '广东大叶青', end: '无'},
          {name: '2022-04-01', value: 15, begin: '贡眉', end: '无'},
          {name: '2022-04-04', value: 16, begin: '海马宫茶', end: '无'},
          {name: '2022-04-05', value: 16, begin: '寿眉', end: '白牡丹'},
          {name: '2022-04-07', value: 15, begin: '无', end: '碧螺春'},
          {name: '2022-04-08', value: 14, begin: '无', end: '黄山白茶'},
          {name: '2022-04-09', value: 15, begin: '北港毛尖', end: '无'},
          {name: '2022-04-10', value: 16, begin: '金骏眉', end: '无'},
          {name: '2022-04-11', value: 15, begin: '无', end: '霍山黄芽'},
          {name: '2022-04-12', value: 14, begin: '无', end: '蒙顶黄芽'},
          {name: '2022-04=15', value: 12, begin: '无', end: '滇青、黄山毛峰'},
          {name: '2022-04-16', value: 13, begin: '泾阳茯砖茶', end: '无'},
          
          {name: '2022-04-18', value: 13, begin: '正山小种', end: '西湖龙井'},
          {name: '2022-04-19', value: 12, begin: '无', end: '玉露'},
          {name: '2022-04-20', value: 12, begin: '安化黑茶', end: '北港毛尖'},
          {name: '2022-04-24', value: 13, begin: '铁观音', end: '无'},
          {name: '2022-04-27', value: 15, begin: '水仙、北斗', end: '无'},
          {name: '2022-04-28', value: 14, begin: '无', end: '寿眉'},
          {name: '2022-05-01', value: 16, begin: '大红袍、肉桂', end: '无'},
          {name: '2022-05-02', value: 15, begin: '无', end: '北斗'},
          {name: '2022-05-06', value: 14, begin: '无', end: '海马宫茶'},
          {name: '2022-05-07', value: 12, begin: '无', end: '泾阳茯砖茶、水仙'},
          {name: '2022-05-08', value: 11, begin: '无', end: '肉桂'},
          {name: '2022-05-10', value: 10, begin: '无', end: '祁门红茶'},
          {name: '2022-05-14', value: 9, begin: '', end: '铁观音'},
          {name: '2022-05-15', value: 7, begin: '', end: '广东大叶青、大红袍'},
          {name: '2022-05-25', value: 5, begin: '', end: '六堡茶、金骏眉'},
          {name: '2022-05-30', value: 4, begin: '', end: '正山小种'},

          {name: '2022-06-10', value: 3, begin: '无', end: '安化黑茶'},
          {name: '2022-07-16', value: 4, begin: '千两茶', end: '无'},
          {name: '2022-08-24', value: 3, begin: '无', end: '千两茶'},
          {name: '2022-10-05', value: 4, begin: '铁观音', end: '无'},
          {name: '2022-10-15', value: 3, begin: '无', end: '贡眉'},
          {name: '2022-11-05', value: 2, begin: '无', end: '铁观音'},
          {name: '2022-11-12', value: 1, begin: '无', end: '滇红'},
          {name: '2022-11-15', value: 0, begin: '无', end: '普洱茶'},

        ];
        const graphData = [
          ['2022-01-01', 260],
          ['2022-01-04', 200],
          ['2022-01-09', 279],
          ['2022-01-13', 847],
          ['2022-01-18', 241],
          ['2022-01-23', 411],
          ['2022-01-27', 985]
        ];
        const links = graphData.map(function (item, idx) {
          return {
            source: idx,
            target: idx + 1
          };
        });
        links.pop();
        let option = {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          tooltip: {
            position: 'top'
          },
          visualMap: [
            {
              min: 0,
              max: 20,
              calculable: true,
              inRange: {
                color: ['#FFFEF2', 'light green', '#32846E'],
                opacity: [1, 1]
              },
              seriesIndex: [1, 2],
              orient: 'vertical',
              right: '1%',
              bottom: '0%',
              //bottom: 0
            }
          ],
          calendar: [
            {
              orient: 'vertical',  
              splitLine: {
                // 去掉月份分割线
                show: false,
              },
              yearLabel: {
                show: false,
              },
              monthLabel: {
                nameMap: 'cn',
                margin: 4,
                color: 'rgb(140,140,140)',
                align: 'center',
              },
              dayLabel: {
              nameMap: 'cn',
              margin: 10,
              color: 'rgb(140,140,140)'
            },
              cellSize: [cell_height, cell_height],
              itemStyle: {
                //解决格子间距
                borderWidth: 3,
                borderColor: 'transparent',
              },
              top: 25,
              left: '6.5%',
              range: ['2022-01', '2022-06-30']
            },
            {
              orient: 'vertical',
              splitLine: {
                // 去掉月份分割线
                show: false,
              },
              yearLabel: {
                show: false,
              },
              monthLabel: {
                nameMap: 'cn',
                margin: 4,
                color: 'rgb(140,140,140)',
                align: 'center',
              },
              dayLabel: {
              nameMap: 'cn',
              margin: 10,
              color: 'rgb(140,140,140)'
            },
              cellSize: [cell_height, cell_height],
              itemStyle: {
                //解决格子间距
                borderWidth: 3,
                borderColor: '#fff',
              },
              top: 25,
              right: '17%',
              range: ['2022-07', '2022-12-31']
            }
          ],
          series: [
            {
              type: 'graph',
              edgeSymbol: ['none', 'arrow'],
              coordinateSystem: 'calendar',
              links: links,
              symbolSize: 5,
              z: 10,
              calendarIndex: 0,
              data: graphData,
              // tooltip: {
              //   trigger: 'item',
              //   show: true,
              //   formatter: function(params) {
              //     let content = [];
              //     //let content = params.name + '<br>';
              //       content += "正在采摘茶种数" + ': ' + params.data.value + '<br>'
              //           + "开始采摘"+ ': ' + params.data.begin + '<br>'
              //           + "结束采摘" + ': ' + params.data.end;
              //       return content;
              //   }
              // }
            },
            {
              type: 'heatmap',
              coordinateSystem: 'calendar',
              calendarIndex: 0,
              itemStyle: {
                borderRadius: 3,
                borderWidth: 0.15,
                borderType: 'solid',
                borderColor: '#000000',
                
              },
              emphasis: {
                disabled: false,
                //focus: 'series'
              },
              data: data1
            },
            {
              type: 'heatmap',
              coordinateSystem: 'calendar',
              calendarIndex: 1,
              itemStyle: {
                borderRadius: 3,
                borderWidth: 0.15,
                borderType: 'solid',
                borderColor: '#000000'
              },
              emphasis: {
                disabled: false,
                //focus: 'series'
              },
              data: data1
            },
            // {
            //   type: 'scatter',
            //   coordinateSystem: 'calendar',
            //   symbolSize: 0,
            //   label: {
            //     show: true,
            //     formatter: function (params) {
            //       return echarts.time.format(params.value[0], '{d}', false) + '\n\n';
            //     },
            //     fontSize: 5,
            //     color: '#000000'
            //   },
            //   data: data1
            // },
          ]
        };

        myChart.setOption(option);

        //屏幕自适应
        window.addEventListener('resize', function (){
          myChart.resize();
        });
      },

      createGantt(){
        let progressChart = echarts.init(this.$refs.ganttChart);
        let option = {
          // 鼠标移入提示工具
          tooltip: {
            trigger: 'axis',
            formatter(params) {
              if (params[1].data && params[0].data) {
                return `<div>开始时间：${params[1].data}</div>` + `<div>结束时间：${params[0].data}</div>`
              } else {
                return ''
              }
            },
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            containLabel: true,
            show: false,
            right: 80,
            left: 40,
            bottom: 40,
            top: 20,
            backgroundColor: '#fff'
          },
          legend: {
            // 图例组件
            data: ['持续时间'],
            align: 'auto',
            top: 'bottom'
          },
          xAxis: {
            type: 'time',
            position: 'top', // x 轴位置
            axisTick: {
              // 隐藏刻度
              show: false
            },
            axisLine: {
              // 隐藏轴线
              show: false
            },
            splitLine: {
              // 显示网格线
              show: true
            }
          },
          yAxis: {
            inverse: true, // y 轴数据翻转，该操作是为了保证项目一放在最上面，项目七在最下面
            axisTick: {
              // 隐藏刻度
              show: false
            },
            axisLine: {
              // 隐藏轴线
              show: false
            },
            data: ['项目一', '项目二', '项目三', '项目四', '项目五', '项目六', '项目七']
          },
          series: [
            {
              name: '持续时间',
              type: 'bar',
              stack: 'duration',
              itemStyle: {
                color: '#007acc',
                borderColor: '#fff',
                borderWidth: 1
              },
              zlevel: -1,
              data: ['2021-01-31', '2021-02-25', '2021-03-25', '2021-04-01', '2021-04-10', '2021-05-25', '2021-07-25'] // 结束时间
            },
            {
              name: '持续时间',
              type: 'bar',
              stack: 'duration', // 堆叠标识符，同个类目轴上系列配置相同的 stack 值可以堆叠放置
              itemStyle: {
                color: '#fff'
              },
              zlevel: -1, // zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
              z: 9, // z值小的图形会被z值大的图形覆盖，z相比zlevel优先级更低，而且不会创建新的 Canvas
              data: ['2021-01-01', '2021-01-31', '2021-02-25', '2021-03-25', '2021-04-01', '2021-04-10', '2021-05-25'] // 开始时间
            }
          ]
        }
        progressChart.setOption(option)
        // 浏览器窗口大小变化，图表大小自适应
        window.addEventListener('resize', function (){
          progressChart.resize();
        })
      }
    }
  }

</script>

<style scoped>
  .calendar{
    width: 35%; 
    height:550px;
  }
  .gantt{
    width: 65%;
    height: 550px;
    border: 1px solid #aaa;
  }
  .title{
    display: flex;
    margin-left: 0%;
    margin-top: 0%;
    font-size: 30px;
    font-weight: bold;
    color: rgba(50, 132, 110, 1);
    text-align: left;
    vertical-align: top;
    padding: 48px 0;
  }
</style>