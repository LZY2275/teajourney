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
    <div id="chart">

    </div>
   

</template>

<script>
import * as d3 from 'd3';

export default {
    name:'PlantView',
    data() {
      return {
        teatitle:'祁门红茶',
        teacontent:'<p>祁门红茶，又称祁红，是中国安徽省黄山市祁门县出产的一种名优红茶。祁门红茶起源于明代，具有400多年的历史。它以其独特的外形、香气和口感而闻名于世。</p><p>祁门红茶的茶叶选自祁门县境内的高山茶园，采用传统的手工制作工艺。茶叶外形条索紧结，色泽乌润，金毫显露。冲泡时，茶汤呈红褐色，香气浓郁，口感醇厚。</p><p>祁门红茶的品质受土壤、气候和制作工艺的影响，因此，不同年份和产区的祁门红茶呈现出不同的特点。一般来说，祁门红茶具有独特的果香和花香，同时带有一定的甜味和淡淡的苦涩感。它富含多种有益物质，如茶多酚、咖啡因和氨基酸，具有提神醒脑、消除疲劳、抗氧化等功效。</p><p>祁门红茶是中国四大名茶之一，也是国内外茶叶市场上备受追捧的茶品之一。它被誉为“红茶之王”，享有“色香味俱佳，汤色红艳明亮，滋味醇和回甘”的美誉。无论是作为日常饮品还是送礼品，祁门红茶都是一种受欢迎的选择。</p>',
        teaimg:"../assets/img/teaimg.png",
        windowHeight : window.innerHeight,
        windowWidth : window.innerWidth - 300,
      };
    },
    mounted() {
        this.createPieChart();

    },
    beforeDestroy() {
      
    },
    methods: {
        createBarChart(){
            
            const data = [10, 15, 12, 8, 17]
            const svg = d3.select("#chart")
                            .append("svg")
                            .attr("width", 500)
                            .attr("height", 300)

            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", (d, i) => i * 70 + 10)
                .attr("y", d => 300 - 10 * d)
                .attr("width", 50)
                .attr("height", (d) => d * 10)
                .attr("fill", "green")
        },
        createPieChart(){
            var margin = {top: 0, right:  0, bottom:  0, left: 0},
                width = this.windowHeight - margin.right - margin.left,
                height = this.windowHeight - margin.top - margin.bottom,
                radius = width/2-80;

            var color = d3.scaleOrdinal()
                .range(["#D0DC89","#D9D9D9","#E9CB6A","#EC8924","#C54522","#594445"]);

            var province_color = d3.scaleOrdinal()
                                .range(['#ed657f','#2d2d2d','#353880','#e57b3f','#32846e','#be1224','#5865b1','#289ac7','#f7b527','#cacdea','#ec2f20','#81c3aa'])
            
            var arc = d3.arc()
                        .outerRadius( radius - 10)
                        .innerRadius( radius - 20)
                        .cornerRadius(5)

            // var name_label_group = chart.append("g").attr('class','name-group')
            
            var name_label_arc = d3.arc()
                            .outerRadius(radius - 26 )
                            .innerRadius(radius - 42)
                            .cornerRadius(7)

            var province_label_arc = d3.arc()
                            .outerRadius(0.5*radius)
                            .innerRadius(0.5*radius-10)
                            .cornerRadius(5)

            var pie = d3.pie()
                        .sort(null)
                        .padAngle(0.01)
                        .value(function(d) { 
                        return d[1]; });

            var name_pie = d3.pie()
                            .sort(null)
                            .padAngle(0.01)
                            .value(function(d){
                                return d[1];
                            })

            var province_pie = d3.pie()
                            .sort(null)
                            .padAngle(0.01)
                            .value(function(d){
                                return d[1];
                            })

            var svg = d3.select("#chart")
                        .append("svg")
                        .attr('id','main-canvas')
                        .attr("width",width)
                        .attr("height",height)
                        .append("g")
                        .attr('id','outer-ring')
                        .attr("transform","translate("+ width/2 +"," + height/2 +")");

            var inner_ring = d3.select('#main-canvas')
                            .append('g')
                            .attr('id','inner-ring')
                            .attr("transform","translate("+ width/2 +"," + height/2 +")");

            

            var data = [['green',5],['white',5],['yellow',5],['wulong',5],['red',4],['black',5]];
            var name_data = [['海马宫茶',1],['蒙顶黄芽',1],['霍山黄芽',1],['广东大叶青',1],['北港毛尖',1],
                            ['白毫银针',1],['白牡丹',1],['寿眉',1],['贡眉',1],['黄山白茶',1],
                            ['西湖龙井',1],['碧螺春',1],['黄山毛峰',1],['玉露',1],['滇青',1],
                            ['安化黑茶',1],['普洱茶',1],['六堡茶',1],['泾阳茯砖茶',1],['千两茶',1],
                            ['祁门红茶',1],['滇红',1],['正山小种',1],['金骏眉',1],
                            ['铁观音',1],['大红袍',1],['肉桂',1],['水仙',1],['北斗',1]];
            var province_name = [['皖',4],['湘',3],['浙',1],['黔',1],
                            ['滇',3],['桂',1],['苏',1],['川',1],
                            ['闽',11],['陕',1],['鄂',1],['粤',1]];
                            
            var g = svg.selectAll('.arc')
                            .data(pie(data))
                            .enter().append('g')
                            .attr('class','arc');

            var name_g = svg.selectAll('.name-arc')
                            .data(name_pie(name_data))
                            .enter().append('g')
                            .attr('class','name-arc');

            var province_name_g = inner_ring.selectAll('.province-arc')
                            .data(province_pie(province_name))
                            .enter().append('g')
                            .attr('class','province-arc');

            g.append('path')
                .attr('d',arc)
                .style('fill',function(d){
                    return color(d.data[0]);
                })
            
            name_g.append('path')
                .attr('d',name_label_arc)
                .style('fill','#00000000')
                .attr('stroke','#00000014')
                .attr('stroke-width','2')

            name_g.append('text')
                .attr('class','name-label')
                .attr('id',function (d, i) { return "name-label-" + i; })
                .attr("dy", "0.35em")
                // .attr("transform", (d) => `translate(${name_label_arc.centroid(d)})`)
                .attr('transform',function(d, i){
                    let deg = 90-(d.endAngle*180)/(2*Math.PI)-(d.startAngle*180)/(2*Math.PI)+6
                    // console.log(deg)
                    return "rotate(" +deg+")"+
                        "translate("+radius+")"
                        + (deg > -90+6 ? "" : "rotate(180)")
                })
                .attr("text-anchor", (d) => (d.endAngle + d.startAngle)/2 > Math.PI
                    ? "end"
                    : null)
                .style('font-size','12px')
                .style('font-weight','600')
                .attr('fill','rgba(0,0,0,0.5)')
                .text( function(d){  return d.data[0]})


            name_g.append('circle')
                .attr('class','name-label-circle')
                .attr('id', function (d, i) { return "name-label-circle-" + i; })
                .attr('r',5)
                .attr('fill','#00000014')
                .attr('stroke','white')
                .attr('stroke-width','2')
                .attr('transform',function(d, i){
                    let deg = 90-(d.endAngle*180)/(2*Math.PI)-(d.startAngle*180)/(2*Math.PI)+6
                    
                    return "rotate(" +deg+")"+
                        "translate("+(radius-42)+")"
                    }
                );

            province_name_g.append('path')
                .attr('d',province_label_arc)
                .style('fill',function(d){
                    return province_color(d.index);
                })
            
            province_name_g.append('text')
                .attr('class','province-label')
                .attr('id',function (d, i) {  return "province-label-" + i; })
                .attr("dy", "0.35em")
                // .attr("transform", (d) => `translate(${name_label_arc.centroid(d)})`)
                .attr('transform',function(d, i){
                    var centerAngle = (d.startAngle+d.endAngle)/2
                    var finalAngle = centerAngle
                    // let deg = 90-(d.endAngle*180)/(2*Math.PI)-(d.startAngle*180)/(2*Math.PI)
                    // console.log(deg)
                    return "rotate(" +(finalAngle * 180 / Math.PI - 90)+")"+
                        "translate("+(0.5*radius+5)+")"
                        + (finalAngle > 0 & finalAngle < Math.PI ? "" : "rotate(180)")
                })
                
                .attr("text-anchor", (d) => (d.endAngle + d.startAngle)/2 > Math.PI
                    ? "end"
                    : null)
                .style('font-size','12px')
                .style('font-weight','600')
                .attr('fill','rgba(0,0,0,0.5)')
                .text( function(d){ return d.data[0]})

            province_name_g.append('circle')
                .attr('class','province-label-circle')
                .attr('id',function(d,i) { return 'province-label-circle' + i })
                .attr('r',5)
                .attr('fill',function(d,i){ return province_color(i)})
                .attr('stroke','white')
                .attr('stroke-width','2')
                .attr('transform',function(d, i){
                    var centerAngle = (d.startAngle+d.endAngle)/2
                    var finalAngle = centerAngle
                    return "rotate(" +(finalAngle * 180 / Math.PI - 90)+")"+"translate("+(0.5*radius+25)+")"
                    }
                );


        },

        createBasicChart(){
            // Declare the chart dimensions and margins.
            const width = 640;
            const height = 400;
            const marginTop = 20;
            const marginRight = 20;
            const marginBottom = 30;
            const marginLeft = 40;

            // Declare the x (horizontal position) scale.
            const x = d3.scaleUtc()
                .domain([new Date("2023-01-01"), new Date("2024-01-01")])
                .range([marginLeft, width - marginRight]);

            // Declare the y (vertical position) scale.
            const y = d3.scaleLinear()
                .domain([0, 100])
                .range([height - marginBottom, marginTop]);

            // Create the SVG container.
            const svg = d3.create("svg")
                .attr("width", width)
                .attr("height", height);

            // Add the x-axis.
            svg.append("g")
                .attr("transform", `translate(0,${height - marginBottom})`)
                .call(d3.axisBottom(x));

            // Add the y-axis.
            svg.append("g")
                .attr("transform", `translate(${marginLeft},0)`)
                .call(d3.axisLeft(y));

            console.log(svg.node)

            // Return the SVG element.
            return svg.node();
        }
    },
    created(){
      
    },
    beforeDestroy() {
        d3.select("#chart").selectAll("*").remove();
    },

  };
            
        
</script>

<style scoped>
    /* .tea-info-container{
        position: relative;
        top: calc(65vh - 55px);
        right: 55px;
    }
    .tea-info-img{
        width: 260px;
        height: 180px;
        border-radius: 5px;
        object-fit: cover;
    }
    .tea-info-title{
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 26.06px;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 15px;
        text-align: left;
    }
    .tea-info-content{
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.85);
        text-align: left;
        text-indent:2em;
    }
    .tea-info-card{
        height: 46px;
        width: 48%;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.5);;
    } */

</style>