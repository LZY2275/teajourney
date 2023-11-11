<template>
    <div class="sankey" style="width: 100%;height: 100%;display: flex;">
        <div id="sankey-chart-note" style="width: 300px;height: 100%;">
            <div class="title" style="padding: 16px 24px 0px 24px;">茶味形成</div>
            <div class="subtitle" style="padding: 0 24px;">{{subtitle}}</div>
            <div class="content-container">
                <p class="font-content">{{ content }}</p>
                <p class="font-content">右侧桑基图展示了茶种各成分与滋味和味觉感受的对应关系。</p>
            </div>
        </div>
        <div style="padding: 16px 24px 16px 0;width: calc(100% - 300px);">
            <div id="sankey-chart" style="width: 100%;height: 100%;background-color:rgb(255, 254, 242)">
                <div style="display: flex;width: calc(100% - 120px);height: 60px;padding: 0px 60px 0 60px;">
                    <p class="type-text type-text-first" style="width: 16.67%;">化合物种类</p>
                    <p class="type-text" style="width: 33.33%;">茶中成味成分</p>
                    <p class="type-text" style="width: 33.33%;">茶的滋味</p>
                    <p class="type-text type-text-last" style="width: 16.67%;">味觉感受</p>
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
        content:"茶叶滋味是茶叶化学组成部分含量和人的感官对它的综合反应。茶叶有甜、酸、苦、鲜、涩等多种滋味。鲜味主要成分是多种氨基酸，氨基酸鲜中带甜，有的鲜中带酸。涩的主要特质是多酚类化合物。甜味物质主要有部分氨基酸和可溶性糖。苦味物质主要有咖啡碱、花青素、茶叶皂素。酸味物质主要是多种有机酸。"
      };
    },
    components: {
      
    },
    methods: {
        createSankey(){

            var data = sankey_data

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
      
    },
    mounted(){
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