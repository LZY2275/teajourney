<template>
    <div class="yicha-container">
        <!-- 上方标题区域 -->
        <div style="display: flex;height:136px;">
            <div class="title" style="width: 180px;white-space: nowrap;">回忆茶史</div>
            <t-divider layout="vertical" style="height:90%"></t-divider>
            <div style="flex:1 ;height: 136px;white-space: normal;padding: 0 36px 0 0;text-align: left;display: flex;align-items: center">
                <div>
                    <p class="textsub" >
                        伴随着中国政府扩大内需促进经济增长的「四万亿投资」政策落地实施，中国茶叶经济凭借这股强劲的东风在国际市场的舞台上又一次迎来了其历史高光时刻，并在新一代「年轻茶人」的不断创新下，以中国茶文化为核心的「概念商品」在一定程度上影响了世界潮流文化的走向。
                    </p>
                </div>
            </div>
            <div style="display: flex;align-items: center;">
                <t-radio-group variant="primary-filled" default-value="1" >
                    <t-radio-button value="1">上古先秦</t-radio-button>
                    <t-radio-button value="2">魏晋南北朝</t-radio-button>
                    <t-radio-button value="3">隋唐</t-radio-button>
                    <t-radio-button value="4">宋元</t-radio-button>
                    <t-radio-button value="5">明</t-radio-button>
                    <t-radio-button value="6">清</t-radio-button>
                    <t-radio-button value="7">现代</t-radio-button>
                </t-radio-group>
            </div>
        </div>
        <div id="yitea-chart" class="chart-container"></div>
    </div>
</template>

<script>
import Vue from 'vue';
import * as echarts from "echarts/core";
Vue.prototype.echarts = echarts;
import axios from 'axios';
import { throttle } from 'lodash';
import { line } from 'd3';

// import data1 from '@/assets/csv/1.csv'

