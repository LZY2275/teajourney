<template>
    <div class="yicha-container">
        <div id="yitea-chart" class="chart-container"></div>
    </div>
</template>

<script>
import Vue from 'vue';
import * as echarts from "echarts/core";
Vue.prototype.echarts = echarts;
import axios from 'axios';
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

                series: [
                    {
                    z: 50,
                    symbolSize: 40,
                    data: [
                        [1650, 0, '50', '#D0DC89'],
                        [1650, 1, '51', '#D0DC89'],
                        [1660, 5, '85', '#D9D9D9'],
                        [1670, 6, '76', '#E9CB6A'],
                        [1670, 7, '77', '#E9CB6A'],
                        [1670, 8, '78', '#E9CB6A'],
                        [1670, 9, '79', '#E9CB6A'],
                        [1680, 9, '89', '#EC8924']
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
                            lineStyle: { type: 'solid', color: '#b7b5a6' }
                            }
                        ]
                        ],
                        itemStyle: {
                        color: '#E0E0E0'
                        }
                    }
                    }
                ]
            }
        }
    },
    mounted(){
        // 初始化csv文件
        this.readFile()

        // 初始化图表
        let myChart = echarts.init(document.getElementById('yitea-chart'));
        myChart.setOption(this.options)
        window.addEventListener('resize', this.handleResize); //监听窗口大小改变
    },
    methods:{
        handleResize(){
            console.log('yitea-resize');
        },
        readFile() {
            // console.log(data1);
            axios.get('./csv/1.csv')  // 注意路径根据实际情况进行调整
            .then(response => {
                // var ret = d3dsv.csvParse(response.data)
                // console.log(ret);
                var response_data = response.data
                var processed_data = this.convertResponse(response_data)
                console.log(processed_data);

                // this.data = parseCsv(response.data);
            })
            .catch(error => {
                console.error('读取csv文件有问题',error);
            });
        },

        convertResponse(response_data){

            // 以换行符分隔字符串，得到一个数组
            var lines = response_data.split('\n');
            for (var i = 0; i < lines.length; i++) {
                // 以逗号分隔字符串，得到一个数组
                lines[i] = lines[i].split(',');
            }
            return lines
        }
    }
}

</script>

<style scoped>
.yicha-container{
    height: 100vh;
}
.chart-container{
    height: 100vh;
    width: 100%;
}
</style>