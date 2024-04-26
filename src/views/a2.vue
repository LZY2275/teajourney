<template>
  <div style="display: flex;">

    <div style="width:21% ;">

      <div class="left-content">
        <p class="text top-left"><br>观察右图可知，各个省份的产值<br>在2018—2022这个时间段内很接近，<br>但各省份之间的产值却存在差异，<br>比如贵州、四川和福建的产值较多，<br>
        </p>
        <p class="text bottom-right">
          而江苏、广东和广西省的产值较少。<br>产值最高的贵州省，在2022年达到<br>最高值498亿元，<br>产值最少的江苏省，在2018年达到<br>最低值26.22亿元。<br> &nbsp;</p>
      </div>
      <div v-show="currentProvince == ''"  class="empty-box">Tips:<br>点击“茶园面积图”中的省份查看近几年的产量产销变化图。<br>点击右上角的产量产值以实现数据切换~</div>
      <canvas ref="lineChart" width="450" height="300" style="margin-top: -7vh;"></canvas>

    </div>
    <div class="line-chart-container">
      <div class="line-chart"></div>
      <div class="tooltip" style="display: none;"></div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import Chart from 'chart.js/auto';
import { EventBus } from '../EventBus.js';
export default {
  data() {
    return {
      currentProvince:'',
      value: '',
      lineChart: null,
      guangdongData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Guangdong Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [44.34, 105, 153.79, 156.8, 179.13]
        }]
      },
      anhuiData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Anhui Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [118.02, 145.5, 146.17, 175.73, 182.6]
        }]
      },
      hunanData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Hunan Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [186.17, 146.85, 158.27, 171.57, 1770.1]
        }]
      },
      zhejiangData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Zhejiang Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [206.25, 224.74, 238.6, 259.14, 264]
        }]
      },
      guizhouData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Guizhou Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [281, 321.86, 405.84, 414.6, 498]
        }]
      },
      yunnanData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Yunnan Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [164.61, 198.17, 204.85, 202.12, 232.21]
        }]
      },
      guangxiData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Guangxi Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [56.97, 68.33, 82.76, 98.3, 124.66]
        }]
      },
      jiangsuData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Jiangsu Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [26.22, 27.66, 29.24, 33.09, 32.74]
        }]
      },
      sichuanData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Sichuan Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [246.04, 279.69, 285.07, 335, 367.19]
        }]
      },
      fujianData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Fujian Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [257.36, 297.27, 290.42, 298.12, 309.58]
        }]
      },
      shanxiData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Shanxi Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [140.55, 162.96, 163.21, 196.32, 212.65]
        }]
      },
      hubeiData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Hubei Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [145.96, 157.49, 188, 221.91, 217.29]
        }]
      }
    }
  },
  created() {
    if (EventBus) {
      EventBus.$on('message-received', (message) => {
        this.value = message
        console.log(this.value);
      });
    }
  },
  watch: {
    value(newValue) {
      this.renderLineChart(newValue);
    }
  },
  methods: {
    renderLineChart(newValue) {
      let chartData = null;
      if (newValue === '粤') {
        chartData = this.guangdongData;
        chartData.datasets[0].label = '广东省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '皖') {
        chartData = this.anhuiData;
        chartData.datasets[0].label = '安徽省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '湘') {
        chartData = this.hunanData;
        chartData.datasets[0].label = '湖南省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '浙') {
        chartData = this.zhejiangData;
        chartData.datasets[0].label = '浙江省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '黔') {
        chartData = this.guizhouData;
        chartData.datasets[0].label = '贵州省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '滇') {
        chartData = this.yunnanData;
        chartData.datasets[0].label = '云南省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '桂') {
        chartData = this.guangxiData;
        chartData.datasets[0].label = '广西省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '苏') {
        chartData = this.jiangsuData;
        chartData.datasets[0].label = '江苏省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '川') {
        chartData = this.sichuanData;
        chartData.datasets[0].label = '四川省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '闽') {
        chartData = this.fujianData;
        chartData.datasets[0].label = '福建省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '陕') {
        chartData = this.shanxiData;
        chartData.datasets[0].label = '陕西省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (newValue === '鄂') {
        chartData = this.hubeiData;
        chartData.datasets[0].label = '湖北省近几年产值（亿元）';
        this.currentProvince = newValue;
      }
      if (this.lineChart) {
        // 如果图表已经存在，则销毁之前的图表
        this.lineChart.destroy();
      }
      this.lineChart = new Chart(this.$refs.lineChart.getContext('2d'), {
        type: 'line',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              intersect: false, // 设置为false以在x轴方向上悬停时显示标签
              mode: 'index' // 设置为'index'以在x轴方向上悬停时显示所有数据点的标签
            }
          }
        }
      });
    },
    drawLineChart() {

      // 数据：12个省份和5个年份的示例数据
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
      const margin = { top: 40, right: 20, bottom: 60, left: 60 };
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
        .attr("dy", "3.5em") // 调整垂直偏移 
        .style('font-size', '12px')

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
        { province: '安徽省', year: 2018, radius: 14.865, value: 118.02 },
        { province: '安徽省', year: 2019, radius: 16.321, value: 145.50 },
        { province: '安徽省', year: 2020, radius: 16.356, value: 146.17 },
        { province: '安徽省', year: 2021, radius: 17.923, value: 175.73 },
        { province: '安徽省', year: 2022, radius: 18.287, value: 182.60 },
      ];
      // 湖南省的圆
      const data2 = [
        { province: '湖南省', year: 2018, radius: 18.476, value: 186.17 },
        { province: '湖南省', year: 2019, radius: 16.392, value: 146.85 },
        { province: '湖南省', year: 2020, radius: 16.997, value: 158.27 },
        { province: '湖南省', year: 2021, radius: 17.702, value: 171.57 },
        { province: '湖南省', year: 2022, radius: 17.990, value: 177.01 },
      ];
      // 浙江省的圆
      const data3 = [
        { province: '浙江省', year: 2018, radius: 19.540, value: 206.25 },
        { province: '浙江省', year: 2019, radius: 20.520, value: 224.74 },
        { province: '浙江省', year: 2020, radius: 21.254, value: 238.60 },
        { province: '浙江省', year: 2021, radius: 22.343, value: 259.14 },
        { province: '浙江省', year: 2022, radius: 22.600, value: 264.00 },
      ];
      // 贵州省的圆
      const data4 = [
        { province: '贵州省', year: 2018, radius: 23.501, value: 281.00 },
        { province: '贵州省', year: 2019, radius: 25.666, value: 321.86 },
        { province: '贵州省', year: 2020, radius: 30.116, value: 405.84 },
        { province: '贵州省', year: 2021, radius: 30.581, value: 414.60 },
        { province: '贵州省', year: 2022, radius: 34, value: 498.00 },
      ];
      // 云南省的圆
      const data5 = [
        { province: '云南省', year: 2018, radius: 17.333, value: 164.61 },
        { province: '云南省', year: 2019, radius: 19.112, value: 198.17 },
        { province: '云南省', year: 2020, radius: 19.466, value: 204.85 },
        { province: '云南省', year: 2021, radius: 19.321, value: 202.12 },
        { province: '云南省', year: 2022, radius: 20.916, value: 232.21 },
      ];

      // 广西省的圆
      const data6 = [
        { province: '广西省', year: 2018, radius: 11.629, value: 56.97 },
        { province: '广西省', year: 2019, radius: 12.231, value: 68.33 },
        { province: '广西省', year: 2020, radius: 12.996, value: 82.76 },
        { province: '广西省', year: 2021, radius: 13.820, value: 98.30 },
        { province: '广西省', year: 2022, radius: 15.216, value: 124.66 },
      ];
      // 江苏省的圆
      const data7 = [
        { province: '江苏省', year: 2018, radius: 10, value: 26.22 },
        { province: '江苏省', year: 2019, radius: 10.076, value: 27.66 },
        { province: '江苏省', year: 2020, radius: 10.160, value: 29.24 },
        { province: '江苏省', year: 2021, radius: 10.364, value: 33.09 },
        { province: '江苏省', year: 2022, radius: 10.346, value: 32.74 },
      ];

      // 四川省的圆
      const data8 = [
        { province: '四川省', year: 2018, radius: 21.648, value: 246.04 },
        { province: '四川省', year: 2019, radius: 23.432, value: 279.69 },
        { province: '四川省', year: 2020, radius: 23.717, value: 285.07 },
        { province: '四川省', year: 2021, radius: 26.362, value: 335.00 },
        { province: '四川省', year: 2022, radius: 28.068, value: 367.19 },
      ];
      // 福建省的圆
      const data9 = [
        { province: '福建省', year: 2018, radius: 22.248, value: 257.36 },
        { province: '福建省', year: 2019, radius: 24.363, value: 297.27 },
        { province: '福建省', year: 2020, radius: 24.000, value: 290.42 },
        { province: '福建省', year: 2021, radius: 24.408, value: 298.12 },
        { province: '福建省', year: 2022, radius: 25.015, value: 309.58 },
      ];
      // 陕西省的圆
      const data10 = [
        { province: '陕西省', year: 2018, radius: 16.058, value: 140.55 },
        { province: '陕西省', year: 2019, radius: 17.246, value: 162.96 },
        { province: '陕西省', year: 2020, radius: 17.259, value: 163.21 },
        { province: '陕西省', year: 2021, radius: 19.014, value: 196.32 },
        { province: '陕西省', year: 2022, radius: 19.879, value: 212.65 },
      ];

      // 湖北省的圆
      const data11 = [
        { province: '湖北省', year: 2018, radius: 16.345, value: 145.96 },
        { province: '湖北省', year: 2019, radius: 16.956, value: 157.49 },
        { province: '湖北省', year: 2020, radius: 18.573, value: 188 },
        { province: '湖北省', year: 2021, radius: 20.370, value: 221.91 },
        { province: '湖北省', year: 2022, radius: 20.125, value: 217.29 },
      ];
      // 广东省的圆
      const data12 = [
        { province: '广东省', year: 2018, radius: 10.960, value: 44.34 },
        { province: '广东省', year: 2019, radius: 14.175, value: 105.00 },
        { province: '广东省', year: 2020, radius: 16.760, value: 153.79 },
        { province: '广东省', year: 2021, radius: 16.920, value: 156.80 },
        { province: '广东省', year: 2022, radius: 18.103, value: 179.13 },
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
          .style('fill', circleColor + '80')
          .style('stroke', circleColor)  // 设置边界颜色
          .style('stroke-width', 2) // 设置边界宽度
          .style('cursor', 'pointer') // 设置鼠标指针样式为可点击
          .on('mouseover', function (event, d) {
            // 使圆稍微变大和颜色稍微变浅
            d3.select(this)
              .transition()
              .duration(200)
              .attr('r', (d) => d.radius + 2)
              .style('fill', d3.rgb(circleColor + '80').brighter(0.5));
          })
          .on('mousemove', function (event, d) {
            const tooltip = d3.select('.tooltip');
            tooltip.html(`产值&nbsp&nbsp${d.value}`);
            const xOffset = -60;
            const yOffset = 20;
            let left = event.pageX;  // IE8不支持
            let top = event.pageY;
            tooltip.style('display', 'block');
            tooltip.style('left', left + xOffset + 'px');
            tooltip.style('top', top + yOffset + 'px');
          })
          .on('mouseout', function () {
            // 当鼠标离开圆时，隐藏提示框和还原圆的大小和颜色
            d3.select('.tooltip').style('display', 'none');
            d3.select(this)
              .transition()
              .duration(200)
              .attr('r', (d) => d.radius)
              .style('fill', circleColor + '80');
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
        drawCircles(data1, xScale, yScale, '#ed657f');
        drawCircles(data2, xScale, yScale, '#2d2d2d');
        drawCircles(data3, xScale, yScale, '#353880');
        drawCircles(data4, xScale, yScale, '#e57b3f');
        drawCircles(data5, xScale, yScale, '#32846e');
        drawCircles(data6, xScale, yScale, '#be1224');
        drawCircles(data7, xScale, yScale, '#5865b1');
        drawCircles(data8, xScale, yScale, '#289ac7');
        drawCircles(data9, xScale, yScale, '#f7b527');
        drawCircles(data10, xScale, yScale, '#cacdea');
        drawCircles(data11, xScale, yScale, '#ec2f20');
        drawCircles(data12, xScale, yScale, '#81c3aa');
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

.left-content {
  left: 0;
  top: 0;
  bottom: 0;
  padding: 10px;
  height: 60%;
}

.text {
  font-weight: bold;
  /* 设置文字加粗 */
  font-size: 13px;
  position: relative;
  color: rgba(2, 2, 2, 0.5);
  /* 设置文字颜色，确保在图片上能清晰显示 */
  z-index: 1;
  /* 设置文字的 z-index 值较高 */
  background: radial-gradient(circle, #ebe8c0, #FFFEF2);
  /* 设置背景渐变色，从中心到外逐渐变浅 */
  padding: 2px;
  /* 调整文字与拐角的间距 */
}

.text::before,
.text::after {
  content: '';
  position: absolute;
  background-color: #c5bc3b;
  /* 设置拐角线的颜色 */
  border: 1px solid #c5bc3b;
  /* 使用 border 属性并设置宽度和颜色 */
}

.text.top-left::before {

  width: 1px;
  /* 设置竖线的宽度 */
  height: 20%;
  /* 设置竖线的高度 */
  left: 0;
  top: 0;
}

.text.top-left::after {
  width: 10%;
  /* 设置横线的宽度 */
  height: 1px;
  /* 设置横线的高度 */
  left: 0;
  top: 0;
}

.text.bottom-right::before {
  width: 1px;
  /* 设置竖线的宽度 */
  height: 20%;
  /* 设置竖线的高度 */
  right: 0;
  bottom: 0;
}

.text.bottom-right::after {
  width: 10%;
  /* 设置横线的宽度 */
  height: 1px;
  /* 设置横线的高度 */
  right: 0;
  bottom: 0;
}

.images {
  display: flex;
  justify-content: space-between;
  height: 14vh;
  padding: 10px;
}

.images img {
  width: 45%;
  /* 调整图片宽度 */
  border-radius: 8px;
  /* 添加图片的圆角效果 */
  transition: transform 0.3s, box-shadow 0.3s;
  /* 添加过渡效果 */
}

.images img:hover {
  transform: scale(1.1);
  /* 图片放大 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  /* 添加阴影效果 */
  cursor: pointer;
  /* 鼠标悬停时显示手型 */
}
.empty-box{
  color:var(--td-brand-color-6);
    font-size: small; 
    width: 15vw;
    height: 20vh;
    background-color: var(--td-brand-color-1);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: -12vh;
    margin-left: 0.55vw;
  }
</style>