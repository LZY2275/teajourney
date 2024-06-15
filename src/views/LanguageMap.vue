<template>
    <div style="width: 100%;height: 100%;position: relative;">
        <div
            style="background-color:#fffef2 ;position:absolute;filter: blur(10px);width:100vw;height: 90px;z-index: 900;">
        </div>
        <div style="display: flex;position:absolute;z-index: 999; top: 2.5vh;left: 3.5vw;align-items: center;">
            <div class="title">{{ $t("茶与世界") }}</div>
            <t-divider layout="vertical" />
            <p class="titlesub">茶的英文叫tea，但你知道吗？目前全世界有5000多种语言，然而在众多的语言中，茶的读音却表现出了惊人的一致性。<br>
                除了少数地区之外，全世界的茶实际上只有两大类读法。一种与英语说法tea类似，比如西班牙语中的té和阿非利卡语中的tee。另一种是cha的读音类似，例如印地语中的chay和俄语中的чай。</p>
        </div>

        <div id="chartView" style="width: 100%;height: 100%;display: flex;margin: 0px auto;">
        </div>


        <t-tabs v-model="value" style="position: absolute;z-index: 999;right: 2.5vw;top: 2.5vh;">
            <t-tab-panel value="first" label="陆上丝绸之路">
            </t-tab-panel>
            <t-tab-panel value="second" label="海上丝绸之路"></t-tab-panel>
        </t-tabs>

        <div style="display: flex;position: absolute;z-index: 999;bottom: 1.5vh;left: 3.5vw;">
            <div>
                <div class="teaName"> {{ displayteaInfo.teaStyle }} </div>
                <div class="divider" v-if="displayteaInfo.language"></div>
                <div class="teaNamesub1"> {{ displayteaInfo.showPronunciation }} </div>
                <div class="teaNamesub1" v-if="displayteaInfo.language">语言：{{ displayteaInfo.language }}</div>
            </div>
        </div>

        <div class="background-gradient-left-bottom" style="display: flex;position: absolute;z-index: 998;bottom: 0;left:0;width: 400px;height: 200px;"></div>
        <div class="background-gradient-bottom" style="display: flex;position: absolute;z-index: 998;bottom: 0;left:0;width: 100vw;height: 100px;"></div>
        <div class="background-gradient-right-bottom" style="display: flex;position: absolute;z-index: 998;bottom: 0;right:0;width: 800px;height: 130px;"></div>
        <div style="position: absolute;bottom: 1.5vh;right: 160px;display: flex;z-index: 999;align-items: center;">
            <p class="text" style="text-align: right;margin-right: 24px;">{{ text }}</p>
            <div class="divider-vertical" style="margin-right: 24px;"></div>
            <p class="teaName" >{{ dispalyContryName }}</p>
        </div>
    </div>

