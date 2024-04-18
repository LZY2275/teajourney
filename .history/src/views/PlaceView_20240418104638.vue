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
da
</script>