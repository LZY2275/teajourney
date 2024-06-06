<template>
    <div style="width: 100%;height: 100%;">
        <div id="chineView" style="width: 70%;height: 100%;display: flex;margin: 20px auto;"></div>
        <t-card
            style="position: absolute;width: 200px;height: 200px; left: 50px; top: 1150px; padding: 10px; border-radius: 5px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);">
            <div>
                <img :src="image" style="width: 107px; height: 107px; border-radius: 50%;">
                <p class="text">{{ text }}</p>
            </div>

        </t-card>
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
    '俄罗斯': '俄罗斯的内容',
    '日本': '日本的内容',
    '美国': '美国的内容',
    '法国': '法国的内容',
    '英国': '英国的内容',
    '斯里兰卡': '斯里兰卡的内容',
    '澳大利亚': '澳大利亚的内容',
    '土耳其': '土耳其的内容',
};
export default {
    name: '',
    data() {
        return {
            //左下角卡片内容
            image: require('../assets/img/俄罗斯.png'),
            text: '俄罗斯的内容',
            data: [
                { name: '中国', value: '中国的内容' },
                { name: '俄罗斯', value: '俄罗斯的茶文化起源于中国。茶在俄罗斯被称为“чай”（chai），这个词源自中文“茶”（chá）。' },
                { name: '美国', value: '美国的茶文化也可以追溯到中国。虽然在美国，茶通常被称为“tea”，这个词源自于英语，但茶的引入和普及受到了英国殖民者的影响，而英国人最初是通过中国的茶叶贸易引入茶文化的。' },
                { name: '英国', value: '英国的茶文化在全球范围内都是闻名的。英国人通常喝的是红茶，他们将茶称为“tea”，这个词源自中文“茶”（chá）。' },
                { name: '法国', value: '在法国，茶被称为“thé”，这个词也是源自中文“茶”（chá）。法国的茶文化主要受到东方的影响，茶叶是通过贸易路线从东方引入的。' },
                { name: '日本', value: '日本的茶文化源远流长，同样起源于中国。在日本，茶被称为“お茶”（ocha），这个词虽然是源自于日语，但日本的茶道文化最初是由中国传入的。' },
                { name: '土耳其', value: '在土耳其，茶被称为“çay”，这个词也是源自中文“茶”（chá）。土耳其人通常喝的是红茶，茶文化也是通过贸易路线从东方引入的' },
                { name: '斯里兰卡', value: '斯里兰卡（原名锡兰）是世界著名的茶叶产地之一，而茶文化的传入也源于中国。' },
                { name: '澳大利亚', value: '澳大利亚的茶文化同样可以追溯到中国。虽然在澳大利亚，茶通常被称为“tea”，这个词源自英语，但澳大利亚的茶文化也是通过英国的殖民者，以及他们与中国的贸易联系而引入的。' },
            ],
            planePath:
                'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            chineView: {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    formatter: (params) => {
                        // 根据悬停的区域名称查找对应的tooltip内容
                        for (var i = 0; i < this.data.length; i++) {
                            if (params.data.name == this.data[i].name) {
                                return this.data[i].value;
                            }
                            if (params.name == '') {
                                return '';
                            }
                        }
                    }
                },
                geo: {
                    map: 'world',
                    zoom: 1.3,
                    itemStyle: {
                        areaColor: '#8FBC8F',//所有国家的覆盖色
                        borderColor: '#5b66a1',//国家之间的边框颜色
                        emphasis: {
                            areaColor: '#2E8B57',//鼠标覆盖上去的颜色
                        },
                    },
                    regions: [
                        {
                            name: 'China',
                            itemStyle: {
                                borderColor: '#ffd591', // 中国边框颜色
                                borderWidth: 3, // 中国边框的宽度
                                areaColor: '#2E8B57', // 中国的颜色
                            },
                        },
                    ],
                },
            },
        }
    },
    methods: {
        //坐标转换
        coordinateData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
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
                name: '中国',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3,
                },
                lineStyle: {
                    color: '#a6c84c',
                    width: 0,
                    curveness: 0.2,
                },
                data: this.coordinateData(trackData),
            },
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
                    color: '#a6c84c',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2,
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
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                },
                symbol: function (val) {
                    return 'image://./imgs/countryIcon/' + val[2];
                },
                symbolSize: 15,
                itemStyle: {
                    color: '#a6c84c',
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
                if (params.name && geoCoordMap[params.name]) {
                    this.image = require('../assets/img/' + params.name + '.png'),
                    this.text = countryText[params.name] || ''
                }
            }.bind(this)); // 使用 bind(this) 来绑定当前组件实例的上下文

        } 
    },
}
</script>
<style scoped>
.text {
    color: rgba(50, 132, 110, 0.5);
}
</style>