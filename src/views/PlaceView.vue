<template>

    <!--产地-->
    <div style="background-color: #FFFEF2;z-index: 1;width: calc(100vw - 300px); height: 100vh;position: absolute;">
        <!-- 上方标题区域 -->
        <div style="display: flex;height:136px;">
            <div class="title" style="width: 200px;white-space: nowrap;">中国茶叶产地</div>
            <t-divider layout="vertical" style="height:90%"></t-divider>
            <div style="width:calc(100vw - 500px) ;height: 136px;white-space: normal;padding: 0 36px 0 0;text-align: left;display: flex;align-items: center">
                <div class="card-container" v-show="GreenTea">
                    <p class="textsub" style="text-indent: 0;font-size: 16px;margin-bottom: 12px;">绿茶产地：</p>
                    <p class="textsub" >
                        绿茶在中国有许多主要产地，其中之一是浙江省的西湖龙井茶产区。西湖龙井茶产区位于浙江省杭州市西湖区，是中国绿茶的代表产地之一。这里的茶园环境优美，地理位置独特，享有得天独厚的自然条件。
                        除此之外，西湖龙井茶产区还因其悠久的茶史和精湛的制茶工艺而闻名。当地的茶农们世代相传着制茶的技艺，他们手工采摘、炒制的技艺独具匠心，使得西湖龙井茶具有独特的清香和口感，倍受国内外茶客的喜爱。这种传统的制茶工艺也被列为中国非物质文化遗产，体现了中国茶文化的深厚底蕴和博大精深。
                    </p>
                </div>
                <div class="card-container" v-show="WhiteTea">
                    <p class="textsub" style="text-indent: 0;font-size: 16px;margin-bottom: 12px;">白茶产地：</p>
                    <p class="textsub">
                        福建省福州市和南平市以及江西省赣州市等地，是中国白茶的主要产区。白茶以嫩芽为原料，制作工艺简单，历史悠久，被誉为"茶中贵妃"。福建省福州市的白茶种植历史悠久，其产的白茶具有独特的香气和口感，是著名的白茶产地之一。
                        这些地区的白茶还因其丰富的品种而备受推崇。白茶的制作工艺简单，但由于生长环境和采摘工艺的不同，不同地区的白茶呈现出各具特色的口感和香气。福建省福州市的白茶种植历史悠久，其主要品种包括白牡丹、白毫银针等，每一种都有其独特的风味和品质特点。这些品种不仅受到国内茶客的喜爱，也在国际茶市场上享有盛名，成为中国茶文化的重要代表之一。
                    </p>
                </div>
                <div class="card-container" v-show="YellowTea">
                    <p class="textsub" style="text-indent: 0;font-size: 16px;margin-bottom: 12px;">黄茶产地：</p>
                    <p class="textsub" >
                        安徽省的歙县、黄山市、屯溪市等地是黄茶的主要产区之一。黄茶制作工艺独特，包括晾青、杀青、拼配、炒青等多个环节，其中以晾青最为特殊，是黄茶与其他茶类的显著区别。黄茶具有独特的香气和口感，被誉为"中华名茶"之一。
                        这些地区的丰富降水量、充足的日照以及独特的土壤成分为黄茶的生长提供了良好的条件，使得所产的黄茶香气浓郁、口感鲜爽</p>
                </div>
                <div class="card-container" v-show="oolong">
                    <p class="textsub" style="text-indent: 0;font-size: 16px;margin-bottom: 12px;">乌龙茶产地：</p>
                    <p class="textsub" >
                        福建省的武夷山、安溪、南安等地是乌龙茶的著名产区之一。乌龙茶是一种半发酵茶，制作工艺介于绿茶和红茶之间，具有独特的清香和鲜爽口感。乌龙茶口感鲜爽，香气芬芳，被誉为"茶中王者"，深受茶叶爱好者的喜爱。
                        这些地区地形多样，气候适宜，海拔高低起伏，雨量充沛，土壤肥沃，为乌龙茶的生长提供了得天独厚的条件
                    </p>
                </div>
                <div class="card-container" v-show="RedTea">
                    <p class="textsub" style="text-indent: 0;font-size: 16px;margin-bottom: 12px;">红茶产地：</p>
                    <p class="textsub" >
                        红茶主要产地包括福建、云南、湖南、江西等地。福建省的红茶制作工艺精湛，尤以福州、武夷山、安溪、南平等地最为著名。云南省的滇红茶以其丰富的花香和鲜爽的口感而闻名，湖南的祁阳红茶具有独特的甜香和鲜爽的口感，江西的红茶以其浓厚的香气和醇和的口感而受到广泛欢迎。
                        福建、云南、湖南、江西等地区的多样地形、丰富降水和充足日照，为茶树的生长提供了理想的生态环境
                    </p>
                </div>
                <div class="card-container"  v-show="BlackTea">
                    <p class="textsub" style="text-indent: 0;font-size: 16px;margin-bottom: 12px;">黑茶产地：</p>
                    <p class="textsub">
                        云南省的普洱茶是最为著名的黑茶之一，其制作工艺历史悠久，具有独特的陈香和醇厚口感。广西的六堡茶和湖南的安化黑茶也是知名的黑茶品种，它们的口感丰富深邃，带有特有的陈香和木香味。黑茶的制作工艺独特，使得茶叶呈现出深红至黑褐色的色泽，香气独特，口感浓郁醇厚。
                        云南省的普洱茶、广西的六堡茶和湖南的安化黑茶等地区，都位于中国南方，气候湿润，雨量充沛，阳光充足，这些条件有利于茶树的生长
                    </p>
                </div>
            </div>
            <!-- <div style="padding: 0 36px 0 0;">
                <div class="card-container" v-show="GreenTea">
                    <p class="textsub" >
                        绿茶在中国有许多主要产地，其中之一是浙江省的西湖龙井茶产区。西湖龙井茶产区位于浙江省杭州市西湖区，是中国绿茶的代表产地之一。这里的茶园环境优美，地理位置独特，享有得天独厚的自然条件。
                        除此之外，西湖龙井茶产区还因其悠久的茶史和精湛的制茶工艺而闻名。当地的茶农们世代相传着制茶的技艺，他们手工采摘、炒制的技艺独具匠心，使得西湖龙井茶具有独特的清香和口感，倍受国内外茶客的喜爱。这种传统的制茶工艺也被列为中国非物质文化遗产，体现了中国茶文化的深厚底蕴和博大精深。
                    </p>
                </div>
                <div class="card-container" v-show="WhiteTea">
                    <p class="textsub">
                        福建省福州市和南平市以及江西省赣州市等地，是中国白茶的主要产区。白茶以嫩芽为原料，制作工艺简单，历史悠久，被誉为"茶中贵妃"。福建省福州市的白茶种植历史悠久，其产的白茶具有独特的香气和口感，是著名的白茶产地之一。
                        这些地区的白茶还因其丰富的品种而备受推崇。白茶的制作工艺简单，但由于生长环境和采摘工艺的不同，不同地区的白茶呈现出各具特色的口感和香气。福建省福州市的白茶种植历史悠久，其主要品种包括白牡丹、白毫银针等，每一种都有其独特的风味和品质特点。这些品种不仅受到国内茶客的喜爱，也在国际茶市场上享有盛名，成为中国茶文化的重要代表之一。
                    </p>
                </div>
                <div class="card-container" v-show="YellowTea">
                    <p class="textsub" >
                        安徽省的歙县、黄山市、屯溪市等地是黄茶的主要产区之一。黄茶制作工艺独特，包括晾青、杀青、拼配、炒青等多个环节，其中以晾青最为特殊，是黄茶与其他茶类的显著区别。黄茶具有独特的香气和口感，被誉为"中华名茶"之一。
                        这些地区的丰富降水量、充足的日照以及独特的土壤成分为黄茶的生长提供了良好的条件，使得所产的黄茶香气浓郁、口感鲜爽</p>
                </div>
                <div class="card-container" v-show="oolong">
                    <p class="textsub" >
                        福建省的武夷山、安溪、南安等地是乌龙茶的著名产区之一。乌龙茶是一种半发酵茶，制作工艺介于绿茶和红茶之间，具有独特的清香和鲜爽口感。乌龙茶口感鲜爽，香气芬芳，被誉为"茶中王者"，深受茶叶爱好者的喜爱。
                        这些地区地形多样，气候适宜，海拔高低起伏，雨量充沛，土壤肥沃，为乌龙茶的生长提供了得天独厚的条件
                    </p>
                </div>
                <div class="card-container" v-show="RedTea">
                    <p class="textsub" >
                        红茶主要产地包括福建、云南、湖南、江西等地。福建省的红茶制作工艺精湛，尤以福州、武夷山、安溪、南平等地最为著名。云南省的滇红茶以其丰富的花香和鲜爽的口感而闻名，湖南的祁阳红茶具有独特的甜香和鲜爽的口感，江西的红茶以其浓厚的香气和醇和的口感而受到广泛欢迎。
                        福建、云南、湖南、江西等地区的多样地形、丰富降水和充足日照，为茶树的生长提供了理想的生态环境
                    </p>
                </div>
                <div class="card-container"  v-show="BlackTea">
                    <p class="textsub">
                        云南省的普洱茶是最为著名的黑茶之一，其制作工艺历史悠久，具有独特的陈香和醇厚口感。广西的六堡茶和湖南的安化黑茶也是知名的黑茶品种，它们的口感丰富深邃，带有特有的陈香和木香味。黑茶的制作工艺独特，使得茶叶呈现出深红至黑褐色的色泽，香气独特，口感浓郁醇厚。
                        云南省的普洱茶、广西的六堡茶和湖南的安化黑茶等地区，都位于中国南方，气候湿润，雨量充沛，阳光充足，这些条件有利于茶树的生长
                    </p>
                </div>
                <-->
                <!--折线图-->
                <div style="position: absolute;bottom: 10px;right: 20px;z-index: 100;">
                <p class="title-sub">主要产区种植面积</p>
                <div style="width:25vw;height: 30vh; position: relative;z-index: 1;"> 
                <canvas ref="lineChart"></canvas>
            </div>
        </div>
            </div>
            <!--六个图标-->
            <div style="padding: 10px;position: absolute;z-index: 99;right: 32px;">
                <div style="display: flex; align-items: center; cursor: pointer;" @click="highlightProvince('绿茶')">
                    <img src="../assets/img/producetea13.jpg" alt="" style="width: 36px; height: 36px; margin-left: 10px;">
                    <div class="tea-type-text">绿茶</div>
                </div>
                <div class="label-container"
                    @click="highlightProvince('白茶')">
                    <img src="../assets/img/producetea14.jpg" alt=""
                        style="width: 36px; height: 36px; margin-left: 10px;">
                    <div class="tea-type-text">
                        白茶</div>
                </div>
                <div class="label-container"
                    @click="highlightProvince('黄茶')">
                    <img src="../assets/img/producetea15.jpg" alt=""
                        style="width: 36px; height: 36px; margin-left: 10px;">
                    <div
                    class="tea-type-text">
                        黄茶</div>
                </div>
                <div class="label-container"
                    @click="highlightProvince('乌龙茶')">
                    <img src="../assets/img/producetea16.jpg" alt=""
                        style="width: 36px; height: 36px; margin-left: 10px;">
                    <div
                    class="tea-type-text">
                        乌龙茶</div>
                </div>
                <div class="label-container"
                    @click="highlightProvince('红茶')">
                    <img src="../assets/img/producetea17.jpg" alt=""
                        style="width: 36px; height: 36px; margin-left: 10px;">
                    <div
                    class="tea-type-text">
                        红茶</div>
                </div>
                <div class="label-container"
                    @click="highlightProvince('黑茶')">
                    <img src="../assets/img/producetea18.jpg" alt=""
                        style="width: 36px; height: 36px; margin-left: 10px;">
                    <div
                    class="tea-type-text">
                        黑茶</div>
                </div>
            </div>
            <!--中国地图-->
            <div style="flex: 1;">
                <div id="china-map" style="height: 100vh;width: 100%;position: relative;top: -80px;left: -160px;"></div>

            </div>


        </div>