</template>
<script>
import * as echarts from 'echarts/core';
import { use } from 'echarts/core';
import { GeoComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { LinesChart, EffectScatterChart } from 'echarts/charts';
use([CanvasRenderer, GeoComponent, LinesChart, EffectScatterChart]);

import datajson from '../assets/json/world.json';

echarts.registerMap('world', datajson);
//从中国中心延伸的线条
var trackData = [
    [
        {
            name: '中国',
        },
        {
            name: '韩国',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '日本',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '蒙古',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '乌兹别克斯坦',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '尼泊尔',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '巴基斯坦',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '伊朗',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '阿富汗',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '塔吉克斯坦',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '哈萨克斯坦',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '俄罗斯',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '白俄罗斯',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '乌克兰',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '吉尔吉斯斯坦',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '捷克共和国',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '希腊',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '阿尔及利亚',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '巴林',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '科威特',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '埃塞俄比亚',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '索马里',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '塞内加尔',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '尼日利亚',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '尼日尔',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '肯尼亚',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '坦桑尼亚',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '乌干达',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '布隆迪',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '阿尔巴尼亚',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '摩洛哥',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '毛里塔尼亚',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '冈比亚',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '葡萄牙',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '巴西',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '安哥拉',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '莫桑比克',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '泰国',
        },
    ],

];
//从福建延伸的线条
var trackNewData = [
    [
        {
            name: '福建',
        },
        {
            name: '菲律宾',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '柬埔寨',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '印度尼西亚',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '马来西亚',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '文莱',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '新加坡',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '巴布亚新几内亚',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '澳大利亚',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '新西兰',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '斯里兰卡',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '马拉维',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '赞比亚',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '莫桑比克',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '马达加斯加',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '南非共和国',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '刚果民主共和国',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '刚果共和国',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '加纳',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '多哥',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '塞拉利昂',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '英国',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '加拿大',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '美国',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '爱尔兰',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '苏格兰',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '法国',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '比利时',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '西班牙',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '墨西哥',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '哥伦比亚',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '阿根廷',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '意大利',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '德国',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '奥地利',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '瑞士',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '荷兰',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '比利时',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '瑞典',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '挪威',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '芬兰',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '拉脱维亚',
        },
    ],
    [
        {
            name: '福建',
        },
        {
            name: '冰岛',
        },
    ],

]
//地理坐标
var geoCoordMap = {
    '中国': [104, 36], // 中国的经纬度
    '福建': [118.3006, 26.0789],//福建
    '俄罗斯': [105, 60], // 俄罗斯的经纬度
    '美国': [-95.7129, 37.0902], // 美国的经纬度
    '法国': [2.2137, 46.2276], // 法国的经纬度
    '英国': [-3.435973, 55.378051], // 英国的经纬度
    '澳大利亚': [133.7751, -25.2744], // 澳大利亚的经纬度
    '土耳其': [35.2433, 38.9637], // 土耳其的经纬度
    '斯里兰卡': [80.7718, 7.8731], // 斯里兰卡的经纬度
    '柬埔寨': [104.990963, 12.565679],//柬埔寨的经纬度
    '印度尼西亚': [115.4259, -7.9667],//印度尼西亚的经纬度
    '马达加斯加': [47, -20],//马达加斯加的经纬度
    '西班牙': [-5, 40],//西班牙的经纬度
    '韩国': [127.766922, 35.907757], // 韩国的经纬度
    '日本': [138.252924, 36.204824], // 日本的经纬度
    '蒙古': [103.846656, 46.862496], // 蒙古的经纬度
    '乌兹别克斯坦': [64.585262, 41.377491], // 乌兹别克斯坦的经纬度
    '尼泊尔': [84.124008, 28.394857], // 尼泊尔的经纬度
    '巴基斯坦': [69.345116, 30.375321], // 巴基斯坦的经纬度
    '伊朗': [53.688046, 32.427908], // 伊朗的经纬度
    '阿富汗': [66.238514, 33.93911], // 阿富汗的经纬度
    '塔吉克斯坦': [71.276093, 38.861034], // 塔吉克斯坦的经纬度
    '哈萨克斯坦': [66.923684, 48.019573], // 哈萨克斯坦的经纬度
    '白俄罗斯': [27.953389, 53.709807], // 白俄罗斯的经纬度
    '乌克兰': [31.16558, 48.379433], // 乌克兰的经纬度
    '吉尔吉斯斯坦': [74.766098, 41.20438], // 吉尔吉斯斯坦的经纬度
    '捷克共和国': [15.472962, 49.817492], // 捷克共和国的经纬度
    '希腊': [21.824312, 39.074208], // 希腊的经纬度
    '阿尔及利亚': [2.617323, 28.158938], // 阿尔及利亚的经纬度
    '巴林': [50.58605, 26.0667], // 巴林的经纬度
    '科威特': [47.481766, 29.375859], // 科威特的经纬度
    '埃塞俄比亚': [39.782334, 9.145], // 埃塞俄比亚的经纬度
    '索马里': [46.199616, 5.152149], // 索马里的经纬度
    '塞内加尔': [-14.452362, 14.497401], // 塞内加尔的经纬度
    '尼日利亚': [8.675277, 9.081999], // 尼日利亚的经纬度
    '尼日尔': [8.081666, 17.607789], // 尼日尔的经纬度
    '肯尼亚': [37.906193, -0.023559], // 肯尼亚的经纬度
    '坦桑尼亚': [34.888822, -6.369028], // 坦桑尼亚的经纬度
    '乌干达': [32.290275, 1.373333], // 乌干达的经纬度
    '布隆迪': [29.918886, -3.373056], // 布隆迪的经纬度
    '阿尔巴尼亚': [20.168331, 41.153332], // 阿尔巴尼亚的经纬度
    '摩洛哥': [-7.09262, 31.791702], // 摩洛哥的经纬度
    '毛里塔尼亚': [-10.940835, 21.00789], // 毛里塔尼亚的经纬度
    '冈比亚': [-15.310139, 13.443182], // 冈比亚的经纬度
    '葡萄牙': [-8.224454, 39.399872], // 葡萄牙的经纬度
    '巴西': [-51.92528, -14.235004], // 巴西的经纬度
    '安哥拉': [17.873887, -11.202692], // 安哥拉的经纬度
    '莫桑比克': [35.529562, -18.665695], // 莫桑比克的经纬度
    '菲律宾': [121.774017, 12.879721], // 菲律宾的经纬度
    '马来西亚': [101.975766, 4.210484], // 马来西亚的经纬度
    '文莱': [114.727669, 4.535277], // 文莱的经纬度
    '新加坡': [103.819836, 1.352083], // 新加坡的经纬度
    '巴布亚新几内亚': [143.95555, -6.314993], // 巴布亚新几内亚的经纬度
    '新西兰': [174.885971, -40.900557], // 新西兰的经纬度
    '马拉维': [34.301525, -13.254308], // 马拉维的经纬度
    '赞比亚': [27.849332, -13.133897], // 赞比亚的经纬度
    '南非共和国': [22.937506, -30.559482], // 南非共和国的经纬度
    '刚果民主共和国': [21.758664, -4.038333], // 刚果民主共和国的经纬度
    '刚果共和国': [15.827659, -0.228021], // 刚果共和国的经纬度
    '加纳': [-1.023194, 7.946527], // 加纳的经纬度
    '多哥': [0.824782, 8.619543], // 多哥的经纬度
    '塞拉利昂': [-11.779889, 8.460555], // 塞拉利昂的经纬度
    '英国': [-3.435973, 55.378051], // 英国的经纬度
    '加拿大': [-106.346771, 56.130366], // 加拿大的经纬度
    '爱尔兰': [-8.24389, 53.412],//爱尔兰的经纬度
    '苏格兰': [-4.202646, 56.490671], // 苏格兰的经纬度
    '比利时': [4.469936, 50.503887], // 比利时的经纬度
    '墨西哥': [-102.552784, 23.634501], // 墨西哥的经纬度
    '哥伦比亚': [-74.297333, 4.570868], // 哥伦比亚的经纬度
    '阿根廷': [-63.616672, -38.416097], // 阿根廷的经纬度
    '意大利': [12.56738, 41.87194], // 意大利的经纬度
    '德国': [10.451526, 51.165691], // 德国的经纬度
    '奥地利': [14.550072, 47.516231], // 奥地利的经纬度
    '瑞士': [8.227512, 46.818188], // 瑞士的经纬度
    '荷兰': [5.291266, 52.132633], // 荷兰的经纬度
    '瑞典': [18.643501, 60.128161], // 瑞典的经纬度
    '挪威': [8.468946, 60.472024], // 挪威的经纬度
    '芬兰': [25.748151, 61.92411], // 芬兰的经纬度
    '拉脱维亚': [24.603189, 56.879635], // 拉脱维亚的经纬度
    '冰岛': [-19.020835, 64.963051], // 冰岛的经纬度
    '泰国': [100.992541, 15.870032] // 泰国的经纬度

};
//各个国家的茶介绍
var countryText = {
    '印度': '印度喜欢喝马萨拉茶，其制作方法是在红茶中加入姜和小豆蔻。奇特的是它的喝茶方式：茶汤调制好后, 不是斟入茶碗或茶杯里，而是斟入盘子里,不是用嘴去喝，也不是用吸管吸饮,而是伸出长长的舌头去舔饮，故当地人称为“舔茶”。',
    '阿根廷': '阿根廷人喜欢饮马黛茶，其饮茶方式也别具一格。他们把马黛茶叶放入一个非常精致的、上面刻有民族图案的葫芦形瓢中，然后冲入开水,片刻以后便开始用一根银制的吸管插入葫芦瓢内,像吸饮料一样，慢慢地吸饮。',
    '泰国': '泰国人喜欢吃腌茶。腌茶是一种嚼食菜肴,它的制作方法与我国云南少数民族制作的腌茶一模一样，因为泰国北部地区气候炎热，而腌茶却又香又清凉,此成为当地世代相传的一道家常菜。',
    '埃及': '埃及人喜欢喝浓厚醇冽的红茶，喜欢在茶汤中加蔗糖变成糖茶。用沸水冲沏茶杯中的茶叶，加上三分之二茶杯容积的白糖,充分溶化后便是埃及糖茶了。',
    '俄罗斯': '俄罗斯人爱喝甜茶，喜欢在茶中加糖、果酱、蜂蜜，有时也加奶、柠檬片。有些地方习惯加盐，如雅库特人就在茶里加奶和盐。他们亦喜好浓茶并用茶炊煮茶，常在茶中放罗姆酒。喝茶时先用瓷茶壶一般根据一人一茶勺的量把茶叶泡3~5分钟，然后将沏好的浓茶倒进茶杯，再根据个人喜好浓淡的程度续水。',
    '蒙古': '蒙古人在饮茶时，先把砖茶放在木白中捣成粉末,加水放在锅中煮开，加上盐和脂肪制成羹汤，过滤后混人牛奶、奶油、玉蜀黍再饮用。',
    '马里': '马里人喜爱饭后喝茶，他们把茶叶和水放人茶壶里然后放在泥炉上煮开，茶煮沸后加上糖，每人斟一杯。他们的煮茶方法不同一般：每天起床,就以锡罐烧水，投人茶叶;任其煎煮，直到同时煮的腌肉烧熟，再同时吃肉喝茶。这与新加坡、马来西亚的肉骨茶是异曲同工的。',
    '利比亚': '北非人喝茶，喜欢在绿茶里放几片新鲜薄荷叶和一些冰糖，饮时清凉可口。有客来访，客人得将主人向他敬的三杯茶喝完，才算有礼貌。',
    '突尼斯': '北非人喝茶，喜欢在绿茶里放几片新鲜薄荷叶和一些冰糖，饮时清凉可口。有客来访，客人得将主人向他敬的三杯茶喝完，才算有礼貌。',
    '阿尔及利亚': '北非人喝茶，喜欢在绿茶里放几片新鲜薄荷叶和一些冰糖，饮时清凉可口。有客来访，客人得将主人向他敬的三杯茶喝完，才算有礼貌。',
    '摩洛哥': '北非人喝茶，喜欢在绿茶里放几片新鲜薄荷叶和一些冰糖，饮时清凉可口。有客来访，客人得将主人向他敬的三杯茶喝完，才算有礼貌。',
    '苏丹': '北非人喝茶，喜欢在绿茶里放几片新鲜薄荷叶和一些冰糖，饮时清凉可口。有客来访，客人得将主人向他敬的三杯茶喝完，才算有礼貌。',
    '土耳其': '土耳其人喜欢饮薄荷茶。在炎热的夏季里，土耳其人喜欢在每半杯绿茶汤里加入二三片新鲜薄荷叶，再加上冰糖。茶、冰糖和薄荷三者交融一体，形成了一种独特的风味。',
    '加拿大': '加拿大人泡茶方法较特别，先将陶壶烫热，放一茶匙茶叶，然后以沸水注于其上，浸七、八分钟,再将茶叶倾入另一热壶供饮。通常加入乳酪与糖。',
    '马来西亚': '马来西亚喜饮拉茶。当茶泡好之后,调茶人用两个杯子将茶倒过来又倒过去，由于两个杯子离得比较远,茶的用料又与奶茶相差不多，因此看上去像是一条白色的粗线被拉长了一样，因此被称为拉茶。',
    '澳大利亚': '澳大利亚的牧民居住在高寒的山区，喜欢饮红茶，而且必须在煮好的茶汤内加入甜酒、柠檬和牛乳，这种有各种味道的茶汤营养丰富,能增加人体的热量。',
    '斯里兰卡': '斯里兰卡的居民酷爱喝浓茶，茶叶又苦又涩，他们却觉得津津有味。该国红茶畅销世界各地，在首都科伦坡有经销茶叶的大商行，设有试茶部，由专家凭舌试味，再核等级和价格。',
    '法国': '法国人饮茶，始盛于室贵族以及有闲阶层，以饮用红茶者最多，且一般习惯冲（煮）饮法,即取茶一小撮或一小包（指袋泡茶）,冲入沸水后，配以糖或糖和牛乳。加入的牛奶与红茶水比例为3：2最适宜。',
    '印度尼西亚': '印度尼西亚人有个习惯，就是无论春夏秋冬，只要吃完中餐之后，就一定要喝一碗冰茶。冰茶，又称为凉茶。冰茶的制作方法并不复杂，当地人常常在红茶中加人一些糖和配料，之后放人冰箱，以便于降低温度。',
    '英国': '英国各阶层人士都喜爱饮料。茶，几乎可称为英国的民族饮料。他们喜爱现煮的浓茶，并放一二块糖，加少许冷牛奶。',
    '伊拉克': '伊拉克人煮的是很浓的红茶，味苦色黑所以有些伊拉克人喝茶时先舔一下白糖,然后呷一口茶，循环往复;也有的在喝茶时把糖放在面前，望糖喝茶,大概还颇有点“望梅止渴”的情趣,边想白糖边喝苦茶。',
    '美国': '美国人喜欢速溶的袋泡茶。大家都知道美国是一个变化极其迅速的国家，讲究高效简便，时间就像金钱一样被精丁细算着花，饮茶也是以最为快速的方式被喝下去。,然后呷一口茶，循环往复;也有的在喝茶时把糖放在面前，望糖喝茶,大概还颇有点“望梅止渴”的情趣,边想白糖边喝苦茶。',
};
//各个国家茶的读音介绍（cha的）
var pronunciationText = [
    {
        name: '韩国',
        teaStyle: 'tcha',//不同国家茶的文字（默认俄罗斯）
        language:"Korean	朝鲜语 ",
        showPronunciation: '读音：[tcha]',//展示读音

    },
    {
        name: '日本',
        teaStyle: 'ocha',//不同国家茶的文字（默认俄罗斯）
        language:"Japanese	日语 ",
        showPronunciation: '读音：[ocha]',//展示读音

    },
    {
        name: '蒙古',
        teaStyle: 'tsay',//不同国家茶的文字（默认俄罗斯）
        language:"Monglian	蒙古语",
        showPronunciation: '读音：[tsay]',//展示读音
    },
    {
        name: '乌兹别克斯坦',
        teaStyle: 'choy',//不同国家茶的文字（默认俄罗斯）
        language:"Uzbek	乌兹别克语 ",
        showPronunciation: '读音：[choy]',//展示读音

    },
    {
        name: '尼泊尔',
        teaStyle: 'ja',//不同国家茶的文字（默认俄罗斯）
        language:"Tibetian	藏语",
        showPronunciation: '读音：[ja]',//展示读音

    },
    {
        name: '巴基斯坦',
        teaStyle: 'tja',//不同国家茶的文字（默认俄罗斯）
        language:"panjabi	旁遮普语",
        showPronunciation: '读音：[tja]',//展示读音

    },
    {
        name: '伊朗',
        teaStyle: 'caj',//不同国家茶的文字（默认俄罗斯）
        language:"Persian	波斯语",
        showPronunciation: '读音：[caj]',//展示读音

    },
    {
        name: '阿富汗',
        teaStyle: 'caj',//不同国家茶的文字（默认俄罗斯）
        language:"Persian	波斯语",
        showPronunciation: '读音：[caj]',//展示读音

    },
    {
        name: '塔吉克斯坦',
        teaStyle: 'caj、chay',//不同国家茶的文字（默认俄罗斯）
        language:"Persian	波斯语",
        showPronunciation: '读音：[caj、chay]',//展示读音

    },
    {
        name: '哈萨克斯坦',
        teaStyle: 'shai',//不同国家茶的文字（默认俄罗斯）
        language:"Persian	波斯语",
        showPronunciation: '读音：[shai]',//展示读音
    },
    {
        name: '俄罗斯',
        teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
        language:"Russian	俄语 ",
        showPronunciation: '读音：[chay]',//展示读音

    },
    {
        name: '白俄罗斯',
        teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
        language:"Russian	俄语 ",
        showPronunciation: '读音：[chay]',//展示读音

    },
    {
        name: '乌克兰',
        teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
        language:"Russian	俄语 ",
        showPronunciation: '读音：[chay]',//展示读音

    },
    {
        name: '吉尔吉斯斯坦',
        teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
        language:"Russian	俄语 ",
        showPronunciation: '读音：[chay]',//展示读音
    },
    {
        name: '捷克共和国',
        teaStyle: 'caj',//不同国家茶的文字（默认俄罗斯）
        language:"Czech	捷克语",
        showPronunciation: '读音：[caj]',//展示读音

    },
    {
        name: '希腊',
        teaStyle: 'tsai',//不同国家茶的文字（默认俄罗斯）
        language:"Greek	希腊语 ",
        showPronunciation: '读音：[tsai]',//展示读音
    },
    {
        name: '阿尔及利亚',
        teaStyle: 'shay',//不同国家茶的文字（默认俄罗斯）
        language:"Arabic	阿拉伯语 ",
        showPronunciation: '读音：[shay]',//展示读音

    },
    {
        name: '巴林',
        teaStyle: 'shay',//不同国家茶的文字（默认俄罗斯）
        language:"Arabic	阿拉伯语",
        showPronunciation: '读音：[shay]',//展示读音

    },
    {
        name: '科威特',
        teaStyle: 'shay',//不同国家茶的文字（默认俄罗斯）
        language:"Arabic	阿拉伯语",
        showPronunciation: '读音：[shay]',//展示读音

    },
    {
        name: '埃塞俄比亚',
        teaStyle: 'tchay',//不同国家茶的文字（默认俄罗斯）
        language:"Arabic	阿拉伯语",
        showPronunciation: '读音：[tchay]',//展示读音

    },
    {
        name: '索马里',
        teaStyle: 'shaah-a',//不同国家茶的文字（默认俄罗斯）
        language:"Somali	索马里语",
        showPronunciation: '读音：[shaah-a]',//展示读音
    },
    {
        name: '塞内加尔',
        teaStyle: 'saayi',//不同国家茶的文字（默认俄罗斯）
        language:"Fula	富拉语",
        showPronunciation: '读音：[saayi]',//展示读音

    },
    {
        name: '尼日利亚',
        teaStyle: 'shayi',//不同国家茶的文字（默认俄罗斯）
        language:"Hausa	豪萨语",
        showPronunciation: '读音：[shayi]',//展示读音

    },
    {
        name: '尼日尔',
        teaStyle: 'shayi',//不同国家茶的文字（默认俄罗斯）
        language:"Hausa	豪萨语",
        showPronunciation: '读音：[shayi]',//展示读音

    },
    {
        name: '肯尼亚',
        teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
        language:"Swahili	斯瓦希里语",
        showPronunciation: '读音：[chay]',//展示读音

    },
    {
        name: '坦桑尼亚',
        teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
        language:"Swahili	斯瓦希里语",
        showPronunciation: '读音：[chay]',//展示读音
    },
    {
        name: '乌干达',
        teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
        language:"Swahili	斯瓦希里语",
        showPronunciation: '读音：[chay]',//展示读音

    },
    {
        name: '布隆迪',
        teaStyle: 'icyayi',//不同国家茶的文字（默认俄罗斯）
        language:"Kirundi	基隆迪语",
        showPronunciation: '读音：[icyayi]',//展示读音

    },
    {
        name: '阿尔巴尼亚',
        teaStyle: 'tay',//不同国家茶的文字（默认俄罗斯）
        language:"Algerian Arbic	阿尔巴尼亚语",
        showPronunciation: '读音：[tay]',//展示读音

    },
    {
        name: '摩洛哥',
        teaStyle: '摩洛哥',//不同国家茶的文字（默认俄罗斯）
        language:"Berber	柏柏尔语",
        showPronunciation: '读音：[ashahi]',//展示读音

    },
    {
        name: '毛里塔尼亚',
        teaStyle: 'atay',//不同国家茶的文字（默认俄罗斯）
        language:"Hassaniya	哈萨尼亚语",
        showPronunciation: '读音：[atay]',//展示读音
    },
    {
        name: '冈比亚',
        teaStyle: 'attaya',//不同国家茶的文字（默认俄罗斯）
        language:"Wolof	沃洛夫语 ",
        showPronunciation: '读音：[attaya]',//展示读音

    },
    {
        name: '葡萄牙',
        teaStyle: 'cha',//不同国家茶的文字（默认俄罗斯）
        language:"Portugese	葡萄牙语 ",
        showPronunciation: '读音：[cha]',//展示读音

    },
    {
        name: '巴西',
        teaStyle: 'cha',//不同国家茶的文字（默认俄罗斯）
        language:"Portugese	葡萄牙语 ",
        showPronunciation: '读音：[cha]',//展示读音

    },
    {
        name: '安哥拉',
        teaStyle: 'cha',//不同国家茶的文字（默认俄罗斯）
        language:"Portugese	葡萄牙语 ",
        showPronunciation: '读音：[cha]',//展示读音

    },
    {
        name: '莫桑比克',
        teaStyle: 'cha',//不同国家茶的文字（默认俄罗斯）
        language:"Portugese	葡萄牙语 ",
        showPronunciation: '读音：[cha]',//展示读音

    },
    {
        name: '泰国',
        teaStyle: 'cha',//不同国家茶的文字（默认俄罗斯）
        language:"Thai	泰语",
        showPronunciation: '读音：[cha]',//展示读音

    },
];
//各个国家茶的读音介绍（te的）
var pronunciationNewText = [
    {
        name: '菲律宾',
        teaStyle: 'tsaa', // 不同国家茶的文字（默认俄罗斯）
        language:"Filinino	菲律宾语 ",
        showPronunciation: '读音：[tsaa]', // 展示读音
    },
    {
        name: '柬埔寨',
        teaStyle: 'tae',
        language:"Khmer	高棉语 ",
        showPronunciation: '读音：[tae]',
    },
    {
        name: '印度尼西亚',
        teaStyle: 'teh',
        language:"Indonesian	印度尼西亚语",
        showPronunciation: '读音：[teh]',
    },
    {
        name: '马来西亚',
        teaStyle: 'teh',
        language:"Malay	马来语",
        showPronunciation: '读音：[teh]',
    },
    {
        name: '文莱',
        teaStyle: 'teh',
        language:"Malay	马来语",
        showPronunciation: '读音：[teh]',
    },
    {
        name: '新加坡',
        teaStyle: 'teh',
        language:"Malay	马来语",
        showPronunciation: '读音：[teh]',
    },
    {
        name: '巴布亚新几内亚',
        teaStyle: 'teh',
        language:"Koiari	科亚里语",
        showPronunciation: '读音：[teh]',
    },
    {
        name: '澳大利亚',
        teaStyle: 'thii',
        language:"Gamilaraay	加米拉拉语 ",
        showPronunciation: '读音：[thii]',
    },
    {
        name: '新西兰',
        teaStyle: 'tii',
        language:"Maori	毛利语",
        showPronunciation: '读音：[tii]',
    },
    {
        name: '斯里兰卡',
        teaStyle: 'te',
        language:"Sinhala	僧伽罗语",
        showPronunciation: '读音：[te]',
    },
    {
        name: '马拉维',
        teaStyle: 'tiyi',
        language:"Chewa	奇瓦瓦语",
        showPronunciation: '读音：[tiyi]',
    },
    {
        name: '赞比亚',
        teaStyle: 'tiyi',
        language:"Chewa	奇瓦瓦语",
        showPronunciation: '读音：[tiyi]',
    },
    {
        name: '莫桑比克',
        teaStyle: 'tiyi',
        language:"Chewa	奇瓦瓦语",
        showPronunciation: '读音：[tiyi]',
    },
    {
        name: '马达加斯加',
        teaStyle: 'dite',
        language:"Malaggasy	马达加斯加语",
        showPronunciation: '读音：[dite]',
    },
    {
        name: '南非共和国',
        teaStyle: 'tee',
        language:"Afrikaans	南非荷兰语",
        showPronunciation: '读音：[tee]',
    },
    {
        name: '刚果民主共和国',
        teaStyle: 'ti',
        language:"Lingala	林加拉语",
        showPronunciation: '读音：[ti]',
    },
    {
        name: '刚果共和国',
        teaStyle: 'ti',
        language:"Lingala	林加拉语",
        showPronunciation: '读音：[ti]',
    },
    {
        name: '加纳',
        teaStyle: 'ti',
        language:"Ewe	埃维语 ",
        showPronunciation: '读音：[ti]',
    },
    {
        name: '多哥',
        teaStyle: 'ti',
        language:"Ewe	埃维语 ",
        showPronunciation: '读音：[ti]',
    },
    {
        name: '塞拉利昂',
        teaStyle: 'ti',
        language:"Krio	克里奥语",
        showPronunciation: '读音：[ti]',
    },
    {
        name: '英国',
        teaStyle: 'tea',
        language:"English	英语",
        showPronunciation: '读音：[tea]',
    },
    {
        name: '加拿大',
        teaStyle: 'tea',
        language:"English	英语",
        showPronunciation: '读音：[tea]',
    },
    {
        name: '美国',
        teaStyle: 'tea',
        language:"English	英语",
        showPronunciation: '读音：[tea]',
    },
    {
        name: '爱尔兰',
        teaStyle: 'tae',
        language:"Irish	爱尔兰语",
        showPronunciation: '读音：[tae]',
    },
    {
        name: '苏格兰',
        teaStyle: 'ti',
        language:"Scots Gaelic	苏格兰盖尔语 ",
        showPronunciation: '读音：[ti]',
    },
    {
        name: '法国',
        teaStyle: 'thé',
        language:"French	法语",
        showPronunciation: '读音：[thé]',
    },
    {
        name: '比利时',
        teaStyle: 'thé',
        language:"French	法语",
        showPronunciation: '读音：[thé]',
    },
    {
        name: '西班牙',
        teaStyle: 'té',
        language:"Spanish	西班牙语 ",
        showPronunciation: '读音：[té]',
    },
    {
        name: '墨西哥',
        teaStyle: 'té',
        language:"Spanish	西班牙语 ",
        showPronunciation: '读音：[té]',
    },
    {
        name: '哥伦比亚',
        teaStyle: 'té',
        language:"Spanish	西班牙语 ",
        showPronunciation: '读音：[té]',
    },
    {
        name: '阿根廷',
        teaStyle: 'té',
        language:"Spanish	西班牙语 ",
        showPronunciation: '读音：[té]',
    },
    {
        name: '意大利',
        teaStyle: 'tè',
        language:"Italian	意大利语 ",
        showPronunciation: '读音：[tè]',
    },
    {
        name: '德国',
        teaStyle: 'tee',
        language:"German	德语",
        showPronunciation: '读音：[tee]',
    },
    {
        name: '奥地利',
        teaStyle: 'tee',
        language:"German	德语",
        showPronunciation: '读音：[tee]',
    },
    {
        name: '瑞士',
        teaStyle: 'tee',
        language:"German	德语",
        showPronunciation: '读音：[tee]',
    },
    {
        name: '荷兰',
        teaStyle: 'thee',
        language:"Dutch	荷兰语 ",
        showPronunciation: '读音：[thee]',
    },
    {
        name: '比利时',
        teaStyle: 'thee',
        language:"Dutch	荷兰语 ",
        showPronunciation: '读音：[thee]',
    },
    {
        name: '瑞典',
        teaStyle: 'te',
        language:"Swedish	瑞典语",
        showPronunciation: '读音：[te]',
    },
    {
        name: '挪威',
        teaStyle: 'te',
        language:"Norwegian	挪威语",
        showPronunciation: '读音：[te]',
    },
    {
        name: '芬兰',
        teaStyle: 'tee',
        language:"Fnnish	芬兰语 ",
        showPronunciation: '读音：[tee]',
    },
    {
        name: '拉脱维亚',
        teaStyle: 'teja',
        language:"Latvian	拉脱维亚语",
        showPronunciation: '读音：[teja]',
    },
    {
        name: '冰岛',
        teaStyle: 'te',
        language:"Icelandic	冰岛语 ",
        showPronunciation: '读音：[te]',
    }

];
//所有国家的翻译
var countryNameZH = {
    Afghanistan: "阿富汗",
    Albania: "阿尔巴尼亚",
    Algeria: "阿尔及利亚",
    Angola: "安哥拉",
    Argentina: "阿根廷",
    Armenia: "亚美尼亚",
    Australia: "澳大利亚",
    Austria: "奥地利",
    Azerbaijan: "阿塞拜疆",
    Bahamas: "巴哈马",
    Bahrain: "巴林",
    Bangladesh: "孟加拉国",
    Belarus: "白俄罗斯",
    Belgium: "比利时",
    Belize: "伯利兹",
    Benin: "贝宁",
    Bhutan: "不丹",
    Bolivia: "玻利维亚",
    "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
    Botswana: "博茨瓦纳",
    Brazil: "巴西",
    "British Virgin Islands": "英属维京群岛",
    Brunei: "文莱",
    Bulgaria: "保加利亚",
    "Burkina Faso": "布基纳法索",
    Burundi: "布隆迪",
    Cambodia: "柬埔寨",
    Cameroon: "喀麦隆",
    Canada: "加拿大",
    "Cape Verde": "佛得角",
    "Cayman Islands": "开曼群岛",
    "Central African Rep.": "中非共和国",
    Chad: "乍得",
    Chile: "智利",
    China: "中国",
    Colombia: "哥伦比亚",
    Comoros: "科摩罗",
    Congo: "刚果",
    "Costa Rica": "哥斯达黎加",
    Croatia: "克罗地亚",
    Cuba: "古巴",
    Cyprus: "塞浦路斯",
    "Czech Rep.": "捷克共和国",
    "Côte d'Ivoire": "科特迪瓦",
    "Dem. Rep. Congo": "刚果民主共和国",
    "Dem. Rep. Korea": "朝鲜",
    Denmark: "丹麦",
    Djibouti: "吉布提",
    "Dominican Rep.": "多米尼加共和国",
    Ecuador: "厄瓜多尔",
    Egypt: "埃及",
    "El Salvador": "萨尔瓦多",
    "Equatorial Guinea": "赤道几内亚",
    Eritrea: "厄立特里亚",
    Estonia: "爱沙尼亚",
    Ethiopia: "埃塞俄比亚",
    "Falkland Is.": "福克兰群岛",
    Fiji: "斐济",
    Finland: "芬兰",
    "Fr. S. Antarctic Lands": "所罗门群岛",
    France: "法国",
    Gabon: "加蓬",
    Gambia: "冈比亚",
    Georgia: "格鲁吉亚",
    Germany: "德国",
    Ghana: "加纳",
    Greece: "希腊",
    Greenland: "格陵兰",
    Guatemala: "危地马拉",
    Guinea: "几内亚",
    "Guinea-Bissau": "几内亚比绍",
    Guyana: "圭亚那",
    Haiti: "海地",
    Honduras: "洪都拉斯",
    Hungary: "匈牙利",
    Iceland: "冰岛",
    India: "印度",
    Indonesia: "印度尼西亚",
    Iran: "伊朗",
    Iraq: "伊拉克",
    Ireland: "爱尔兰",
    "Isle of Man": "马恩岛",
    Israel: "以色列",
    Italy: "意大利",
    Jamaica: "牙买加",
    Japan: "日本",
    Jordan: "约旦",
    Kazakhstan: "哈萨克斯坦",
    Kenya: "肯尼亚",
    Korea: "韩国",
    Kuwait: "科威特",
    Kyrgyzstan: "吉尔吉斯斯坦",
    "Lao PDR": "老挝",
    Latvia: "拉脱维亚",
    Lebanon: "黎巴嫩",
    Lesotho: "莱索托",
    Liberia: "利比里亚",
    Libya: "利比亚",
    Lithuania: "立陶宛",
    Luxembourg: "卢森堡",
    Macedonia: "马其顿",
    Madagascar: "马达加斯加",
    Malawi: "马拉维",
    Malaysia: "马来西亚",
    Maldives: "马尔代夫",
    Mali: "马里",
    Malta: "马耳他",
    Mauritania: "毛利塔尼亚",
    Mauritius: "毛里求斯",
    Mexico: "墨西哥",
    Moldova: "摩尔多瓦",
    Monaco: "摩纳哥",
    Mongolia: "蒙古",
    Montenegro: "黑山共和国",
    Morocco: "摩洛哥",
    Mozambique: "莫桑比克",
    Myanmar: "缅甸",
    Namibia: "纳米比亚",
    Nepal: "尼泊尔",
    Netherlands: "荷兰",
    "New Caledonia": "新喀里多尼亚",
    "New Zealand": "新西兰",
    Nicaragua: "尼加拉瓜",
    Niger: "尼日尔",
    Nigeria: "尼日利亚",
    Norway: "挪威",
    Oman: "阿曼",
    Pakistan: "巴基斯坦",
    Panama: "巴拿马",
    "Papua New Guinea": "巴布亚新几内亚",
    Paraguay: "巴拉圭",
    Peru: "秘鲁",
    Philippines: "菲律宾",
    Poland: "波兰",
    Portugal: "葡萄牙",
    "Puerto Rico": "波多黎各",
    Qatar: "卡塔尔",
    Reunion: "留尼旺",
    Romania: "罗马尼亚",
    Russia: "俄罗斯",
    Rwanda: "卢旺达",
    "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑威奇群岛",
    "S. Sudan": "南苏丹",
    "San Marino": "圣马力诺",
    "Saudi Arabia": "沙特阿拉伯",
    Senegal: "塞内加尔",
    Serbia: "塞尔维亚",
    "Sierra Leone": "塞拉利昂",
    Singapore: "新加坡",
    Slovakia: "斯洛伐克",
    Slovenia: "斯洛文尼亚",
    "Solomon Is.": "所罗门群岛",
    Somalia: "索马里",
    "South Africa": "南非",
    Spain: "西班牙",
    "Sri Lanka": "斯里兰卡",
    Sudan: "苏丹",
    Suriname: "苏里南",
    Swaziland: "斯威士兰",
    Sweden: "瑞典",
    Switzerland: "瑞士",
    Syria: "叙利亚",
    Tajikistan: "塔吉克斯坦",
    Tanzania: "坦桑尼亚",
    Thailand: "泰国",
    Togo: "多哥",
    Tonga: "汤加",
    "Trinidad and Tobago": "特立尼达和多巴哥",
    Tunisia: "突尼斯",
    Turkey: "土耳其",
    Turkmenistan: "土库曼斯坦",
    "U.S. Virgin Islands": "美属维尔京群岛",
    Uganda: "乌干达",
    Ukraine: "乌克兰",
    "United Arab Emirates": "阿拉伯联合酋长国",
    "United Kingdom": "英国",
    "United States": "美国",
    Uruguay: "乌拉圭",
    Uzbekistan: "乌兹别克斯坦",
    Vanuatu: "瓦努阿图",
    "Vatican City": "梵蒂冈城",
    Venezuela: "委内瑞拉",
    Vietnam: "越南",
    "W. Sahara": "西撒哈拉",
    Yemen: "也门",
    Yugoslavia: "南斯拉夫",
    Zaire: "扎伊尔",
    Zambia: "赞比亚",
    Zimbabwe: "津巴布韦",
};

// 高亮其他国家的颜色（从中国中心出发）
var areaColor_other = {
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
}
// 高亮其他国家的颜色（从福建出发）
var areaColor_NewOther = {
    type: 'linear', // 设置渐变色
    x: 0,
    y: 0,
    x2: 0.5,
    y2: 1,
    colorStops: [
        {
            offset: 0,
            color: '#e37318' // 起始颜色
        },
        {
            offset: 1,
            color: '#ffd9c2' // 结束颜色
        }
    ]
}
// 中国中心向外延伸线条的颜色
var lineColor = "#005240"
// 福建向外延伸线条的颜色
var lineNewColor = "#1565C0"

// 地图的背景颜色
var mapBackground = "#E0F7FA"
export default {
    name: '',
    data() {
        return {
            dispalyContryName : '俄罗斯',
            displayteaInfo :{
                name: '俄罗斯',
                teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
                language:"Russian	俄语 ",
                showPronunciation: '读音：[chay]',//展示读音
            },
            myChart: null,
            value: 'first',
            //右下角区域内容
            image: require('../assets/img/俄罗斯.png'),
            text: '俄罗斯人爱喝甜茶，喜欢在茶中加糖、果酱、蜂蜜，有时也加奶、柠檬片。有些地方习惯加盐，如雅库特人就在茶里加奶和盐。他们亦喜好浓茶并用茶炊煮茶，常在茶中放罗姆酒。喝茶时先用瓷茶壶一般根据一人一茶勺的量把茶叶泡3',
            //左下角区域内容
            teaStyle: 'chay',//不同国家茶的文字（默认俄罗斯）
            showPronunciation: '读音：[chay]',//展示读音
            //导航线上的茶叶图标
            planePath: 'path://M549.479739 345.51634c42.164706-81.484967 127.163399-157.615686 300.005228-144.062745 8.366013 0.669281 15.226144 5.521569 18.572549 13.385621 87.173856 197.772549 3.848366 406.253595-146.739869 474.0183 0 0-9.537255-112.104575-54.044444-199.780392-39.152941-77.803922-117.793464-143.560784-117.793464-143.560784zM783.393464 658.572549c-3.681046 0-7.362092-1.673203-10.039216-4.684967-4.517647-5.521569-3.681046-13.720261 1.840523-18.070589 9.537255-7.696732 18.405229-16.397386 27.105883-25.6 4.852288-5.186928 13.05098-5.521569 18.070588-0.669281 5.186928 4.852288 5.521569 13.05098 0.669281 18.070589-9.369935 10.039216-19.24183 19.24183-29.615686 27.775163-2.342484 2.175163-5.186928 3.179085-8.031373 3.179085z m53.040523-56.888889c-2.509804 0-5.354248-0.836601-7.529412-2.342484-5.856209-4.183007-7.027451-12.214379-2.844444-17.903268 73.620915-101.396078 85.333333-241.610458 30.284967-365.929411-1.505882-3.346405-4.183007-5.354248-7.864052-5.688889-138.039216-10.708497-234.750327 35.471895-287.62353 137.202614-3.179085 6.19085-11.043137 8.867974-17.401307 5.521569-6.19085-3.179085-8.867974-11.043137-5.521568-17.401307 25.6-49.359477 61.239216-87.173856 106.081045-112.941177 55.215686-31.623529 124.820915-44.50719 206.305883-37.981699 13.218301 1.003922 24.094118 8.867974 29.448366 20.915033 58.394771 132.684967 45.845752 282.603922-33.129412 391.362091-2.342484 3.346405-6.35817 5.186928-10.206536 5.186928zM726.504575 444.737255c-2.677124 0-5.688889-1.003922-7.864052-2.677124-5.688889-4.350327-6.52549-12.54902-2.007843-17.903268C778.039216 346.352941 857.014379 229.898039 884.454902 118.462745c1.840523-6.860131 8.700654-11.043137 15.560784-9.369935 6.860131 1.840523 11.043137 8.700654 9.369935 15.560785-28.779085 115.952941-109.762092 235.586928-172.67451 315.566013-2.677124 2.844444-6.35817 4.517647-10.206536 4.517647zM691.36732 924.109804c-1.840523 0-3.513725-0.16732-5.354248-0.334641-181.207843-26.269281-319.74902-87.341176-411.105882-181.375163-5.019608-5.186928-4.852288-13.218301 0.33464-18.070588 5.186928-5.019608 13.218301-4.852288 18.070588 0.33464 87.341176 89.85098 220.862745 148.413072 396.3817 173.845752 5.019608 0.836601 9.871895-2.677124 10.708496-7.864052 35.806536-203.963399-9.202614-384.501961-126.326797-508.318955-97.715033-103.236601-238.264052-154.938562-375.968627-138.708496-4.015686 0.501961-6.860131 3.011765-8.031373 7.027451-14.389542 54.713725-53.542484 246.128105 51.534641 409.098039 3.848366 6.023529 2.007843 13.887582-3.848366 17.903268-6.023529 3.848366-13.887582 2.007843-17.903268-3.848366-110.766013-171.670588-69.939869-372.287582-54.881046-429.511111 3.848366-14.222222 15.226144-24.261438 29.783006-25.934641 71.278431-8.533333 145.233987 0.16732 213.500654 25.098039 69.270588 25.265359 132.852288 67.095425 184.052287 121.30719 122.980392 129.840523 170.164706 318.243137 133.186929 530.405229-2.677124 17.066667-17.233987 28.946405-34.133334 28.946405zM537.098039 715.963399c-2.844444 0-6.023529-1.003922-8.366013-3.011765-6.19085-5.521569-12.71634-10.875817-18.907189-16.732026-5.354248-4.684967-5.856209-12.88366-1.003922-18.070588 4.684967-5.354248 12.88366-5.856209 18.070588-1.003922 6.19085 5.521569 12.54902 11.043137 18.572549 16.230065 5.521569 4.684967 6.023529 12.71634 1.505883 18.070589-2.509804 3.179085-6.19085 4.517647-9.871896 4.517647z m-53.877124-49.192157c-3.179085 0-6.35817-1.171242-8.867974-3.513726-11.043137-10.708497-22.253595-21.918954-33.296732-33.296732-5.019608-5.186928-4.852288-13.218301 0.334641-18.070588 5.186928-5.019608 13.218301-4.852288 18.070588 0.334641 10.708497 11.043137 21.751634 21.918954 32.627451 32.627451 5.186928 5.019608 5.354248 13.05098 0.33464 18.070588-2.509804 2.677124-5.856209 3.848366-9.202614 3.848366zM409.934641 590.807843c-3.513725 0-7.027451-1.505882-9.704576-4.350327-180.036601-202.290196-271.393464-417.631373-275.074509-426.666666-2.844444-6.35817 0-13.887582 6.52549-16.899347 6.35817-2.844444 14.054902 0.16732 17.066666 6.52549 0 0.16732 0.16732 0.334641 0.167321 0.334641 3.681046 8.867974 93.532026 220.528105 270.891503 419.471895 4.684967 5.354248 4.183007 13.552941-1.003922 18.070589-2.677124 2.342484-5.688889 3.513725-8.867973 3.513725z',
            chaView: {
                backgroundColor: mapBackground,
                tooltip: {
                    trigger: 'item',
                    formatter: (params) => {
                        return params.data.name
                    }
                },
                geo: {
                    map: 'world',
                    zoom: 1.15,
                    itemStyle: {
                        areaColor: '#e9f7f0',//所有国家的覆盖色
                        borderColor: '#589d88',//国家之间的边框颜色
                        emphasis: {
                            areaColor: '#e9f7f0',//鼠标覆盖上去的颜色
                        },
                    },
                    regions: [
                        {
                            name: '中国',
                            itemStyle: {
                                borderColor: '#ffffff', // 中国边框颜色
                                borderWidth: 3, // 中国边框的宽度
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
                                },
                                emphasis: {
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
                                    },
                                },
                            },

                        },
                        // 以下是有面积区域的地图区域
                        {
                            name: '印度',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '阿根廷',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '泰国',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '埃及',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '俄罗斯',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '蒙古',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '马里',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '利比亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '突尼斯',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '阿尔及利亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '摩洛哥',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '苏丹',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '土耳其',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '加拿大',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '马来西亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '澳大利亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '斯里兰卡',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '法国',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '印度尼西亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '英国',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '伊拉克',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '美国',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                    ],
                    // 所有国家的翻译
                    nameMap: countryNameZH,
                },

            },
            teView: {
                backgroundColor: mapBackground,
                tooltip: {
                    trigger: 'item',
                    formatter: (params) => {
                        return params.data.name
                    }
                },
                geo: {
                    map: 'world',
                    zoom: 1.15,
                    itemStyle: {
                        areaColor: '#e9f7f0',//所有国家的覆盖色
                        borderColor: '#589d88',//国家之间的边框颜色
                        emphasis: {
                            areaColor: '#e9f7f0',//鼠标覆盖上去的颜色
                        },
                    },
                    regions: [
                        {
                            name: '中国',
                            itemStyle: {
                                borderColor: '#ffffff', // 中国边框颜色
                                borderWidth: 3, // 中国边框的宽度
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
                                },
                                emphasis: {
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
                                    },
                                },
                            },

                        },
                        // 以下是有面积区域的地图区域
                        {
                            name: '印度',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '阿根廷',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '泰国',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '埃及',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '俄罗斯',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '蒙古',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '马里',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '利比亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '突尼斯',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '阿尔及利亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '摩洛哥',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '苏丹',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '土耳其',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '加拿大',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '马来西亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '澳大利亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '斯里兰卡',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '法国',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '印度尼西亚',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '英国',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '伊拉克',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                        {
                            name: '美国',
                            itemStyle: {
                                borderColor: '#ffd591',
                                borderWidth: 0,
                                areaColor: areaColor_other,
                                emphasis: {
                                    areaColor: areaColor_other
                                },
                            },
                        },
                    ],
                    // 所有国家的翻译
                    nameMap: countryNameZH,
                },

            },
        }
    },
    methods: {
        // 获取中文国家名称
        getChineseName(name) {
            const countryNames = {
                '斯里兰卡': '斯里兰卡',
                '印度': '印度',
                '阿根廷': '阿根廷',
                '泰国': '泰国',
                '埃及': '埃及',
                '俄罗斯': '俄罗斯',
                '蒙古': '蒙古',
                '马里': '马里',
                '利比亚': '利比亚',
                '突尼斯': '突尼斯',
                '阿尔及利亚': '阿尔及利亚',
                '摩洛哥': '摩洛哥',
                '苏丹': '苏丹',
                '土耳其': '土耳其',
                '加拿大': '加拿大',
                '马来西亚': '马来西亚',
                '澳大利亚': '澳大利亚',
                '斯里兰卡': '斯里兰卡',
                '法国': '法国',
                '印度尼西亚': '印度尼西亚',
                '英国': '英国',
                '伊拉克': '伊拉克',
                '美国': '美国'
            };
            return countryNames[name] || '';
        },
        //中国中心向外延伸坐标转换
        coordinateData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name, // 转换成中文
                        toName: dataItem[1].name, // 转换成中文
                        coords: [fromCoord, toCoord],
                    });
                }
            }
            return res;
        },
        //从福建开始延伸
        makeLines(trackNewData) {
            return trackNewData.map(dataItem => {
                const fromCoord = geoCoordMap[dataItem[0].name];
                const toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    return {
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    };
                }
            }).filter(item => item);
        },
        updateChart(newVal) {
            if (newVal === 'first') {
                this.initFirstChart();
            } else {
                this.initSecondChart();
            }
        },
        isNameInFirst(name) {
            for (var i = 0; i < trackData.length; i++) {
                if (trackData[i][1].name === name) {
                    return true;
                }
            }
            return false;
        },
        isNameInSecond(name) {
            for (var i = 0; i < trackNewData.length; i++) {
                if (trackNewData[i][1].name === name) {
                    return true;
                }
            }
            return false;
        },
        initFirstChart() {
            var series = [
                {
                    name: '中国中心路线',
                    type: 'lines',
                    zlevel: 2,
                    // effect: {
                    //     show: true,
                    //     period: 6,
                    //     trailLength: 0,
                    //     symbol: this.planePath,
                    //     symbolSize: 15,
                    // },
                    lineStyle: {
                        color: lineColor,
                        width: 2,
                        opacity: 0.4,
                        curveness: 0.3,
                    },
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                    },
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            var fromName = params.data.fromName;
                            var toName = params.data.toName;
                            return '从 ' + fromName + ' 到 ' + toName;
                        }
                    },

                    data: this.coordinateData(trackData),
                },
                {
                    name: '中国中心路线',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke',
                    },
                    itemStyle: {
                        color: "#32846e",
                    },
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                    },
                    data: trackData.map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].icon]),
                        };
                    }),

                },
            ];
            // 初始化新的 myChart 实例
            this.myChart = echarts.init(document.getElementById('chartView'));
            if (document.getElementById('chartView')) {
                // 初始化新的图表实例
                this.chaView.series = series;
                this.myChart.setOption(this.chaView);
                this.myChart.on('click', function (params) {
                    //如果点击的是面积区域
                    if (params.componentType === 'geo' && params.name) {
                        //如果能找到习俗里的国家名那就赋图片和内容
                        if (params.name in countryText) {
                            this.image = require('../assets/img/' + params.name + '.png');
                            this.text = countryText[params.name] || '';
                            this.dispalyContryName = params.name || '';
                        }
                        else{
                            this.dispalyContryName = '';
                            this.image = '';
                            this.text = '';
                        }
                        if (this.isNameInFirst(params.name)) {
                        var toName = params.name
                        // 遍历 pronunciationText 数组
                        for (var i = 0; i < pronunciationText.length; i++) {
                            var item = pronunciationText[i];
                            // 如果找到与目的地名称匹配的项

                            if (item.name === toName) {
                                this.displayteaInfo = item
                                this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                                this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                                break; // 找到匹配项后结束循环
                            }
                        }
                        }else{
                            this.displayteaInfo = {}
                            this.teaStyle = ''; // 设为空
                            this.showPronunciation = ''; // 设为空
                        }
                        return
                    }

                    //如果点击的是线条
                    if (params.componentType === 'series' && params.data.toName) {
                        if (params.data.toName in countryText) {
                            this.image = require('../assets/img/' + params.data.toName + '.png');
                            this.text = countryText[params.data.toName] || '';
                            this.dispalyContryName = params.name || '';
                        }
                        else{
                            this.dispalyContryName = '';
                            this.image = '';
                            this.text = '';
                        }
                        if (this.isNameInFirst(params.data.toName)) {
                        var toName = params.data.toName
                        // 遍历 pronunciationText 数组
                        for (var i = 0; i < pronunciationText.length; i++) {
                            var item = pronunciationText[i];
                            // 如果找到与目的地名称匹配的项
                            if (item.name === toName) {
                                this.displayteaInfo = item
                                this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                                this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                                break; // 找到匹配项后结束循环
                            }
                        }
                        }else{
                            this.displayteaInfo = {}
                            this.teaStyle = ''; // 设为空
                            this.showPronunciation = ''; // 设为空
                        }
                        return
                    }

                    //如果点击的是目的地点
                    if (params.componentType === 'series' && params.name) {
                        if (params.name in countryText) {
                            this.image = require('../assets/img/' + params.name + '.png');
                            this.text = countryText[params.name] || '';
                            this.dispalyContryName = params.name || '';
                        }
                        else{
                            this.dispalyContryName = '';
                            this.image = null;
                            this.text = '';
                        }
                        if (this.isNameInFirst(params.name)) {
                        var toName = params.name
                        // 遍历 pronunciationText 数组
                        for (var i = 0; i < pronunciationText.length; i++) {
                            var item = pronunciationText[i];
                            // 如果找到与目的地名称匹配的项
                            if (item.name === toName) {
                                this.displayteaInfo = item
                                this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                                this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                                break; // 找到匹配项后结束循环
                            }
                        }
                        }else{
                            this.displayteaInfo = {}
                            this.teaStyle = ''; // 设为空
                            this.showPronunciation = ''; // 设为空
                        }
                        return
                    }


                }.bind(this)); // 使用 bind(this) 来绑定当前组件实例的上下文

            }
        },
        initSecondChart() {
            var series = [
                {
                    name: '福建路线',
                    type: 'lines',
                    zlevel: 2,
                    // effect: {
                    //     show: false,
                    //     period: 6,
                    //     trailLength: 0,
                    //     symbol: this.planePath,
                    //     symbolSize: 15,
                    // },
                    lineStyle: {
                        normal: {
                            color: lineNewColor,
                            width: 2,
                            opacity: 0.4,
                            curveness: 0.3
                        }
                    },
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            var fromName = params.data.fromName;
                            var toName = params.data.toName;
                            return '从 ' + fromName + ' 到 ' + toName;
                        }
                    },
                    data: this.makeLines(trackNewData)//福建路线的数据为trackNewData
                },
                {
                    name: '福建路线',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke',
                    },
                    itemStyle: {
                        color: lineNewColor,
                    },
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                    },

                    data: trackNewData.map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].icon]),
                        };
                    }),

                },

            ];
            // 初始化新的 myChart 实例
            this.myChart = echarts.init(document.getElementById('chartView'));
            if (document.getElementById('chartView')) {
                // 初始化新的图表实例
                this.teView.series = series;
                this.myChart.setOption(this.teView);
                this.myChart.on('click', function (params) {

                    //如果点击的是面积区域
                    if (params.componentType === 'geo' && params.name) {
                        //如果能找到习俗里的国家名那就赋图片和内容
                        if (params.name in countryText) {
                            this.image = require('../assets/img/' + params.name + '.png');
                            this.text = countryText[params.name] || '';
                            this.dispalyContryName = params.name || '';
                        }
                        else{
                            this.dispalyContryName = '';
                            this.image = '';
                            this.text = '';
                        }
                        if (this.isNameInSecond(params.name)) {
                        var toName = params.name
                        // 遍历 pronunciationNewText 数组
                        for (var i = 0; i < pronunciationNewText.length; i++) {
                            var item = pronunciationNewText[i];
                            // 如果找到与目的地名称匹配的项
                            if (item.name === toName) {
                                this.displayteaInfo = item
                                this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                                this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                                break; // 找到匹配项后结束循环
                            }
                        }
                        }else{
                            this.displayteaInfo = {}
                            this.teaStyle = ''; // 设为空
                            this.showPronunciation = ''; // 设为空
                        }
                        return
                    }

                    //如果点击的是线条
                    if (params.componentType === 'series' && params.data.toName) {
                        if (params.data.toName in countryText) {
                            this.image = require('../assets/img/' + params.data.toName + '.png');
                            this.text = countryText[params.data.toName] || '';
                            this.dispalyContryName = params.name || '';
                        }
                        else{
                            this.dispalyContryName = '';
                            this.image = '';
                            this.text = '';
                        }
                        if (this.isNameInSecond(params.data.toName)) {
                        var toName = params.data.toName
                        // 遍历 pronunciationNewText 数组
                        for (var i = 0; i < pronunciationNewText.length; i++) {
                            var item = pronunciationNewText[i];
                            // 如果找到与目的地名称匹配的项
                            if (item.name === toName) {
                                this.displayteaInfo = item
                                this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                                this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                                break; // 找到匹配项后结束循环
                            }
                        }
                        }else{
                            this.displayteaInfo = {}
                            this.teaStyle = ''; // 设为空
                            this.showPronunciation = ''; // 设为空
                        }
                        return
                    }

                    //如果点击的是目的地点
                    if (params.componentType === 'series' && params.name) {
                        if (params.name in countryText) {
                            this.image = require('../assets/img/' + params.name + '.png');
                            this.text = countryText[params.name] || '';
                            this.dispalyContryName = params.name || '';
                        }
                        else{
                            this.dispalyContryName = '';
                            this.image = null;
                            this.text = '';
                        }
                        if (this.isNameInSecond(params.name)) {
                        var toName = params.name
                        // 遍历 pronunciationNewText 数组
                        for (var i = 0; i < pronunciationNewText.length; i++) {
                            var item = pronunciationNewText[i];
                            // 如果找到与目的地名称匹配的项
                            if (item.name === toName) {
                                this.displayteaInfo = item
                                this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                                this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                                break; // 找到匹配项后结束循环
                            }
                        }
                        }else{
                            this.displayteaInfo = {}
                            this.teaStyle = ''; // 设为空
                            this.showPronunciation = ''; // 设为空
                        }
                        return
                    }


                }.bind(this)); // 使用 bind(this) 来绑定当前组件实例的上下文

            }
        }
    },
    mounted() {
        this.initFirstChart()
    },
    watch: {
        value(newVal) {
            this.updateChart(newVal);
        },
    },
}
</script>
<style scoped>
.text {
    font-size: 12px;
    color: rgba(50, 132, 110, 1);
    display: flex;
    align-items: center;
    width: 300px;
    justify-content: flex-end;
}

