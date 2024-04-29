<template>
  <div style="display: flex;">

    <div style="width:21% ;">

      <div class="left-content" style="max-height: 250px;overflow: auto;">
        <p class="text top-left"><br>{{ $t('观察右图可知，各个省份的产量') }}<br>{{ $t('在2018—2022这个时间段内很接近，') }}<br>{{ $t('但各省份之间的产量却存在差异，') }}<br>{{ $t('比如贵州、云南和福建的产量较多，') }}<br>
        </p>
        <p class="text bottom-right">
          {{ $t('而江苏、陕西和广西省的产量较少。') }}<br>{{ $t('产量最高的福建省，在2022年达到') }}<br>{{ $t('最高值459674.38吨，') }}<br>{{ $t('产量最少的江苏省，在2022年达到') }}<br>{{ $t('最低值10400吨。') }}<br> &nbsp;</p>
      </div>

      <div v-show="currentProvince == ''"  class="empty-box">Tips:<br>{{ $t('点击“茶园面积图”中的省份查看近几年的产量产销变化图。') }}<br>{{ $t('点击右上角的产量产值以实现数据切换~') }}</div>
        <canvas ref="lineChart" width="450" height="300" style="margin-top: 12px;"></canvas>

      </div>

    <div class="line-chart-container">
      <div class="line-chart"></div>
      <div id="show" class="tooltip" style="display: none;"></div>
    </div>

  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { EventBus } from '../EventBus.js';
