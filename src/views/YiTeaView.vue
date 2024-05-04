<template>
    <div class="yicha-container">
        <!-- 上方标题区域 -->
        <div style="display: flex;height:136px;">
            <div class="title" style="width: 160px;">{{$t('回忆茶史')}}</div>
            <t-divider layout="vertical" style="height:90%"></t-divider>
            <div
                style="flex:1 ;height: 136px;white-space: normal;padding: 0 36px 0 0;text-align: left;display: flex;align-items: center">
                <div>
                    <p style="text-indent: 0;color: var(--td-brand-color-6);text-align: left;line-height: 17px;font-size: 16px;margin-top: 10px;margin-bottom: 10px;">{{ $t(current_title)}}
                    </p>
                    <p class="textsub">
                        {{ $t(current_description) }}
                    </p>
                </div>
            </div>
            <div style="display: flex;align-items: center;margin-right: 12px;">
<!--  原本是<t-radio-group variant="primary-filled"default-value="1" @change="onChangeChart" >  -->
                <t-radio-group class="t-radio-button" default-value="1" @change="onChangeChart">
                    <t-radio-button value="1">{{$t('上古先秦')}}</t-radio-button>
                    <t-radio-button  value="2">{{$t('魏晋南北朝')}}</t-radio-button>
                    <t-radio-button value="3">{{$t('隋唐')}}</t-radio-button>
                    <t-radio-button value="4">{{$t('宋元')}}</t-radio-button>
                    <t-radio-button value="5">{{$t('明')}}</t-radio-button>
                    <t-radio-button value="6">{{$t('清')}}</t-radio-button>
                    <t-radio-button value="7">{{$t('现代')}}</t-radio-button>
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