.title {
    display: flex;
    font-size: 30px;
    font-weight: bold;
    color: rgba(50, 132, 110, 1);
    width: 186px;
}

.titlesub {
    display: flex;
    font-size: 12px;
    color: rgba(50, 132, 110, 1);
    align-items: center;
    text-align: left;
    line-height: 24px;
}

.teaName {
    display: flex;
    font-size: 50px;
    font-weight: bold;
    color: rgba(50, 132, 110, 1);
}

.teaNamesub1 {
    display: flex;
    font-size: 16px;
    color: rgba(50, 132, 110, 1);
}

.divider{
    width: 200px;
    height: 1px;
    background-color: rgba(50, 132, 110, 0.5);
    margin-top: 12px;
    margin-bottom: 12px
}

.teaNamesub2 {
    text-align: left;
    display: flex;
    font-size: 14px;
    color: rgba(50, 132, 110, 1);
    width: 22vw;
}

.background-gradient-left-bottom{
    opacity: 1;
    background: radial-gradient(79.75% 81% at 0% 100%, #fffef2 0%, rgba(212, 119, 119, 0) 100%);

}
.background-gradient-bottom{
    background: linear-gradient(180deg, rgba(204, 204, 204, 0) 0%, #fffef2 100%);
}
.background-gradient-right-bottom{
    background: radial-gradient(83.38% 100% at 92.25% 100%, #fffef2 0%, rgba(212, 119, 119, 0) 100%);

}

.divider-vertical{
    height: 60px;
    width: 1px;
    background-color: rgba(50, 132, 110, 1);
}
</style>