export default{
    data(){
        return{
            options:{
                xAxis: {
                    type: 'value',
                    min: 1650, // 设置 x 轴的最小值
                    max: 2112, // 设置 x 轴的最大值
                    axisLine: {
                    onZero: false,
                    show: false
                    },
                    axisLabel: {
                    interval: 10, // 每隔2个单位显示一个刻度
                    show: true, // 不显示标签
                    margin: 20
                    },
                    axisTick: {
                    show: true, // 显示 x 轴刻度
                    interval: 10, // 每隔 10 个单位显示一个刻度
                    length: 15
                    },
                    splitLine: { show: false }
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 10,
                    inverse: true,
                    axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0)' // 设置 y 轴的轴线颜色为透明
                    }
                    },
                    axisLabel: {
                    color: 'rgba(0, 0, 0, 0)' // 设置 y 轴的标签颜色为透明
                    },
                    splitLine: { show: false }
                },
                tooltip: {
                    formatter: function(params) {
                        return params.data[4];
                    }
                },
                toolbox: {
                  feature: {
                    dataZoom: {
                      yAxisIndex: 'none'
                    },
                  }
                },
                series: [
                    // 散点图
                    {
                        z: 50,
                        symbolSize: 40,
                        data: [
                            [1650, 0, '50', '#D0DC89','茶的最早发现','详细内容'],
                            [1650, 1, '51', '#D0DC89','茶的最早发现','详细内容'],
                            [1660, 5, '65', '#D9D9D9','【茶的最早发现】','详细内容'],
                            [1670, 6, '76', '#E9CB6A','【茶的最早发现】','详细内容'],
                            [1670, 7, '77', '#E9CB6A','【茶的最早发现】','详细内容'],
                            [1670, 8, '78', '#E9CB6A','【茶的最早发现】','详细内容'],
                            [1670, 9, '79', '#E9CB6A','【茶的最早发现】','详细内容'],
                            [1680, 9, '89', '#EC8924','【茶的最早发现】','详细内容']
                        ],
                        type: 'scatter',
                        label: {
                            show: true,
                            formatter: function (params) {
                            return params.data[2]; // 显示第三个值作为标签
                            // return {
                            //   value: params.data[2], // 显示第三个值作为标签
                            //   textStyle: {
                            //     fontSize: 14, // 设置字体大小为14
                            //     fontWeight: 'bold' // 设置字体加粗
                            //   }
                            // };
                            },
                            textStyle: {
                            color: 'white', // 设置字体颜色为红色
                            fontSize: 16, // 设置字体大小为16
                            fontWeight: 'bold' // 设置字体加粗
                            }
                        },
                        itemStyle: {
                            opacity: 1, // 设置散点的透明度
                            // color:function(params){
                            //   return params[3]
                            // },
                            color: function (params) {
                            return params.data[3]; // 设置散点的颜色为数据中的第四个值
                            },
                            borderColor: 'white',
                            borderWidth: 2
                        }
                    },
                    // 线条
                    {
                        z: 1,
                        type: 'line',
                        markLine: {
                            silent: true,
                            data: [
                            [
                                { coord: [1650, 0], symbol: 'none' },
                                {
                                coord: [1650, 10],
                                symbol: 'none',
                                // lineStyle: { type: 'solid', color: '#b7b5a6' }
                                },
                            ],
                            [
                            {
                                coord: [1660, 0], symbol: 'none' },
                                {
                                coord: [1660, 10],
                                symbol: 'none',
                                // lineStyle: { type: 'solid', color: '#b7b5a6' }
                                }
                            ]
                            ],
                            itemStyle: {
                            color: '#E0E0E0'
                            }
                        }
                    }
                ]
            },
            x_range:[
                [-2700,211],[222,589],[581,907],[960,1368],[1368,1644],[1645,1911],[1912,2024]
            ],
            tea_history_data: [],
            color_ever_50_year:["#D0DC89", "#D9D9D9", "#E9CB6A", "#EC8924", "#C54522"],
            line_data:[]
        }
    },

    async mounted(){
        // 初始化csv文件
        await this.readFile()

        // console.log(this.line_data);

        // 初始化图表
        let myChart = echarts.init(document.getElementById('yitea-chart'));

        this.options.series[0].data = this.tea_history_data[0]
        this.options.series[1].markLine.data = this.line_data[0]

        this.options.xAxis.min = this.x_range[0][0]
        this.options.xAxis.max = this.x_range[0][1]

        myChart.setOption(this.options)
        window.addEventListener('resize', throttle(this.handleResize, 200)); //监听窗口大小改变
    },
    methods:{
        handleResize(){
            console.log('yitea-resize');
        },

        // 读取文件的总入口
        async readFile() {
            var filePath = [
                './csv/0.csv',
                './csv/1.csv',
                './csv/2.csv',
                './csv/3.csv',
                './csv/4.csv',
                './csv/5.csv',
                './csv/6.csv',
            ]
            for (var i = 0; i < filePath.length; i++) {
                await this.readCSV(filePath[i])
            }



        },

        // 读取csv文件
        async readCSV(filePath){
            axios.get(filePath)  // 注意路径根据实际情况进行调整
            .then(response => {
                // var ret = d3dsv.csvParse(response.data)
                // console.log(ret);
                var response_data = response.data
                var processed_data = this.convertResponse(response_data)
                // console.log(processed_data);
                if (processed_data.length > 0) {
                    this.tea_history_data.push(processed_data)
                    var line_data = this.generateLineData(processed_data)
                    this.line_data.push(line_data)
                }
                // this.data = parseCsv(response.data);
            })
            .catch(error => {
                console.error('error while reading .csv file',error);
            });
        },

        // 将转换成需要的格式
        convertResponse(response_data){

            var color_arr = this.color_ever_50_year
            // 以换行符分隔字符串，得到一个数组
            var lines = response_data.split('\n');
            for (let i = 0; i < lines.length; i++) {
                // 以逗号分隔字符串，得到一个数组
                let temp_line =  lines[i].split(',');

                let temp = temp_line[0]
                // console.log(temp);
                let num = Number(temp)

                // 仅取n_shi的整数部分
                let n_shi = num / 10
                n_shi = Math.floor(n_shi)
                let num_shi = n_shi * 10

                // 取num的个位数
                let num_ge = num % 10


                // 取num的十位数,比如1652，取5，22，取2，1，取0
                let num_shiweishu = Math.floor(num / 100)
                // 取num_shiweishu的个位数
                num_shiweishu = Math.abs(num_shiweishu % 10)

                // 取num的个位数和十位数，并转化成字符串
                let num_shi_str = num % 100
                num_shi_str = num_shi_str.toString()


                temp_line[0] = num_shi
                temp_line.splice(1, 0, num_ge,num_shi_str,color_arr[num_shiweishu % 5])
                // temp_line.splice(2, 0, num_shi_str)
                // temp_line.splice(3, 0, this.color_ever_50_year[num_shiweishu % 5])
                // console.log(temp_line)
                lines[i] = temp_line
            }

            return lines
        },

        generateLineData(processed_data){
            var data  = processed_data
            var line_data = []
            var set = new Set()
            for (let i = 0; i < data.length; i++) {
                // console.log(i);
                // console.log(data[i]);

                // 找到需要显示的线条的x坐标值，x坐标不能重复
                let x = data[i][0]
                // 判断集合是否包含x
                if (set.has(x)) {
                    continue
                }else{
                    set.add(x)
                    let temp_line = [
                        { coord: [x, 0], symbol: 'none' },
                        { coord: [x, 10], symbol: 'none',},
                    ]
                    line_data.push(temp_line)
                }
            }
            // console.log(line_data);
            return line_data
        },

    }
}

</script>

<style scoped>
.yicha-container{
    height: 100vh;
}
.chart-container{
    height: calc(100vh - 136px);
    width: 100%;
}
.title{
    display: flex;
    font-size: 30px;
    font-weight: bold;
    color: rgba(50, 132, 110, 1);
    text-align: left;
    vertical-align: top;
    padding: 48px 0;
}
.textsub {
    /* 设置首行缩进为 20px，可以根据需要调整 */
    color:var(--td-brand-color-6);
    text-align:left;
    text-indent:2em;
    line-height:17px;
    font-size:14px;
}
</style>