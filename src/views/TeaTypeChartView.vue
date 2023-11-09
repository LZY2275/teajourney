<template>
  
  <div>
    <!-- 标题区域 -->
    <div style="padding: 10px;display: flex;">
      <div style="width: 50%;">
        <p class="title">各类茶近五年产量产值</p>
      </div>
      
      <div style="width: 50%;justify-content: right;display: flex;">
        <template><t-tabs :defaultValue="defaultValue" @change="selectTabs">
            <t-tab-panel :value="1" label="产量(万吨)">
              <!-- <p style="margin: 20px">选项卡1内容区</p> -->
            </t-tab-panel>
            <t-tab-panel :value="3" label="内销量(万吨)">
              <!-- <p style="margin: 20px">选项卡3内容区</p> -->
            </t-tab-panel>
            <t-tab-panel :value="2" label="内销额(亿元)">
              <!-- <p style="margin: 20px">选项卡2内容区</p> -->
            </t-tab-panel>
            
          </t-tabs></template>
      </div>
  </div>
    <!-- 图表展示区域 -->
    <div style="display: flex;padding: 0 10px 10px 10px;">
      <div id="silklable" style="padding: 10px 20px;"></div>
      <div id="silkchart-container" style="height: calc((50vh - 30px) - 69px);width: calc(100% - 124px);">
        <div id="silkchart" style="width: 100%;height: 100%;"></div>
      </div>

    </div>
    
  </div>


</template>
  
<script>
import * as echarts from "echarts/core";
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import * as d3 from 'd3';

