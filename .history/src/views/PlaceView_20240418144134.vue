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
                       <div id="china-map" style="margin-top: -5vh;margin-left: 15vw;width: 50vw;height: 70vh;">
                       </div>
                       <!--左下角折线图-->
                       <div id="line-chart" style="margin-top: -30vh;width:40%;height:30%;"></div>
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
                   data: ['四川', '贵州', '广西', '湖南','湖北','陕西','河南','安徽','江苏','江西','福建','浙江']
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
                       data: ['2018', '2019', '2020', '2021', '2022', '2023']
                   }
               ],
               yAxis: [
                   {
                       type: 'value'
                   }
               ],
               series: [
                   {
                       name: '四川',
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
                       data: [545.1, 575, 586, 596.2, 605.38, 598]
                   },
                   {
                       name: '贵州',
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
                       data: [684.3, 698.7, 716.31, 714.6, 708.34, 700]
                   },
                   {
                       name: '广西',
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
                       data: [115.6, 115.6, 118.23, 142.44, 151.73, 155.2]
                   },
                   {
                       name: '湖南',
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
                       data: [253.3, 266.3, 274, 298.1, 310.82, 330]
                   },
                   {
                       name: '湖北',
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
                       data: [449, 495, 513.71, 545.01, 558.03, 564]
                   },
                   {
                       name: '陕西',
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
                       data: [207, 215.4, 233, 233.66, 235.73, 250.59]
                   },
                   {
                       name: '河南',
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
                       data: [174.5, 174.5, 205.2, 208.6, 175.11, 215]
                   },
                   {
                       name: '安徽',
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
                       data: [254.5, 280.3, 286.32, 295.73, 307.52, 320]
                   },
                   {
                       name: '江苏',
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
                       name: '江西',
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
                       name: '福建',
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
                       name: '浙江',
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
       },
   }
   </script>
   <style scoped>
   
   .text {
       font-size: 25px;
       font-weight: 1000;
       color: rgba(50, 132, 110, 1);
       display: flex;
       margin-left: 10%;
   }
   
   .textsub {
       margin-top: 20px;
       text-indent: 30px;
       /* 设置首行缩进为 20px，可以根据需要调整 */
       text-align: left;
       /* 左对齐文本 */
       margin-left: 15%;
       width: 50vw;
       display: flex;
       flex-direction: column;
       font-size: 13px;
       font-weight: 500;
       color: rgba(50, 132, 110, 1);
   }
   </style>