</template>

<script>
import Vue from 'vue';
import * as d3 from 'd3';
import * as echarts from "echarts/core";
import Chart from 'chart.js/auto';
import "../assets/js/china.js";
import chinaMap from '@/assets/json/china.json'
import { HelpCircleIcon } from "tdesign-icons-vue";
Vue.prototype.echarts = echarts;
export default {
    data() {
        return {
            GreenTea: true,
            WhiteTea: false,
            YellowTea: false,
            oolong: false,
            RedTea: false,
            BlackTea: false,
            guangdongData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Guangdong Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [96459, 103496, 116000, 108443.04, 148000]
                }]
            },
            anhuiData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Anhui Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [134922, 137094, 138900, 142413, 154100]
                }]
            },
            hunanData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Hunan Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [213626, 223111, 240826, 250253, 247542]
                }]
            },
            zhejiangData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Zhejiang Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [186000, 181096, 188100, 195300, 193500]
                }]
            },
            guizhouData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Guizhou Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [199327, 286046, 385636, 345017, 344857]
                }]
            },
            yunnanData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Yunnan Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [398100, 399957, 408824, 380023, 432904.09]
                }]
            },
            guangxiData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Guangxi Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [73000, 88312, 84696, 102800, 130300]
                }]
            },
            jiangsuData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Jiangsu Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [14558, 15352, 12000, 10703, 10400]
                }]
            },
            sichuanData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Sichuan Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [295000, 300951, 315343, 350000, 366292.67]
                }]
            },
            fujianData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Fujian Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [401620, 412000, 418131, 450469.83, 459674.38]
                }]
            },
            shanxiData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Shanxi Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [73547, 91683, 92996, 97297.16, 119689.49]
                }]
            },
            hubeiData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Hubei Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [314453, 335400, 350571, 384000, 314515.25]
                }]
            },
            jiangxiData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Jiangxi Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [171.3, 164.85, 169, 171.8, 175.7]
                }]
            },
            shandongData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Shandong Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [33, 35.6, 39, 40.83, 40.51]
                }]
            },
            henanData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Henan Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [174.5, 174.5, 205.2, 175.11, 208.6]
                }]
            },
            hainanData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Hainan Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [3.6, 3.62, 3.32, 3.56, 3.35]
                }]
            },
            chongqingData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Chongqing Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [67.3, 70.28, 78.2, 85.2, 84.62]
                }]
            },
            gansuData: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Gansu Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [17.2, 18.19, 17.92, 18, 17.4]
                }]
            },
        }
    },
    mounted() {
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
            //点击省份显示相应的折线图
            this.myChart.on('click', (params) => {
    var provinceName = params.name; // 获取点击的省份名称
    if(provinceName === '北京' || provinceName === '天津' ||provinceName === '河北'||provinceName === '山西'||provinceName === '内蒙古'||provinceName === '辽宁'
    ||provinceName === '吉林'||provinceName === '黑龙江'||provinceName === '上海'||provinceName === '西藏'||provinceName === '青海'
    ||provinceName === '宁夏'||provinceName === '新疆'||provinceName === '台湾'||provinceName === '南海诸岛')
    {
        alert('该地区不是主要产地。主要产地：广东、安徽、湖南、浙江、贵州、云南、广西、江苏、四川、福建、陕西、湖北、江西、山东、河南、海南、重庆、甘肃。');  
    }
    else
    {
        this.renderLineChart(provinceName); 
    }
    
});

        },
        renderLineChart(newValue) {
            let chartData = null;
            if (newValue === '广东') {
                chartData = this.guangdongData;
                chartData.datasets[0].label = '广东省近几年产地（万亩）';
            }
            if (newValue === '安徽') {
                chartData = this.anhuiData;
                chartData.datasets[0].label = '安徽省近几年产地（万亩）';
            }
            if (newValue === '湖南') {
                chartData = this.hunanData;
                chartData.datasets[0].label = '湖南省近几年产地（万亩）';
            }
            if (newValue === '浙江') {
                chartData = this.zhejiangData;
                chartData.datasets[0].label = '浙江省近几年产地（万亩）';
            }
            if (newValue === '贵州') {
                chartData = this.guizhouData;
                chartData.datasets[0].label = '贵州省近几年产地（万亩）';
            }
            if (newValue === '云南') {
                chartData = this.yunnanData;
                chartData.datasets[0].label = '云南省近几年产地（万亩）';
            }
            if (newValue === '广西') {
                chartData = this.guangxiData;
                chartData.datasets[0].label = '广西省近几年产地（万亩）';
            }
            if (newValue === '江苏') {
                chartData = this.jiangsuData;
                chartData.datasets[0].label = '江苏省近几年产地（万亩）';
            }
            if (newValue === '四川') {
                chartData = this.sichuanData;
                chartData.datasets[0].label = '四川省近几年产地（万亩）';
            }
            if (newValue === '福建') {
                chartData = this.fujianData;
                chartData.datasets[0].label = '福建省近几年产地（万亩）';
            }
            if (newValue === '陕西') {
                chartData = this.shanxiData;
                chartData.datasets[0].label = '陕西省近几年产地（万亩）';
            }
            if (newValue === '湖北') {
                chartData = this.hubeiData;
                chartData.datasets[0].label = '湖北省近几年产地（万亩）';
            }
            if (newValue === '江西') {
                chartData = this.jiangxiData;
                chartData.datasets[0].label = '江西省近几年产地（万亩）';
            }
            if (newValue === '山东') {
                chartData = this.shandongData;
                chartData.datasets[0].label = '山东省近几年产地（万亩）';
            }
            if (newValue === '河南') {
                chartData = this.henanData;
                chartData.datasets[0].label = '河南省近几年产地（万亩）';
            }
            if (newValue === '海南') {
                chartData = this.hainanData;
                chartData.datasets[0].label = '海南省近几年产地（万亩）';
            }
            if (newValue === '重庆') {
                chartData = this.chongqingData;
                chartData.datasets[0].label = '重庆近几年产地（万亩）';
            }
            if (newValue === '甘肃') {
                chartData = this.gansuData;
                chartData.datasets[0].label = '甘肃省近几年产地（万亩）';
            }
            if (this.lineChart) {
                // 如果图表已经存在，则销毁之前的图表
                this.lineChart.destroy();
            }
            this.lineChart = new Chart(this.$refs.lineChart.getContext('2d'), {
                type: 'line',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        tooltip: {
                            intersect: false, // 设置为false以在x轴方向上悬停时显示标签
                            mode: 'index' // 设置为'index'以在x轴方向上悬停时显示所有数据点的标签
                        }
                    }
                }
            });
        },
        updateMapOption() {
            const option = {
                series: [
                    {
                        name: '中国',
                        type: 'map',
                        mapType: 'china',
                        label: {
                            emphasis: {
                                show: true, // 在鼠标悬停时显示标签
                                formatter: '{b}', // 标签内容为省份名称
                                color: 'black', // 标签文字颜色
                                fontSize: 14, // 标签文字大小
                                fontWeight: 'bold' // 标签文字加粗
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: "#e9f7f0",
                                // areaColor: {
                                //         type: 'linear', // 设置渐变色
                                //         x: 0,
                                //         y: 0,
                                //         x2: 0.5,
                                //         y2: 1,
                                //         colorStops: [
                                //             {
                                //                 offset: 0,
                                //                 color: 'rgba(255, 249, 232, 1)' // 起始颜色
                                //             },
                                //             {
                                //                 offset: 1,
                                //                 color: '#589d8810' // 结束颜色
                                //             }
                                //         ]
                                //     },

                                borderColor: '#589d88', // 地图区域的边框颜色
                                borderWidth: 0.5 // 地图区域的边框宽度

                            },
                        },
                       
                    }
                ]
            };
            const highlightedProvinces = ['河南', '贵州', '江西', '安徽', '浙江', '江苏', '四川', '陕西', '湖南', '湖北', '广西', '福建'];
            option.series[0].data = highlightedProvinces.map(province => {
                return {
                    name: province,
                    itemStyle: {areaColor:{
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#d0dc89' // 起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#69a550' // 结束颜色
                                    }
                                ]
                            }, },
                    label: {
                        show: true, // 显示标签
                        formatter: '{b}', // 标签内容为省份名称
                        color: 'black', // 标签文字颜色
                        fontSize: 14, // 标签文字大小
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
                const highlightedProvinces = ['河南', '贵州', '江西', '安徽', '浙江', '江苏', '四川', '陕西', '湖南', '湖北', '广西', '福建'];
                const option = this.myChart.getOption();
                option.series[0].data = highlightedProvinces.map(province => {
                    return {
                        name: province,
                        itemStyle: {
                            areaColor:{
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#d0dc89' // 起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#69a550' // 结束颜色
                                    }
                                ]
                            },

                        },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
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
                // 根据需要高亮的省份名称，设置其区域样式为浅红色
                const highlightedProvinces = ['福建', '浙江', '云南', '陕西', '贵州', '湖南', , '广东', '江西']
                const option = this.myChart.getOption()
                option.series[0].data = highlightedProvinces.map(province => {
                    return {
                        name: province,
                        itemStyle: { areaColor:{
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#d9d9d9' // 起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#a5a5a5' // 结束颜色
                                    }
                                ]
                            }, },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
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
                        itemStyle: { areaColor:{
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#e9cb6a' // 起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#e6a524' // 结束颜色
                                    }
                                ]
                            }, },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
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
                        itemStyle: { areaColor:{
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#ec8924' // 起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#d06412' // 结束颜色
                                    }
                                ]
                            },},
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
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
                        itemStyle: { areaColor:{
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#e76541' // 起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#c54522' // 结束颜色
                                    }
                                ]
                            }, },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
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
                        itemStyle: { areaColor:{
                                type: 'linear', // 设置渐变色
                                x: 0,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#956c6e' // 起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#594445' // 结束颜色
                                    }
                                ]
                            }, },
                        label: {
                            show: true, // 显示标签
                            formatter: '{b}', // 标签内容为省份名称
                            color: 'black', // 标签文字颜色
                            fontSize: 14, // 标签文字大小
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
.texttitle {
    font-size: 18px;
    color: var(--td-brand-color-6);
    display: flex;
}

.textsub {
    /* 设置首行缩进为 20px，可以根据需要调整 */
    color:var(--td-brand-color-6);
    text-align:left;
    text-indent:2em;
    line-height:17px;
    font-size:14px;
}

.textsubtitle{
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(50, 132, 110, 1);
    text-align: left;
}

.title-sub {
    font-size: 18px;
    font-weight: bold;
    color: var(--td-brand-color-6);
}

.line {
    margin-top: 2vh;
    width: 380px;
    height: 320px;
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

  .card-container{
    /* background-color: rgba(252, 249, 232, 1);
    padding: 16px 24px; */
  }

  .tea-type-text{
    font-size: 14px;
    padding-left: 10px;
    color: var(--td-brand-color-6);
  }

  .label-container{
    display: flex; align-items: center; cursor: pointer;
    margin-top: 6px;
  }
</style>