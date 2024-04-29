<template>
    <div>
      <div style="display:flex;height:136px">
        <div class="title" style="width:512px">
          <p>{{ title }}</p>
        </div>
        <t-divider layout="vertical" style="height:90%"></t-divider>
        <div  class="note-container">
          <div>
            <P class="note">{{ $t('茶叶，其实是一年四季皆可采摘制作的。') }}</P>
            <p class="note">{{ $t('主要的采摘季节有春、夏、秋这三个季节，冬季主要预留给茶树恢复调养。') }}</p>
            <p class="note">{{ $t('其中，3-5月采制的为春茶；5-7月采制的为夏茶；8-10月采制的为秋茶；10月下旬采制的为冬茶。由于不同的茶类，对茶叶原料的嫩度要求不同，因此采摘时间也会有所区别。相对嫩的茶叶，多为春茶、秋茶；粗大的茶叶，多为夏茶、秋茶。') }}</P></div>
          </div>
      </div>
      
      <div style="display: flex;">
        <div id="calendar" class="calendar"></div>
        <div ref="ganttChart" class="gantt"></div>
      </div>
    </div>
  </template>
  
<script>
  import { color } from "d3";
import * as echarts from "echarts/core";
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import $ from 'jquery';

echarts.use([SVGRenderer, CanvasRenderer]);

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
    computed:{
      dataAxis(){
        return [this.$t('碧螺春'), this.$t('滇青'), this.$t('西湖龙井'), this.$t('玉露'), this.$t('黄山毛峰'), this.$t('白毫银针'), this.$t('白牡丹'), this.$t('黄山白茶'), this.$t('贡眉'), this.$t('寿眉'), this.$t('蒙顶黄芽'), this.$t('霍山黄芽'), this.$t('广东大叶青'), this.$t('海马宫茶'), this.$t('北港毛尖'), this.$t('铁观音'), this.$t('北斗'), this.$t('水仙'), this.$t('肉桂'), this.$t('大红袍'), this.$t('祁门红茶'), this.$t('滇红'), this.$t('金骏眉'), this.$t('正山小种'), this.$t('六堡茶'), this.$t('普洱茶'), this.$t('泾阳茯砖茶'), this.$t('安化黑茶'), this.$t('千两茶')];
      },
      graphData(){
        return [
          ['2022-02-15', 1],
          ['2022-03-10', 200],
          ['2022-03-12', 279],
          ['2022-03-14', 847],
          ['2022-03-15', 241],
          ['2022-03-18', 411],
          ['2022-03-19', 985],
          ['2022-03-20', 985],
          ['2022-03-21', 985],
          ['2022-03-24', 985],
          ['2022-03-25', 985],
          ['2022-04-01', 985],
          ['2022-04-04', 985],
          ['2022-04-05', 985],
          ['2022-04-07', 985],
          ['2022-04-08', 985],
          ['2022-04-09', 985],
          ['2022-04-10', 985],
          ['2022-04-11', 985],
          ['2022-04-12', 985],
          ['2022-04-15', 985],
          ['2022-04-16', 985],
          ['2022-04-18', 985],
          ['2022-04-19', 985],
          ['2022-04-20', 985],
          ['2022-04-24', 985],
          ['2022-04-27', 985],
          ['2022-04-28', 985],
          ['2022-05-01', 985],
          ['2022-05-02', 985],
          ['2022-05-06', 985],
          ['2022-05-07', 985],
          ['2022-05-08', 985],
          ['2022-05-10', 985],
          ['2022-05-14', 985],
          ['2022-05-15', 985],
          ['2022-05-25', 985],
          ['2022-05-30', 985],
          ['2022-06-10', 985],
          ['2022-07-16', 985],
          ['2022-08-24', 985],
          ['2022-10-05', 985],
          ['2022-10-15', 985],
          ['2022-11-05', 985],
          ['2022-11-12', 985],
          ['2022-11-15', 985]
        ];
      },
      textData(){
        return [
          ['2022-02-15', this.$t('六堡茶')],
          ['2022-03-10', this.$t('普洱茶'), this.$t('白毫银针')],
          ['2022-03-12', this.$t('碧螺春')],
          ['2022-03-14', this.$t('蒙顶黄芽')],
          ['2022-03-15', this.$t('滇青'), this.$t('祁门红茶'), this.$t('霍山黄芽')],
          ['2022-03-18', this.$t('西湖龙井'), this.$t('白毫银针')],
          ['2022-03-19', this.$t('玉露')],
          ['2022-03-20', this.$t('白牡丹'), this.$t('滇红')],
          ['2022-03-21', this.$t('黄山白茶')],
          ['2022-03-24', this.$t('黄山毛峰')],
          ['2022-03-25', this.$t('广东大叶青')],
          ['2022-04-01', this.$t('贡眉')],
          ['2022-04-04', this.$t('海马宫茶')],
          ['2022-04-05', this.$t('寿眉'), this.$t('白牡丹')],
          ['2022-04-07', this.$t('碧螺春')],
          ['2022-04-08', this.$t('黄山白茶')],
          ['2022-04-09', this.$t('北港毛尖')],
          ['2022-04-10', this.$t('金骏眉')],
          ['2022-04-11', this.$t('霍山黄芽')],
          ['2022-04-12', this.$t('蒙顶黄芽')],
          ['2022-04-15', this.$t('滇青'), this.$t('黄山毛峰')],
          ['2022-04-16', this.$t('泾阳茯砖茶')],
          ['2022-04-18', this.$t('正山小种'), this.$t('西湖龙井')],
          ['2022-04-19', this.$t('玉露')],
          ['2022-04-20', this.$t('安华黑茶'), this.$t('北港毛尖')],
          ['2022-04-24', this.$t('铁观音')],
          ['2022-04-27', this.$t('水仙'), this.$t('北斗')],
          ['2022-04-28', this.$t('寿眉')],
          ['2022-05-01', this.$t('大红袍'), this.$t('肉桂')],
          ['2022-05-02', this.$t('北斗')],
          ['2022-05-06', this.$t('海马宫茶')],
          ['2022-05-07', this.$t('泾阳茯砖茶'), this.$t('水仙')],
          ['2022-05-08', this.$t('肉桂')],
          ['2022-05-10', this.$t('祁门红茶')],
          ['2022-05-14', this.$t('铁观音')],
          ['2022-05-15', this.$t('广东大叶青'), this.$t('大红袍')],
          ['2022-05-25', this.$t('六堡茶'), this.$t('金骏眉')],
          ['2022-05-30', this.$t('正山小种')],
          ['2022-06-10', this.$t('安化黑茶')],
          ['2022-07-16', this.$t('千两茶')],
          ['2022-08-24', this.$t('千两茶')],
          ['2022-10-05', this.$t('铁观音')],
          ['2022-10-15', this.$t('贡眉')],
          ['2022-11-05', this.$t('铁观音')],
          ['2022-11-12', this.$t('滇红')],
          ['2022-11-15', this.$t('普洱茶')]
        ];
      }
    },

    methods: {
      handleResize(){
        let myChart = this.$echarts.init(document.getElementById("calendar"), null, { renderer: 'svg' });
        let progressChart = echarts.init(this.$refs.ganttChart, null, { renderer: 'svg' });
        this.createCalendar();
        this.createGantt();
      },
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
        let myChart = this.$echarts.init(document.getElementById("calendar"), null, { renderer: 'svg' });
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
        const graphData = this.graphData;
        const textData = this.textData;
        const links = graphData.map(function (item, idx) {
          return {
            source: 0,
            target: 36
          };
        });
        links.pop();
        var that = this;
        let option = {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          tooltip: {
            //position: 'top'
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
            },
            
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
                nameMap: this.$t('ZH'),
                margin: 4,
                color: 'rgb(140,140,140)',
                align: 'center',
              },
              dayLabel: {
              nameMap: this.$t('ZH'),
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
                nameMap: this.$t('ZH'),
                margin: 4,
                color: 'rgb(140,140,140)',
                align: 'center',
              },
              dayLabel: {
              nameMap: this.$t('ZH'),
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
              edgeSymbolSize: 10,
              coordinateSystem: 'calendar',
              links: [{
                source: 0,
                target: 36
              },{
                source: 1,
                target: 45
              },{
                source: 1,
                target: 5
              },{
                source: 2,
                target: 14
              },{
                source: 3,
                target: 19
              },{
                source: 4,
                target: 20
              },{
                source: 4,
                target: 33
              },{
                source: 4,
                target: 18
              },{
                source: 5,
                target: 22
              },{
                source: 6,
                target: 23
              },{
                source: 7,
                target: 13
              },{
                source: 7,
                target: 44
              },{
                source: 8,
                target: 15
              },{
                source: 9,
                target: 20
              },{
                source: 10,
                target: 35
              },{
                source: 11,
                target: 42
              },{
                source: 12,
                target: 30
              },{
                source: 13,
                target: 27
              },{
                source: 16,
                target: 24
              },{
                source: 17,
                target: 36
              },{
                source: 21,
                target: 31
              },{
                source: 22,
                target: 37
              },{
                source: 24,
                target: 38
              },{
                source: 25,
                target: 34
              },{
                source: 26,
                target: 31
              },{
                source: 26,
                target: 29
              },{
                source: 28,
                target: 35
              },{
                source: 28,
                target: 32
              },{
                source: 39,
                target: 40
              },{
                source: 41,
                target: 43
              }],
              lineStyle: {
                width: 1.5,
                arrowSize: 0,
                color: 'rgba(1, 1, 1, 0.2)',
                //curveness: -1,
              },
              emphasis: {
                lineStyle: {
                  color: 'rgba(1, 1, 1, 1)', 
                  width: 4,
                },
                symbolSize: 10,
                //focus: 'self',
                //blurScope: 'coordinateSystem'
              },
              //cursor: 'pointer',
              symbolSize: 7,
              z: 10,
              calendarIndex: 0,
              data: graphData,
              tooltip: {
                trigger: 'item',
                show: true,
                formatter: function(params) {
                  let content = [];
                  if (params.data[0] == textData[0][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[0][1])+ '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if(params.data[0] == textData[1][0]){
                    content += '<div style="text-align: left;">' + that.$t(textData[1][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0]+ '<br>';
                    content += '<div style="text-align: left;">' + that.$t(textData[1][2]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[2][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[2][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[3][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[3][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[4][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[4][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[4][2]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[4][3]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[5][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[5][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[5][2]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[6][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[6][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[7][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[7][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[7][2]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[8][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[8][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[9][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[9][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[10][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[10][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[11][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[11][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[12][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[12][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[13][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[13][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[13][2]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[14][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[14][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[15][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[15][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[16][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[16][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[17][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[17][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[18][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[18][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[19][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[19][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[20][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[20][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[20][2]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }             
                  else if (params.data[0] == textData[21][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[21][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[22][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[22][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[22][2]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[23][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[23][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[24][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[24][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[24][2]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[25][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[25][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[26][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[26][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[26][2]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[27][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[27][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[28][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[28][1]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[28][2]) + '<br>';
                    content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[29][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[29][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[30][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[30][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[31][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[31][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[31][2]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[32][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[32][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[33][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[33][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[34][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[34][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[35][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[35][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[35][2]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[36][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[36][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    content += '<div style="text-align: left;">' + that.$t(textData[36][2]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[37][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[37][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[38][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[38][1]) + '<br>';
                    content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[39][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[39][1]) + '<br>';
                      content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[40][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[40][1]) + '<br>';
                      content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[41][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[41][1]) + '<br>';
                      content += that.$t("开始采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[42][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[42][1]) + '<br>';
                      content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[43][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[43][1]) + '<br>';
                      content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[44][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[44][1]) + '<br>';
                      content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }
                  else if (params.data[0] == textData[45][0]) {
                    content += '<div style="text-align: left;">' + that.$t(textData[45][1]) + '<br>';
                      content += that.$t("结束采摘时间") + ': ' + params.data[0] + '</div>';
                    return content;
                  }


                }
              }
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
              data: data1,
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
          ]
        };

        myChart.setOption(option);

        //屏幕自适应
        window.addEventListener('resize', function (){
          myChart.resize();
        });
      },

      createGantt(){
        let progressChart = echarts.init(this.$refs.ganttChart, null, { renderer: 'svg' });
        let dataAxis = this.dataAxis;
        let data = ['2022-04-07', '2022-04-15', '2022-04-18', '2022-04-19', '2022-04-15', '2022-03-18', '2022-04-05', '2022-04-08', '2022-10-15', '2022-04-28', '2022-04-12', '2022-04-11', '2022-05-15', '2022-05-06', '2022-04-20', '2022-05-14', '2022-05-02', '2022-05-07', '2022-05-08', '2022-05-15', '2022-05-10', '2022-11-12', '2022-05-25', '2022-05-30', '2022-05-25', '2022-11-15', '2022-05-07', '2022-06-10', '2022-08-24']; // 结束时间
        var that = this;
        let option = {
          // 鼠标移入提示工具
          tooltip: {
            trigger: 'axis',
            formatter(params) {
              if (params[1].data && params[0].data) {
                return `<div>`+ that.$t('开始采摘时间') + `：` + `${params[1].data}`+ `</div>` + `<div>` + that.$t('结束采摘时间') + `：` + `${params[0].data}` + `</div>`;
              }else if(params[1].data == '2022-10-05' && params[0].data){
                return `<div>`+ that.$t('开始采摘时间') + `：` + `${params[1].data}/2022-10-05</div>`+ `</div>` + `<div>` + that.$t('结束采摘时间') + `：` + `${params[0].data}/2022-11-05` + `</div>`;
              } else {
                return '';
              }
            },
            axisPointer: {
              type: 'cross',
              label: {
                show: true
              },
              shadowStyle: {
                color: 'rgba(177,243,173,0.2)'
              }
            }
          },
          grid: {
            containLabel: true,
            show: false,
            right: 10,
            left: 10,
            bottom: 20,
            top: 10,
            backgroundColor: 'transparent'
          },
          xAxis: {
            type: 'time',
            position: 'top', // x 轴位置
            axisTick: {
              // 隐藏刻度
              show: true
            },
            axisLine: {
              // 隐藏轴线
              show: true
            },
            splitLine: {
              // 显示网格线
              show: false
            },
            min: new Date('2022-01-01').getTime(), // 设置 x 轴最小值为 2022 年 1 月 1 日
            max: new Date('2022-12-31').getTime(), // 设置 x 轴最大值为 2022 年 12 月 31 日
            axisLabel: {
              formatter: function(value, index) {
                const date = new Date(value);
                return date.toLocaleDateString(that.$t('zh-CN'), { month: '2-digit' });
              }
            }
          },
          yAxis: {
            inverse: true, // y 轴数据翻转，该操作是为了保证项目一放在最上面，项目七在最下面
            axisTick: {
              // 隐藏刻度
              show: true
            },
            axisLine: {
              // 隐藏轴线
              show: true
            },
            splitLine: {
              // 显示网格线
              show: true
            },
            axisPointer: {  
              type: 'shadow'  
            },
            dataZoom: [
              {
                type: 'inside'
              }
            ],
            data: dataAxis,
          },
          series: [
            {
              name: '持续时间',
              type: 'bar',
              stack: 'duration',
              barWidth: 10,
              itemStyle: {
                color: function(params) {
                  // Define an array of colors for each bar
                  const colors = ['rgba(50,132,110,0.8)', 'rgba(50,132,110)', 'rgba(50,132,110)', 'rgba(50,132,110)', 'rgba(50,132,110,0.6)', 'rgba(139,139,139,0.2)', 'rgba(139,139,139,0.4)', 'rgba(139,139,139,0.6)', 'rgba(139,139,139)', 'rgba(139,139,139,0.8)', 'rgba(253,225,28,0.6)', 'rgba(253,225,28,0.4)', 'rgba(253,225,28)', 'rgba(253,225,28,0.8)', 'rgba(253,225,28,0.2)', 'rgba(236,137,36)', 'rgba(236,137,36,0.2)', 'rgba(236,137,36,0.6)', 'rgba(236,137,36,0.4)', 'rgba(236,137,36,0.8)', 'rgba(197,69,34,0.8)', 'rgba(197,69,34)', 'rgba(197,69,34,0.6)', 'rgba(197,69,34,0.4)', 'rgba(89,68,69,0.8)', 'rgba(89,68,69)', 'rgba(89,68,69,0.2)', 'rgba(89,68,69,0.6)', 'rgba(89,68,69,0.4)'];
                  return colors[params.dataIndex];
                },
                borderColor: 'transparent',
                borderWidth: 1
              },
              zlevel: -1,
              data: ['2022-04-07', '2022-04-15', '2022-04-18', '2022-04-19', '2022-04-15', '2022-03-18', '2022-04-05', '2022-04-08', '2022-10-15', '2022-04-28', '2022-04-12', '2022-04-11', '2022-05-15', '2022-05-06', '2022-04-20', '2022-05-14', '2022-05-02', '2022-05-07', '2022-05-08', '2022-05-15', '2022-05-10', '2022-11-12', '2022-05-25', '2022-05-30', '2022-05-25', '2022-11-15', '2022-05-07', '2022-06-10', '2022-08-24'] // 结束时间
            },
            {
              name: '持续时间',
              type: 'bar',
              stack: 'duration', // 堆叠标识符，同个类目轴上系列配置相同的 stack 值可以堆叠放置
              itemStyle: {
                borderColor: 'transparent',
                color: '#FFFEF2'
              },
              zlevel: -1, // zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
              z: 9, // z值小的图形会被z值大的图形覆盖，z相比zlevel优先级更低，而且不会创建新的 Canvas
              data: ['2022-03-12', '2022-03-15', '2022-03-18', '2022-03-19', '2022-03-24', '2022-03-10', '2022-03-20', '2022-03-21', '2022-04-01', '2022-04-05', '2022-03-14', '2022-03-15', '2022-03-25', '2022-04-04', '2022-04-09', '2022-04-24', '2022-04-27', '2022-04-27', '2022-05-01', '2022-05-01', '2022-03-15', '2022-03-20', '2022-04-10', '2022-04-18', '2022-02-15', '2022-03-10', '2022-04-16', '2022-04-20', '2022-07-16'] // 开始时间
            },
            {
              name: '持续时间',
              type: 'bar',
              stack: 'duration',
              barWidth: 10,
              itemStyle: {
                color: function(params) {
                  // Define an array of colors for each bar
                  const colors = ['rgba(50,132,110,0.8)', 'rgba(50,132,110)', 'rgba(50,132,110)', 'rgba(50,132,110)', 'rgba(50,132,110,0.6)', 'rgba(139,139,139,0.2)', 'rgba(139,139,139,0.4)', 'rgba(139,139,139,0.6)', 'rgba(139,139,139)', 'rgba(139,139,139,0.8)', 'rgba(253,225,28,0.6)', 'rgba(253,225,28,0.4)', 'rgba(253,225,28)', 'rgba(253,225,28,0.8)', 'rgba(253,225,28,0.2)', 'rgba(236,137,36)', 'rgba(236,137,36,0.2)', 'rgba(236,137,36,0.6)', 'rgba(236,137,36,0.4)', 'rgba(236,137,36,0.8)', 'rgba(197,69,34,0.8)', 'rgba(197,69,34)', 'rgba(197,69,34,0.6)', 'rgba(197,69,34,0.4)', 'rgba(89,68,69,0.8)', 'rgba(89,68,69)', 'rgba(89,68,69,0.2)', 'rgba(89,68,69,0.6)', 'rgba(89,68,69,0.4)'];
                  return colors[params.dataIndex];
                },
                borderColor: 'transparent',
                borderWidth: 1
              },
              zlevel: -2,
              data: ['2022-01-01', '2022-04-15', '2022-03-18', '2022-03-19', '2022-03-24', '2022-03-10', '2022-03-20', '2022-03-21', '2022-04-01', '2022-04-05', '2022-03-14', '2022-03-15', '2022-03-25', '2022-04-04', '2022-04-09', '2022-11-05', '2022-04-27', '2022-04-27', '2022-05-01', '2022-05-01', '2022-03-15', '2022-03-20', '2022-04-10', '2022-04-18', '2022-02-15', '2022-03-10', '2022-04-16', '2022-04-20', '2022-07-16'] // 结束时间
            },
            {
              name: '持续时间',
              type: 'bar',
              stack: 'duration', // 堆叠标识符，同个类目轴上系列配置相同的 stack 值可以堆叠放置
              itemStyle: {
                borderColor: 'transparent',
                color: '#FFFEF2'
              },
              zlevel: -2, // zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
              z: 9, // z值小的图形会被z值大的图形覆盖，z相比zlevel优先级更低，而且不会创建新的 Canvas
              data: ['2022-01-01', '2022-04-15', '2022-03-18', '2022-03-19', '2022-03-24', '2022-03-10', '2022-03-20', '2022-03-21', '2022-04-01', '2022-04-05', '2022-03-14', '2022-03-15', '2022-03-25', '2022-04-04', '2022-04-09', '2022-10-05', '2022-04-27', '2022-04-27', '2022-05-01', '2022-05-01', '2022-03-15', '2022-03-20', '2022-04-10', '2022-04-18', '2022-02-15', '2022-03-10', '2022-04-16', '2022-04-20', '2022-07-16'] // 开始时间
            }
          ]
        }

        progressChart.setOption(option);
        
        // Enable data zoom when user click bar.
        const zoomSize = 6;
        progressChart.on('click', function (params) {
          console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
          progressChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:
              dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
          });
        });
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
    width: 40%; 
    height:calc(100vh - 170px);
  }
  .gantt{
    width: 60%;
    height: calc(100vh - 170px);
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
    white-space: nowrap;
  }

  .note-container{
    /* padding:90px 24px; */
    display:flex;
    align-items:center;
    /* background-color: var(--td-bg-color-container); */
  }

  .note{
    color:var(--td-brand-color-6);
    text-align:left;
    text-indent:2em;
    line-height:17px;
    font-size:14px
  }
</style>