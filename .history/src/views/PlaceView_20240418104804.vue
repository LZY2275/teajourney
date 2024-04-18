<template>

 <!--产地-->
 <t-layout style="background-color: #FFFEF2;z-index: 1;">
            <div style="height: 20%; display: flex; ">
                <img src="../assets/img/Origin.png" alt="image"
                    style="width:15%;">
                <div>
                    <p class="text" v-show="GreenTea">主要产区介绍：</p>
                    <p class="textsub" v-show="GreenTea">
                        绿茶在中国有许多主要产地，其中之一是浙江省的西湖龙井茶产区。西湖龙井茶产区位于浙江省杭州市西湖区，是中国绿茶的代表产地之一。这里的茶园环境优美，地理位置独特，享有得天独厚的自然条件。
                        除此之外，西湖龙井茶产区还因其悠久的茶史和精湛的制茶工艺而闻名。当地的茶农们世代相传着制茶的技艺，他们手工采摘、炒制的技艺独具匠心，使得西湖龙井茶具有独特的清香和口感，倍受国内外茶客的喜爱。这种传统的制茶工艺也被列为中国非物质文化遗产，体现了中国茶文化的深厚底蕴和博大精深。
                    </p>
                </div>
                <div>
                    <p class="text" v-show="WhiteTea">主要产区介绍：</p>
                    <p class="textsub" v-show="WhiteTea">
                        福建省福州市和南平市以及江西省赣州市等地，是中国白茶的主要产区。白茶以嫩芽为原料，制作工艺简单，历史悠久，被誉为"茶中贵妃"。福建省福州市的白茶种植历史悠久，其产的白茶具有独特的香气和口感，是著名的白茶产地之一。
                        这些地区的白茶还因其丰富的品种而备受推崇。白茶的制作工艺简单，但由于生长环境和采摘工艺的不同，不同地区的白茶呈现出各具特色的口感和香气。福建省福州市的白茶种植历史悠久，其主要品种包括白牡丹、白毫银针等，每一种都有其独特的风味和品质特点。这些品种不仅受到国内茶客的喜爱，也在国际茶市场上享有盛名，成为中国茶文化的重要代表之一。
                    </p>
                </div>
                <div>
                    <p class="text" v-show="YellowTea">主要产区介绍：</p>
                    <p class="textsub" v-show="YellowTea">
                        安徽省的歙县、黄山市、屯溪市等地是黄茶的主要产区之一。黄茶制作工艺独特，包括晾青、杀青、拼配、炒青等多个环节，其中以晾青最为特殊，是黄茶与其他茶类的显著区别。黄茶具有独特的香气和口感，被誉为"中华名茶"之一。
                        这些地区的丰富降水量、充足的日照以及独特的土壤成分为黄茶的生长提供了良好的条件，使得所产的黄茶香气浓郁、口感鲜爽</p>
                </div>
                <div>
                    <p class="text" v-show="oolong">主要产区介绍：</p>
                    <p class="textsub" v-show="oolong">
                        福建省的武夷山、安溪、南安等地是乌龙茶的著名产区之一。乌龙茶是一种半发酵茶，制作工艺介于绿茶和红茶之间，具有独特的清香和鲜爽口感。乌龙茶口感鲜爽，香气芬芳，被誉为"茶中王者"，深受茶叶爱好者的喜爱。
                        这些地区地形多样，气候适宜，海拔高低起伏，雨量充沛，土壤肥沃，为乌龙茶的生长提供了得天独厚的条件
                    </p>
                </div>
                <div>
                    <p class="text" v-show="RedTea">主要产区介绍：</p>
                    <p class="textsub" v-show="RedTea">
                        红茶主要产地包括福建、云南、湖南、江西等地。福建省的红茶制作工艺精湛，尤以福州、武夷山、安溪、南平等地最为著名。云南省的滇红茶以其丰富的花香和鲜爽的口感而闻名，湖南的祁阳红茶具有独特的甜香和鲜爽的口感，江西的红茶以其浓厚的香气和醇和的口感而受到广泛欢迎。
                        福建、云南、湖南、江西等地区的多样地形、丰富降水和充足日照，为茶树的生长提供了理想的生态环境
                    </p>
                </div>
                <div>
                    <p class="text" v-show="BlackTea">主要产区介绍：</p>
                    <p class="textsub" v-show="BlackTea">
                        云南省的普洱茶是最为著名的黑茶之一，其制作工艺历史悠久，具有独特的陈香和醇厚口感。广西的六堡茶和湖南的安化黑茶也是知名的黑茶品种，它们的口感丰富深邃，带有特有的陈香和木香味。黑茶的制作工艺独特，使得茶叶呈现出深红至黑褐色的色泽，香气独特，口感浓郁醇厚。
                        云南省的普洱茶、广西的六堡茶和湖南的安化黑茶等地区，都位于中国南方，气候湿润，雨量充沛，阳光充足，这些条件有利于茶树的生长
                    </p>
                </div>
            </div>
            <div style="display: flex; height: 100%;">
                <div>
                    <!--中国地图-->
                    <div id="china-map" style="margin-top: -5vh;margin-left: 12vw;width: 50vw;height: 70vh;">
                    </div>
                    <!--左下角折线图-->
                    <div id="line-chart" style="margin-top: -30vh;width:35%;height:40%;"></div>
                </div>
                <!--六个图标-->
                <div style="padding: 10px;margin-right: 8vw;">
                    <div style="display: flex; align-items: center; cursor: pointer;" @click="highlightProvince('绿茶')">
                        <img src="../assets/img/producetea13.jpg" alt=""
                            style="width: 40px; height: 40px; margin-left: 10px;">
                        <div
                            style="padding-left: 10px;;width: 10px; font-family: 'STXingkai', sans-serif; font-size: 20px; color: #666;">
                            绿茶</div>
                    </div>
                    <div style="display: flex; align-items: center; cursor: pointer;margin-top: 5vh;"
                        @click="highlightProvince('白茶')">
                        <img src="../assets/img/producetea14.jpg" alt=""
                            style="width: 40px; height: 40px; margin-left: 10px;">
                        <div
                            style="padding-left: 10px;;width: 10px; font-family: 'STXingkai', sans-serif; font-size: 20px; color: #666;">
                            白茶</div>
                    </div>
                    <div style="display: flex; align-items: center; cursor: pointer;margin-top: 5vh;"
                        @click="highlightProvince('黄茶')">
                        <img src="../assets/img/producetea15.jpg" alt=""
                            style="width: 40px; height: 40px; margin-left: 10px;">
                        <div
                            style="padding-left: 10px;;width: 10px; font-family: 'STXingkai', sans-serif; font-size: 20px; color: #666;">
                            黄茶</div>
                    </div>
                    <div style="display: flex; align-items: center; cursor: pointer;margin-top: 5vh;"
                        @click="highlightProvince('乌龙茶')">
                        <img src="../assets/img/producetea16.jpg" alt=""
                            style="width: 40px; height: 40px; margin-left: 10px;">
                        <div
                            style="padding-left: 10px;;width: 10px; font-family: 'STXingkai', sans-serif; font-size: 20px; color: #666;">
                            乌龙茶</div>
                    </div>
                    <div style="display: flex; align-items: center; cursor: pointer;margin-top: 5vh;"
                        @click="highlightProvince('红茶')">
                        <img src="../assets/img/producetea17.jpg" alt=""
                            style="width: 40px; height: 40px; margin-left: 10px;">
                        <div
                            style="padding-left: 10px;;width: 10px; font-family: 'STXingkai', sans-serif; font-size: 20px; color: #666;">
                            红茶</div>
                    </div>
                    <div style="display: flex; align-items: center; cursor: pointer;margin-top: 5vh;"
                        @click="highlightProvince('黑茶')">
                        <img src="../assets/img/producetea18.jpg" alt=""
                            style="width: 40px; height: 40px; margin-left: 10px;">
                        <div
                            style="padding-left: 10px;;width: 10px; font-family: 'STXingkai', sans-serif; font-size: 20px; color: #666;">
                            黑茶</div>
                    </div>
                </div>
            </div>
        </t-layout>

