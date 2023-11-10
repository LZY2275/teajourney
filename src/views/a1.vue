<template>
  <div class="line-chart-container">
    <div class="line-chart"></div>
    <div id="show" class="tooltip" style="display: none;"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {

  methods: {

    drawLineChart() {
      const data = [
        { province: '安徽省' },
        { province: '湖南省' },
        { province: '浙江省' },
        { province: '贵州省' },
        { province: '云南省' },
        { province: '广西省' },
        { province: '江苏省' },
        { province: '四川省' },
        { province: '福建省' },
        { province: '陕西省' },
        { province: '湖北省' },
        { province: '广东省' },
      ];

      // 定义容器尺寸
      const margin = { top: 40, right: 20, bottom: 40, left: 60 };
      const container = d3.select('.line-chart-container');
      const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
      const height = container.node().getBoundingClientRect().height - margin.top - margin.bottom;
      // 创建SVG容器
      const svg = d3.select('.line-chart')
        .append('svg')
        .attr('width', '100%') // 使用百分比宽度
        .attr('height', '100%') // 使用百分比高度
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);
      // 动态设置横轴比例尺（省份）
      const xScale = d3.scaleBand()
        .domain(data.map(d => d.province))
        .range([0, width])
        .padding(0.1);
      // 动态设置纵轴比例尺（年份）    
      const yScale = d3.scaleLinear()
        .domain([2018, 2022]) // 设置纵轴范围
        .nice()
        .range([height, 0]);
      // 创建横轴
      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text") // 选择所有的文本标签
        .attr("dy", "2.5em"); // 调整垂直偏移 
      svg.select('.x-axis path').attr('display', 'none');  // 隐藏横轴的线
      svg.selectAll('.tick line').attr('display', 'none'); // 隐藏刻度线
      // 创建纵轴
      svg.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format('d')))
        .selectAll("text") // 选择所有的文本标签
        .attr("dx", "-1em"); // 调整偏移

      // 安徽省的圆
      const data1 = [
        { province: '安徽省', year: 2018, radius: 12.772, value: 134922.00 },
        { province: '安徽省', year: 2019, radius: 12.820, value: 137094.00 },
        { province: '安徽省', year: 2020, radius: 12.860, value: 138900.00 },
        { province: '安徽省', year: 2021, radius: 12.938, value: 142413.00 },
        { province: '安徽省', year: 2022, radius: 33.198, value: 154100.00 },
      ];
      // 湖南省的圆
      const data2 = [
        { province: '湖南省', year: 2018, radius: 14.523, value: 213626.00 },
        { province: '湖南省', year: 2019, radius: 14.735, value: 223111.00 },
        { province: '湖南省', year: 2020, radius: 15.129, value: 240826.00 },
        { province: '湖南省', year: 2021, radius: 15.339, value: 250253.00 },
        { province: '湖南省', year: 2022, radius: 15.278, value: 247542.00 },
      ];
      // 浙江省的圆
      const data3 = [
        { province: '浙江省', year: 2018, radius: 13.909, value: 186000.00 },
        { province: '浙江省', year: 2019, radius: 13.799, value: 181096.00 },
        { province: '浙江省', year: 2020, radius: 13.955, value: 188100.00 },
        { province: '浙江省', year: 2021, radius: 14.116, value: 195300.00 },
        { province: '浙江省', year: 2022, radius: 14.075, value: 193500.00 },
      ];
      // 贵州省的圆
      const data4 = [
        { province: '贵州省', year: 2018, radius: 14.205, value: 199327.00 },
        { province: '贵州省', year: 2019, radius: 16.135, value: 286046.00 },
        { province: '贵州省', year: 2020, radius: 18.352, value: 385636.00 },
        { province: '贵州省', year: 2021, radius: 17.448, value: 345017.00 },
        { province: '贵州省', year: 2022, radius: 17.444, value: 344857.00 },
      ];
      // 云南省的圆
      const data5 = [
        { province: '云南省', year: 2018, radius: 18.629, value: 398100.00 },
        { province: '云南省', year: 2019, radius: 18.671, value: 399957.00 },
        { province: '云南省', year: 2020, radius: 18.868, value: 408824.00 },
        { province: '云南省', year: 2021, radius: 18.227, value: 380023.00 },
        { province: '云南省', year: 2022, radius: 19.404, value: 432904.09 },
      ];

      // 广西省的圆
      const data6 = [
        { province: '广西省', year: 2018, radius: 11.393, value: 73000.00 },
        { province: '广西省', year: 2019, radius: 11.734, value: 88312.00 },
        { province: '广西省', year: 2020, radius: 11.654, value: 84696.00 },
        { province: '广西省', year: 2021, radius: 12.057, value: 102800.00 },
        { province: '广西省', year: 2022, radius: 12.669, value: 130300.00 },
      ];
      // 江苏省的圆
      const data7 = [
        { province: '江苏省', year: 2018, radius: 10.093, value: 14558.00 },
        { province: '江苏省', year: 2019, radius: 10.110, value: 15352.00 },
        { province: '江苏省', year: 2020, radius: 10.036, value: 12000.00 },
        { province: '江苏省', year: 2021, radius: 10.007, value: 10703.00 },
        { province: '江苏省', year: 2022, radius: 10, value: 10400.00 },
      ];

      // 四川省的圆
      const data8 = [
        { province: '四川省', year: 2018, radius: 16.335, value: 295000.00 },
        { province: '四川省', year: 2019, radius: 16.467, value: 300951.00 },
        { province: '四川省', year: 2020, radius: 16.787, value: 315343.00 },
        { province: '四川省', year: 2021, radius: 17.559, value: 350000.00 },
        { province: '四川省', year: 2022, radius: 17.921, value: 366292.67 },
      ];
      // 福建省的圆
      const data9 = [
        { province: '福建省', year: 2018, radius: 18.708, value: 401620.00 },
        { province: '福建省', year: 2019, radius: 18.939, value: 412000.00 },
        { province: '福建省', year: 2020, radius: 19.075, value: 418131.00 },
        { province: '福建省', year: 2021, radius: 19.795, value: 450469.83 },
        { province: '福建省', year: 2022, radius: 20, value: 459674.38 },
      ];
      // 陕西省的圆
      const data10 = [
        { province: '陕西省', year: 2018, radius: 11.406, value: 73547.00 },
        { province: '陕西省', year: 2019, radius: 11.809, value: 91683.00 },
        { province: '陕西省', year: 2020, radius: 11.838, value: 92996.00 },
        { province: '陕西省', year: 2021, radius: 11.934, value: 97297.16 },
        { province: '陕西省', year: 2022, radius: 12.433, value: 119689.49 },
      ];

      // 湖北省的圆
      const data11 = [
        { province: '湖北省', year: 2018, radius: 16.768, value: 314453.00 },
        { province: '湖北省', year: 2019, radius: 17.234, value: 335400.00 },
        { province: '湖北省', year: 2020, radius: 17.572, value: 350571.00 },
        { province: '湖北省', year: 2021, radius: 18.316, value: 384000.00 },
        { province: '湖北省', year: 2022, radius: 16.769, value: 314515.25 },
      ];
      // 广东省的圆
      const data12 = [
        { province: '广东省', year: 2018, radius: 11.916, value: 96459.00 },
        { province: '广东省', year: 2019, radius: 12.072, value: 103496.00 },
        { province: '广东省', year: 2020, radius: 12.350, value: 116000.00 },
        { province: '广东省', year: 2021, radius: 12.182, value: 108443.04 },
        { province: '广东省', year: 2022, radius: 13.063, value: 148000.00 },
      ];
      const combinedData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12]
      function drawCircles(data, xScale, yScale, circleColor) {

        // 选择现有的circles组
        let circleGroup = svg.select('.circles');

        // 如果circles组不存在，创建它
        if (circleGroup.empty()) {
          circleGroup = svg.append('g')
            .attr('class', 'circles');
        }

        const newCircleGroup = circleGroup.selectAll('.circle')
          .data(data)
          .enter()
          .append('g')
          .attr('transform', (d) => `translate(${xScale(d.province) + xScale.bandwidth() / 2},${yScale(d.year)})`);

        newCircleGroup.append('circle')
          .attr('r', (d) => d.radius)
          .style('fill', circleColor)
          .style('opacity', 0.5)
          .style('cursor', 'pointer') // 设置鼠标指针样式为可点击
          .on('mouseover', function (event, d) {
            // 使圆稍微变大和颜色稍微变浅
            d3.select(this)
              .transition()
              .duration(200)
              .attr('r', (d) => d.radius + 2)
              .style('fill', d3.rgb(circleColor).brighter(0.5));
          })
          .on('mousemove', function (event, d) {
            const tooltip = d3.select('.tooltip');
            tooltip.html(`产量&nbsp&nbsp${d.value}`);
            const xOffset = -60;
            const yOffset = 20;
            let left = event.pageX;  // IE8不支持
            let top = event.pageY;
            tooltip.style('display', 'block');
            tooltip.style('left', left + xOffset + 'px');
            tooltip.style('top', top + yOffset + 'px');
            tooltip.style('box-shadow', circleColor)
          })
          .on('mouseout', function () {
            // 当鼠标离开圆时，隐藏提示框和还原圆的大小和颜色
            d3.select('.tooltip').style('display', 'none');
            d3.select(this)
              .transition()
              .duration(200)
              .attr('r', (d) => d.radius)
              .style('fill', circleColor);
          });
      }
      window.addEventListener('resize', () => {
        const newWidth = container.node().getBoundingClientRect().width - margin.left - margin.right;
        const newHeight = container.node().getBoundingClientRect().height - margin.top - margin.bottom;

        xScale.range([0, newWidth]);
        yScale.range([newHeight, 0]);

        svg.select('.x-axis')
          .attr('transform', `translate(0, ${newHeight})`)
          .call(d3.axisBottom(xScale));

        svg.select('.y-axis')
          .call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format('d')));

        // 清除现有的圆
        svg.selectAll('.circles').remove();

        // 重新计算并更新圆的位置
        drawCircles(data1, xScale, yScale, 'red');
        drawCircles(data2, xScale, yScale, 'navy');
        drawCircles(data3, xScale, yScale, 'steelblue');
        drawCircles(data4, xScale, yScale, 'blue');
        drawCircles(data5, xScale, yScale, 'green');
        drawCircles(data6, xScale, yScale, 'orange');
        drawCircles(data7, xScale, yScale, 'purple');
        drawCircles(data8, xScale, yScale, 'pink');
        drawCircles(data9, xScale, yScale, 'brown');
        drawCircles(data10, xScale, yScale, 'teal');
        drawCircles(data11, xScale, yScale, 'gold');
        drawCircles(data12, xScale, yScale, 'olive');

      });
      window.dispatchEvent(new Event('resize'));
      //图像自适应svg容器
      const line = d3.line()
        .x(d => xScale(d.province))
        .y(d => yScale(d.value));

      const path = svg.append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line);

      window.addEventListener('resize', () => {
        const newWidth = container.node().getBoundingClientRect().width - margin.left - margin.right;
        const newHeight = container.node().getBoundingClientRect().height - margin.top - margin.bottom;

        xScale.range([0, newWidth]);
        yScale.range([newHeight, 0]);

        svg.select('.x-axis')
          .attr('transform', `translate(0, ${newHeight})`)
          .call(d3.axisBottom(xScale));

        svg.select('.y-axis')
          .call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format('d')));

        path.attr('d', line);

      });

      window.dispatchEvent(new Event('resize'));

    },

  },

  mounted() {
    this.drawLineChart();
  }
};
</script>



  
<style scoped>
.line-chart-container {
  float: right;
  text-align: center;
  width: 80%;
  height: calc(58.5vh - 72px);
}

.line-chart {
  width: 100%;
  height: 100%;
}

/* 鼠标悬停在可点击元素上时改变背景颜色和样式 */
.circle:hover {
  fill: lightsteelblue;
  /* 使颜色稍微变浅 */
  cursor: pointer;
  /* 设置鼠标指针样式为可点击 */
}

.tooltip {
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  pointer-events: none;
  display: none;
  z-index: 999;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Arial, sans-serif';
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
</style>