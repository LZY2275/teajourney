<template>
    <div style="width: 100%;height: 100%;position: relative;">
        <div style="background-color:#fffef2 ;position:absolute;filter: blur(10px);width:100vw;height: 90px;z-index: 900;"></div>
        <div style="display: flex;position:absolute;z-index: 999; top: 2.5vh;left: 3.5vw;align-items: center;">
            <div class="title">{{ $t("茶与世界") }}</div>
            <t-divider layout="vertical"/>
            <p class="titlesub">茶的英文叫tea，但你知道吗？目前全世界有5000多种语言，然而在众多的语言中，茶的读音却表现出了惊人的一致性。<br>
除了少数地区之外，全世界的茶实际上只有两大类读法。一种与英语说法tea类似，比如西班牙语中的té和阿非利卡语中的tee。另一种是cha的读音类似，例如印地语中的chay和俄语中的чай。</p>
        </div>


        <div id="chineView" style="width: 100%;height: 100%;display: flex;margin: 0px auto;">

        </div>

        <div style="display: flex;position: absolute;z-index: 999;bottom: 1.5vh;left: 3.5vw;">
            <div>
                <div class="teaName"> {{ teaStyle }} </div>
                <div class="teaNamesub1"> {{ showPronunciation }} </div>
                <div class="teaNamesub2"> {{ describePronunciation }} </div>
            </div>
        </div>

        <div style="position: absolute;bottom: 1.5vh;right: 160px;display: flex;">
            <p class="text" style="text-align: right;margin-right: 24px;">{{ text }}</p>
            <img :src="image" style="width: 107px; height: 107px; border-radius: 50%;">
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
//这是两地的数据
var trackData = [
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
            name: '美国',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '法国',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '英国',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '澳大利亚',
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
            name: '土耳其',
        },
    ],
    [
        {
            name: '中国',
        },
        {
            name: '斯里兰卡',
        },
    ],
];
//地理坐标
var geoCoordMap = {
    '中国': [104, 36], // 中国的经纬度
    '俄罗斯': [105, 60], // 俄罗斯的经纬度
    '美国': [-95.7129, 37.0902], // 美国的经纬度
    '法国': [2.2137, 46.2276], // 法国的经纬度
    '英国': [-3.435973, 55.378051], // 英国的经纬度
    '澳大利亚': [133.7751, -25.2744], // 澳大利亚的经纬度
    '日本': [138.2529, 36.2048], // 日本的经纬度
    '土耳其': [35.2433, 38.9637], // 土耳其的经纬度
    '斯里兰卡': [80.7718, 7.8731], // 斯里兰卡的经纬度
};
//各个国家的茶介绍
var countryText = {
    '俄罗斯': '俄罗斯的内容俄罗斯的内容俄罗斯的内容俄罗斯的内容俄罗斯的内容俄罗斯的内容俄罗斯的内容',
    '日本': '日本的内容',
    '美国': '美国的内容',
    '法国': '法国的内容',
    '英国': '英国的内容',
    '斯里兰卡': '斯里兰卡的内容',
    '澳大利亚': '澳大利亚的内容',
    '土耳其': '土耳其的内容',
};
//各个国家茶的读音介绍
var pronunciationText = [
    {
        name: '俄罗斯',
        teaStyle: 'чай',//不同国家茶的文字（默认俄罗斯）
        showPronunciation: '读音：[t͡ʂaj]',//展示读音
        describePronunciation: '俄罗斯的茶文化起源于中国。茶在俄罗斯被称为“чай”（[t͡ʂaj]），这个词源自中文“茶”（chá）。',//描述读音
    },
    {
        name: '美国',
        teaStyle: 'Tea',//不同国家茶的文字（默认俄罗斯）
        showPronunciation: '读音：[tiː]',//展示读音
        describePronunciation: '美国的茶文化也可以追溯到中国。虽然在美国，茶通常被称为“tea”，这个词源自于英语，但茶的引入和普及受到了英国殖民者的影响，而英国人最初是通过中国的茶叶贸易引入茶文化的。',//描述读音
    },
    {
        name: '英国',
        teaStyle: 'Tea',//不同国家茶的文字（默认俄罗斯）
        showPronunciation: '读音：[tiː]',//展示读音
        describePronunciation: '英国的茶文化在全球范围内都是闻名的。英国人通常喝的是红茶，他们将茶称为“tea”，这个词源自中文“茶”（chá）。',//描述读音
    },
    {
        name: '法国',
        teaStyle: 'Le thé',//不同国家茶的文字（默认俄罗斯）
        showPronunciation: '读音：[te]',//展示读音
        describePronunciation: '茶在法语中生成之后，其概念意义不完全等同于汉语，词义得到了继承与发展，变得丰富多元化，从“茶树”、“茶叶”到喝的“茶”或是不含茶叶的饮料，甚至“茶点”、“茶会”都被叫做thé。法语thé一词作为借词进入法语后，大大丰富了法语的词汇，构成的派生词的涵义多达十几个，常见的有：théacées(茶科)、théier (茶树)、théière(茶壶)、 passe-thé(滤茶器)、théine(咖啡因)、 théophylline (茶碱)、 théotannin(茶丹宁)、théobromine (可可碱)等词语。',//描述读音
    },
    {
        name: '日本',
        teaStyle: 'お茶',//不同国家茶的文字（默认俄罗斯）
        showPronunciation: '读音：[ocha]',//展示读音
        describePronunciation: '日本的茶文化源远流长，同样起源于中国。在日本，茶被称为“お茶”（ocha），这个词虽然是源自于日语，但日本的茶道文化最初是由中国传入的。',//描述读音
    },
    {
        name: '土耳其',
        teaStyle: 'Çay',//不同国家茶的文字（默认俄罗斯）
        showPronunciation: '读音：çay',//展示读音
        describePronunciation: '在土耳其，茶被称为“çay”，这个词也是源自中文“茶”（chá）。土耳其人通常喝的是红茶，茶文化也是通过贸易路线从东方引入的。',//描述读音
    },
    {
        name: '斯里兰卡',
        teaStyle: 'Tea',//不同国家茶的文字（默认俄罗斯）
        showPronunciation: '读音：[tiː]',//展示读音
        describePronunciation: '斯里兰卡（原名锡兰）是世界著名的茶叶产地之一，而茶文化的传入也源于中国。',//描述读音
    },
    {
        name: '澳大利亚',
        teaStyle: 'Tea',//不同国家茶的文字（默认俄罗斯）
        showPronunciation: '读音：[tiː]',//展示读音
        describePronunciation: '澳大利亚的茶文化同样可以追溯到中国。虽然在澳大利亚，茶通常被称为“tea”，这个词源自英语，但澳大利亚的茶文化也是通过英国的殖民者，以及他们与中国的贸易联系而引入的。',//描述读音
    },
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

// 高亮其他国家的颜色
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

// 线条的颜色
var lineColor="#005240"

export default {
    name: '',
    data() {
        return {
            //右下角区域内容
            image: require('../assets/img/俄罗斯.png'),
            text: '俄罗斯的内容俄罗斯的内容俄罗斯的内容俄罗斯的内容俄罗斯的内容俄罗斯的内容',
            //左下角区域内容
            teaStyle: 'чай',//不同国家茶的文字（默认俄罗斯）
            showPronunciation: '读音：[t͡ʂaj]',//展示读音
            describePronunciation: '俄罗斯的茶文化起源于中国。茶在俄罗斯被称为“чай”（[t͡ʂaj]），这个词源自中文“茶”（chá）。',//描述读音
            //导航线上的茶叶图标
            planePath: 'path://M549.479739 345.51634c42.164706-81.484967 127.163399-157.615686 300.005228-144.062745 8.366013 0.669281 15.226144 5.521569 18.572549 13.385621 87.173856 197.772549 3.848366 406.253595-146.739869 474.0183 0 0-9.537255-112.104575-54.044444-199.780392-39.152941-77.803922-117.793464-143.560784-117.793464-143.560784zM783.393464 658.572549c-3.681046 0-7.362092-1.673203-10.039216-4.684967-4.517647-5.521569-3.681046-13.720261 1.840523-18.070589 9.537255-7.696732 18.405229-16.397386 27.105883-25.6 4.852288-5.186928 13.05098-5.521569 18.070588-0.669281 5.186928 4.852288 5.521569 13.05098 0.669281 18.070589-9.369935 10.039216-19.24183 19.24183-29.615686 27.775163-2.342484 2.175163-5.186928 3.179085-8.031373 3.179085z m53.040523-56.888889c-2.509804 0-5.354248-0.836601-7.529412-2.342484-5.856209-4.183007-7.027451-12.214379-2.844444-17.903268 73.620915-101.396078 85.333333-241.610458 30.284967-365.929411-1.505882-3.346405-4.183007-5.354248-7.864052-5.688889-138.039216-10.708497-234.750327 35.471895-287.62353 137.202614-3.179085 6.19085-11.043137 8.867974-17.401307 5.521569-6.19085-3.179085-8.867974-11.043137-5.521568-17.401307 25.6-49.359477 61.239216-87.173856 106.081045-112.941177 55.215686-31.623529 124.820915-44.50719 206.305883-37.981699 13.218301 1.003922 24.094118 8.867974 29.448366 20.915033 58.394771 132.684967 45.845752 282.603922-33.129412 391.362091-2.342484 3.346405-6.35817 5.186928-10.206536 5.186928zM726.504575 444.737255c-2.677124 0-5.688889-1.003922-7.864052-2.677124-5.688889-4.350327-6.52549-12.54902-2.007843-17.903268C778.039216 346.352941 857.014379 229.898039 884.454902 118.462745c1.840523-6.860131 8.700654-11.043137 15.560784-9.369935 6.860131 1.840523 11.043137 8.700654 9.369935 15.560785-28.779085 115.952941-109.762092 235.586928-172.67451 315.566013-2.677124 2.844444-6.35817 4.517647-10.206536 4.517647zM691.36732 924.109804c-1.840523 0-3.513725-0.16732-5.354248-0.334641-181.207843-26.269281-319.74902-87.341176-411.105882-181.375163-5.019608-5.186928-4.852288-13.218301 0.33464-18.070588 5.186928-5.019608 13.218301-4.852288 18.070588 0.33464 87.341176 89.85098 220.862745 148.413072 396.3817 173.845752 5.019608 0.836601 9.871895-2.677124 10.708496-7.864052 35.806536-203.963399-9.202614-384.501961-126.326797-508.318955-97.715033-103.236601-238.264052-154.938562-375.968627-138.708496-4.015686 0.501961-6.860131 3.011765-8.031373 7.027451-14.389542 54.713725-53.542484 246.128105 51.534641 409.098039 3.848366 6.023529 2.007843 13.887582-3.848366 17.903268-6.023529 3.848366-13.887582 2.007843-17.903268-3.848366-110.766013-171.670588-69.939869-372.287582-54.881046-429.511111 3.848366-14.222222 15.226144-24.261438 29.783006-25.934641 71.278431-8.533333 145.233987 0.16732 213.500654 25.098039 69.270588 25.265359 132.852288 67.095425 184.052287 121.30719 122.980392 129.840523 170.164706 318.243137 133.186929 530.405229-2.677124 17.066667-17.233987 28.946405-34.133334 28.946405zM537.098039 715.963399c-2.844444 0-6.023529-1.003922-8.366013-3.011765-6.19085-5.521569-12.71634-10.875817-18.907189-16.732026-5.354248-4.684967-5.856209-12.88366-1.003922-18.070588 4.684967-5.354248 12.88366-5.856209 18.070588-1.003922 6.19085 5.521569 12.54902 11.043137 18.572549 16.230065 5.521569 4.684967 6.023529 12.71634 1.505883 18.070589-2.509804 3.179085-6.19085 4.517647-9.871896 4.517647z m-53.877124-49.192157c-3.179085 0-6.35817-1.171242-8.867974-3.513726-11.043137-10.708497-22.253595-21.918954-33.296732-33.296732-5.019608-5.186928-4.852288-13.218301 0.334641-18.070588 5.186928-5.019608 13.218301-4.852288 18.070588 0.334641 10.708497 11.043137 21.751634 21.918954 32.627451 32.627451 5.186928 5.019608 5.354248 13.05098 0.33464 18.070588-2.509804 2.677124-5.856209 3.848366-9.202614 3.848366zM409.934641 590.807843c-3.513725 0-7.027451-1.505882-9.704576-4.350327-180.036601-202.290196-271.393464-417.631373-275.074509-426.666666-2.844444-6.35817 0-13.887582 6.52549-16.899347 6.35817-2.844444 14.054902 0.16732 17.066666 6.52549 0 0.16732 0.16732 0.334641 0.167321 0.334641 3.681046 8.867974 93.532026 220.528105 270.891503 419.471895 4.684967 5.354248 4.183007 13.552941-1.003922 18.070589-2.677124 2.342484-5.688889 3.513725-8.867973 3.513725z',
            chineView: {
                backgroundColor: 'transparent',
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
                            name: '北非',
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
                '俄罗斯': '俄罗斯',
                '美国': '美国',
                '法国': '法国',
                '英国': '英国',
                '澳大利亚': '澳大利亚',
                '日本': '日本',
                '土耳其': '土耳其',
                '斯里兰卡': '斯里兰卡'
            };

            return countryNames[name] || '';
        },
        //坐标转换
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
    },
    mounted() {
        var series = [
            {
                name: 'track',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: this.planePath,
                    symbolSize: 15,
                },
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
                name: 'track',
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
        if (document.getElementById('chineView')) {
            // DOM存在，销毁现有的图表实例
            if (this.myChart && typeof this.myChart.dispose === 'function') {
                this.myChart.dispose();
            }

            // 初始化新的图表实例
            this.chineView.series = series;
            this.myChart = echarts.init(document.getElementById('chineView'));
            this.myChart.setOption(this.chineView);
            this.myChart.on('click', function (params) {
                console.log(params)

                //如果点击的是面积区域
                if (params.componentType === 'geo' && params.name && this.getChineseName( params.name)) {
                    this.image = require('../assets/img/' + params.name + '.png');
                    this.text = countryText[params.name] || '';
                    var toName = params.name
                    // 遍历 pronunciationText 数组
                    for (var i = 0; i < pronunciationText.length; i++) {
                        var item = pronunciationText[i];
                        // 如果找到与目的地名称匹配的项
                        if (item.name === toName) {
                            this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                            this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                            this.describePronunciation = item.describePronunciation; // 获取该项的 teaStyle
                            break; // 找到匹配项后结束循环
                        }
                    }
                    return
                }

                //如果点击的是线条
                if (params.componentType === 'series' && params.data.toName) {
                    this.image = require('../assets/img/' + params.data.toName + '.png');
                    this.text = countryText[params.data.toName] || '';
                    var toName = params.data.toName
                    // 遍历 pronunciationText 数组
                    for (var i = 0; i < pronunciationText.length; i++) {
                        var item = pronunciationText[i];
                        // 如果找到与目的地名称匹配的项
                        if (item.name === toName) {
                            this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                            this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                            this.describePronunciation = item.describePronunciation; // 获取该项的 teaStyle
                            break; // 找到匹配项后结束循环
                        }
                    }
                    return
                }

                //如果点击的是目的地点
                if (params.componentType === 'series' && params.data.name) {
                    this.image = require('../assets/img/' + params.data.name + '.png');
                    this.text = countryText[params.data.name] || '';
                    var toName = params.data.name
                    // 遍历 pronunciationText 数组
                    for (var i = 0; i < pronunciationText.length; i++) {
                        var item = pronunciationText[i];
                        // 如果找到与目的地名称匹配的项
                        if (item.name === toName) {
                            this.teaStyle = item.teaStyle; // 获取该项的 teaStyle
                            this.showPronunciation = item.showPronunciation; // 获取该项的 teaStyle
                            this.describePronunciation = item.describePronunciation; // 获取该项的 teaStyle
                            break; // 找到匹配项后结束循环
                        }
                    }
                    return
                }


            }.bind(this)); // 使用 bind(this) 来绑定当前组件实例的上下文

        }
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
    width:186px;
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
    margin-top: -150px;
}

.teaNamesub1 {
    display: flex;
    font-size: 18px;
    color: rgba(50, 132, 110, 1);

}

.teaNamesub2 {
    text-align: left;
    display: flex;
    font-size: 14px;
    color: rgba(50, 132, 110, 1);
    width: 22vw;
}
</style>