echarts.use([SVGRenderer, CanvasRenderer]);

  export default {
    name: 'TeaTypeChartView',
    data(){
      return{

        defaultValue:1,
        first_click: true,

        productionData:[
          {
            year:2018, 
            range:320,
            danwei:"万吨",
            data:[
              {type:0, value:172.24},
              {type:1, value:3.37},
              {type:2, value:0.85},
              {type:3, value:27.12},
              {type:4, value:26.19},
              {type:5, value:31.89},
            ]
          },
          {
            year:2019, 
            data:[
              {type:0, value:177.28},
              {type:1, value:4.96},
              {type:2, value:0.95},
              {type:3, value:27.58},
              {type:4, value:30.72},
              {type:5, value:37.81},
            ]
          },
          {
            year:2020, 
            data:[
              {type:0, value:184.27},
              {type:1, value:7.35},
              {type:2, value:1.45},
              {type:3, value:27.78},
              {type:4, value:40.43},
              {type:5, value:37.33},
            ]
          },
          {
            year:2021, 
            data:[
              {type:0, value:184.94},
              {type:1, value:8.19},
              {type:2, value:1.33},
              {type:3, value:28.72},
              {type:4, value:43.45},
              {type:5, value:40.68},
            ]
          },
          {
            year:2022, 
            data:[
              {type:0, value:185.38},
              {type:1, value:9.45},
              {type:2, value:1.30},
              {type:3, value:31.13},
              {type:4, value:48.2},
              {type:5, value:42.63},
            ]
          },
        ],

        domesticSalesData:[
          // {
          //   year:2018, 
          //   range:3500,
          //   danwei:"亿元",
          //   data:[
          //     {type:0, value:1394.4},
          //     {type:1, value:57.67},
          //     {type:2, value:10.47},
          //     {type:3, value:318.54},
          //     {type:4, value:597.17},
          //     {type:5, value:31.89},
          //   ]
          // },
          {
            year:2019, 
            range:3500,
            danwei:"亿元",
            data:[
              {type:0, value:1596.74},
              {type:1, value:62.9},
              {type:2, value:9.98},
              {type:3, value:296.9},
              {type:4, value:570.3},
              {type:5, value:202.7},
            ]
          },
          {
            year:2020, 
            data:[
              {type:0, value:1699.2},
              {type:1, value:89.5},
              {type:2, value:17},
              {type:3, value:280.7},
              {type:4, value:500.8},
              {type:5, value:301.6},
            ]
          },
          {
            year:2021, 
            data:[
              {type:0, value:1994.3},
              {type:1, value:91.4},
              {type:2, value:13.97},
              {type:3, value:259.2},
              {type:4, value:502.94},
              {type:5, value:258.13},
            ]
          },
          {
            year:2022, 
            data:[
              {type:0, value:2110.45},
              {type:1, value:100.53},
              {type:2, value:14.17},
              {type:3, value:284.56},
              {type:4, value:564.21},
              {type:5, value:321.35},
            ]
          },
        ],

        domesticWeightData:[
        {
            year:2018, 
            range:250,
            danwei:"万吨",
            data:[
              {type:0, value:120.59},
              {type:1, value:2.86},
              {type:2, value:0.68},
              {type:3, value:21.15},
              {type:4, value:26.81},
              {type:5, value:21.15},
            ]
          },
          {
            year:2019, 
            data:[
              {type:0, value:121.42},
              {type:1, value:4.22},
              {type:2, value:0.85},
              {type:3, value:21.63},
              {type:4, value:31.86},
              {type:5, value:21.63},
            ]
          },
          {
            year:2020, 
            data:[
              {type:0, value:127.91},
              {type:1, value:6.25},
              {type:2, value:1.23},
              {type:3, value:21.92},
              {type:4, value:31.48},
              {type:5, value:31.38},
            ]
          },
          {
            year:2021, 
            data:[
              {type:0, value:130.92},
              {type:1, value:7.05},
              {type:2, value:1.14},
              {type:3, value:22.79},
              {type:4, value:33.88},
              {type:5, value:34.41},
            ]
          },
          {
            year:2022, 
            data:[
              {type:0, value:131.10},
              {type:1, value:8.13},
              {type:2, value:1.12},
              {type:3, value:24.84},
              {type:4, value:38.13},
              {type:5, value:26.44},
            ]
          },
        ]


      }
    },
    methods:{
      selectTabs(value){
        console.log(value);
      },

      drawLable(){

        var lable_width = $("#silklable").width()
        var lable_height = $("#silklable").height();
        var tea_Type = ["绿茶", "白茶", "黄茶", "乌龙茶", "红茶","黑茶"];
        //定义6个颜色比例尺，用于5条折线着色
        var colors = ["#D0DC89","#D9D9D9","#E9CB6A","#EC8924","#C54522","#594445"];

        function objlable(teatype, color){
          var o = new Object()
          o.teatype = teatype
          o.color = color
          return o
        }

        var lablelist = []

        for(var i = 0; i < tea_Type.length; i++){
          var o = objlable(tea_Type[i], colors[i])
          lablelist.push(o)
        }

        // console.log(lablelist)
        // console.log(lable_height)

        d3.select("#silklable")
          .html('<p id="select_all" style="padding:10px;font-weight:bold;cursor:pointer">选择所有</p>')

          d3.select("#silklable")
          .selectAll(".silk")
          .data(lablelist)
          .join("div")
          .attr("class", (d,i) => "silk_" + i)
          .html((d, i) => {
            // console.log(d)
              return `<div class="lable_sel" id="lable_${i}" height=${lable_height} style="margin-left:10px;margin-bottom:5px;padding-left:5px;text-align:left">
                <svg width="10" height="10">
                    <circle class="circle_sel" company=${i} r=5 style="fill:${d.color};cursor:pointer; fill-opacity:1" transform="translate(5,5)"/>
                </svg>
              <span class="topic_span">
                    <b>${d.teatype}</b>
              </span>
            </div>`
            
          })


          const _this = this
          d3.selectAll(".circle_sel").on("click", function(d,i) {
            // console.log("click",i)
            d.stopPropagation();
            var element = d3.select(this)
            selectLegend(element)
            // let company = element.attr("company") //获取点击的矩形的标签
            // _this.$emit('getcompany', company)
            // // _this.$emit('getcompanyall', "noreset")
          })

          d3.select('#select_all').on("click",function(d,i){
            d.stopPropagation();
            showAllLegend();
          })
          
          var that = this

          function showAllLegend(){
            that.first_click = true
            d3.selectAll('.circle_sel').style('fill-opacity',1.0)
            for(var i = 0;i<6;i++){
              d3.selectAll(".node_"+i).style("fill-opacity", 1) //所有公司矩形变亮
              d3.selectAll(".link_"+i).style("visibility", "visible") //所有silk显示
            }
          }

          function hiddenChart(){
            for(var i = 0;i<6;i++){
              d3.selectAll(".node_"+i).style("fill-opacity", 0.1) //所有公司矩形变暗
              d3.selectAll(".link_"+i).style("visibility", "hidden") //所有silk消失
            }
          }

          function selectLegend(element){
            // console.log(element.company);
            //console.log(element)
            let company = element.attr("company") //获取点击的矩形的标签
            let opacity = element.style("fill-opacity") //获取点击的圆形的透明度
            // console.log('opacity',opacity);
            let node_sel = d3.selectAll(".node_" + company) //获取选中的某家公司所有的矩形
            let link_sel = d3.selectAll(".link_" + company)

            if (that.first_click) {
                console.log("first click")
                that.first_click = false
                d3.selectAll(".circle_sel").style("fill-opacity", 0.1) //所有的公司图例变暗
                
                hiddenChart();

                element.style("fill-opacity", 1.0) //选中的公司图例变亮
                node_sel.style("fill-opacity", 1)
                link_sel.style("visibility", "visible")
                link_sel.style("fill-opacity", 0.1)
                
            }
            else if (opacity == 1 ) {
                d3.selectAll(".circle_sel").style("fill-opacity", 0.1) //所有的公司图例变暗
                hiddenChart();
                // console.log("else if")
                element.style("fill-opacity", 0.1)
                node_sel.style("fill-opacity", 0.2)
                link_sel.style("visibility", "hidden")
            }
            else {
                console.log("else")
                element.style("fill-opacity", 1.0)
                node_sel.style("fill-opacity", 1)
                link_sel.style("visibility", "visible")
                d3.selectAll(".link").style("fill-opacity", 0.01)
            }
          }



      },

      drawSlik(_data,value){
        d3.select('#silkchart').selectAll('*').remove();

 
        var padding = { top: 10, right: 20, bottom: 15, left: 20 };

        const container = d3.select('#silkchart-container');
        const width = container.node().getBoundingClientRect().width - padding.left - padding.right;
        const height = container.node().getBoundingClientRect().height - padding.top - padding.bottom;
        
        var colors = ["#D0DC89","#D9D9D9","#E9CB6A","#EC8924","#C54522","#594445"];
        // console.log(width,height);

        // 创建SVG容器
        const svg = d3.select('#silkchart')
          .append('svg')
          .attr('width', '100%') // 使用百分比宽度
          .attr('height', '100%') // 使用百分比高度
          .append('g')
          .attr('transform', `translate(${padding.left}, ${padding.top})`);

        if(value == 1 || value == 3){
          // 定义x轴的时间比例尺
          var xScale = d3.scaleBand()
            .domain([2018,2019,2020,2021,2022])
            .range([padding.left, width  - padding.right ])
            .paddingInner(0.6)
            .paddingOuter(0.2)
        }else{
          // 定义x轴的时间比例尺
          var xScale = d3.scaleBand()
            .domain([2019,2020,2021,2022])
            .range([padding.left, width  - padding.right ])
            .paddingInner(0.6)
            .paddingOuter(0.2)
        }

        

        var xAxis = d3.axisBottom(xScale) 

        // 定义y轴的线性比例尺
        var yScale = d3.scaleLinear()
          .domain([0, _data[0].range])
          .range([height - padding.top - padding.bottom, 0]);

        var yAxis = d3.axisLeft(yScale)
                //.tickValues([0, 20, 40, 60, 80, 100])
                .ticks(5)

        // 创建横轴
        svg.append('g')
          .attr('class', 'x-axis')
          .attr(
            "transform",
            "translate(" + 0 + "," + (height - padding.bottom) + ")"
          )
          .call(xAxis)
          .selectAll("text") // 选择所有的文本标签
          .attr("dy", "1.5em") // 调整垂直偏移
          .attr('style','font-size:12px;font-weight:500');

        // 创建纵轴
        svg.append('g')
          .attr('class', 'y-axis')
          .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
          .call(yAxis)
          .selectAll("text") // 选择所有的文本标签
          .attr("dx", "-0.5em"); // 调整偏移

        //对高度进行叠加
        var stackheight = []

        for(var m = 0; m < _data.length; m++){
          var temp = [] //存储堆叠后的高度
          var temp_val = [] //存储每一个单独的高度
          var val = 0
          for(var n = 0; n < 6; n++){ 
              val = yScale(0) - yScale(_data[m].data[n].value) //计算每一个对应的高度
              temp_val.push(val)  //存储每一个高度
          }
          for(var n = 0; n < 6; n++){ 
              if(n == 0){
                temp.push(temp_val[n])
              }
              if(n != 0){ //需要所有的高度相加
                var sum = 0
                for(var x = n; x >=0; x--){
                  sum += temp_val[x]
                }  
                  temp.push(sum)
              }
          }
          stackheight.push(temp)
        }
        
        // console.log(stackheight);

        //创建对象
        function createLink(type, year, y, h){
          var o = new Object()
          o.type = type;
          o.year = year;
          o.y = y;
          o.h = h
          return o;
        }

        function Link(source, target){
          var o = new Object()
          o.source = source;
          o.target = target;
          return o;
        } 
        
        var link_list = []

        // 画出矩形图
        for(var j = 0; j < _data.length - 1; j++){
          for(var i = 0; i < _data[j].data.length; i++){
              var temp_loc = 0 //定位下一列中的坐标
              for(var k = 0; k < _data[j].data.length; k++){
                if(_data[j].data[i].type == _data[j + 1].data[k].type){
                  temp_loc = k
                }
              } 
              var temp1 = _data[j].data[i] //source所在的矩形
              var temp2 = _data[j + 1].data[temp_loc] //target所在的矩形
              //console.log(temp)
              var creatlink1 = createLink(temp1.type,xScale(_data[j].year), yScale(0) - stackheight[j][i], yScale(0) - yScale(temp1.value))
              var creatlink2 = createLink(temp2.type,xScale(_data[j + 1].year), yScale(0) - stackheight[j + 1][temp_loc], yScale(0) - yScale(temp2.value))
              var link = Link(creatlink1, creatlink2)
              // console.log('link',link);
              link_list.push(link)
              
          }
        }

        // console.log(link_list);

        var tooltip = svg.append("g")
            .attr("transform", "translate(" + padding.left + "," + (padding.top - 15) + ")");


        // 画出矩形图
        for(var j = 0; j < _data.length; j++){
          // console.log("silkrect")
          var rects = svg.append("g")
            .selectAll("g")
            .data(_data[j].data)
            .join("rect")
            //.attr("class", "noderect")
            .attr("class", d => "node_" + d.type)
            .attr("legend", d => d.type)
            .attr("x", (d,i) => {
              return xScale(_data[j].year) 
            })
            .attr("y", (d, i) => {   
              return yScale(0) - stackheight[j][i]
            })
            .attr("height", (d, i) => {
              return yScale(0) - yScale(d.value)
            })
            .attr("width", (d, i) => {
              return xScale.bandwidth()
            })
            .attr("fill", (d, i) =>{ 
              if(d.type == 0)
                return colors[0]
              if(d.type == 1)
                return colors[1]
              if(d.type == 2)
                return colors[2]
              if(d.type == 3)
                return colors[3]
              if(d.type == 4)
                return colors[4]
              if(d.type == 5)
                return colors[5]
            })
            // .style("stroke", "black")
            // .style("stroke-width", 0.1)
            .attr("transform", "translate(" + 0 + "," + padding.top + ")")
            .style("fill-opacity", 1) //控制透明度，1表示不透明
            .on('mouseover',function(d, i){   
              var tea_type = ''
              if(i.type == 0){
                tea_type = '绿茶'
              }
              if(i.type == 1){
                tea_type = '白茶'
              }
              if(i.type == 2){
                tea_type = '黄茶'
              }
              if(i.type == 3){
                tea_type = '乌龙茶'
              }
              if(i.type == 4){
                tea_type = '红茶'
              }
              if(i.type == 5){
                tea_type = '黑茶'
              }   
                tooltip.call(callout, tea_type+': '+i.value+_data[0].danwei)

            }).on('mouseout',function(d,i){                   
                tooltip.call(callout, null)               
            });
          //提示框出现
        function callout(g, value, font_size) {
          if (!value) return g.style("display", "none");
          if (!font_size) font_size = "10px";

          g.style("display", null)
              .style("pointer-events", "none")
              // .style("font", font_size + " sans-serif");

          const rect = g.selectAll("rect")
              .data([null])
              .join("rect")
              .attr("class", "tooltiprect")
              .attr("fill", "white")
              .attr("fill-opacity", 0.7)
              .attr("stroke", "rgba(34,36,38,.15)")
              .attr("rx", "5px")
              .attr("ry", "5px")

          const text = g.selectAll("text")
              .data([null])
              .join("text")
              .call(text => text
                  .selectAll("tspan")
                  .data((value + "").split(/\n/))
                  .join("tspan")
                      .attr("x", 0)
                      .attr("y", (d, i) => `${i * 1.1}em`)
                      .style("font-weight", (_, i) => i ? null : "bold")
                      .text(d => d));

          const {x, y, width: w, height: h} = text.node().getBBox()

          if (font_size == "10px") {
              text.attr("transform", `translate(${-w / 2},${15 - y})`);
              text.attr("transform", `translate(${20},${20})`);
              rect.attr("x", 10)
                  .attr("y", 0)
                  .attr("width", w + 20)
                  .attr("height", h + 20)
          }
          else {
              text.attr("transform", `translate(${16},${6})`);
              rect.attr("x", 10)
                  .attr("y", -6)
                  .attr("width", w + 14)
                  .attr("height", h + 8)
          }
        }
          var spaces = svg.append("g")
              .attr("class", "spaces")
              .selectAll("g")
              .data(_data[j])
              .join("line")
              .attr("x1", (d,i) => {
                      return xScale(_data[j].year) - 1
              })
              .attr("y1", (d, i) => {   
                      return yScale(0) - stackheight[j][i]
              })
              .attr("x2", (d, i) => xScale(_data[j].year) - 1 + xScale.bandwidth() + 2)
              .attr("y2", (d, i) => {   
                      return yScale(0) - stackheight[j][i]
              })
              .style("stroke", "white")
              .style("stroke-width", 0.1)
            //console.log(yScale.ticks(5))
          let grid = svg.append("g")
              .attr("stroke", "grey")
              .attr("stroke-opacity", 0.01)
              .call(g => g.append("g")
                  .selectAll("line")
                  .data(yScale.ticks(5))
                  .join("line")
                      .attr("y1", d => 0.5 + yScale(d) + padding.top)
                      .attr("y2", d => 0.5 + yScale(d) + padding.top)
                      .attr("x1", 0.5 + padding.left)
                      .attr("x2", width - padding.right));

          // Add links
          function link_path(d) {
              var cx = (d.x1+d.w1+d.x2)/2

              return "M" + (d.x1+d.w1) + "," + d.y1 +
              "C" + cx + "," + d.y1 + " " + cx + "," + d.y2 + " " + d.x2 + "," + d.y2 +
              "L" + d.x2 + "," + (d.y2+d.h2) +
              "C" + cx + "," + (d.y2+d.h2) + " " + cx + "," + (d.y1+d.h1) + " " + (d.x1+d.w1) + "," + (d.y1+d.h1)
              "L" + (d.x1+d.w1) + "," + d.y1;
          }
          
          
          link_list.forEach((d, i) => {
              //console.log(d)
              d.x1 = d.source.year
              d.y1 = d.source.y
              d.h1 = d.source.h
              d.w1 = xScale.bandwidth()
              d.x2 = d.target.year
              d.y2 = d.target.y
              d.h2 = d.target.h
              d.w2 = xScale.bandwidth()
              d.type = d.source.type
              //d.color = d.source.color
          });

          var link_objs = svg.append('g')
              .attr("class", "links")
              .selectAll('g')
              .data(link_list)
              .join("path")
              .attr("class", d => "link_" +  d.source.type)
              .attr("d", d => link_path(d))
              .attr("visibility", "visible")
              .attr("transform", "translate(" + 0 + "," + padding.top + ")")
              .attr("fill", (d, i) =>{ 
                //console.log(globledata[j][count++])
                  if(d.source.type == 0)
                    return colors[0]
                  if(d.source.type == 1)
                    return colors[1]
                  if(d.source.type == 2)
                    return colors[2]
                  if(d.source.type == 3)
                    return colors[3]
                  if(d.source.type == 4)
                    return colors[4]
                  if(d.source.type == 5)
                    return colors[5]
              })
              .style("fill-opacity", 0.05)
              .style("stroke", (d, i) =>{ 
                //console.log(globledata[j][count++])
                  if(d.source.type == 0)
                    return colors[0]
                  if(d.source.type == 1)
                    return colors[1]
                  if(d.source.type == 2)
                    return colors[2]
                  if(d.source.type == 3)
                    return colors[3]
                  if(d.source.type == 4)
                    return colors[4]
                  if(d.source.type == 5)
                    return colors[5]
              })
              .style("stroke-width", 0.1);

          // 添加交互
          // d3.selectAll('.link.5')
          //     .on('mouseover',mouse_over);

          // function mouse_over(d,i){
          //   console.log(i);
          // }

          // d3.selectAll('.silk_0')
          //   .on('mouseover',mouse_over);

          // function mouse_over(d,i){
          //   // 鼠标移到某元素上，右图只显示某元素
          //   console.log(i);
          // }
        }
      },

      selectTabs(value){
        if(value == 1){
          this.drawSlik(this.productionData,1)
        }else if(value == 2){
          this.drawSlik(this.domesticSalesData,2)
        }else if(value == 3){
          this.drawSlik(this.domesticWeightData,3)
        }
      }

    },
    created(){

    },
    mounted(){
      this.drawLable();
      this.drawSlik(this.productionData,1);
    }
  }

</script>

<style scoped>
.title{
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: var(--td-brand-color-6);
  line-height: 49px;
  margin-left: 10px;
}

</style>
