<template>
    <!-- <div style="height: 35vh; width: 280px ;overflow-y: auto;" class="tea-info-container">
        <p class="tea-info-title">{{ teatitle }}</p>
        <div style="width: 100%;display: flex;margin-bottom: 8px;">
            <div class="tea-info-card">

            </div>
            <div class="tea-info-card" style="margin-left: 2%;">

            </div>
        </div>
        <img src="../assets/img/teaimg.png" alt="" class="tea-info-img">
        <p class="tea-info-content" v-html="teacontent"></p>
    </div> -->

    <div>
        <t-drawer :visible.sync="visible" :placement="placement" :mode="mode" :header="tea_info[current].teatitle"
            :showOverlay="false" showInAttachedElement style="height: 50%;">
            <div style="width: 100%;display: flex;margin-bottom: 8px;">
                <div class="tea-info-card" style="text-align: center;">
                    <div style="display: flex;justify-content: center;">
                        <p class="range-text">{{ tea_info[current].teaprizerange[0] }}-{{
            tea_info[current].teaprizerange[1] }}</p>
                        <p class="range-note">元/斤</p>
                    </div>
                    <p style="font-size: 10px;">平均价格</p>
                </div>
                <div class="tea-info-card" style="margin-left: 2%;">
                    <div style="display: flex;justify-content: center;">
                        <p class="range-text">{{ tea_info[current].teafermentdegrange[0] }}-{{
            tea_info[current].teafermentdegrange[1] }}</p>
                        <p class="range-note">%</p>
                    </div>
                    <p style="font-size: 10px;">发酵度</p>
                </div>
            </div>
            <img :src="tea_info[current].teaimg" alt="" class="tea-info-img">
            <p class="tea-info-content" v-html="tea_info[current].teacontent"></p>
        </t-drawer>
        <t-guide :current.sync="guide_current" :steps="steps" @change="handleChange" @finish="handleFinish"
            @skip="handleFinish" />

        <div style="position: absolute;  top: 20px; right: 20px; z-index:99 ">
            <t-popup content="第一次使用？" placement="left">
                <HelpCircleIcon size="24" style="color: var(--td-brand-color-4)" @click="handle_guide_click" />
            </t-popup>
        </div>

        <div style="position: absolute;  bottom: 20px; right: 20px; z-index:99 ">
            <p class="note">The chart is inspired by <t-link theme="primary" underline
                    href="https://cardcaptorsakura.visualcinnamon.com/" target="_blank">
                    <link-icon slot="prefix-icon"></link-icon>
                    An Ode to Cardcaptor Sakura
                </t-link></p>
        </div>

        <!--圆形地图-->
        <!-- <t-button variant="outline" @click="visible = true">打开抽屉</t-button> -->
        <div id="chart" style="height: 100vh;display: flex;justify-content: center;align-items: center;">
            <div id="province" style="width: 32vh;height: 32vh;z-index: 999;"></div>
        </div>
        <!--产地-->

        <t-layout style="background-color: #FFFEF2;">
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
    </div>




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
export default {
    name: 'PlantView',
    components: {
        HelpCircleIcon
    },
    data() {
        return {
            GreenTea: true,
            WhiteTea: false,
            YellowTea: false,
            oolong: false,
            RedTea: false,
            BlackTea: false,
            guide_current: -1,
            steps: [
                {
                    element: '.arc',
                    title: '茶的类别及品种',
                    body: '外圈环显示茶的类别及该类别下茶的品种。颜色代表茶的类别：绿茶、白茶、黄茶、乌龙茶、红茶、黑茶。',
                    placement: 'bottom-right',
                },
                {
                    element: '.province-hover-arc',
                    title: '茶省',
                    body: '内圈表示产茶省份，点击省份显示省份与茶之间的对应关系与产茶地图。圆环的角度越大，说明该省份产茶越多',
                    placement: 'bottom',
                },
                {
                    element: '#name-pie-3',
                    title: '茶的详细信息',
                    body: '鼠标点击外环的茶对应的小卡片可以查看该茶的详细信息。',
                    placement: 'right',
                },
                {
                    element: '.province-hover-arc-g',
                    title: '产茶地图',
                    body: '点击外环的小卡片后展示，显示该省份产地点位等情况。',
                    placement: 'right',
                },
                {
                    element: '.nav',
                    title: '导航栏',
                    body: '使用导航栏可以进行页面之间的快速跳转。',
                    placement: 'right',
                },
                {
                    element: '.t-steps-item__inner ',
                    title: '导航项',
                    body: '点击导航项可以直接实现页面的跳转。',
                    placement: 'right',
                },
            ],
            teatitle: '祁门红茶',
            teacontent: '<p>祁门红茶，又称祁红，是中国安徽省黄山市祁门县出产的一种名优红茶。祁门红茶起源于明代，具有400多年的历史。它以其独特的外形、香气和口感而闻名于世。</p><p>祁门红茶的茶叶选自祁门县境内的高山茶园，采用传统的手工制作工艺。茶叶外形条索紧结，色泽乌润，金毫显露。冲泡时，茶汤呈红褐色，香气浓郁，口感醇厚。</p><p>祁门红茶的品质受土壤、气候和制作工艺的影响，因此，不同年份和产区的祁门红茶呈现出不同的特点。一般来说，祁门红茶具有独特的果香和花香，同时带有一定的甜味和淡淡的苦涩感。它富含多种有益物质，如茶多酚、咖啡因和氨基酸，具有提神醒脑、消除疲劳、抗氧化等功效。</p><p>祁门红茶是中国四大名茶之一，也是国内外茶叶市场上备受追捧的茶品之一。它被誉为“红茶之王”，享有“色香味俱佳，汤色红艳明亮，滋味醇和回甘”的美誉。无论是作为日常饮品还是送礼品，祁门红茶都是一种受欢迎的选择。</p>',
            teaimg: "../assets/img/teaimg.png",
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth - 300,
            visible: false,
            mode: 'push',
            placement: 'left',
            tea_info: [
                // 绿茶
                {
                    teatitle: '西湖龙井',
                    teacontent: '<p>西湖龙井是中国十大名茶之一，属绿茶，其产于浙江省杭州市西湖龙井村周围群山，并因此得名，具有1200多年历史  。清乾隆游览杭州西湖时，盛赞西湖龙井茶，把狮峰山下胡公庙前的十八棵茶树封为“御茶”。西湖龙井按外形和内质的优次分作1～8级。</p><p>特级西湖龙井茶扁平光滑挺直，色泽嫩绿光润，香气鲜嫩清高，滋味鲜爽甘醇，叶底细嫩呈朵。清明节前采制的龙井茶简称明前龙井，美称女儿红，“院外风荷西子笑，明前龙井女儿红。”西湖龙井茶与西湖一样，是人、自然、文化三者的完美结晶，是西湖地域文化的重要载体。西湖龙井茶，外形扁平挺秀，色泽绿翠，内质清香味醇，泡在杯中，芽叶色绿。素以“色绿、香郁、味甘、形美”四绝称著。</p><p>春茶中的特级西湖龙井、浙江龙井外形扁平光滑，苗锋尖削，芽长于叶，色泽嫩绿，体表无茸毛；汤色嫩绿（黄）明亮；清香或嫩栗香，但有部分茶带高火香；滋味清爽或浓醇；叶底嫩绿，尚完整。其余各级龙井茶随着级别的下降，外形色泽由嫩绿→青绿→墨绿，茶身由小到大，茶条由光滑至粗糙；香味由嫩爽转向浓粗，四级茶开始有粗味；叶底由嫩芽转向对夹叶，色泽由嫩黄→青绿→黄褐。 夏秋龙井茶，色泽暗绿或深绿，茶身较大，体表无茸毛，汤色黄亮，有清香但较粗糙，滋味浓略涩，叶底黄亮，总体品质比同级春茶差。</p>',
                    teaimg: require("../assets/img/tea_img_0.png"),
                    teaprizerange: [500, 3500],
                    teafermentdegrange: [0, 0],
                },
                {
                    teatitle: '碧螺春',
                    teacontent: '<p>碧螺春是中国传统名茶，中国十大名茶之一，属于绿茶类，已有1000多年历史。碧螺春产于江苏省苏州市吴县太湖的东洞庭山及西洞庭山（今苏州吴中区）一带，所以又称“洞庭碧螺春”。</p><p>唐朝时就被列为贡品，古人们又称碧螺春为“功夫茶”、“新血茶”。高级的碧螺春，茶芽之细嫩0.5公斤干茶需要茶芽6-7万个。炒成后的干茶条索紧结，白毫显露，色泽银绿，翠碧诱人，卷曲成螺，产于春季，故名“碧螺春”。此茶冲泡后杯中白云翻滚，清香袭人，是中国的名茶。主要工序为杀青、揉捻、搓团显毫、炒青。</p>',
                    teaimg: require("../assets/img/tea_img_1.png"),
                    teaprizerange: [400, 4000],
                    teafermentdegrange: [0, 0],
                },
                {
                    teatitle: '黄山毛峰',
                    teacontent: '<p>黄山毛峰是中国十大名茶之一，属于绿茶。产于安徽省黄山（徽州）一带，所以又称徽茶。由清代光绪年间谢裕大茶庄所创制。每年清明谷雨，选摘良种茶树“黄山种”、“黄山大叶种”等的初展肥壮嫩芽，手工炒制，该茶外形微卷，状似雀舌，绿中泛黄，银毫显露，且带有金黄色鱼叶（俗称黄金片）。入杯冲泡雾气结顶，汤色清碧微黄，叶底黄绿有活力，滋味醇甘，香气如兰，韵味深长。由于新制茶叶白毫披身，芽尖峰芒，且鲜叶采自黄山高峰，遂将该茶取名为黄山毛峰。</p>',
                    teaimg: require("../assets/img/tea_img_2.png"),
                    teaprizerange: [600, 1500],
                    teafermentdegrange: [0, 0],
                },
                {
                    teatitle: '玉露',
                    teacontent: '<p>恩施玉露，湖北省恩施市特产，中国国家地理标志产品。 恩施玉露外形条索紧圆光滑、纤细挺直如针，色泽苍翠绿润。经沸水冲泡，芽叶复展如生，初时婷婷地悬浮杯中，继而沉降杯底，平伏完整，汤色嫩绿明亮，如玉露，香气清爽，滋味醇和。观其外形，赏心悦目；饮其茶汤，沁人心脾。</p><p>恩施玉露茶是中国传统蒸青绿茶，选用叶色浓绿的一芽一叶或一芽二叶鲜叶经蒸汽杀青制作而成。恩施玉露对采制的要求很严格，芽叶须细嫩、匀齐，成茶条索紧细匀整，紧圆光滑，色泽鲜绿，匀齐挺直，状如松针，白毫显露，色泽苍翠润绿；茶汤清澈明亮，香气清高持久，滋味鲜爽甘醇，叶底嫩匀明亮，色绿如玉。“三绿”：茶绿、汤绿、叶底绿，为其显著特点。日本自唐代从中国传入茶种及制茶方法后，至今仍主要采用蒸青方法制作绿茶，其玉露茶制法与恩施玉露大同小异，品质各有特色。</p><p>唐朝时就被列为贡品，古人们又称碧螺春为“功夫茶”、“新血茶”。高级的碧螺春，茶芽之细嫩0.5公斤干茶需要茶芽6-7万个。炒成后的干茶条索紧结，白毫显露，色泽银绿，翠碧诱人，卷曲成螺，产于春季，故名“碧螺春”。此茶冲泡后杯中白云翻滚，清香袭人，是中国的名茶。主要工序为杀青、揉捻、搓团显毫、炒青。</p>',
                    teaimg: require("../assets/img/tea_img_3.png"),
                    teaprizerange: [1000, 3000],
                    teafermentdegrange: [0, 0],
                },
                {
                    teatitle: '滇青',
                    teacontent: '<p>滇青，即未经压制的普洱茶散茶原料，云南有悠久历史的茶叶，是采用大叶种茶树的鲜叶，经过杀青、揉捻后，用太阳晒干而成的优质晒青茶。它与历史上经过后熟阶段（即后发酵）越陈越香的普洱茶品质风格各不相同。</p><p>历史上的滇青是按季节命名，有春尖、春中、春尾、二水和谷花等品质级别。现代的滇青就是选用晒青毛茶未经过后熟阶段直接筛制而成，分为：春蕊、春芽、春尖、甲配、乙配、丙配和春玉等花色等级，是云南绿茶中别具一格的优秀产品。滇青茶有经久耐泡的特点，除可作一般茶叶冲泡饮用外，还宜作烤茶冲泡饮用。</p>',
                    teaimg: require("../assets/img/tea_img_4.png"),
                    teaprizerange: [160, 1500],
                    teafermentdegrange: [0, 0],
                },

                // 白茶
                {
                    teatitle: '白毫银针',
                    teacontent: '<p>白毫银针，创制于1796年，是中国六大茶类之一的白茶，原产地在福建，主要产区为福鼎、柘荣、政和、松溪、建阳等地，属有中国十大名茶的称号，素有茶中“美女”、“茶王”之美称。其外观特征挺直似针，满披白毫，如银似雪，成品茶长约3cm。由于鲜叶原料全部是茶芽，且制成成品茶后，形状似针，白毫密被，色白如银，因此得名白毫银针。</p><p>白毫银针芽头肥壮，遍披白毫，挺直如针，色白似银。福鼎所产茶芽茸毛厚，色白富光泽，汤色浅杏黄，味清鲜爽口。政和所产，汤味醇厚，香气清芬。银针白毫原料采摘标准为春茶嫩梢萌发一芽一叶时即将其采下，然后用手指将真叶、鱼叶轻轻地予以剥离。剥出的茶芽均匀地薄摊于水筛上（一种竹筛），勿使重叠，置微弱日光下或通风荫外，晒凉至八、九成干，再用焙笼以30-40℃文火至足干即成。也有用烈日代替焙笼晒至全干的，称为毛针。毛针经筛取肥长茶芽，再用手工摘去梗子（俗称银针脚），并筛簸拣除叶片、碎片、寻质等，最后再用文火焙干，趁热装箱。</p>',
                    teaimg: require("../assets/img/tea_img_5.png"),
                    teaprizerange: [1000, 10000],
                    teafermentdegrange: [5, 10],
                },
                {
                    teatitle: '白牡丹',
                    teacontent: '<p>属于中国六大茶类之一的白茶品项，主产于中国福建省的南平市政和县、松溪县、建阳市和宁德市福鼎市，是中国福建省历史名茶。因其绿叶夹银白色毫心，形似花朵，冲泡后绿叶托着嫩芽，宛如蓓蕾初放，故得美名白牡丹。</p><p>白牡丹外形毫心肥壮，叶张肥嫩，呈波纹隆起，芽叶连枝，叶缘垂卷，叶态自然，叶色灰绿，夹以银白毫心，呈“抱心形”，叶背遍布洁白茸毛，叶缘向叶背微卷，芽叶连枝。汤色杏黄或橙黄清澈，叶底浅灰，叶脉微红，香味鲜醇。白牡丹冲泡后，碧绿的叶子衬托着嫩嫩的叶芽，形状优美，好似牡丹蓓蕾初放，十分恬淡高雅。冲泡后绿叶衬嫩芽，宛如蓓蕾初绽花朵，绚丽秀美；滋味清醇微甜，毫香鲜嫩持久，汤色杏黄明亮，叶底嫩匀完整，叶脉微红，布于绿叶之中，有“红装素裹”之誉。</p>',
                    teaimg: require("../assets/img/tea_img_6.png"),
                    teaprizerange: [300, 1000],
                    teafermentdegrange: [5, 10],
                },
                {
                    teatitle: '寿眉',
                    teacontent: '<p>寿眉，乃以福鼎大白、福鼎白茶树制成的白茶。寿眉叶张稍肥嫩，芽叶连枝，无老梗，叶整卷如眉，香气清纯。其中用茶芽叶制成的毛茶称为“小白”，以区别于福鼎大白茶、政和大白茶茶树芽叶制成的“大白”毛茶。菜茶茶芽曾用以制造白毫银针，其后改用大白制白毫银针和白牡丹，而小白则用以制造贡眉。</p><p>优质寿眉毫心显而多，色泽翠绿，汤色橙黄或深黄，叶底匀整、柔软、鲜亮，叶张主脉迎光透视呈红色，味醇爽，香鲜纯。其采摘标准为一芽二叶至一芽二、三叶，要求含有白毫。优质寿眉色泽翠绿，汤色橙黄。</p>',
                    teaimg: require("../assets/img/tea_img_7.png"),
                    teaprizerange: [200, 500],
                    teafermentdegrange: [10, 20],
                },
                {
                    teatitle: '贡眉',
                    teacontent: '<p>贡眉又称为寿眉，属于中国六大茶类之一的白茶品项，主产于中国福建省的南平市的松溪县、政和县、建阳市、建瓯市、浦城县等地，是白茶中产量最高的一个品项，其产量约占到了白茶总产量的50%以上。</p><p>优质的贡眉成品茶毫心明显，茸毫色白且多，干茶色泽翠绿，冲泡后汤色呈橙色或深黄色，叶底匀整、柔软、鲜亮，叶片迎光看去，可透视出主脉的红色，品饮时感觉滋味醇爽，香气鲜纯。</p>',
                    teaimg: require("../assets/img/tea_img_8.png"),
                    teaprizerange: [600, 1500],
                    teafermentdegrange: [10, 20],
                },
                {
                    teatitle: '黄山白茶',
                    teacontent: '<p>黄山白茶，安徽省歙县特产，国家地理标志产品。黄山白茶富含氨基酸、铁、锌、硒等营养元素，特别是氨基酸含量较高,高达9.2%，远超浙江安吉白茶，由于其酚氨比较低，故茶汤滋味极其鲜醇。</p><p>黄山白茶芽白如玉、叶薄如纸。叶脉呈乳白色，冲泡后似凤羽有兰花香，汤色清澈，鲜爽甜香。理化指标：水浸出物≥35%，游离氨基酸总量（以谷氨酸计）≥7.0%。</p>',
                    teaimg: require("../assets/img/tea_img_9.png"),
                    teaprizerange: [200, 2000],
                    teafermentdegrange: [5, 10],
                },

                // 黄茶
                {
                    teatitle: '海马宫茶',
                    teacontent: '<p>海马宫茶属黄茶类名茶。具有条索紧结卷曲，茸毛显露，青高味醇，回味甘甜，汤色黄绿明亮，叶底嫩黄匀整明亮的特点。</p><p>海马宫茶，由贵州茶农创制于乾隆年间。产于贵州省大方县的老鹰岩脚下的海马宫村。海马宫茶采于当地中，小群体品种，具有茸毛多，持嫩性强的特性。谷雨前后开采。采摘标准；一级茶为一芽一叶初展；二级茶为一芽二叶，三级茶为一芽三叶。海马宫茶属黄茶类名茶。具有条索紧结卷曲，茸毛显露，青高味醇，回味甘甜，汤色黄绿明亮，叶底嫩黄匀整明亮的特点。</p>',
                    teaimg: require("../assets/img/tea_img_10.png"),
                    teaprizerange: [250, 580],
                    teafermentdegrange: [10, 20],
                },
                {
                    teatitle: '蒙顶黄芽',
                    teacontent: '<p>蒙顶黄芽，是芽形黄茶之一，产于四川省雅安市蒙顶山。蒙顶茶栽培始于西汉，距今已有二千年的历史，古时为贡品供历代皇帝享用，新中国成立后曾被评为全国十大名茶之一。蒙顶黄芽外形扁直，芽条匀整，色泽嫩黄，芽毫显露，花香幽长，汤色黄亮透碧，滋味鲜醇回甘，叶底全芽嫩黄采摘于春分时节，茶树上有10%的芽头鳞片展开，即可开园采摘。选圆肥单芽和一芽一叶初展的芽头，经复杂制作工艺，使成茶芽条匀整，扁平挺直，色泽黄润，金毫显露；汤色黄中透碧，甜香鲜嫩，甘醇鲜爽。为黄茶之极品。</p>',
                    teaimg: require("../assets/img/tea_img_11.png"),
                    teaprizerange: [150, 580],
                    teafermentdegrange: [10, 20],
                },
                {
                    teatitle: '霍山黄芽',
                    teacontent: '<p>霍山黄芽，安徽省霍山县特产，国家地理标志产品。</p><p>霍山黄芽依其品质分为特一级、特二级、一级和二级。外形挺直微展，色泽黄绿披毫，香气清香持久，汤色黄绿明亮，滋味浓厚鲜醇回甘，叶底微黄明亮。</p><p>2006年12月，霍山黄芽成功获批国家地理标志保护产品称号。</p>',
                    teaimg: require("../assets/img/tea_img_12.png"),
                    teaprizerange: [200, 500],
                    teafermentdegrange: [10, 20],
                },
                {
                    teatitle: '广东大叶青',
                    teacontent: '<p>大叶青茶为广东的特产。大叶青茶也称广东大叶青，主要产于广东省韶关、肇庆、湛江等县市、属于黄茶，是黄大茶的代表品种之一。制法是先萎凋后杀青，再揉捻闷堆。这与其它黄茶不同。产品品质具有黄茶的一般特点。所以也归属共同茶类。其产地为广东省韶关、肇庆、湛江等县市。广东大叶青为属黄茶类，但与其他黄茶制法不同，其先萎凋后杀青，再揉捻闷堆。杀青前的萎凋和揉捻后闷黄的主要目的是消除青气涩味，促进香味醇和纯正。</p>',
                    teaimg: require("../assets/img/tea_img_13.png"),
                    teaprizerange: [60, 335],
                    teafermentdegrange: [10, 20],
                },
                {
                    teatitle: '北港毛尖',
                    teacontent: '<p>北港毛尖以注册商标“北港”命名，唐代称“邕（yōng）湖茶”，属黄茶类，产于湖南省岳阳市北港。在加工技术中，通过热闷措施的摧化作用，破坏叶绿素，使不溶性碳水化合物部分转化成可溶性，儿茶素类发生非酶性氧化和异构化作用，其转化产物与蛋白质水解的氨基酸结合，产生新的香味物质，达到茶叶黄化，香味鲜醇回甘。</p><p>1987年在湖南全省名优茶评比中被评为全省名茶。</p>',
                    teaimg: require("../assets/img/tea_img_14.png"),
                    teaprizerange: [300, 800],
                    teafermentdegrange: [5, 10],
                },

                // 乌龙茶
                {
                    teatitle: '铁观音',
                    teacontent: '<p>铁观音（tiě guān yīn）茶，中国传统名茶，属于青茶类，是中国十大名茶之一。原产于福建泉州市安溪县西坪镇，发现于1723—1735年。“铁观音”既是茶名，也是茶树品种名，铁观音茶介于绿茶和红茶之间，属于半发酵茶类，铁观音独具“观音韵”，清香雅韵，冲泡后有天然的兰花香，滋味纯浓，香气馥郁持久，有“七泡有余香”之誉 。除具有一般茶叶的保健功能外，还具有抗衰老、抗动脉硬化、防治糖尿病、减肥健美、防治龋齿、清热降火，敌烟醒酒等功效。</p><p>铁观音含有较高的氨基酸、维生素、矿物质、茶多酚和生物碱，有多种营养和药效成分，具有养生保健的功能。于民国八年自福建安溪引进木栅区试种，分“红心铁观音”及“青心铁观音”两种，主要产区在文山期树属横张型，枝干粗硬，叶较稀松，芽少叶厚，产量不高，但制包种茶品质高，产期较青心乌龙晚。其树形稍，叶呈椭圆形，叶厚肉多。叶片平坦展开。</p>',
                    teaimg: require("../assets/img/tea_img_15.png"),
                    teaprizerange: [50, 800],
                    teafermentdegrange: [30, 40],
                },
                {
                    teatitle: '大红袍',
                    teacontent: '<p>大红袍，产于福建武夷山，属乌龙茶，品质优异。中国特种名茶。其外形条索紧结，色泽绿褐鲜润，冲泡后汤色橙黄明亮，叶片红绿相间。品质最突出之处是香气馥郁有兰花香，香高而持久，“岩韵”明显。除与一般茶叶具有提神益思，消除疲劳、生津利尿、解热防暑、杀菌消炎、解毒防病、消食去腻、减肥健美等保健功能外，还具有防癌症、降血脂、抗衰老、等特殊功效。大红袍很耐冲泡，冲泡七、八次仍有香味。品饮“大红袍”茶，必须按“工夫茶”小壶小杯细品慢饮的程式，才能真正品尝到岩茶之颠的禅茶韵味。注重活 、甘、清、香。</p>',
                    teaimg: require("../assets/img/tea_img_16.png"),
                    teaprizerange: [260, 2000],
                    teafermentdegrange: [20, 70],
                },
                {
                    teatitle: '肉桂',
                    teacontent: '<p>《武夷茶经》里表述：“肉桂，原产马枕峰……已有100多年历史，1985年福建省农作物品种审定委员会认定为省级品种”；《武夷岩茶名丛录》里也有表述：“肉桂，原产马枕峰，慧苑坑等处也有此相同之树。” [3]该茶是以肉桂良种茶树鲜叶，用武夷岩茶的制作方法而制成的乌龙茶，为武夷岩茶中的高香品种。</p><p>本世纪四十年代初已是武夷山茶园栽种的十个品种之一，到六十年代以来，由于其品质特殊，逐渐为人们认可，种植面积逐年扩大，现已发展到武夷山的水帘洞、牛栏坑、马头岩、天心岩、慧苑坑、鹰嘴岩、流香涧、竹窠、悟源涧、九龙窠等地，并且正在大力繁育推广，现已成为武夷岩茶中的主要品种。</p>',
                    teaimg: require("../assets/img/tea_img_17.png"),
                    teaprizerange: [150, 10000],
                    teafermentdegrange: [60, 70],
                },
                {
                    teatitle: '水仙',
                    teacontent: '<p>水仙茶是福建茶农创制的名茶，属于中国茶叶优良品种之一，是福建乌龙茶类中的一种。原产于闽北。一千年前，建阳、建瓯一带就有这种茶树，但人工栽培却是距今三百多年前的清康熙年间（1662-1722）。水仙茶列“中国国家级茶树良种”48个之首，又是全国41个半乔木大叶型茶树良种的第一个，发源于福建省建阳市唯一的茶树良种。汤色橙黄、香如兰花、滋味醇厚回甘。1985年全国农作物品种审定委员会认定为国家品种，编号GS13009—1985。</p>',
                    teaimg: require("../assets/img/tea_img_18.png"),
                    teaprizerange: [100, 1200],
                    teafermentdegrange: [20, 40],
                },
                {
                    teatitle: '北斗',
                    teacontent: '<p>北斗：原名北斗一号，武夷山名丛之一。原产于北斗峰（北斗峰在三姑石后面，山势陡峭，钟灵毓秀。相传1400多年前道家取名）现已有60多年的栽培历史，主要分布在武夷山武夷山正岩产区。北斗：无性系，灌木型，中叶类，中生种，品质优，色泽绿褐，香气浓郁鲜爽，滋味浓厚回甘，岩韵明显。抗寒性、抗旱性强。扦插繁殖能力强，成活率高。北斗茶为半发酵茶，其特殊的焙火工艺，不但茶叶品质提高，茶香稳定，还可以延长存放时间。北斗茶干香，清纯辛锐，幽雅秀气，香高持久。一泡入口最明显的就是清澈，细品清纯顺口，回甘甜持久，汤滑甘鲜醇润可口，滋味醇厚。</p>',
                    teaimg: require("../assets/img/tea_img_19.png"),
                    teaprizerange: [100, 1200],
                    teafermentdegrange: [20, 70],
                },

                // 红茶
                {
                    teatitle: '祁门红茶',
                    teacontent: '<p>祁门红茶，又称祁红，是中国安徽省黄山市祁门县出产的一种名优红茶。祁门红茶起源于明代，具有400多年的历史。它以其独特的外形、香气和口感而闻名于世。</p><p>祁门红茶的茶叶选自祁门县境内的高山茶园，采用传统的手工制作工艺。茶叶外形条索紧结，色泽乌润，金毫显露。冲泡时，茶汤呈红褐色，香气浓郁，口感醇厚。</p><p>祁门红茶的品质受土壤、气候和制作工艺的影响，因此，不同年份和产区的祁门红茶呈现出不同的特点。一般来说，祁门红茶具有独特的果香和花香，同时带有一定的甜味和淡淡的苦涩感。它富含多种有益物质，如茶多酚、咖啡因和氨基酸，具有提神醒脑、消除疲劳、抗氧化等功效。</p><p>祁门红茶是中国四大名茶之一，也是国内外茶叶市场上备受追捧的茶品之一。它被誉为“红茶之王”，享有“色香味俱佳，汤色红艳明亮，滋味醇和回甘”的美誉。无论是作为日常饮品还是送礼品，祁门红茶都是一种受欢迎的选择。</p>',
                    teaimg: require("../assets/img/tea_img_20.png"),
                    teaprizerange: [80, 200],
                    teafermentdegrange: [70, 90],
                },
                {
                    teatitle: '滇红',
                    teacontent: '<p>滇红是一种优质红茶，产于中国云南省的滇西高原地区。它以其独特的香气、醇厚的口感和深红色的汤色而闻名。滇红茶采用优质的茶树叶制作，经过摊晾、杀青、揉捻、发酵等工艺过程而成。</p><p>滇红茶的叶片形状扁平整齐，色泽乌润，散发出浓郁的花香和果香。其汤色鲜艳红亮，入口后有浓郁的甘甜味和花果香气，口感醇厚且回甘。滇红茶适宜冲泡，可多次冲泡，每一次冲泡都能释放出不同的香气和口感。</p><p>滇红茶在国内外享有很高的声誉，被誉为世界三大红茶之一。它不仅是中国传统的名茶之一，也是中国主要的出口茶叶之一。滇红茶以其独特的品质和口感受到了全球茶叶爱好者的喜爱和追捧。</p>',
                    teaimg: require("../assets/img/tea_img_21.png"),
                    teaprizerange: [600, 1200],
                    teafermentdegrange: [70, 90],
                },
                {
                    teatitle: '正山小种',
                    teacontent: '<p>《正山小种，又称“正山小种红茶”，是中国福建省武夷山产区的一种传统红茶。它得名于产地的“正山”和其茶叶的形状较小的特点。正山小种红茶的制作工艺独特，采用独特的“炒青”工艺，即将新鲜茶叶炒制至半发酵状态，然后经过揉捻、干燥等工序制成。</p><p>正山小种红茶的外形呈细小、紧结的条索状，色泽乌润，香气鲜爽，滋味醇厚，回甘悠长。其茶汤呈红褐色，清澈透亮。正山小种红茶具有浓郁的烟熏香气和独特的“岩韵”，口感丰满柔和，不苦涩，且富含茶多酚和咖啡碱等营养物质。</p><p>正山小种红茶是中国四大名茶之一，享有盛誉。其历史悠久，起源于18世纪，曾是英国皇家贵族的御茶之品。如今，正山小种红茶已成为中国主要的红茶出口品种之一，深受国内外茶叶爱好者的喜爱。它不仅是一种美味的饮品，还被认为具有降脂减肥、改善血液循环、提神醒脑等功效。</p>',
                    teaimg: require("../assets/img/tea_img_22.png"),
                    teaprizerange: [300, 800],
                    teafermentdegrange: [70, 90],
                },
                {
                    teatitle: '金骏眉',
                    teacontent: '<p>金骏眉是中国传统名茶之一产于中国福建省武夷山地区，是武夷岩茶的代表之一金骏眉茶，属于红茶中正山小种的分支，原产于福建省武夷山市桐木村。由正山小种红茶第二十四代传承人江元勋带领团队在传统工艺的基础上通过创新融合于2005年研制出的新品种红茶。</p><p>金骏眉茶叶的汤色清亮透明，香气高扬，口感鲜爽，回甘持久。它具有独特的花果香气，口感醇厚，滋味鲜爽，汤色明亮，叶底嫩绿。金骏眉茶具有清热解毒、提神醒脑、消食健胃等功效，常饮有助于提高免疫力，改善消化系统功能，对于保持健康有一定的帮助。</p><p>金骏眉之所以名贵，是因为全程都由制茶师傅手工制作，每500g金骏眉需要数万颗的茶叶鲜芽尖，采摘武夷山自然保护区内的高山原生态小种新鲜茶芽，然后经过一系列复杂的萎凋、摇青、发酵、揉捻等加工步骤而得以完成。金骏眉是难得的茶中珍品，外形细小紧密，伴有金黄色的茶绒茶毫，汤色金黄，入口甘爽。</p>',
                    teaimg: require("../assets/img/tea_img_23.png"),
                    teaprizerange: ['1万', '2万'],
                    teafermentdegrange: [70, 90],
                },


                // 黑茶
                {
                    teatitle: '安化黑茶',
                    teacontent: '<p>安化黑茶是一种中国传统的发酵茶，产于湖南省安化县。它是以优质毛茶为原料，经过揉捻、杀青、发酵、烘干等工艺制作而成。</p><p>安化黑茶是中国黑茶的始祖，在唐代（856年）的史料中记载为“渠江薄片”，曾列为朝廷贡品，明嘉靖三年（1524年）就正式创制出了安化黑茶。至16世纪末期，安化黑茶已位居中国领先地位，万历年间被定为官茶，大量远销西北。</p><p>安化黑茶外观呈黑褐色，茶汤呈红褐色，滋味醇厚、甘甜，香气独特，有“茶中美酒”之称。安化黑茶的制作历史悠久，已有数百年的历史，是中国茶叶文化的重要组成部分。除了作为一种饮品外，安化黑茶还有一定的药用价值，被广泛用于调理身体和治疗疾病。</p>',
                    teaimg: require("../assets/img/tea_img_24.png"),
                    teaprizerange: [80, 500],
                    teafermentdegrange: [100, 100],
                },
                {
                    teatitle: '普洱茶',
                    teacontent: '<p>普洱茶是一种以云南大叶种茶为原料，经过特殊的发酵和储藏工艺制成的茶叶。其历史可以追溯到公元前3000年左右，是中国茶叶中的一种古老品种。</p><p>普洱茶的特点是色泽红褐，香气独特，味道醇厚，有助于消化和降低胆固醇。普洱茶还有很多功效，如促进血液循环、降低血压、减肥等。普洱茶的品质和价值主要取决于原料的品质、制作工艺和储藏时间。</p>',
                    teaimg: require("../assets/img/tea_img_25.png"),
                    teaprizerange: [700, 800],
                    teafermentdegrange: [100, 100],
                },
                {
                    teatitle: '六堡茶',
                    teacontent: '<p>六堡茶是中国传统名茶之一，产于广西壮族自治区梧州市的六堡镇，因此得名。六堡茶的历史可以追溯到明朝，已有几百年的栽培和制作历史。</p><p>六堡茶以其独特的香气和口感而闻名。它是一种发酵度较高的黑茶，经过采摘、萎凋、揉捻、发酵、炒制等工序制成。六堡茶的茶叶形状扁平，色泽乌润，茶汤呈红褐色。</p><p>六堡茶的香气浓郁，带有独特的陈香味，入口后回甘顺滑。它具有温暖身体、消食化滞、降脂减肥等功效。六堡茶还含有丰富的茶多酚和咖啡碱，有助于提神醒脑，增强免疫力。六堡茶有多个品种，其中最有名的是六堡大茶、小茶和细茶。六堡大茶叶片较大，茶汤颜色深沉，口感醇厚；小茶叶片较小，茶汤颜色较浅，口感清爽；细茶叶片细小，茶汤颜色红艳，口感浓郁。</p><p>在中国茶文化中，六堡茶被视为一种高品质的茶叶，常作为馈赠礼品或在重要场合上供茶。它的独特风味和历史传承使其成为茶叶爱好者和收藏家们追捧的对象。</p>',
                    teaimg: require("../assets/img/tea_img_26.png"),
                    teaprizerange: [120, 700],
                    teafermentdegrange: [100, 100],
                },
                {
                    teatitle: '泾阳茯砖茶',
                    teacontent: '<p>泾阳茯砖茶是中国陕西省泾阳县出产的一种特色茶。它是一种压制茶，将新鲜的茶叶经过摊晾、杀青、揉捻、压制等工艺制成砖状。泾阳茯砖茶的茶叶形状规整，色泽深绿。</p><p>泾阳茯砖茶以其独特的香气和口感而闻名。它具有清香高爽、甘醇顺滑的特点。茯砖茶的茶汤呈黄绿色，清澈透亮。它的口感清爽宜人，带有一丝丝的甘甜。</p><p>泾阳茯砖茶具有多种保健功效。它含有丰富的茶多酚、咖啡碱和维生素等营养物质，有助于提神醒脑、消食化滞、降脂减肥等。同时，茯砖茶还具有抗氧化、抗衰老的作用，有助于保护心血管健康。</p>',
                    teaimg: require("../assets/img/tea_img_27.png"),
                    teaprizerange: [100, 200],
                    teafermentdegrange: [100, 100],
                },
                {
                    teatitle: '千两茶',
                    teacontent: '<p>千两茶系黑茶茶类中的一个品种， 创制于湖南省安化县江南一带，是安化的一个传统名茶，是以每卷(支)的茶叶净含量合老秤一千两而得名，因其外表的篾篓包装成花格状，故又名花卷茶。</p><p>千两茶的外观呈现出砖形，通常重量在1000克左右，因此得名“千两茶”。它的外观色泽深绿，茶叶质地紧实，香气浓郁。千两茶的口感醇厚，滋味浓烈，具有独特的陈香和甘甜的味道。此外，千两茶还富含丰富的茶多酚和咖啡碱等营养物质，具有一定的保健功效，如提神醒脑、消除疲劳等。</p><p>千两茶在中国茶文化中占有重要地位，被广泛饮用和收藏。它不仅作为一种传统的饮品，还被用作礼品赠送或商务交流的重要礼物。</p>',
                    teaimg: require("../assets/img/tea_img_28.png"),
                    teaprizerange: [120, 200],
                    teafermentdegrange: [100, 100],
                },


            ],
            current: 0,

            myChart: '',
            distributionOptions: '',

            radius: 0,



        };
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
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize); //销毁窗口大小改变监听
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
    created() {

    },
    beforeDestroy() {
        d3.select("#chart").selectAll("*").remove();
    },


};


</script>

<style scoped>
#chart {
    position: relative;
}

.tea-info-container {
    margin-left: 20px;
}

.tea-info-img {
    width: 260px;
    height: 180px;
    border-radius: 5px;
    object-fit: cover;
}

.tea-info-title {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 26.06px;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 15px;
    text-align: left;
}

.tea-info-content {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.85);
    text-align: left;
    text-indent: 2em;
}

.tea-info-card {
    width: 48%;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 6px 0;
}

.flex3 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.range-text {
    font-size: 18px;

}

.range-note {
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

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