</template>

<script>
import Vue from 'vue';
import * as d3 from 'd3';
import * as echarts from "echarts/core";
import "../assets/js/china.js";
import chinaMap from '@/assets/json/china.json'
import { HelpCircleIcon } from "tdesign-icons-vue";
import $ from 'jquery'
Vue.prototype.echarts = echarts;
export default{
data(){
    return {
            GreenTea: true,
            WhiteTea: false,
            YellowTea: false,
            oolong: false,
            RedTea: false,
            BlackTea: false,
    }
},
mounted() {
        let myChart = echarts.init(document.getElementById('line-chart'));
        myChart.setOption({

            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['出口量', '进口量', '出口额', '进口额']
            },
            toolbox: {

            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '出口量',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [140, 232, 101, 264, 90, 340, 250]
                },
                {
                    name: '进口量',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 282, 111, 234, 220, 340, 310]
                },
                {
                    name: '出口额',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 282, 111, 234, 220, 340, 310]
                },
                {
                    name: '进口额',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 282, 111, 234, 220, 340, 310]
                },
            ]

        })
        echarts.registerMap('china', { geoJSON: chinaMap })
        this.initChinaMap()
        window.addEventListener('resize', this.handleResize); //监听窗口大小改变

        // this.createPieChart();
        // this.createProvinceChart(0);
    },
    methods: {
        initChinaMap() {
            this.myChart = echarts.init(document.getElementById('china-map'))
            this.updateMapOption()
        },
        updateMapOption() {

            const option = {
                series: [
                    {
                        name: '中国',
                        type: 'map',
                        mapType: 'china',
                        selectedMode: 'none', // 取消点击效果
                        roam: false, // 禁止缩放和平移
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#8FBC8F', // 设置地图的初始颜色
                                borderColor: '#DEFF9B', // 设置地图边界线颜色

                            },
                            emphasis: {} // 清除鼠标悬停效果
                        },
                        hoverLink: false, // 禁用悬停链接
                        data: []
                    }
                ]
            };
            const highlightedProvinces = ['河南', '贵州', '江西', '安徽', '浙江', '江苏', '四川', '陕西', '湖南', '湖北', '广西', '福建'];
            option.series[0].data = highlightedProvinces.map(province => {
                return {
                    name: province,
                    itemStyle: { areaColor: '#2E8B57' },
                    label: {
                        show: true, // 显示标签
                        formatter: '{b}', // 标签内容为省份名称
                        color: 'black', // 标签文字颜色
                        fontSize: 14, // 标签文字大小
                        fontWeight: 'bold' // 标签文字加粗
                    }
                };
            });
            this.myChart.setOption(option);
        },
        highlightProvince(teaType) {
            if (teaType === '绿茶') {
                this.GreenTea = true;
                this.WhiteTea = false;
                this.YellowTea = false;
                this.oolong = false;
                this.RedTea = false;
                this.BlackTea = false;
                let myChart = echarts.init(document.getElementById('line-chart'));
                myChart.setOption({

                    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['出口量', '进口量', '出口额', '进口额']
                    },
                    toolbox: {

                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '出口量',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(128, 255, 165)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(1, 191, 236)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [140, 232, 101, 264, 90, 340, 250]
                        },
                        {
                            name: '进口量',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(0, 221, 255)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(77, 119, 255)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 282, 111, 234, 220, 340, 310]
                        },
                        {
                            name: '出口额',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(0, 221, 255)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(77, 119, 255)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 282, 111, 234, 220, 340, 310]
                        },
                        {
                            name: '进口额',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(0, 221, 255)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(77, 119, 255)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 282, 111, 234, 220, 340, 310]
                        },
                    ]

                })

                const highlightedProvinces = ['河南', '贵州', '江西', '安徽', '浙江', '江苏', '四川', '陕西', '湖南', '湖北', '广西', '福建'];
                const option = this.myChart.getOption();
                option.series[0].data = highlightedProvinces.map(province => {
                    return {
                        name: province,
                        itemStyle: { areaColor: '#2E8B57' },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
                            fontWeight: 'bold' // 标签文字加粗
                        }
                    };
                });
                this.myChart.setOption(option);
            }
            if (teaType === '白茶') {
                this.GreenTea = false;
                this.WhiteTea = true;
                this.YellowTea = false;
                this.oolong = false;
                this.RedTea = false;
                this.BlackTea = false;
                let myChart = echarts.init(document.getElementById('line-chart'));
                myChart.setOption({

                    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['出口量', '进口量', '出口额', '进口额']
                    },
                    toolbox: {

                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '出口量',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(128, 255, 165)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(1, 191, 236)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [140, 232, 101, 264, 90, 340, 250]
                        },
                        {
                            name: '进口量',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(0, 221, 255)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(77, 119, 255)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 282, 111, 234, 220, 340, 310]
                        },
                        {
                            name: '出口额',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(0, 221, 255)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(77, 119, 255)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 282, 111, 234, 220, 340, 310]
                        },
                        {
                            name: '进口额',
                            type: 'line',
                            stack: 'Total',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(0, 221, 255)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(77, 119, 255)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [220, 282, 111, 234, 220, 340, 110]
                        },
                    ]

                });
                // 根据需要高亮的省份名称，设置其区域样式为浅红色
                const highlightedProvinces = ['福建', '浙江', '云南', '陕西', '贵州', '湖南', '台湾', '广东', '江西']
                const option = this.myChart.getOption()
                option.series[0].data = highlightedProvinces.map(province => {
                    return {
                        name: province,
                        itemStyle: { areaColor: '#F5FFF3' },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
                            fontWeight: 'bold' // 标签文字加粗
                        }
                    };
                })
                this.myChart.setOption(option)
            }
            if (teaType === '黄茶') {
                this.GreenTea = false;
                this.WhiteTea = false;
                this.YellowTea = true;
                this.oolong = false;
                this.RedTea = false;
                this.BlackTea = false;
                // 根据需要高亮的省份名称，设置其区域样式为浅红色
                const highlightedProvinces = ['湖南', '湖北', '四川', '安徽', '浙江', '广东']
                const option = this.myChart.getOption()
                option.series[0].data = highlightedProvinces.map(province => {
                    return {
                        name: province,
                        itemStyle: { areaColor: '#f0e68c' },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
                            fontWeight: 'bold' // 标签文字加粗
                        }
                    };
                })
                this.myChart.setOption(option)
            }
            if (teaType === '乌龙茶') {
                this.GreenTea = false;
                this.WhiteTea = false;
                this.YellowTea = false;
                this.oolong = true;
                this.RedTea = false;
                this.BlackTea = false;
                // 根据需要高亮的省份名称，设置其区域样式为浅红色
                const highlightedProvinces = ['四川', '湖南', '台湾', '福建', '广东']
                const option = this.myChart.getOption()
                option.series[0].data = highlightedProvinces.map(province => {
                    return {
                        name: province,
                        itemStyle: { areaColor: '#DAA520' },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
                            fontWeight: 'bold' // 标签文字加粗
                        }
                    };
                })
                this.myChart.setOption(option)
            }
            if (teaType === '红茶') {
                this.GreenTea = false;
                this.WhiteTea = false;
                this.YellowTea = false;
                this.oolong = false;
                this.RedTea = true;
                this.BlackTea = false;
                // 根据需要高亮的省份名称，设置其区域样式为浅红色
                const highlightedProvinces = ['四川', '云南', '湖南', '湖北', '广西']
                const option = this.myChart.getOption()
                option.series[0].data = highlightedProvinces.map(province => {
                    return {
                        name: province,
                        itemStyle: { areaColor: 'rgba(255, 99, 71, 0.5)' },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
                            fontWeight: 'bold' // 标签文字加粗
                        }
                    };
                })
                this.myChart.setOption(option)
            }
            if (teaType === '黑茶') {
                this.GreenTea = false;
                this.WhiteTea = false;
                this.YellowTea = false;
                this.oolong = false;
                this.RedTea = false;
                this.BlackTea = true;
                // 根据需要高亮的省份名称，设置其区域样式为浅红色
                const highlightedProvinces = ['四川', '云南', '贵州', '河南', '安徽', '浙江', '福建', '广东']
                const option = this.myChart.getOption()
                option.series[0].data = highlightedProvinces.map(province => {
                    return {
                        name: province,
                        itemStyle: { areaColor: '#696969' },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
                            fontWeight: 'bold' // 标签文字加粗
                        }
                    };
                })
                this.myChart.setOption(option)
            }
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
            this.visible = false
            this.removeChart()
            this.createPieChart()
            // console.log('resize');
        },
        handle_guide_click() {
            console.log('click');
            this.guide_current = 0;
            // this.createProvinceChart(0);
        },
        handleChange(current, { e, total }) {
            // 当前点击了茶类别显示地图
            if (current === 3) {
                console.log('display');
                this.createProvinceChart(0);
            }
            else {
                this.visible = false;
                this.clearProvinceChart();
            }
        },

        handleFinish() {
            console.log('finish');
            this.visible = false;
            this.clearProvinceChart()
        },
        clearProvinceChart() {
            var chartDom = document.getElementById('province');
            var myChart = echarts.init(chartDom);

            // 先清除当前的图表
            myChart.clear();
        },

        createProvinceChart(index) {

            let province_geo_data = [
                {
                    name: 'AH',
                    province: '安徽省',
                    value: [
                        {
                            marker: [118.41359, 29.86076],
                            location_name: '黄山白茶-安徽省歙县',
                            color: '#D9D9D9',
                            type: '白茶'
                        },
                        {
                            marker: [118.14161, 30.27296],
                            location_name: '黄山毛峰-安徽省黄山',
                            color: '#D0DC89',
                            type: '绿茶'
                        },
                        {
                            marker: [117.718228, 29.856608],
                            location_name: '祁门红茶-安徽省祁门县',
                            color: '#C54522',
                            type: '红茶'
                        },
                        {
                            marker: [115.87, 31.05],
                            location_name: '霍山黄芽-安徽省霍山县',
                            color: '#E9CB6A',
                            type: '黄茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/340000_full.json',
                    legend: [{ name: '白茶', color: '#D9D9D9' }, { name: '绿茶', color: '#D0DC89' }, { name: '黄茶', color: '#E9CB6A' }, { name: '红茶', color: '#C54522' }]
                },
                {
                    name: 'HN',
                    province: '湖南省',
                    value: [
                        {
                            marker: [111.212846, 28.374107],
                            location_name: '安化黑茶、千两茶-湖南省益阳市安化县',
                            color: '#594445',
                            type: '黑茶'
                        },
                        {
                            marker: [113.152243, 29.356149],
                            location_name: '北港毛尖-湖南省岳阳市北港',
                            color: '#E9CB6A',
                            type: '黄茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/430000_full.json',
                    legend: [{ name: '黄茶', color: '#E9CB6A' }, { name: '黑茶', color: '#594445' }]
                },
                {
                    name: 'ZJ',
                    province: '浙江省',
                    value: [
                        {
                            marker: [120.107334, 30.220546],
                            location_name: '西湖龙井-浙江省杭州市西湖龙井村',
                            color: '#D0DC89',
                            type: '绿茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/330000_full.json',
                    legend: [{ name: '绿茶', color: '#D0DC89' }]
                },
                {
                    name: 'GZ',
                    province: '贵州省',
                    value: [
                        {
                            marker: [105.613174, 27.141682],
                            location_name: '海马宫茶-贵州省大方县海马宫村',
                            color: '#E9CB6A',
                            type: '黄茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/520000_full.json',
                    legend: [{ name: '黄茶', color: '#E9CB6A' }]
                },
                {
                    name: 'YN',
                    province: '云南省',
                    value: [
                        {
                            marker: [100.97692, 22.78684],
                            location_name: '滇青-云南省思茅市',
                            color: '#D0DC89',
                            type: '绿茶'
                        },
                        {
                            marker: [100.79739, 22.00749],
                            location_name: '滇青-云南省西双版纳',
                            color: '#D0DC89',
                            type: '绿茶'
                        },
                        {
                            marker: [100.08233, 23.89516],
                            location_name: '滇青-云南省临沧市',
                            color: '#D0DC89',
                            type: '绿茶'
                        },
                        {
                            marker: [99.16579, 25.12107],
                            location_name: '滇青-云南省保山市',
                            color: '#D0DC89',
                            type: '绿茶'
                        },
                        {
                            marker: [98.58486, 24.43232],
                            location_name: '滇青-云南省德宏傣族景颇族自治州',
                            color: '#D0DC89',
                            type: '绿茶'
                        },
                        {
                            marker: [100.26764, 25.60648],
                            location_name: '滇青-云南省大理市',
                            color: '#D0DC89',
                            type: '绿茶'
                        },

                        {
                            marker: [100.079583, 23.877573],
                            location_name: '滇红-云南省临沧市',
                            color: '#C54522',
                            type: '红茶'
                        },
                        {
                            marker: [99.161761, 25.112046],
                            location_name: '滇红-云南省保山市',
                            color: '#C54522',
                            type: '红茶'
                        },
                        {
                            marker: [99.928460, 24.580424],
                            location_name: '滇红-云南省凤庆县',
                            color: '#C54522',
                            type: '红茶'
                        },

                        {
                            marker: [100.797941, 22.001724],
                            location_name: '普洱茶-云南省西双版纳',
                            color: '#594445',
                            type: '黑茶'
                        },
                        {
                            marker: [100.09544042015, 23.890468556279],
                            location_name: '普洱茶-云南省临沧市',
                            color: '#594445',
                            type: '黑茶'
                        },
                        {
                            marker: [100.97256981473, 22.83097918601],
                            location_name: '普洱茶-云南省普洱市',
                            color: '#594445',
                            type: '黑茶'
                        },



                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/530000_full.json',
                    legend: [{ name: '绿茶', color: '#D0DC89' }, { name: '红茶', color: '#C54522' }, { name: '黑茶', color: '#594445' }]
                },
                {
                    name: 'GX',
                    province: '广西壮族自治区',
                    value: [
                        {
                            marker: [111.380906, 23.812374],
                            location_name: '六堡茶-广西壮族自治区梧州市六堡镇',
                            color: '#594445',
                            type: '黑茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/450000_full.json',
                    legend: [{ name: '黑茶', color: '#594445' }]
                },
                {
                    name: 'JS',
                    province: '江苏省',
                    value: [
                        {
                            marker: [120.63132, 31.30227],
                            location_name: '碧螺春-江苏省苏州市',
                            color: '#D0DC89',
                            type: '绿茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/320000_full.json',
                    legend: [{ name: '绿茶', color: '#D0DC89' }]
                },
                {
                    name: 'SC',
                    province: '四川省',
                    value: [
                        {
                            marker: [103.046, 30.106],
                            location_name: '蒙顶黄牙-四川省雅安市蒙顶山',
                            color: '#E9CB6A',
                            type: '黄茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/510000_full.json',
                    legend: [{ name: '黄茶', color: '#E9CB6A' }]
                },
                {
                    name: 'FJ',
                    province: '福建省',
                    value: [
                        {
                            marker: [120.21671, 27.32436],
                            location_name: '白毫银针、白牡丹、寿眉-福建省福鼎市',
                            color: '#D9D9D9',
                            type: '白茶'
                        },
                        {
                            marker: [118.7854, 27.52629],
                            location_name: '白毫银针、寿眉、贡眉-福建省松溪县',
                            color: '#D9D9D9',
                            type: '白茶'
                        },
                        {
                            marker: [119.9008, 27.23513],
                            location_name: '白毫银针、寿眉-福建省柘荣县',
                            color: '#D9D9D9',
                            type: '白茶'
                        },
                        {
                            marker: [118.120427, 27.331749],
                            location_name: '白毫银针、寿眉、贡眉-福建省建阳市',
                            color: '#D9D9D9',
                            type: '白茶'
                        },
                        {
                            marker: [118.85754, 27.36609],
                            location_name: '白毫银针、白牡丹、寿眉、贡眉-福建省政和县',
                            color: '#D9D9D9',
                            type: '白茶'
                        },

                        {
                            marker: [118.30498, 27.02266,],
                            location_name: '贡眉-福建省建瓯市',
                            color: '#D9D9D9',
                            type: '白茶'
                        },
                        {
                            marker: [118.54138, 27.91721],
                            location_name: '贡眉-福建省浦城县',
                            color: '#D9D9D9',
                            type: '白茶'
                        },

                        {
                            marker: [117.7243210000, 27.8200900000],
                            location_name: '正山小种-福建省武夷山',
                            color: '#C54522',
                            type: '红茶'
                        },
                        {
                            marker: [117.680638, 27.747242],
                            location_name: '金骏眉-福建省武夷山',
                            color: '#C54522',
                            type: '红茶'
                        },

                        {
                            marker: [118.18629, 25.05596],
                            location_name: '铁观音-福建省泉州市安溪县',
                            color: '#EC8924',
                            type: '乌龙茶'
                        },
                        {
                            marker: [117.68063, 27.7472],
                            location_name: '大红袍、肉桂、北斗-福建省武夷山',
                            color: '#EC8924',
                            type: '乌龙茶'
                        },
                        {
                            marker: [117.419823, 25.290475],
                            location_name: '水仙-福建省漳平市',
                            color: '#EC8924',
                            type: '乌龙茶'
                        },


                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/350000_full.json',
                    legend: [{ name: '白茶', color: '#D9D9D9' }, { name: '红茶', color: '#C54522' }, { name: '乌龙茶', color: '#EC8924' },]
                },
                {
                    name: 'SX',
                    province: '陕西省',
                    value: [
                        {
                            marker: [108.842623, 34.527114],
                            location_name: '泾阳茯砖茶-陕西省泾阳县',
                            color: '#594445',
                            type: '黑茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/610000_full.json',
                    legend: [{ name: '黑茶', color: '#594445' }]
                },

                {
                    name: 'HB',
                    province: '湖北省',
                    value: [
                        {
                            marker: [109.48817, 30.27217],
                            location_name: '玉露-湖北省恩施市',
                            color: '#D0DC89',
                            type: '绿茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/420000_full.json',
                    legend: [{ name: '绿茶', color: '#D0DC89' }]
                },

                {
                    name: 'GD',
                    province: '广东省',
                    value: [
                        {
                            marker: [113.597302, 24.811112],
                            location_name: '广东大叶青-广东省韶关市',
                            color: '#E9CB6A',
                            type: '黄茶'
                        },

                    ],
                    path: 'https://geo.datav.aliyun.com/areas_v3/bound/440000_full.json',
                    legend: [{ name: '黄茶', color: '#E9CB6A' }]
                },
            ]

            // d3.select('#province')
            // .attr('transform', "translate(500,500)")



            this.clearProvinceChart();
            var chartDom = document.getElementById('province');
            var myChart = echarts.init(chartDom);

            var path = province_geo_data[index].path;
            var option;

            myChart.showLoading({
                text: '加载中...',  //加载时候的文本
                color: '#32846e',      //加载时候小圆圈的颜色
                // textColor:'white',  //加载时候文本颜色
                maskColor: '#08204200' //加载时候的背景颜色
            });

            $.get(province_geo_data[index].path, function (usaJson) {
                // console.log('jquery',usaJson);
                myChart.hideLoading();
                echarts.registerMap(province_geo_data[index].name, usaJson);
                option = {
                    title: {
                        text: province_geo_data[index].province,
                        // subtext: 'Data from www.census.gov',
                        left: 'center'
                    },
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        showDelay: 0,
                        transitionDuration: 0.2,
                        formatter: function (params) {
                            // console.log('params',params);
                            // return params.name + ': ' + params.value[2];
                            return params.data.name
                        }
                    },
                    legend: {
                        data: province_geo_data[index].legend.map(function (item) {
                            // console.log(item);
                            return {
                                name: item.name,
                                itemStyle: {
                                    color: item.color
                                }
                            }
                        }),
                        left: 'center',
                        bottom: 5,
                    },
                    geo: {
                        map: province_geo_data[index].name,
                        itemStyle: {
                            areaColor: {
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#5eb139' // 起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#2d8241' // 结束颜色
                                    }
                                ]
                            },// 地图区域的颜色
                            borderColor: '#ffecb2', // 地图区域的边框颜色
                            borderWidth: 0.5 // 地图区域的边框宽度
                        },
                        emphasis: {  // 高亮状态下的样式
                            itemStyle: {
                                areaColor: {
                                    type: 'linear', // 设置渐变色
                                    x: 0,
                                    y: 0,
                                    x2: 0.5,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#5eb139' // 起始颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#2d8241' // 结束颜色
                                        }
                                    ]
                                },// 地图区域的颜色
                                borderColor: '#ffecb2', // 地图区域的边框颜色
                                borderWidth: 0.5 // 地图区域的边框宽度
                            }

                        }
                    },
                    series: [
                        {
                            name: '绿茶',
                            type: 'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data: province_geo_data[index].value.map(function (item) {
                                if (item.type == '绿茶') {
                                    return {
                                        name: item.location_name,
                                        value: item.marker,
                                        itemStyle: { color: item.color }
                                    }
                                }
                            }),
                            itemStyle: {
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },

                            symbolSize: 10,

                        },
                        {
                            name: '白茶',
                            type: 'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data: province_geo_data[index].value.map(function (item) {
                                if (item.type == '白茶') {
                                    return {
                                        name: item.location_name,
                                        value: item.marker,
                                        itemStyle: { color: item.color }
                                    }
                                }
                            }),
                            itemStyle: {
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },

                            symbolSize: 10,

                        },
                        {
                            name: '黄茶',
                            type: 'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data: province_geo_data[index].value.map(function (item) {
                                if (item.type == '黄茶') {
                                    return {
                                        name: item.location_name,
                                        value: item.marker,
                                        itemStyle: { color: item.color }
                                    }
                                }
                            }),
                            itemStyle: {
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },

                            symbolSize: 10,

                        },
                        {
                            name: '乌龙茶',
                            type: 'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data: province_geo_data[index].value.map(function (item) {
                                if (item.type == '乌龙茶') {
                                    return {
                                        name: item.location_name,
                                        value: item.marker,
                                        itemStyle: { color: item.color }
                                    }
                                }
                            }),
                            itemStyle: {
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },

                            symbolSize: 10,

                        },
                        {
                            name: '红茶',
                            type: 'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data: province_geo_data[index].value.map(function (item) {
                                if (item.type == '红茶') {
                                    return {
                                        name: item.location_name,
                                        value: item.marker,
                                        itemStyle: { color: item.color }
                                    }
                                }
                            }),
                            itemStyle: {
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },

                            symbolSize: 10,

                        },
                        {
                            name: '黑茶',
                            type: 'scatter',
                            emphasis: {
                                focus: 'series'
                            },
                            coordinateSystem: 'geo',
                            data: province_geo_data[index].value.map(function (item) {
                                if (item.type == '黑茶') {
                                    return {
                                        name: item.location_name,
                                        value: item.marker,
                                        itemStyle: { color: item.color }
                                    }
                                }
                            }),
                            itemStyle: {
                                borderColor: '#ffffff', // 设置描边颜色
                                borderWidth: 2 // 设置描边宽度
                            },

                            symbolSize: 10,
                        },

                    ]
                }
                myChart.setOption(option);
            });

        },

        removeChart() {
            d3.select("#chart").selectAll('*').remove();
        },

        createPieChart() {
            const _this = this

            // 定义变量
            var color = d3.scaleOrdinal()
                .range(["#D0DC89", "#D9D9D9", "#E9CB6A", "#EC8924", "#C54522", "#594445"]);
            var province_color = d3.scaleOrdinal()
                .range(['#FF7043', '#FFC107', '#CDDC39', '#8BC34A', '#4CAF50', '#009688', '#00BCD4', '#03A9F4', '#3F51B5', '#673AB7', '#E91E63', '#F44336']);
            var data = [['green', 5], ['white', 5], ['yellow', 5], ['wulong', 5], ['red', 4], ['black', 5]];
            var name_data = [['西湖龙井', 1], ['碧螺春', 1], ['黄山毛峰', 1], ['玉露', 1], ['滇青', 1],
            ['白毫银针', 1], ['白牡丹', 1], ['寿眉', 1], ['贡眉', 1], ['黄山白茶', 1],
            ['海马宫茶', 1], ['蒙顶黄芽', 1], ['霍山黄芽', 1], ['广东大叶青', 1], ['北港毛尖', 1],
            ['铁观音', 1], ['大红袍', 1], ['肉桂', 1], ['水仙', 1], ['北斗', 1],
            ['祁门红茶', 1], ['滇红', 1], ['正山小种', 1], ['金骏眉', 1],
            ['安化黑茶', 1], ['普洱茶', 1], ['六堡茶', 1], ['泾阳茯砖茶', 1], ['千两茶', 1]];
            var province_name = [['皖', 4], ['湘', 3], ['浙', 1], ['黔', 1],
            ['滇', 3], ['桂', 1], ['苏', 1], ['川', 1],
            ['闽', 11], ['陕', 1], ['鄂', 1], ['粤', 1]];

            var name_data_center_angle = [];
            var province_name_center_angle = [];



            var margin = { top: 0, right: 0, bottom: 0, left: 0 },
                width = this.windowWidth - margin.right - margin.left,
                height = this.windowHeight - margin.top - margin.bottom;

            // var province_geo_scale = 300/396.5;

            if (width < height) {
                var size = width;
                var radius = width / 2 - 80;
            } else {
                var size = height;
                var radius = height / 2 - 80;
            }

            var radius = height / 2 - 80;

            var cover_alpha = 0.3

            // 线条粗细缩放因子
            var line_scale = radius * (1 / 397.5);



            var scale_rad_max = 0.320;
            var scale_rad_min = 0.255;

            var rad_line_max = scale_rad_max,
                rad_line_min = scale_rad_min,
                pi2 = Math.PI * 2;

            var basewidth = 1600;
            var mouse_over_in_action = false;
            var province_click_current = -1;
            var name_click_current = -1;

            var size_factor = this.windowWidth / basewidth;



            // 设置省份的宽度
            // document.getElementById('province').setAttribute('style','width='+(province_geo_scale*radius)+'px;height='+(province_geo_scale*radius)+'px')
            // d3.select('#province')
            //     .attr('style','width='+(province_geo_scale*radius)+'px;height='+(province_geo_scale*radius)+'px')


            var container = d3.select("#chart");
            var canvas = container.append("canvas").attr("id", "canvas-target")
                .attr('class', 'canvas-target')
                .attr('style', 'position:absolute;top:0;');
            var ctx = canvas.node().getContext("2d");
            canvas
                .attr('width', size)
                .attr('height', size)
                .style('width', size + "px")
                .style('height', size + "px");
            ctx.scale(1, 1);

            ctx.translate(size / 2, size / 2);
            //canvas设置
            ctx.globalCompositeOperation = "multiply";
            ctx.lineCap = "round";

            // 将地图放进去
            container.append('div')
                .attr('id', 'province')
                .attr('style', 'width: 32vh;height: 32vh;z-index: 999;position:absolute;top:clac(50% - 16vh);')



            var arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(radius - 20)
                .cornerRadius(5)

            // var name_label_group = chart.append("g").attr('class','name-group')

            var name_label_arc = d3.arc()
                .outerRadius(radius - 26)
                .innerRadius(radius - 42)
                .cornerRadius(7)

            var province_label_arc = d3.arc()
                .outerRadius(0.5 * radius)
                .innerRadius(0.5 * radius - 10)
                .cornerRadius(5)


            var pie = d3.pie()
                .sort(null)
                .padAngle(0.01)
                .value(function (d) {
                    return d[1];
                });

            var name_pie = d3.pie()
                .sort(null)
                .padAngle(0.01)
                .value(function (d) {
                    return d[1];
                })

            var province_pie = d3.pie()
                .sort(null)
                .padAngle(0.01)
                .value(function (d) {
                    return d[1];
                })

            var svg = container.append("svg")
                .attr('id', 'main-svg')
                .attr('class', 'main-svg')
                .attr('style', 'position:absolute;top:0;')
                .attr("width", size)
                .attr("height", size)
                .append("g")
                .attr('id', 'outer-ring')
                .attr("transform", "translate(" + size / 2 + "," + size / 2 + ")");

            var inner_ring = d3.select('#main-svg')
                .append('g')
                .attr('id', 'inner-ring')
                .attr("transform", "translate(" + size / 2 + "," + size / 2 + ")");

            var g = svg.selectAll('.arc')
                .data(pie(data))
                .enter().append('g')
                .attr('class', 'arc');

            var name_g = svg.selectAll('.name-arc')
                .data(name_pie(name_data))
                .enter().append('g')
                .attr('class', 'name-arc');

            var province_name_g = inner_ring.selectAll('.province-arc')
                .data(province_pie(province_name))
                .enter().append('g')
                .attr('class', 'province-arc');

            g.append('path')
                .attr('d', arc)
                .style('fill', function (d) {
                    return color(d.data[0]);
                })

            name_g.append('path')
                .attr('d', name_label_arc)
                .attr('class', 'name-pie')
                .attr('id', function (d, i) { return 'name-pie-' + i })
                .style('fill', '#00000000')
                .attr('stroke', '#00000014')
                .attr('stroke-width', '2')

            name_g.append('text')
                .attr('class', 'name-label')
                .attr('id', function (d, i) { return "name-label-" + i; })
                .attr("dy", "0.35em")
                .attr('transform', function (d, i) {
                    name_data_center_angle.push((d.startAngle + d.endAngle) / 2)
                    var centerAngle = (d.startAngle + d.endAngle) / 2
                    var finalAngle = centerAngle
                    return "rotate(" + (finalAngle * 180 / Math.PI - 90) + ")" +
                        "translate(" + radius + ")"
                        + (finalAngle > 0 & finalAngle < Math.PI ? "" : "rotate(180)")
                })
                .attr("text-anchor", (d) => (d.endAngle + d.startAngle) / 2 > Math.PI
                    ? "end"
                    : null)
                .style('font-size', '12px')
                .style('font-weight', '600')
                .attr('fill', 'rgba(0,0,0,0.5)')
                .text(function (d) { return d.data[0] })


            name_g.append('circle')
                .attr('class', 'name-label-circle')
                .attr('id', function (d, i) { return "name-label-circle-" + i; })
                .attr('r', 5)
                .attr('fill', '#00000014')
                .attr('stroke', 'white')
                .attr('stroke-width', '2')
                .attr('transform', function (d, i) {
                    var centerAngle = (d.startAngle + d.endAngle) / 2
                    var finalAngle = centerAngle
                    // let deg = 90-(d.endAngle*180)/(2*Math.PI)-(d.startAngle*180)/(2*Math.PI)+6

                    return "rotate(" + (finalAngle * 180 / Math.PI - 90) + ")" +
                        "translate(" + (radius - 42) + ")"
                }
                );

            province_name_g.append('path')
                .attr('d', province_label_arc)
                .style('fill', function (d) {
                    return province_color(d.index);
                })

            province_name_g.append('text')
                .attr('class', 'province-label')
                .attr('id', function (d, i) { return "province-label-" + i; })
                .attr("dy", "0.35em")
                // .attr("transform", (d) => `translate(${name_label_arc.centroid(d)})`)
                .attr('transform', function (d, i) {
                    var centerAngle = (d.startAngle + d.endAngle) / 2
                    province_name_center_angle.push(centerAngle);
                    var finalAngle = centerAngle
                    // let deg = 90-(d.endAngle*180)/(2*Math.PI)-(d.startAngle*180)/(2*Math.PI)
                    // console.log(deg)
                    return "rotate(" + (finalAngle * 180 / Math.PI - 90) + ")" +
                        "translate(" + (0.5 * radius + 5) + ")"
                        + (finalAngle > 0 & finalAngle < Math.PI ? "" : "rotate(180)")
                })

                .attr("text-anchor", (d) => (d.endAngle + d.startAngle) / 2 > Math.PI
                    ? "end"
                    : null)
                .style('font-size', '12px')
                .style('font-weight', '600')
                .attr('fill', 'rgba(0,0,0,0.5)')
                .text(function (d) { return d.data[0] })

            province_name_g.append('circle')
                .attr('class', 'province-label-circle')
                .attr('id', function (d, i) { return 'province-label-circle' + i })
                .attr('r', 5)
                .attr('fill', function (d, i) { return province_color(i) })
                .attr('stroke', 'white')
                .attr('stroke-width', '2')
                .attr('transform', function (d, i) {
                    var centerAngle = (d.startAngle + d.endAngle) / 2
                    var finalAngle = centerAngle
                    return "rotate(" + (finalAngle * 180 / Math.PI - 90) + ")" + "translate(" + (0.5 * radius + 25) + ")"
                }
                );

            // province_name_g.append('svg')
            //     .attr('class','province-label-circle')
            //     .attr('id',function(d,i) { return 'province-label-circle' + i })
            //     .attr('t','1711706083507')
            //     .attr('fill',function(d,i){ return province_color(i)})
            //     .attr('stroke','white')
            //     .attr('stroke-width','2')
            //     .attr('viewBox','-1024 -1024 1024 1024')
            //     // .attr('width','1024')
            //     // .attr('height','1024')
            //     // .attr('version','1.1')
            //     // .attr('xmlns','http://www.w3.org/2000/svg')
            //     // .attr('p-id','1625')
            //     .attr('width','20')
            //     .attr('height','20')
            //     .append('path')
            //     .attr('d','M232.8576 317.8496C186.368 792.9856 560.7424 804.4544 825.344 678.912c0 0-50.3808-601.7024-592.4864-361.0624z')
            //     // .attr('fill','#80A4FF')
            //     // .attr('p-id','1626')
            //     .attr('transform',function(d, i){
            //         var centerAngle = (d.startAngle+d.endAngle)/2
            //         var finalAngle = centerAngle
            //         return "rotate(" +(finalAngle * 180 / Math.PI - 90)+")"+"translate("+(0)+")"
            //     }
            //     );

            // province_name_g.append('g')
            //     // .attr('version','1.1')
            //     // .attr('width',0.5*radius)
            //     // .attr('height',0.5*radius)
            //     // .attr('viewBox','0 0 2000 2000')
            //     // .attr('transform','scale(0.02)')
            //     .append('path')
            //     .attr('d','M232.8576 317.8496C186.368 792.9856 560.7424 804.4544 825.344 678.912c0 0-50.3808-601.7024-592.4864-361.0624z')
            //     .attr('class','province-label-circle')
            //     .attr('id',function(d,i) { return 'province-label-circle' + i })
            //     .attr('r',5)
            //     .attr('fill',function(d,i){ return province_color(i)})
            //     .attr('stroke','white')
            //     .attr('stroke-width','2')
            //     .attr('transform',function(d, i){
            //         var centerAngle = (d.startAngle+d.endAngle)/2
            //         var finalAngle = centerAngle
            //         return "rotate(" +(finalAngle * 180 / Math.PI - 90)+")"
            //         }
            //     );


            {/* <svg t="1711706083507" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1625" width="20" height="20"><path d="M232.8576 317.8496C186.368 792.9856 560.7424 804.4544 825.344 678.912c0 0-50.3808-601.7024-592.4864-361.0624z" fill="#80A4FF" p-id="1626"></path></svg> */ }

            var cover_data = [
                [{
                    source_a: 0,
                    target_a: 9,
                    strokeStyle: province_color(0)
                }],
                [{
                    source_a: 0,
                    target_a: 2,
                    strokeStyle: province_color(0)
                }],
                [{
                    source_a: 0,
                    target_a: 20,
                    strokeStyle: province_color(0)
                }],
                [{
                    source_a: 0,
                    target_a: 12,
                    strokeStyle: province_color(0)
                }],

                [{
                    source_a: 1,
                    target_a: 24,
                    strokeStyle: province_color(1)
                }],
                [{
                    source_a: 1,
                    target_a: 28,
                    strokeStyle: province_color(1)
                }],
                [{
                    source_a: 1,
                    target_a: 14,
                    strokeStyle: province_color(1)
                }],

                [{
                    source_a: 2,
                    target_a: 0,
                    strokeStyle: province_color(2)
                }],

                [{
                    source_a: 3,
                    target_a: 10,
                    strokeStyle: province_color(3)
                }],

                [{
                    source_a: 4,
                    target_a: 4,
                    strokeStyle: province_color(4)
                }],
                [{
                    source_a: 4,
                    target_a: 21,
                    strokeStyle: province_color(4)
                }],
                [{
                    source_a: 4,
                    target_a: 25,
                    strokeStyle: province_color(4)
                }],

                [{
                    source_a: 5,
                    target_a: 26,
                    strokeStyle: province_color(5)
                }],
                [{
                    source_a: 6,
                    target_a: 1,
                    strokeStyle: province_color(6)
                }],

                [{
                    source_a: 7,
                    target_a: 11,
                    strokeStyle: province_color(7)
                }],

                [{
                    source_a: 8,
                    target_a: 5,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 6,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 8,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 7,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 22,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 23,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 15,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 16,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 17,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 18,
                    strokeStyle: province_color(8)
                }],
                [{
                    source_a: 8,
                    target_a: 19,
                    strokeStyle: province_color(8)
                }],

                [{
                    source_a: 9,
                    target_a: 27,
                    strokeStyle: province_color(9)
                }],

                [{
                    source_a: 10,
                    target_a: 3,
                    strokeStyle: province_color(10)
                }],

                [{
                    source_a: 11,
                    target_a: 13,
                    strokeStyle: province_color(11)
                }],
            ]

            // console.log(name_data_center_angle)
            // console.log(province_name_center_angle)

            // 画出线条
            var line = d3.lineRadial()
                .angle(function (d) { return d.angle; })
                .radius(function (d) { return d.radius; })
                .curve(d3.curveBasis)
                .context(ctx);

            ctx.globalAlpha = cover_alpha;
            create_lines("character", cover_data);

            // 画出线条的函数
            function create_lines(type, data,) {
                for (var i = 0; i < data.length; i++) {
                    var d = data[i];
                    var line_data = [];

                    // 首先，函数提取出当前元素的一些信息，如source_a和source_r表示线条的起始角度和半径，target_a表示线条的目标角度，target_r表示线条的目标半径。
                    var source_a = province_name_center_angle[d[0].source_a],
                        source_r = 0.5 * radius + 25;
                    var target_a = name_data_center_angle[d[0].target_a],
                        target_r = radius - 42;

                    // console.log(source_a,target_r)


                    // 接下来，根据起始角度和目标角度的差值，确定线条的走向和弧度大小。根据差值的不同情况，确定了线条的走向（顺时针或逆时针）和弧度大小。
                    //Figure out some variable that will determine the path points to create
                    if (target_a - source_a < -Math.PI) {
                        // 当目标角度和起始角度插值小于-pi即小于-180度 cw
                        var side = "cw";
                        var da = 2 + (target_a - source_a) / Math.PI;
                        var angle_sign = 1;
                    } else if (target_a - source_a < 0) {
                        // 当目标角度和起始角度插值小于0
                        var side = "ccw";
                        var da = (source_a - target_a) / Math.PI;
                        var angle_sign = -1;
                    } else if (target_a - source_a < Math.PI) {
                        var side = "cw";
                        var da = (target_a - source_a) / Math.PI;
                        var angle_sign = 1;
                    } else {
                        var side = "ccw";
                        var da = 2 - (target_a - source_a) / Math.PI;
                        var angle_sign = -1;
                    }//else
                    //console.log(side, da, angle_sign);


                    // 然后，根据线条类型和弧度大小，计算出线条中间弧线部分的半径。
                    //Calculate the radius of the middle arcing section of the line
                    var range = type === "character" ? [rad_line_max, rad_line_min] : [rad_line_min, rad_line_max];
                    var scale_rad_curve = d3.scaleLinear()
                        .domain([0, 1])
                        .range(range);
                    var rad_curve_line = scale_rad_curve(da) * size;


                    // 然后，稍微偏移起始点和结束点的角度，以使线条有一定的曲线效果。
                    //Slightly offset the first point on the curve from the source
                    var range = type === "character" ? [0.0, 0.07] : [0, 0.03];
                    var scale_angle_start_offset = d3.scaleLinear()
                        .domain([0, 1])
                        .range(range);
                    var start_angle = source_a + angle_sign * scale_angle_start_offset(da) * Math.PI;


                    //Slightly offset the last point on the curve from the target
                    var range = type === "character" ? [0, 0.02] : [0.0, 0.07];
                    var scale_angle_end_offset = d3.scaleLinear()
                        .domain([0, 1])
                        .range(range);
                    var end_angle = target_a - angle_sign * scale_angle_end_offset(da) * Math.PI;


                    // 接下来，根据弧度大小和步长，计算出曲线部分的点的数量，并根据线条走向和步长逐渐增加或减小角度，并将点的信息（角度和半径）添加到line_data数组中。
                    if (target_a - source_a < -Math.PI) {
                        var da_inner = pi2 + (end_angle - start_angle);
                    } else if (target_a - source_a < 0) {
                        var da_inner = (start_angle - end_angle);
                    } else if (target_a - source_a < Math.PI) {
                        var da_inner = (end_angle - start_angle);
                    } else if (target_a - source_a < 2 * Math.PI) {
                        var da_inner = pi2 - (end_angle - start_angle)
                    }//else if

                    //Attach first point to data
                    line_data.push({
                        angle: source_a,
                        radius: source_r
                    });

                    //Attach first point of the curve section
                    line_data.push({
                        angle: start_angle,
                        radius: rad_curve_line
                    });

                    //Create points in between for the curve line
                    var step = 0.06;
                    var n = Math.abs(Math.floor(da_inner / step));
                    var curve_angle = start_angle;
                    var sign = side === "cw" ? 1 : -1;
                    if (n >= 1) {
                        for (var j = 0; j < n; j++) {
                            curve_angle += (sign * step) % pi2;
                            line_data.push({
                                angle: curve_angle,
                                radius: rad_curve_line
                            });
                        }//for j
                    }//if

                    //Attach last point of the curve section
                    line_data.push({
                        angle: end_angle,
                        radius: rad_curve_line
                    });

                    //Attach last point to data
                    line_data.push({
                        angle: target_a,
                        radius: target_r
                    });

                    //Draw the path
                    ctx.beginPath();
                    line(line_data);
                    ctx.strokeStyle = d[0].strokeStyle;
                    ctx.lineWidth = 3 * line_scale;
                    ctx.stroke();


                }//for

                ctx.globalAlpha = 0.3;
                ctx.lineWidth = 3 * line_scale;

            }//function create_lines


            // 创建省份的hoverpie
            var hover_province_arc = d3.arc()
                .outerRadius(0.5 * radius + 30)
                .innerRadius(0.5 * radius - 10)


            var hover_province_pie = d3.pie()
                .sort(null)
                .padAngle(0)
                .value(function (d) {
                    return d[1];
                });

            var hover_province_arcs = hover_province_pie(province_name);
            hover_province_arcs.forEach(function (d, i) {
                d.province = i;
            });


            var province_hover_g = inner_ring.append('g').attr('class', 'province-hover-arc-g');
            var province_hover = province_hover_g.selectAll(".province-hover-arc")
                .data(hover_province_arcs)
                .enter().append("path")
                .attr("class", "province-hover-arc")
                .attr("d", hover_province_arc)
                .style("fill", "none")
                .style("pointer-events", "all")
                .on("click", mouse_click_province)
                .on('mouseover', mouse_over_province)
                .on('mouseout', mouse_out)


            d3.selectAll('.name-pie')
                .on('mouseover', mouse_over_name)
                .on('mouseout', mouse_out)
                .on('click', mouse_click_name)

            function mouse_click_province(d, i) {
                d.stopPropagation();
                name_click_current = -1;

                // 上次点击的和这次点击的不同
                if (province_click_current != i.province) {
                    province_click_current = i.province;
                    //清空目前的曲线和外圈的圆圈
                    clear_outer_ring()
                    ctx.clearRect(-width / 2, -height / 2, width, height);
                    // console.log(i)

                    create_province_current_selected_line(i.province);
                    _this.createProvinceChart(i.province);


                    // 中间显示地图
                    // ………………
                } else {
                    // 上次点击的和这次点击的相同
                    //清空目前的曲线和外圈的圆圈
                    clear_outer_ring()
                    ctx.clearRect(-width / 2, -height / 2, width, height);
                    // 清空中间的地图
                    _this.clearProvinceChart();

                    // 画出线条
                    create_lines("character", cover_data);
                    province_click_current = -1;
                }



            }

            function clear_outer_ring() {
                // 高亮外圈的茶叶
                for (var i = 0; i < 29; i++) {
                    d3.select('#name-pie-' + i)
                        .style('fill', '#00000000')
                    d3.select('#name-label-circle-' + i)
                        .style('fill', '#00000014')
                }
            }

            function mouse_over_name(d, i) {
                d.stopPropagation();
                // console.log(i.index);
                mouse_over_in_action = true;
                ctx.clearRect(-width / 2, -height / 2, width, height);
                clear_outer_ring();
                var line_data = cover_data.filter(function (c) { return c[0].target_a === i.index })
                // console.log(line_data);
                create_lines('character', line_data)
                d3.select('#name-pie-' + i.index)
                    .style('fill', line_data[0][0].strokeStyle)
                d3.select('#name-label-circle-' + i.index)
                    .style('fill', line_data[0][0].strokeStyle)



            }

            function mouse_out() {
                if (!mouse_over_in_action) return;
                mouse_over_in_action = false;
                ctx.clearRect(-width / 2, -height / 2, width, height);
                clear_outer_ring();

                // 如果当前有外圈的显示，只显示线+圆
                if (name_click_current != -1) {
                    var line_data = cover_data.filter(function (c) { return c[0].target_a === name_click_current })
                    // console.log(line_data);
                    ctx.globalAlpha = 0.8;
                    create_lines('character', line_data)
                    d3.select('#name-pie-' + name_click_current)
                        .style('fill', line_data[0][0].strokeStyle)
                    d3.select('#name-label-circle-' + name_click_current)
                        .style('fill', line_data[0][0].strokeStyle)
                    return;
                }


                // 如果上次选了省份，移除后应该仍然显示省份的茶叶数据
                if (province_click_current != -1) {
                    create_province_current_selected_line(province_click_current);
                    return;
                }
                // 否则，保持不变

                create_lines('character', cover_data)
            }

            function create_province_current_selected_line(index) {
                // 画出要用的曲线
                ctx.globalAlpha = 0.8;

                var line_data = cover_data.filter(function (c) { return c[0].source_a === index; })
                var line_color = line_data[0][0].strokeStyle;
                create_lines("character", line_data);

                // 高亮外圈的茶叶
                for (var i = 0; i < line_data.length; i++) {
                    var target_index = line_data[i][0].target_a
                    // console.log(target_index);
                    d3.select('#name-pie-' + target_index)
                        .style('fill', line_color)
                    d3.select('#name-label-circle-' + target_index)
                        .style('fill', line_color)

                    // console.log(el)
                }
            }


            function mouse_click_name(d, i) {
                d.stopPropagation();
                // ctx.clearRect(-width / 2, -height / 2, width, height);
                // clear_outer_ring();

                // var line_data = cover_data.filter(function(c){ return c[0].target_a === i.index})
                // var province_index = line_data[0][0].source_a;
                // // console.log(province_index)
                // province_click_current = province_index;

                // create_province_current_selected_line(province_index);

                // 若之前选择的茶和现在选择的茶不同，点击后显示该茶,省份选择数据清空
                if (name_click_current != i.index) {
                    province_click_current = -1;
                    name_click_current = i.index
                    clear_outer_ring();
                    var line_data = cover_data.filter(function (c) { return c[0].target_a === i.index })
                    ctx.globalAlpha = 0.8;
                    create_lines("character", line_data);
                    d3.select('#name-pie-' + i.index)
                        .style('fill', line_data[0][0].strokeStyle)
                    d3.select('#name-label-circle-' + i.index)
                        .style('fill', line_data[0][0].strokeStyle)

                    _this.current = name_click_current;
                    _this.visible = true;

                    console.log(this.visible);


                    // _this.$emit('customEvent', name_click_current);

                } else {
                    name_click_current = -1;
                    d3.select('#name-pie-' + i.index)
                        .style('fill', '#00000000')

                    _this.visible = false;
                    console.log(this.visible);
                    // _this.$emit('customEvent', -1);
                }

                // console.log('点击了茶index:'+i.index);
            }

            function mouse_over_province(d, i) {
                d.stopPropagation();
                // console.log(i.index);
                mouse_over_in_action = true;
                ctx.clearRect(-width / 2, -height / 2, width, height);
                clear_outer_ring();
                var line_data = cover_data.filter(function (c) { return c[0].source_a === i.index })
                // console.log(line_data);
                ctx.globalAlpha = 0.3
                create_lines('character', line_data)
                for (var i = 0; i < line_data.length; i++) {
                    var index = line_data[i][0].target_a
                    d3.select('#name-pie-' + index)
                        .style('fill', line_data[0][0].strokeStyle)
                    d3.select('#name-label-circle-' + index)
                        .style('fill', line_data[0][0].strokeStyle)
                }
            }


            // 为图添加注释
            // var annotations = [
            //     {
            //         note: {
            //         label: "这是一个注释",
            //         title: "注释标题"
            //         },
            //         x: 50,
            //         y: 120,
            //         dx: 50,
            //         dy: 50
            //     }
            // ];


            // var makeAnnotations = d3_annotation.annotation()
            //     .annotations(annotations);

            // var annotation_group = svg.append("g").attr("class", "annotation-group");

            // annotation_group.call(makeAnnotations);


        },
    },
}
</script>
<style>
</style>