export default {
    data() {
        var that = this
        return {

            options:
            {
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
                    formatter: function (params) {

                        var locale = that.$i18n.locale
                        console.log(params.data)
                        if (locale == 'en') {
                                    return 'A.D.' + params.data[7] + ' : ' + that.$t(params.data[4]);
                                } else {
                                    return '公元' + params.data[7] + '年：' + params.data[4];
                                }

                    },

                    // trigger: 'axis',
                    // position: function (pt) {
                    // return [pt[0], '10%'];
                    // }
                },

                series: [
                    // 散点图
                    {
                        z: 50,
                        symbolSize: 40,
                        data: [
                            [1650, 0, '50', '#D0DC89', '茶的最早发现', '详细内容'],
                            [1650, 1, '51', '#D0DC89', '茶的最早发现', '详细内容'],
                            [1660, 5, '65', '#D9D9D9', '【茶的最早发现】', '详细内容'],
                            [1670, 6, '76', '#E9CB6A', '【茶的最早发现】', '详细内容'],
                            [1670, 7, '77', '#E9CB6A', '【茶的最早发现】', '详细内容'],
                            [1670, 8, '78', '#E9CB6A', '【茶的最早发现】', '详细内容'],
                            [1670, 9, '79', '#E9CB6A', '【茶的最早发现】', '详细内容'],
                            [1680, 9, '89', '#EC8924', '【茶的最早发现】', '详细内容']
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
                            color: function (params) {
                                return params.data[3]; // 设置散点的颜色为数据中的第四个值
                            },
                            borderColor: 'white',
                            borderWidth: 2,

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
                                        coord: [1660, 0], symbol: 'none'
                                    },
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

            x_range: [
                [-2700, 211], [222, 589], [581, 907], [960, 1368], [1368, 1644], [1645, 1911], [1912, 2024]
            ],
            tea_history_data: [],
            color_ever_50_year: ["#D0DC89", "#D9D9D9", "#E9CB6A", "#EC8924", "#C54522"],
            line_data: [],
            is_data_loaded: false,
            current_chart: 1,
            current_description: this.$t('鼠标悬浮或点击图表散点查看详细历史事件；右侧选项卡可以切换图表~'),
            current_title: 'Tips：'

        }
    },

    async mounted() {
        // 初始化csv文件
        await this.readFile()
        // console.log(this.line_data);
    },
    methods: {
        handleResize() {
              // 初始化图表
            this.echarts.init(document.getElementById('yitea-chart'));
            this.initChart();
            // console.log('yitea-resize');

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
        async readCSV(filePath) {
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
                        // this.options.series[0].data = this.tea_history_data[0]
                        // this.options.series[1].markLine.data = this.line_data[0]
                        // console.log(this.options);
                        this.is_data_loaded = true
                    }
                    // this.data = parseCsv(response.data);
                })
                .catch(error => {
                    console.error('error while reading .csv file', error);
                });
        },

        // 将转换成需要的格式
        convertResponse(response_data) {

            var color_arr = this.color_ever_50_year
            // 以换行符分隔字符串，得到一个数组
            var lines = response_data.split('\n');
            for (let i = 0; i < lines.length; i++) {
                // 以逗号分隔字符串，得到一个数组
                let temp_line = lines[i].split(',');

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
                let num_shiweishu = Math.floor(num / 10)
                // 取num_shiweishu的个位数
                num_shiweishu = Math.abs(num_shiweishu % 10)

                // 取num的个位数和十位数，并转化成字符串
                let num_shi_str = num % 100
                num_shi_str = num_shi_str.toString()


                temp_line[0] = num_shi
                temp_line.splice(1, 0, Math.abs(num_ge), num_shi_str, color_arr[num_shiweishu % 5])
                temp_line.push(num)
                // temp_line.splice(2, 0, num_shi_str)
                // temp_line.splice(3, 0, this.color_ever_50_year[num_shiweishu % 5])
                // console.log(temp_line)
                lines[i] = temp_line

            }

            return lines
        },

        generateLineData(processed_data) {

            var data = processed_data
            var line_data = []
            var set = new Set()
            for (let i = 0; i < data.length; i++) {
                // console.log(i);
                // console.log(data[i]);
                let min = 10
                // 找到需要显示的线条的x坐标值，x坐标不能重复
                let x = data[i][0]
                let x_height = data[i][1]
                if (min > x_height) {
                    min = x_height
                }
                // 判断集合是否包含x
                if (set.has(x)) {
                    continue
                } else {
                    set.add(x)
                    let temp_line = [
                        { coord: [x, min], symbol: 'none' },
                        { coord: [x, 10], symbol: 'none', },
                    ]
                    line_data.push(temp_line)
                }
            }
            // console.log(line_data);
            return line_data
        },

        async initChart() {
            // 初始化图表
            let myChart = echarts.init(document.getElementById('yitea-chart'));

            this.options.series[0].data = this.tea_history_data[0]
            this.options.series[1].markLine.data = this.line_data[0]

            this.options.xAxis.min = this.x_range[0][0]
            this.options.xAxis.max = this.x_range[0][1]

            // let optionIndex = 0;
            // option = this.options[optionIndex];
            // setInterval(function () {
            //     optionIndex = (optionIndex + 1) % options.length;
            //     myChart.setOption(this.options[optionIndex]);
            // }, 700);

            // console.log(this.options);
            myChart.setOption(this.options)
            myChart.on('click', (params) => {
                this.onClickSeries(params)
                // console.log(params.data) // 点击散点时触发事件，打印点击的散点数据
            })
            window.addEventListener('resize', throttle(this.handleResize, 200)); //监听窗口大小改变
        },

        onClickSeries(params) {
            this.current_description =params.data[5]
            this.current_title = params.data[4]
        },

        onChangeChart(e) {
            e = Number(e)
            this.options.series[0].data = this.tea_history_data[e - 1]
            this.options.series[1].markLine.data = this.line_data[e - 1]
            this.options.xAxis.min = this.x_range[e - 1][0]
            this.options.xAxis.max = this.x_range[e - 1][1]
            let myChart = echarts.init(document.getElementById('yitea-chart'));
            myChart.setOption(this.options)
        }

    },
    watch: {
        line_data: {
            handler() {
                if (this.is_data_loaded) {
                    this.initChart();
                }
            },
            deep: true
        },
         //监听语言是否变化，若变化调用createPieChart()
         '$i18n.locale': {
            handler() {
                // 处理语言变化的逻辑
                this.handleResize()
            },
            immediate: true // 立即执行一次回调函数
        }
    }
}

</script>

<style scoped>
.yicha-container {
    height: 80vh;
}

.chart-container {
    height: calc(80vh - 148px);
    width: 100%;
}

.title {
    display: flex;
    font-size: 30px;
    font-weight: bold;
    color: rgba(50, 132, 110, 1);
    text-align: left;
    vertical-align: top;
    align-items: center;
}

.textsub {
    /* 设置首行缩进为 20px，可以根据需要调整 */
    overflow: auto;
    height: 100px;
    color: var(--td-brand-color-6);
    text-align: left;
    text-indent: 2em;
    line-height: 17px;
    font-size: 14px;
}
.t-radio-button {

    border: none; /* 去除边框 */
}

</style>