import * as d3 from 'd3';
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
          fill: true,
          data: [96459, 103496, 116000, 108443.04, 148000]
        }]
      },
      anhuiData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Anhui Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [134922, 137094, 138900, 142413, 154100]
        }]
      },
      hunanData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Hunan Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [213626, 223111, 240826, 250253, 247542]
        }]
      },
      zhejiangData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Zhejiang Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [186000, 181096, 188100, 195300, 193500]
        }]
      },
      guizhouData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Guizhou Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [199327, 286046, 385636, 345017, 344857]
        }]
      },
      yunnanData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Yunnan Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [398100, 399957, 408824, 380023, 432904.09]
        }]
      },
      guangxiData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Guangxi Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [73000, 88312, 84696, 102800, 130300]
        }]
      },
      jiangsuData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Jiangsu Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [14558, 15352, 12000, 10703, 10400]
        }]
      },
      sichuanData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Sichuan Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [295000, 300951, 315343, 350000, 366292.67]
        }]
      },
      fujianData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Fujian Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [401620, 412000, 418131, 450469.83, 459674.38]
        }]
      },
      shanxiData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Shanxi Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [73547, 91683, 92996, 97297.16, 119689.49]
        }]
      },
      hubeiData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Hubei Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true,
          data: [314453, 335400, 350571, 384000, 314515.25]
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
  computed:{
    dataX(){
      return [
        { province: this.$t('安徽省') },
        { province: this.$t('湖南省') },
        { province: this.$t('浙江省') },
        { province: this.$t('贵州省') },
        { province: this.$t('云南省') },
        { province: this.$t('广西省') },
        { province: this.$t('江苏省') },
        { province: this.$t('四川省') },
        { province: this.$t('福建省') },
        { province: this.$t('陕西省') },
        { province: this.$t('湖北省') },
        { province: this.$t('广东省') },
      ];
    }
  },
  methods: {
    renderLineChart(newValue) {
      var that = this;
      let chartData = null;
      if (newValue === that.$t('粤')) {
        chartData = this.guangdongData;
        chartData.datasets[0].label = '广东省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('皖')) {
        chartData = this.anhuiData;
        chartData.datasets[0].label = '安徽省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('湘')) {
        chartData = this.hunanData;
        chartData.datasets[0].label = '湖南省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('浙')) {
        chartData = this.zhejiangData;
        chartData.datasets[0].label = '浙江省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('黔')) {
        chartData = this.guizhouData;
        chartData.datasets[0].label = '贵州省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('滇')) {
        chartData = this.yunnanData;
        chartData.datasets[0].label = '云南省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('桂')) {
        chartData = this.guangxiData;
        chartData.datasets[0].label = '广西省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('苏')) {
        chartData = this.jiangsuData;
        chartData.datasets[0].label = '江苏省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('川')) {
        chartData = this.sichuanData;
        chartData.datasets[0].label = '四川省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('闽')) {
        chartData = this.fujianData;
        chartData.datasets[0].label = '福建省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('陕')) {
        chartData = this.shanxiData;
        chartData.datasets[0].label = '陕西省近几年产量（吨）';
        this.currentProvince = newValue;
      }
      if (newValue === that.$t('鄂')) {
        chartData = this.hubeiData;
        chartData.datasets[0].label = '湖北省近几年产量（吨）';
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
              mode: 'index', // 设置为'index'以在x轴方向上悬停时显示所有数据点的标签
              position: 'average',
              xAlign: 'center',
              yAlign: 'top',
              backgroundColor: '#FFFFFF',
              titleColor: '#000000',
              bodyColor: '#000000',
              borderWidth: 1,
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            legend:{
              labels:{
                boxWidth: 12
              }
            },
          }
        }
      });
    },
    drawLineChart() {
      const data = this.dataX;
      var that = this;
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
        { province: this.$t('安徽省'), year: 2018, radius: 15.543, value: 134922.00 },
        { province: this.$t('安徽省'), year: 2019, radius: 15.640, value: 137094.00 },
        { province: this.$t('安徽省'), year: 2020, radius: 15.720, value: 138900.00 },
        { province: this.$t('安徽省'), year: 2021, radius: 15.877, value: 142413.00 },
        { province: this.$t('安徽省'), year: 2022, radius: 16.397, value: 154100.00 },
      ];
      // 湖南省的圆
      const data2 = [
        { province: this.$t('湖南省'), year: 2018, radius: 19.047, value: 213626.00 },
        { province: this.$t('湖南省'), year: 2019, radius: 19.469, value: 223111.00 },
        { province: this.$t('湖南省'), year: 2020, radius: 20.258, value: 240826.00 },
        { province: this.$t('湖南省'), year: 2021, radius: 20.677, value: 250253.00 },
        { province: this.$t('湖南省'), year: 2022, radius: 20.557, value: 247542.00 },
      ];
      // 浙江省的圆
      const data3 = [
        { province: this.$t('浙江省'), year: 2018, radius: 17.817, value: 186000.00 },
        { province: this.$t('浙江省'), year: 2019, radius: 17.599, value: 181096.00 },
        { province: this.$t('浙江省'), year: 2020, radius: 17.911, value: 188100.00 },
        { province: this.$t('浙江省'), year: 2021, radius: 18.231, value: 195300.00 },
        { province: this.$t('浙江省'), year: 2022, radius: 18.151, value: 193500.00 },
      ];
      // 贵州省的圆
      const data4 = [
        { province: this.$t('贵州省'), year: 2018, radius: 18.410, value: 199327.00 },
        { province: this.$t('贵州省'), year: 2019, radius: 22.271, value: 286046.00 },
        { province: this.$t('贵州省'), year: 2020, radius: 26.704, value: 385636.00 },
        { province: this.$t('贵州省'), year: 2021, radius: 24.896, value: 345017.00 },
        { province: this.$t('贵州省'), year: 2022, radius: 24.889, value: 344857.00 },
      ];
      // 云南省的圆
      const data5 = [
        { province: this.$t('云南省'), year: 2018, radius: 27.259, value: 398100.00 },
        { province: this.$t('云南省'), year: 2019, radius: 27.342, value: 399957.00 },
        { province: this.$t('云南省'), year: 2020, radius: 27.736, value: 408824.00 },
        { province: this.$t('云南省'), year: 2021, radius: 26.454, value: 380023.00 },
        { province: this.$t('云南省'), year: 2022, radius: 28.808, value: 432904.09 },
      ];

      // 广西省的圆
      const data6 = [
        { province: this.$t('广西省'), year: 2018, radius: 12.787, value: 73000.00 },
        { province: this.$t('广西省'), year: 2019, radius: 13.468, value: 88312.00 },
        { province: this.$t('广西省'), year: 2020, radius: 13.307, value: 84696.00 },
        { province: this.$t('广西省'), year: 2021, radius: 14.113, value: 102800.00 },
        { province: this.$t('广西省'), year: 2022, radius: 15.337, value: 130300.00 },
      ]
      // 江苏省的圆
      const data7 = [
        { province: this.$t('江苏省'), year: 2018, radius: 10.185, value: 14558.00 },
        { province: this.$t('江苏省'), year: 2019, radius: 10.220, value: 15352.00 },
        { province: this.$t('江苏省'), year: 2020, radius: 10.071, value: 12000.00 },
        { province: this.$t('江苏省'), year: 2021, radius: 10.013, value: 10703.00 },
        { province: this.$t('江苏省'), year: 2022, radius: 10, value: 10400.00 },
      ];

      // 四川省的圆
      const data8 = [
        { province: this.$t('四川省'), year: 2018, radius: 22.669, value: 295000.00 },
        { province: this.$t('四川省'), year: 2019, radius: 22.934, value: 300951.00 },
        { province: this.$t('四川省'), year: 2020, radius: 23.575, value: 315343.00 },
        { province: this.$t('四川省'), year: 2021, radius: 25.118, value: 350000.00 },
        { province: this.$t('四川省'), year: 2022, radius: 25.843, value: 366292.67 },
      ];
      // 福建省的圆
      const data9 = [
        { province: this.$t('福建省'), year: 2018, radius: 27.416, value: 401620.00 },
        { province: this.$t('福建省'), year: 2019, radius: 27.878, value: 412000.00 },
        { province: this.$t('福建省'), year: 2020, radius: 28.151, value: 418131.00 },
        { province: this.$t('福建省'), year: 2021, radius: 29.590, value: 450469.83 },
        { province: this.$t('福建省'), year: 2022, radius: 30, value: 459674.38 },
      ];
      // 陕西省的圆
      const data10 = [
        { province: this.$t('陕西省'), year: 2018, radius: 12.811, value: 73547.00 },
        { province: this.$t('陕西省'), year: 2019, radius: 13.618, value: 91683.00 },
        { province: this.$t('陕西省'), year: 2020, radius: 13.677, value: 92996.00 },
        { province: this.$t('陕西省'), year: 2021, radius: 13.868, value: 97297.16 },
        { province: this.$t('陕西省'), year: 2022, radius: 14.865, value: 119689.49 },
      ];

      // 湖北省的圆
      const data11 = [
        { province: this.$t('湖北省'), year: 2018, radius: 23.535, value: 314453.00 },
        { province: this.$t('湖北省'), year: 2019, radius: 24.468, value: 335400.00 },
        { province: this.$t('湖北省'), year: 2020, radius: 25.143, value: 350571.00 },
        { province: this.$t('湖北省'), year: 2021, radius: 26.631, value: 384000.00 },
        { province: this.$t('湖北省'), year: 2022, radius: 23.538, value: 314515.25 },
      ];
      // 广东省的圆
      const data12 = [
        { province: this.$t('广东省'), year: 2018, radius: 13.831, value: 96459.00 },
        { province: this.$t('广东省'), year: 2019, radius: 14.144, value: 103496.00 },
        { province: this.$t('广东省'), year: 2020, radius: 14.701, value: 116000.00 },
        { province: this.$t('广东省'), year: 2021, radius: 14.365, value: 108443.04 },
        { province: this.$t('广东省'), year: 2022, radius: 16.125, value: 148000.00 },
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
            tooltip.html(that.$t('产量') + `&nbsp&nbsp${d.value}`);
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
  background: radial-gradient(circle, #cdebc0, #FFFEF2);
  /* 设置背景渐变色，从中心到外逐渐变浅 */
  padding: 2px;
  /* 调整文字与拐角的间距 */
}

.text::before,
.text::after {
  content: '';
  position: absolute;
  background-color: var(--td-brand-color-6);
  /* 设置拐角线的颜色 */
  border: 1px solid var(--td-brand-color-6);
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
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 12px;
  }
</style>