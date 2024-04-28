<template>
    <div class="sankey" style="width: 100%;height: 100%;display: flex;">
        <div id="sankey-chart-note" style="width: 300px;height: 100%;">
            <div class="title" style="padding: 16px 24px 0px 24px;">茶味溯源</div>
            <div class="subtitle" style="padding: 0 24px;">{{subtitle}}</div>
            <div class="content-container">
                <p class="font-content">{{ $t(content) }}</p>
                <p class="font-content">{{ $t('右侧桑基图展示了茶种各成分与滋味和味觉感受的对应关系。') }}</p>
            </div>
        </div>
        <div style="padding: 16px 24px 16px 0;width: calc(100% - 300px);">
            <div id="sankey-chart" style="width: 100%;height: 100%;background-color:rgb(255, 254, 242)">
                <div style="display: flex;width: calc(100% - 120px);height: 60px;padding: 0px 60px 0 60px;">
                    <p class="type-text type-text-first" style="width: 16.67%;">{{ $t('化合物种类') }}</p>
                    <p class="type-text" style="width: 33.33%;">{{ $t('茶中成味成分') }}</p>
                    <p class="type-text" style="width: 33.33%;">{{ $t('茶的滋味') }}</p>
                    <p class="type-text type-text-last" style="width: 16.67%;">{{ $t('味觉感受') }}</p>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  import * as d3_sankey from 'd3-sankey';
  import {sankey_data} from '../assets/js/sankeydata.js';
  import * as echarts from 'echarts';
  
  export default {
    name:'SankeyView',
    data() {
      return {
        subtitle:'TEA FLAVOR FORMATION',
        content:'茶叶滋味是茶叶化学组成部分含量和人的感官对它的综合反应。茶叶有甜、酸、苦、鲜、涩等多种滋味。鲜味主要成分是多种氨基酸，氨基酸鲜中带甜，有的鲜中带酸。涩的主要特质是多酚类化合物。甜味物质主要有部分氨基酸和可溶性糖。苦味物质主要有咖啡碱、花青素、茶叶皂素。酸味物质主要是多种有机酸。'
      };
    },
    components: {
    },
    watch:{
        //监听语言是否变化，若变化调用createPieChart()
        '$i18n.locale': {
            handler() {
                // 处理语言变化的逻辑
                this.handleResize()
            },
            immediate: true // 立即执行一次回调函数
        }
    },
    methods: {
        createSankey(){

            var data = {
                nodes:[{
        name:this.$t('糖类'),
        category:this.$t('糖类'),
        color:'#bbbcac'
    },
    {
        name:this.$t('氨基酸'),
        category:this.$t('氨基酸'),
        color:'#5a705b'
    },{
        name:this.$t('嘌呤碱'),
        category:this.$t('嘌呤碱'),
        color:'#d7b669'
    },{
        name:this.$t('酚性物及其氧化物'),
        category:this.$t('酚性物及其氧化物'),
        color:'#738b6d'
    },{
        name:this.$t('有机酸类'),
        category:this.$t('有机酸类'),
        color:'#f99f52'
    },{
        name:this.$t('茶皂素'),
        category:this.$t('茶皂素'),
        color:'#ba948b'
    },
    
    {
        name:this.$t('糖'),
        category:this.$t('成味成分'),
        color:'#d9dace'
    },
    {
        name:this.$t('甘氨酸'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'

    },{
        name:this.$t('丙氨酸'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('氨酸'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('茶红素'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('氨基酸类'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('茶氨酸'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('咖啡碱'),
        category:this.$t('氨基酸'),
        color:'#dbcaa1'
    },{
        name:this.$t('茶黄素'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('表儿茶素'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('没食子儿茶素'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('精氨酸'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('酚性酸儿茶素类'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('酯型儿茶素黄酮类'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('花表素'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('谷氨酸'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('谷氨酰胺'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('天冬氨酸'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('天冬氨酰胺'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('没食子酸'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('有机酸'),
        category:this.$t('氨基酸'),
        color:'#dbcaa1'
    },{
        name:this.$t('抗坏血酸'),
        category:this.$t('氨基酸'),
        color:'#dbcaa1'
    },{
        name:this.$t('茶皂素类'),
        category:this.$t('氨基酸'),
        color:'#ba948b'
    },{
        name:this.$t('果胶素'),
        category:this.$t('氨基酸'),
        color:'#d9dace'
    },{
        name:this.$t('茶褐素'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },
    
    {
        name:this.$t('甜'),
        category:'滋味',
        color:'#a7b9a8'
    },{
        name:this.$t('鲜甜'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('鲜爽甜'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('爽'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('涩'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('甜苦'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('苦涩'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('苦'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('鲜甜酸'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },{
        name:this.$t('酸'),
        category:this.$t('氨基酸'),
        color:'#dbcaa1'
    },{
        name:this.$t('辛辣苦'),
        category:this.$t('氨基酸'),
        color:'#c9b0aa'
    },{
        name:this.$t('厚'),
        category:this.$t('氨基酸'),
        color:'#a7b9a8'
    },{
        name:this.$t('淡'),
        category:this.$t('氨基酸'),
        color:'#acbba6'
    },
    
    {
        name:this.$t('甜味'),
        category:'味觉',
        color:'#bbbcac'
    },{
        name:this.$t('鲜味'),
        category:this.$t('氨基酸'),
        color:'#5a705b'
    },{
        name:this.$t('苦味'),
        category:this.$t('氨基酸'),
        color:'#738b6d'
    },{
        name:this.$t('酸味'),
        category:this.$t('氨基酸'),
        color:'#f99f52'
    },{
        name:this.$t(this.$t('辣味')),
        category:this.$t('氨基酸'),
        color:'#ba948b'
    },{
        name:'空',
        category:'空',
        color:'#ba948b'
    }
],
    links:[
            {
            source:this.$t('糖类'),
            target:this.$t('糖'),
            value:1
        },
        {
            source:this.$t('糖'),
            target:this.$t('甜'),
            value:1
        },{
            source:this.$t('甜'),
            target:this.$t('甜味'),
            value:1
        },
        
        {
            source:this.$t('氨基酸'),
            target:this.$t('甘氨酸'),
            value:1
        },{
            source:this.$t('甘氨酸'),
            target:this.$t('甜'),
            value:1
        },
        
        {
            source:this.$t('氨基酸'),
            target:this.$t('丙氨酸'),
            value:1
        },{
            source:this.$t('丙氨酸'),
            target:this.$t('甜'),
            value:1
        },
        
        {
            source:this.$t('氨基酸'),
            target:this.$t('氨酸'),
            value:1
        },{
            source:this.$t('氨酸'),
            target:this.$t('甜'),
            value:1
        },
        
        {
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('茶红素'),
            value:1
        },{
            source:this.$t('茶红素'),
            target:this.$t('鲜甜'),
            value:1
        },{
            source:this.$t('鲜甜'),
            target:this.$t('甜味'),
            value:1
        },
        
        {
            source:this.$t('氨基酸'),
            target:this.$t('氨基酸类'),
            value:1
        },{
            source:this.$t('氨基酸类'),
            target:this.$t('鲜甜'),
            value:1
        },
        
        {
            source:this.$t('嘌呤碱'),
            target:this.$t('咖啡碱'),
            value:1
        },
        {
            source:this.$t('氨基酸'),
            target:this.$t('茶氨酸'),
            value:1
        },{
            source:this.$t('茶氨酸'),
            target:this.$t('鲜爽甜'),
            value:1
        },{
            source:this.$t('鲜爽甜'),
            target:this.$t('鲜味'),
            value:1
        },
        {
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('茶黄素'),
            value:1
        },
        
        {
            source:this.$t('茶黄素'),
            target:this.$t('爽'),
            value:1
        },{
            source:this.$t('爽'),
            target:this.$t(this.$t('鲜味')),
            value:1
        },{
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('表儿茶素'),
            value:1
        },{
            source:this.$t('表儿茶素'),
            target:this.$t('涩'),
            value:1
        },{
            source:this.$t('涩'),
            target:this.$t('鲜味'),
            value:1
        },{
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('没食子儿茶素'),
            value:1
        },{
            source:this.$t('没食子儿茶素'),
            target:this.$t('涩'),
            value:1
        },{
            source:this.$t('氨基酸'),
            target:this.$t('精氨酸'),
            value:1
        },{
            source:this.$t('精氨酸'),
            target:this.$t('甜苦'),
            value:1
        },{
            source:this.$t('甜苦'),
            target:this.$t('苦味'),
            value:1
        },{
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('酚性酸儿茶素类'),
            value:1
        },{
            source:this.$t('酚性酸儿茶素类'),
            target:this.$t('苦涩'),
            value:1
        },{
            source:this.$t('苦涩'),
            target:this.$t('鲜味'),
            value:1
        },{
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('酯型儿茶素黄酮类'),
            value:1
        },{
            source:this.$t('酯型儿茶素黄酮类'),
            target:this.$t('苦涩'),
            value:1
        },{
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('花表素'),
            value:1
        },{
            source:this.$t('花表素'),
            target:this.$t('苦'),
            value:1
        },{
            source:this.$t('苦'),
            target:this.$t('苦味'),
            value:1
        },{
            source:this.$t('咖啡碱'),
            target:this.$t('苦'),
            value:1
        },{
            source:this.$t('氨基酸'),
            target:this.$t('谷氨酸'),
            value:1
        },{
            source:this.$t('氨基酸'),
            target:this.$t('谷氨酰胺'),
            value:1
        },{
            source:this.$t('氨基酸'),
            target:this.$t('天冬氨酸'),
            value:1
        },{
            source:this.$t('氨基酸'),
            target:this.$t('天冬氨酰胺'),
            value:1
        },{
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('没食子酸'),
            value:1
        },{
            source:this.$t('没食子酸'),
            target:this.$t('鲜甜酸'),
            value:1
        },{
            source:this.$t('谷氨酸'),
            target:this.$t('鲜甜酸'),
            value:1
        },{
            source:this.$t('谷氨酰胺'),
            target:this.$t('鲜甜酸'),
            value:1
        },{
            source:this.$t('天冬氨酸'),
            target:this.$t('鲜甜酸'),
            value:1
        },{
            source:this.$t('天冬氨酰胺'),
            target:this.$t('鲜甜酸'),
            value:1
        },{
            source:this.$t('鲜甜酸'),
            target:this.$t('鲜味'),
            value:1
        },{
            source:this.$t('鲜甜酸'),
            target:this.$t('甜味'),
            value:1
        },{
            source:this.$t('鲜甜酸'),
            target:this.$t('酸味'),
            value:1
        },
        
        {
            source:this.$t('有机酸类'),
            target:this.$t('有机酸'),
            value:1
        },{
            source:this.$t('有机酸'),
            target:this.$t('酸'),
            value:1
        },{
            source:this.$t('酸'),
            target:this.$t('酸味'),
            value:1
        },{
            source:this.$t('有机酸类'),
            target:this.$t('抗坏血酸'),
            value:1
        },{
            source:this.$t('抗坏血酸'),
            target:this.$t('酸'),
            value:1
        },{
            source:this.$t('茶皂素类'),
            target:this.$t('茶皂素'),
            value:1
        },{
            source:this.$t('茶皂素'),
            target:this.$t('辛辣苦'),
            value:1
        },{
            source:this.$t('辛辣苦'),
            target:this.$t('辣味'),
            value:1
        },{
            source:this.$t('辛辣苦'),
            target:this.$t('苦味'),
            value:1
        },{
            source:this.$t('酚性物及其氧化物'),
            target:this.$t('茶褐素'),
            value:1
        },{
            source:this.$t('茶褐素'),
            target:this.$t('淡'),
            value:1
        },{
            source:this.$t('糖类'),
            target:this.$t('果胶素'),
            value:1
        },{
            source:this.$t('果胶素'),
            target:this.$t('厚'),
            value:1
        },{
            source:this.$t('厚'),
            target:'空',
            value:1
        },{
            source:this.$t('淡'),
            target:'空',
            value:1
        },
    ]
}

            // 0-6代表化合物分类的颜色，第二排是这六个颜色的浅色调 中间的结点分为六类使用浅色调，
            // var color = ['#5a705b','#738b6d','#bbbcac','f99f52','d7b669','ba948b',
            //             'a7b9a8','acbba6','d9dace','f9c79c','dbcaa1','c9b0aa']

            var linkColor = 'source-target'

            var padding = { top: 15, right: 20, bottom: 15, left: 20 };
            const container = d3.select('#sankey-chart');
            const width = container.node().getBoundingClientRect().width - padding.left - padding.right;
            const height = container.node().getBoundingClientRect().height - padding.top - padding.bottom;
            const format = d3.format(",.0f");

            // 创建svg container
            const svg = d3.select('#sankey-chart')
                .append("svg")
                .attr("width", width)
                .attr("height", height-50)
                .attr('transform', 'translate(' + 0 + ',' + (0) + ')')
                .attr("viewBox", [0, 0, width, height])
                .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

            //构造和配置桑基生成器
            const sankey = d3_sankey.sankey()
                .nodeId(d => d.name)
                //.nodeAlign(d3[nodeAlign]) // d3.sankeyLeft, etc.
                .nodeWidth(15)
                .nodePadding(10)
                .extent([[1, 5], [width - 1, height - 5]]);

            //将其应用于数据。我们复制节点和链接对象
            //以避免使原件发生突变。
            const {nodes, links} = sankey({
                // nodes: data.nodes.map(d => Object.assign({}, d)),
                // links: data.links.map(d => Object.assign({}, d))
                nodes: data.nodes,
                links: data.links
            });

            // 定义颜色
            const color = d3.scaleOrdinal(d3.schemeCategory10);

            // 创建运用于结点的正方形
            const rect = svg.append("g")
                // .attr("stroke", "#000")
                .selectAll()
                .data(nodes)
                .join("rect")
                .attr('id',function(d,i){return 'rect_'+i})
                .attr("x", d => d.x0)
                .attr("y", d => d.y0)
                .attr("height", d => d.y1 - d.y0)
                .attr("width", d => d.x1 - d.x0)
                .attr("fill", d => d.color);
            

             // 创建代表link的路径
            const link = svg.append("g")
                .attr("fill", "none")
                .attr("stroke-opacity", 0.5)
                .selectAll()
                .data(links)
                .join("g")
                .style("mix-blend-mode", "multiply");

            // Creates a gradient, if necessary, for the source-target color option.创建渐变颜色
            if (linkColor === "source-target") {
                const gradient = link.append("linearGradient")
                    .attr("id", d => (d.uid = 'grandient_'+d.index))
                    .attr("gradientUnits", "userSpaceOnUse")
                    .attr("x1", d => d.source.x1)
                    .attr("x2", d => d.target.x0);
                gradient.append("stop")
                    .attr("offset", "0%")
                    .attr("stop-color", d => d.source.color);
                gradient.append("stop")
                    .attr("offset", "100%")
                    .attr("stop-color", d => d.target.color);
            }

            link.append("path")
                .attr("id",function(d,i){return 'link_from_'+d.source.index+'_to_'+d.target.index})
                .attr('class','link')
                .attr("d", d3_sankey.sankeyLinkHorizontal())
                .attr("stroke", linkColor === "source-target" ? (d) => { return 'url(#'+d.uid+')'}
                    : linkColor === "source" ? (d) => color(d.source.category)
                    : linkColor === "target" ? (d) => color(d.target.category) 
                    : linkColor)
                .attr("stroke-width", d => Math.max(1, d.width));

            link.append("title")
                .text(d => `${d.source.name} → ${d.target.name}`);

            // Adds labels on the nodes。为结点添加label
            svg.append("g")
                .selectAll()
                .data(nodes)
                .join("text")
                .attr('id',function(d,i){ return 'label_text_'+i})
                .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
                .attr("y", d => (d.y1 + d.y0) / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
                .text(d => d.name);

            // 消除不需要的node和link
            d3.select('#label_text_49')
                .attr('fill','#00000000')

            d3.select('#rect_49')
                .attr('fill','#00000000')

            d3.select('#link_from_43_to_49')
                .attr('stroke','#00000000')

            d3.select('#link_from_42_to_49')
                .attr('stroke','#00000000')

            // 添加类别名字
            // svg.append('g')
            //     .attr('id','type_text_group')
            //     .append('text')
            //     .attr('id','type_text_1')
            //     .text('化合物分类')
            //     .attr('transform','translate(-30,30)')
            //     .style('font-size','16px')
            //     .style('font-weight','bold')
            //     .attr('fill','rgba(50, 132, 110, 1)')

            // svg.append('text')
            //     .attr('id','type_text_2')
            //     .text('茶中成味成分')
            //     .attr('transform','translate('+(width/4+30)+',0)')
            //     .style('font-size','16px')
            //     .style('font-weight','bold')
            //     .attr('fill','rgba(50, 132, 110, 1)')

            // svg.append('text')
            //     .attr('id','type_text_3')
            //     .text('滋味')
            //     .attr('transform','translate(-30,30)')
            //     .style('font-size','16px')
            //     .style('font-weight','bold')
            //     .attr('fill','rgba(50, 132, 110, 1)')

            // svg.append('text')
            //     .attr('id','type_text_4')
            //     .text('味觉')
            //     .attr('transform','translate(-30,30)')
            //     .style('font-size','16px')
            //     .style('font-weight','bold')
            //     .attr('fill','rgba(50, 132, 110, 1)')



        },
        handleResize(){
            // 清除当前的 SVG

            // 清除当前的 SVG
        const svgContainer = document.getElementById('sankey-chart');
        while (svgContainer.firstChild) {
            svgContainer.removeChild(svgContainer.firstChild);
        }
            this.createSankey()

        }
    },
    mounted(){
        window.addEventListener('resize', this.handleResize); //监听窗口大小改变
        this.createSankey()
        // this._createSankey();
    },
  
  };
  </script>
  
  <style scoped>

  .title{
    width: 97px;
    height: 29px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 26.06px;
    color: rgba(50, 132, 110, 1);
    text-align: left;
    vertical-align: middle;
    }
    .subtitle{
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 17.38px;
        color: rgba(50, 132, 110, 1);
        text-align: left;
        vertical-align: middle;
    }

    .font-content{

        text-align: left;
        text-indent: 2em;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5em;
        color: rgba(50, 132, 110, 0.5);
    }


    .content-container{
        padding: 16px 24px;
    }

    .sankey{
        background-color: var(--td-bg-color-container);
    }


    .type-text-first{
        text-align: left;
    }

    .type-text-last{
        text-align: right;
    }

    .type-text{
        line-height: 60px;
        font-size: 14px;
        font-weight: bold;
        color: rgba(50, 132, 110, 1);
    }

  </style>