<template>
  <div class="line-chart-container">
    <div class="line-chart"></div>
    <div class="tooltip" style="display: none;"></div>
  </div>
</template>
    
<script>
import * as d3 from 'd3';
export default {

  methods: {

    drawLineChart() {

      // 数据：12个省份和5个年份的示例数据
      const data = [
        { province: '安徽省'},
        { province: '湖南省'},
        { province: '浙江省'},
        { province: '贵州省'},
        { province: '云南省'},
        { province: '广西省'},
        { province: '江苏省'},
        { province: '四川省'},
        { province: '福建省'},
        { province: '陕西省'},
        { province: '湖北省'},
        { province: '广东省'},
      ];
// 现在，scaledRadii 中的值具有一定差异，可以用它们作为圆的半径
      // 定义容器尺寸
      const margin = { top: 20, right: 20, bottom: 40, left: 60 };
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
      // 创建纵轴
      svg.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format('d')))
        .selectAll("text") // 选择所有的文本标签
        .attr("dx", "-1em"); // 调整偏移
 // 安徽省的圆
 const data1 = [
        { province: '安徽省', year: 2018, radius: 10, value: 118.02 },
        { province: '安徽省', year: 2019, radius: 14.255, value: 145.50 },
        { province: '安徽省', year: 2020, radius: 14.359, value: 146.17 },
        { province: '安徽省', year: 2021, radius: 18.936, value: 175.73 },
        { province: '安徽省', year: 2022, radius: 20, value: 182.60 },
      ];
      // 湖南省的圆
      const data2 = [
        { province: '湖南省', year: 2018, radius: 20, value: 186.17 },
        { province: '湖南省', year: 2019, radius: 10, value: 146.85 },
        { province: '湖南省', year: 2020, radius: 12.904, value: 158.27 },
        { province: '湖南省', year: 2021, radius: 16.287, value: 171.57 },
        { province: '湖南省', year: 2022, radius: 17.670, value: 177.01 },
      ];
      // 浙江省的圆
      const data3 = [
        { province: '浙江省', year: 2018, radius: 10, value: 206.25 },
        { province: '浙江省', year: 2019, radius: 13.201, value: 224.74 },
        { province: '浙江省', year: 2020, radius: 15.602, value: 238.60 },
        { province: '浙江省', year: 2021, radius: 19.158, value: 259.14 },
        { province: '浙江省', year: 2022, radius: 20, value: 264.00 },
      ];
      // 贵州省的圆
      const data4 = [
        { province: '贵州省', year: 2018, radius: 10, value: 281.00 },
        { province: '贵州省', year: 2019, radius: 11.883, value: 321.86 },
        { province: '贵州省', year: 2020, radius: 15.753, value: 405.84 },
        { province: '贵州省', year: 2021, radius: 16.157, value: 414.60 },
        { province: '贵州省', year: 2022, radius: 20, value: 498.00 },
      ];
      // 云南省的圆
      const data5 = [
        { province: '云南省', year: 2018, radius: 10, value: 164.61 },
        { province: '云南省', year: 2019, radius: 14.964, value: 198.17 },
        { province: '云南省', year: 2020, radius: 15.953, value: 204.85 },
        { province: '云南省', year: 2021, radius: 15.549, value: 202.12 },
        { province: '云南省', year: 2022, radius: 20, value: 232.21 },
      ];

      // 广西省的圆
      const data6 = [
        { province: '广西省', year: 2018, radius: 10, value: 56.97 },
        { province: '广西省', year: 2019, radius: 11.678, value: 68.33 },
        { province: '广西省', year: 2020, radius: 13.810, value: 82.76 },
        { province: '广西省', year: 2021, radius: 16.106, value: 98.30 },
        { province: '广西省', year: 2022, radius: 20, value: 124.66 },
      ];
      // 江苏省的圆
      const data7 = [
        { province: '江苏省', year: 2018, radius: 10, value: 26.22 },
        { province: '江苏省', year: 2019, radius: 12.096, value: 27.66 },
        { province: '江苏省', year: 2020, radius: 14.396, value: 29.24 },
        { province: '江苏省', year: 2021, radius: 20, value: 33.09 },
        { province: '江苏省', year: 2022, radius: 19.491, value: 32.74  },
      ];

      // 四川省的圆
      const data8 = [
        { province: '四川省', year: 2018, radius: 10, value: 246.04 },
        { province: '四川省', year: 2019, radius: 12.778, value: 279.69 },
        { province: '四川省', year: 2020, radius: 13.222, value: 285.07 },
        { province: '四川省', year: 2021, radius: 17.343, value:335.00  },
        { province: '四川省', year: 2022, radius: 20, value: 367.19 },
      ];
      // 福建省的圆
      const data9 = [
        { province: '福建省', year: 2018, radius: 10, value: 257.36 },
        { province: '福建省', year: 2019, radius: 17.643, value: 297.27 },
        { province: '福建省', year: 2020, radius: 16.331, value: 290.42 },
        { province: '福建省', year: 2021, radius: 17.805, value: 298.12 },
        { province: '福建省', year: 2022, radius: 20, value: 309.58 },
      ];
      // 陕西省的圆
      const data10 = [
        { province: '陕西省', year: 2018, radius: 10, value: 140.55 },
        { province: '陕西省', year: 2019, radius: 13.108, value: 162.96 },
        { province: '陕西省', year: 2020, radius: 13.143, value: 163.21 },
        { province: '陕西省', year: 2021, radius: 17.735, value: 196.32 },
        { province: '陕西省', year: 2022, radius: 20, value: 212.65 },
      ];

      // 湖北省的圆
      const data11 = [
        { province: '湖北省', year: 2018, radius: 10, value: 145.96 },
        { province: '湖北省', year: 2019, radius: 11.518, value: 157.49 },
        { province: '湖北省', year: 2020, radius: 15.535, value: 188 },
        { province: '湖北省', year: 2021, radius: 20, value: 221.91 },
        { province: '湖北省', year: 2022, radius: 19.392, value: 217.29 },
      ];
      // 广东省的圆
      const data12 = [
        { province: '广东省', year: 2018, radius: 10, value: 44.34 },
        { province: '广东省', year: 2019, radius: 14.500, value: 105.00 },
        { province: '广东省', year: 2020, radius: 18.120, value: 153.79 },
        { province: '广东省', year: 2021, radius: 18.343, value: 156.80 },
        { province: '广东省', year: 2022, radius: 20, value: 179.13},
      ];
      const combinedData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12]
      function drawCircles(data, xScale, yScale ,circleColor) {
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
            const tooltip = d3.select('.tooltip');
            tooltip.html(`产量&nbsp&nbsp&nbsp&nbsp${d.value}`);
            const xOffset = 10; // Adjust this value to control the horizontal distance from the cursor
            const yOffset = 10; // Adjust this value to control the vertical distance from the cursor

            tooltip.style('left', event.pageX + xOffset + 'px');
            tooltip.style('top', event.pageY + yOffset + 'px');
            tooltip.style('display', 'block');

            d3.select(this)
              .transition()
              .duration(200)
              .attr('r', (d) => d.radius + 2)
              .style('fill', d3.rgb(circleColor).brighter(0.5));
            // 使圆稍微变大和颜色稍微变浅
            d3.select(this)
              .transition()
              .duration(200)
              .attr('r', (d) => d.radius + 2)
              .style('fill', d3.rgb(circleColor).brighter(0.5));
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
        drawCircles(data1, xScale, yScale ,'red');
        drawCircles(data2, xScale, yScale ,'navy');
        drawCircles(data3, xScale, yScale,'steelblue');
        drawCircles(data4, xScale, yScale,'blue');
        drawCircles(data5, xScale, yScale,'green');
        drawCircles(data6, xScale, yScale,'orange');
        drawCircles(data7, xScale, yScale,'purple');
        drawCircles(data8, xScale, yScale,'pink');
        drawCircles(data9, xScale, yScale,'brown');
        drawCircles(data10, xScale, yScale,'teal');
        drawCircles(data11, xScale, yScale,'gold');
        drawCircles(data12, xScale, yScale,'olive');
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
  text-align: center;
  width: 100%;
  height: calc(50vh - 72px);
}

.line-chart {
  width: 100%;
  height: 100%;
}
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