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
import * as d3_annotation from 'd3-svg-annotation';

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
        // this.drawLines();
    },
    beforeDestroy() {
      
    },
    methods: {
        createPieChart(){
            const _this = this

            // 定义变量
            var color = d3.scaleOrdinal()
                .range(["#D0DC89","#D9D9D9","#E9CB6A","#EC8924","#C54522","#594445"]);
            var province_color = d3.scaleOrdinal()
                                .range(['#ed657f','#2d2d2d','#353880','#e57b3f','#32846e','#be1224','#5865b1','#289ac7','#f7b527','#cacdea','#ec2f20','#81c3aa']);
                                var data = [['green',5],['white',5],['yellow',5],['wulong',5],['red',4],['black',5]];
            var name_data = [['西湖龙井',1],['碧螺春',1],['黄山毛峰',1],['玉露',1],['滇青',1],
                            ['白毫银针',1],['白牡丹',1],['寿眉',1],['贡眉',1],['黄山白茶',1],
                            ['海马宫茶',1],['蒙顶黄芽',1],['霍山黄芽',1],['广东大叶青',1],['北港毛尖',1],
                            ['铁观音',1],['大红袍',1],['肉桂',1],['水仙',1],['北斗',1],
                            ['祁门红茶',1],['滇红',1],['正山小种',1],['金骏眉',1],
                            ['安化黑茶',1],['普洱茶',1],['六堡茶',1],['泾阳茯砖茶',1],['千两茶',1]];
            var province_name = [['皖',4],['湘',3],['浙',1],['黔',1],
                            ['滇',3],['桂',1],['苏',1],['川',1],
                            ['闽',11],['陕',1],['鄂',1],['粤',1]];

            var name_data_center_angle=[];
            var province_name_center_angle=[];
            


            var margin = {top: 0, right:  0, bottom:  0, left: 0},
                width = this.windowWidth - margin.right - margin.left,
                height = this.windowHeight - margin.top - margin.bottom;
            
            if(width < height){
                var radius = width/2-80;
            }else{
                var radius = height/2 - 80;
            }
            

            var cover_alpha = 0.3

            var rad_line_max = 0.24,
                rad_line_min = 0.185,
                pi2 = Math.PI*2;

            var basewidth = 1600;
            var mouse_over_in_action = false;
            var province_click_current = -1;
            var name_click_current = -1;

            
            var size_factor = this.windowWidth/basewidth;




            var container = d3.select("#chart");
            var canvas = container.append("canvas").attr("id", "canvas-target")
                                .attr('class','canvas-target')
                                .attr('style','position:absolute;top:0;left: 50%;transform: translateX(-50%);');
            var ctx = canvas.node().getContext("2d");
            canvas
                .attr('width', 2* width)
                .attr('height', 2* height)
                .style('width', width + "px")
                .style('height', height + "px");
            ctx.scale(2, 2);

            ctx.translate(width/2,height/2);
            //canvas设置
            ctx.globalCompositeOperation = "multiply";
            ctx.lineCap = "round";

            
            
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

            var svg = container.append("svg")
                        .attr('id','main-svg')
                        .attr('class','main-svg')
                        .attr('style','position:absolute;top:0;left: 50%;transform: translateX(-50%);')
                        .attr("width",width)
                        .attr("height",height)
                        .append("g")
                        .attr('id','outer-ring')
                        .attr("transform","translate("+ width/2 +"," + height/2 +")");

            var inner_ring = d3.select('#main-svg')
                            .append('g')
                            .attr('id','inner-ring')
                            .attr("transform","translate("+ width/2 +"," + height/2 +")");
     
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
                .attr('class', 'name-pie')
                .attr('id',function(d,i){return 'name-pie-'+i})
                .style('fill','#00000000')
                .attr('stroke','#00000014')
                .attr('stroke-width','2')

            name_g.append('text')
                .attr('class','name-label')
                .attr('id',function (d, i) { return "name-label-" + i; })
                .attr("dy", "0.35em")
                .attr('transform',function(d, i){
                    name_data_center_angle.push((d.startAngle+d.endAngle)/2)
                    var centerAngle = (d.startAngle+d.endAngle)/2
                    var finalAngle = centerAngle
                    return "rotate(" +(finalAngle * 180 / Math.PI - 90)+")"+
                        "translate("+radius+")"
                        + (finalAngle > 0 & finalAngle < Math.PI ? "" : "rotate(180)")
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
                    var centerAngle = (d.startAngle+d.endAngle)/2
                    var finalAngle = centerAngle
                    // let deg = 90-(d.endAngle*180)/(2*Math.PI)-(d.startAngle*180)/(2*Math.PI)+6
                    
                    return "rotate(" +(finalAngle * 180 / Math.PI - 90)+")"+
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
                    province_name_center_angle.push(centerAngle);
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
            
            var cover_data=[
                [{
                    source_a:0,
                    target_a:9,
                    strokeStyle:province_color(0)
                }],
                [{
                    source_a:0,
                    target_a:2,
                    strokeStyle:province_color(0)
                }],
                [{
                    source_a:0,
                    target_a:20,
                    strokeStyle:province_color(0)
                }],
                [{
                    source_a:0,
                    target_a:12,
                    strokeStyle:province_color(0)
                }],

                [{
                    source_a:1,
                    target_a:24,
                    strokeStyle:province_color(1)
                }],
                [{
                    source_a:1,
                    target_a:28,
                    strokeStyle:province_color(1)
                }],
                [{
                    source_a:1,
                    target_a:14,
                    strokeStyle:province_color(1)
                }],

                [{
                    source_a:2,
                    target_a:0,
                    strokeStyle:province_color(2)
                }],

                [{
                    source_a:3,
                    target_a:10,
                    strokeStyle:province_color(3)
                }],

                [{
                    source_a:4,
                    target_a:4,
                    strokeStyle:province_color(4)
                }],
                [{
                    source_a:4,
                    target_a:21,
                    strokeStyle:province_color(4)
                }],
                [{
                    source_a:4,
                    target_a:25,
                    strokeStyle:province_color(4)
                }],

                [{
                    source_a:5,
                    target_a:26,
                    strokeStyle:province_color(5)
                }],
                [{
                    source_a:6,
                    target_a:1,
                    strokeStyle:province_color(6)
                }],

                [{
                    source_a:7,
                    target_a:11,
                    strokeStyle:province_color(7)
                }],

                [{
                    source_a:8,
                    target_a:5,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:6,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:8,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:7,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:22,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:23,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:15,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:16,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:17,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:18,
                    strokeStyle:province_color(8)
                }],
                [{
                    source_a:8,
                    target_a:19,
                    strokeStyle:province_color(8)
                }],
                
                [{
                    source_a:9,
                    target_a:27,
                    strokeStyle:province_color(9)
                }],

                [{
                    source_a:10,
                    target_a:3,
                    strokeStyle:province_color(10)
                }],

                [{
                    source_a:11,
                    target_a:13,
                    strokeStyle:province_color(11)
                }],
            ]

            // console.log(name_data_center_angle)
            // console.log(province_name_center_angle)
            
            // 画出线条
            var line = d3.lineRadial()
            .angle(function(d) {  return d.angle; })
            .radius(function(d) { return d.radius; })
            .curve(d3.curveBasis)
            .context(ctx);

            ctx.globalAlpha = cover_alpha;
            create_lines("character", cover_data);

            // 画出线条的函数
            function create_lines(type, data, ) {
                for (var i = 0; i < data.length; i++) {
                    var d = data[i];
                    var line_data = [];
                    
                    // 首先，函数提取出当前元素的一些信息，如source_a和source_r表示线条的起始角度和半径，target_a表示线条的目标角度，target_r表示线条的目标半径。
                    var source_a = province_name_center_angle[d[0].source_a],
                        source_r = 0.5*radius+25;
                    var target_a = name_data_center_angle[d[0].target_a],
                        target_r = radius-42;
                    
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
                    var rad_curve_line = scale_rad_curve(da) * width;


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
                    if(n >= 1) {
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
                    ctx.lineWidth = 3;
                    ctx.stroke(); 
                

                }//for

                ctx.globalAlpha = 0.3;
                ctx.lineWidth = 3;

            }//function create_lines


            // 创建省份的hoverpie
            var hover_province_arc = d3.arc()
                .outerRadius(0.5*radius+30)
                .innerRadius(0.5*radius-10)
                

            var hover_province_pie = d3.pie()
                .sort(null)
                .padAngle(0)
                .value(function(d) { 
                return d[1]; });

            var hover_province_arcs = hover_province_pie(province_name);
            hover_province_arcs.forEach(function (d,i) {
                d.province = i;
            });


            var province_hover_g = inner_ring.append('g').attr('class','province-hover-arc-g');
            var province_hover = province_hover_g.selectAll(".province-hover-arc")
                .data(hover_province_arcs)
                .enter().append("path")
                .attr("class", "province-hover-arc")
                .attr("d", hover_province_arc)
                .style("fill", "none")
                .style("pointer-events", "all")
                .on("click", mouse_click_province)
                .on('mouseover',mouse_over_province)
                .on('mouseout',mouse_out)

            
            d3.selectAll('.name-pie')
                .on('mouseover',mouse_over_name)
                .on('mouseout',mouse_out)
                .on('click',mouse_click_name)
            
            function mouse_click_province(d,i){
                d.stopPropagation();
                name_click_current = -1;

                // 上次点击的和这次点击的不同
                if(province_click_current != i.province){
                    province_click_current = i.province;
                    //清空目前的曲线和外圈的圆圈
                    clear_outer_ring()
                    ctx.clearRect(-width/2, -height/2, width, height);
                    // console.log(i)

                    create_province_current_selected_line(i.province);


                    // 中间显示地图
                    // ………………
                }else{
                    // 上次点击的和这次点击的相同
                    //清空目前的曲线和外圈的圆圈
                    clear_outer_ring()
                    ctx.clearRect(-width/2, -height/2, width, height);
                    // 清空中间的地图
                    // ……

                    // 画出线条
                    create_lines("character", cover_data );
                    province_click_current = -1;
                }
                

                
            }

            function clear_outer_ring(){
                // 高亮外圈的茶叶
                for(var i=0;i<29;i++){
                    d3.select('#name-pie-'+i)
                        .style('fill','#00000000')
                    d3.select('#name-label-circle-'+i)
                        .style('fill','#00000014')
                }
            } 
            
            function mouse_over_name(d,i){
                d.stopPropagation();
                // console.log(i.index);
                mouse_over_in_action = true;
                ctx.clearRect(-width / 2, -height / 2, width, height);
                clear_outer_ring();
                var line_data = cover_data.filter(function(c){ return c[0].target_a === i.index})
                // console.log(line_data);
                create_lines('character',line_data)
                d3.select('#name-pie-'+i.index)
                        .style('fill',line_data[0][0].strokeStyle)
                d3.select('#name-label-circle-'+i.index)
                        .style('fill',line_data[0][0].strokeStyle)



            }

            function mouse_out(){
                if(!mouse_over_in_action) return;
                mouse_over_in_action = false;
                ctx.clearRect(-width / 2, -height / 2, width, height);
                clear_outer_ring();

                // 如果当前有外圈的显示，只显示线+圆
                if(name_click_current != -1){
                    var line_data = cover_data.filter(function(c){ return c[0].target_a === name_click_current})
                    // console.log(line_data);
                    ctx.globalAlpha = 0.8;
                    create_lines('character',line_data)
                    d3.select('#name-pie-'+name_click_current)
                        .style('fill',line_data[0][0].strokeStyle)
                    d3.select('#name-label-circle-'+name_click_current)
                        .style('fill',line_data[0][0].strokeStyle)
                    return;
                }
                

                // 如果上次选了省份，移除后应该仍然显示省份的茶叶数据
                if(province_click_current != -1){
                    create_province_current_selected_line(province_click_current);
                    return;
                }
                // 否则，保持不变

                create_lines('character',cover_data)
            }

            function create_province_current_selected_line(index){
                // 画出要用的曲线
                ctx.globalAlpha = 0.8;

                var line_data = cover_data.filter(function(c) { return c[0].source_a === index;})
                var line_color = line_data[0][0].strokeStyle;
                create_lines("character", line_data );

                // 高亮外圈的茶叶
                for(var i=0;i<line_data.length;i++){
                    var target_index = line_data[i][0].target_a
                    // console.log(target_index);
                    d3.select('#name-pie-'+target_index)
                        .style('fill',line_color)
                    d3.select('#name-label-circle-'+target_index)
                        .style('fill',line_color)
                    
                    // console.log(el)
                }
            }


            function mouse_click_name(d,i){
                d.stopPropagation();
                // ctx.clearRect(-width / 2, -height / 2, width, height);
                // clear_outer_ring();
                
                // var line_data = cover_data.filter(function(c){ return c[0].target_a === i.index})
                // var province_index = line_data[0][0].source_a;
                // // console.log(province_index)
                // province_click_current = province_index;

                // create_province_current_selected_line(province_index);

                // 若之前选择的茶和现在选择的茶不同，点击后显示该茶,省份选择数据清空
                if(name_click_current != i.index){
                    province_click_current = -1;
                    name_click_current = i.index
                    clear_outer_ring();
                    var line_data = cover_data.filter(function(c){ return c[0].target_a === i.index})
                    ctx.globalAlpha = 0.8;
                    create_lines("character", line_data );
                    d3.select('#name-pie-'+i.index)
                        .style('fill',line_data[0][0].strokeStyle)
                    d3.select('#name-label-circle-'+i.index)
                        .style('fill',line_data[0][0].strokeStyle)

                    _this.$emit('customEvent', name_click_current);
                
                }else{
                    name_click_current = -1;
                    d3.select('#name-pie-'+i.index)
                        .style('fill','#00000000')
                    _this.$emit('customEvent', -1);
                }

                // console.log('点击了茶index:'+i.index);  
            }

            function mouse_over_province(d,i){
                d.stopPropagation();
                // console.log(i.index);
                mouse_over_in_action = true;
                ctx.clearRect(-width / 2, -height / 2, width, height);
                clear_outer_ring();
                var line_data = cover_data.filter(function(c){ return c[0].source_a === i.index})
                // console.log(line_data);
                ctx.globalAlpha = 0.3
                create_lines('character',line_data)
                for(var i = 0 ; i<line_data.length ;i++){
                    var index = line_data[i][0].target_a
                    d3.select('#name-pie-'+index)
                        .style('fill',line_data[0][0].strokeStyle)
                    d3.select('#name-label-circle-'+index)
                        .style('fill',line_data[0][0].strokeStyle)
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
    created(){
      
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

</style>