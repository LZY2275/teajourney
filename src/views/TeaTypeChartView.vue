<template>
  
  <div>
    <!-- 标题区域 -->
    <div style="padding: 10px;display: flex;">
      <div style="width: 50%;">
        <p class="title">各类茶近五年产量产值</p>
      </div>
      
      <div style="width: 50%;justify-content: right;display: flex;">
        <template><t-tabs :defaultValue="1" @change="selectTabs">
            <t-tab-panel :value="1" label="产量(万吨)">
              <!-- <p style="margin: 20px">选项卡1内容区</p> -->
            </t-tab-panel>
            <t-tab-panel :value="2" label="产值(亿元)">
              <!-- <p style="margin: 20px">选项卡2内容区</p> -->
            </t-tab-panel>
            <t-tab-panel :value="3" label="内销量(万吨)">
              <!-- <p style="margin: 20px">选项卡3内容区</p> -->
            </t-tab-panel>
          </t-tabs></template>
      </div>
  </div>
    <!-- 图表展示区域 -->
    <div style="display: flex;padding: 0 10px 10px 10px;">
      <div id="silklable"></div>

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

        console.log(lablelist)
        console.log(lable_height)

        d3.select("#silklable")
          .html('<p id="select_all" style="padding-left:10px">Select All</p>')

          d3.select("#silklable")
          .selectAll(".silk")
          .data(lablelist)
          .join("div")
          .attr("class", (d,i) => "silk_" + i)
          .html((d, i) => {
            console.log(d)
              return `<div class="lable_sel" id="lable_${i}" height=${lable_height} style="margin-left:10px;margin-bottom:5px;padding-left:5px;cursor:pointer">
              <svg width="10" height="10">
                  <circle class="company_sel" company=${i} r=5 style="fill:${d.color}; fill-opacity:1" transform="translate(5,5)"/>
              </svg>
            <span class="topic_span">
                  <b>${d.teatype}</b>
              </span>
            </div>`
          
          })


          const _this = this
          d3.selectAll(".lable_sel").on("click", function(d) {
            // console.log("click")
            var element = d3.select(this)
            console.log(element.attr('company'));
            // selectLegend(element)
            // let company = element.attr("company") //获取点击的矩形的标签
            // _this.$emit('getcompany', company)
            // // _this.$emit('getcompanyall', "noreset")
          })
          

          function selectLegend(element){
            //console.log(element)
            let company = element.attr("company") //获取点击的矩形的标签
            let opacity = element.style("fill-opacity") //获取点击的矩形的透明度
            let node_sel = d3.selectAll(".node." + company) //获取选中的某家公司所有的矩形
            let link_sel = d3.selectAll(".link." + company)

            if (that.first_click) {
                console.log("first click")
                that.first_click = false
                d3.selectAll(".company_sel").style("fill-opacity", 0.1) //所有的公司图例变暗
                d3.selectAll(".node").style("fill-opacity", 0.1) //所有公司矩形变暗
                d3.selectAll(".link").style("visibility", "hidden") //所有silk消失

                element.style("fill-opacity", 1.0) //选中的公司图例变亮
                node_sel.style("fill-opacity", 1)
                link_sel.style("visibility", "visible")
                link_sel.style("fill-opacity", 0.01)
                
            }
            else if (opacity == 1 ) {
                d3.selectAll(".company_sel").style("fill-opacity", 0.1) //所有的公司图例变暗
                d3.selectAll(".node").style("fill-opacity", 0.1) //所有公司矩形变暗
                d3.selectAll(".link").style("visibility", "hidden") //所有silk消失
                
                console.log("else if")
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



      }

    },
    created(){

    },
    mounted(){
      this.drawLable();

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
