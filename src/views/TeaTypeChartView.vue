<template>
  <div class="tea-type">

    <div style="display: flex;justify-content: space-between;align-items: center;">
      <p
        style="background-color: antiquewhite ;border: 1px solid #ccc;padding: 10px 20px;margin-left: 10px;margin-top: 10px;">
        各类茶数据表</p>
      <div class="tabs">
        <div class="tab" :class="{ 'active': selectedTab === 1 }" @click="selectTab(1)">产量</div>
        <div class="tab" :class="{ 'active': selectedTab === 2 }" @click="selectTab(2)">产值</div>
      </div>
    </div>
    
    <div class="line-chart-container" v-show="selectedTab === 1">
      <div class="line-chart"></div>
    </div>

    <div class="line-chart-container"  v-show="selectedTab === 2">
      <div  class="line-chart"></div>
    </div>
    
  </div>
  
</template>

<script>
import * as d3 from 'd3';

export default {
  data() {
    return {
      selectedTab: 1,
    };
  },
  methods: {
    selectTab(tabNumber) {
      this.selectedTab = tabNumber;
    },
    drawLineChart() {

      // 数据：12个省份和5个年份的示例数据
      const data = [
        { province: '省份1', year: 2018, value: 100 },
        { province: '省份2', year: 2018, value: 120 },
        { province: '省份3', year: 2018, value: 150 },
        { province: '省份4', year: 2018, value: 80 },
        { province: '省份5', year: 2018, value: 110 },
        { province: '省份6', year: 2018, value: 100 },
        { province: '省份7', year: 2018, value: 120 },
        { province: '省份8', year: 2018, value: 150 },
        { province: '省份9', year: 2018, value: 80 },
        { province: '省份10', year: 2018, value: 110 },
        { province: '省份11', year: 2018, value: 80 },
        { province: '省份12', year: 2018, value: 110 },
      ];
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
        .call(d3.axisBottom(xScale));
      // 创建纵轴
      svg.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format('d')));
      // 2018年的圆
      const data1 = [
        { province: '省份1', year: 2018, radius: 20 },
        { province: '省份2', year: 2018, radius: 15 },
        { province: '省份3', year: 2018, radius: 30 },
        { province: '省份4', year: 2018, radius: 15 },
        { province: '省份5', year: 2018, radius: 20 },
        { province: '省份6', year: 2018, radius: 15 },
        { province: '省份7', year: 2018, radius: 20 },
        { province: '省份8', year: 2018, radius: 15 },
        { province: '省份9', year: 2018, radius: 15 },
        { province: '省份10', year: 2018, radius: 20 },
        { province: '省份11', year: 2018, radius: 15 },
        { province: '省份12', year: 2018, radius: 15 },
      ];
      const data2 = [
        { province: '省份1', year: 2019, radius: 20 },
        { province: '省份2', year: 2019, radius: 15 },
        { province: '省份3', year: 2019, radius: 30 },
        { province: '省份4', year: 2019, radius: 15 },
        { province: '省份5', year: 2019, radius: 20 },
        { province: '省份6', year: 2019, radius: 15 },
        { province: '省份7', year: 2019, radius: 20 },
        { province: '省份8', year: 2019, radius: 15 },
        { province: '省份9', year: 2019, radius: 15 },
        { province: '省份10', year: 2019, radius: 20 },
        { province: '省份11', year: 2019, radius: 15 },
        { province: '省份12', year: 2019, radius: 15 },
      ];
      const data3 = [
        { province: '省份1', year: 2020, radius: 20 },
        { province: '省份2', year: 2020, radius: 15 },
        { province: '省份3', year: 2020, radius: 30 },
        { province: '省份4', year: 2020, radius: 15 },
        { province: '省份5', year: 2020, radius: 20 },
        { province: '省份6', year: 2020, radius: 15 },
        { province: '省份7', year: 2020, radius: 20 },
        { province: '省份8', year: 2020, radius: 15 },
        { province: '省份9', year: 2020, radius: 15 },
        { province: '省份10', year: 2020, radius: 20 },
        { province: '省份11', year: 2020, radius: 15 },
        { province: '省份12', year: 2020, radius: 15 },
      ];
      const data4 = [
        { province: '省份1', year: 2021, radius: 20 },
        { province: '省份2', year: 2021, radius: 15 },
        { province: '省份3', year: 2021, radius: 30 },
        { province: '省份4', year: 2021, radius: 15 },
        { province: '省份5', year: 2021, radius: 20 },
        { province: '省份6', year: 2021, radius: 15 },
        { province: '省份7', year: 2021, radius: 20 },
        { province: '省份8', year: 2021, radius: 15 },
        { province: '省份9', year: 2021, radius: 15 },
        { province: '省份10', year: 2021, radius: 20 },
        { province: '省份11', year: 2021, radius: 15 },
        { province: '省份12', year: 2021, radius: 15 },
      ];
      const data5 = [
        { province: '省份1', year: 2022, radius: 20 },
        { province: '省份2', year: 2022, radius: 15 },
        { province: '省份3', year: 2022, radius: 30 },
        { province: '省份4', year: 2022, radius: 15 },
        { province: '省份5', year: 2022, radius: 20 },
        { province: '省份6', year: 2022, radius: 15 },
        { province: '省份7', year: 2022, radius: 20 },
        { province: '省份8', year: 2022, radius: 15 },
        { province: '省份9', year: 2022, radius: 15 },
        { province: '省份10', year: 2022, radius: 20 },
        { province: '省份11', year: 2022, radius: 15 },
        { province: '省份12', year: 2022, radius: 15 },
      ];
      const combinedData = [...data1, ...data2, ...data3, ...data4, ...data5]
      function drawCircles(data, xScale, yScale) {
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
          .style('fill', 'steelblue')
          .style('opacity', 0.5);
      }

      // 创建圆
      drawCircles(combinedData, xScale, yScale);
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
        drawCircles(data1, xScale, yScale);
        drawCircles(data2, xScale, yScale);
        drawCircles(data3, xScale, yScale);
        drawCircles(data4, xScale, yScale);
        drawCircles(data5, xScale, yScale);
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

.tabs {
  padding: 10px 10px 0 0;
  text-align: right;
}

.tab {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #cccccc;
}

.tab.active {
  background-color: #eeeeee60;
}

.content {
  display: none;
  border: 1px solid #ccc;
  border-top: none;
  padding: 20px;
}

.content.show {
  display: block;
}
</style>
