<template>
    <div class="sale" style="padding: 20px;">
        <div style="display: flex;height:calc(50vh - 20px);">
            <div style="border: 1px solid #00000050;height: 100% ;width: calc(50vh - 20px);">
              <TeaProvinceChartView></TeaProvinceChartView>
            </div>
            <div style="border: 1px solid #00000050; width: calc(100vw - 340px - 49vh);height: 100%;">
              <TeaGardenChartView></TeaGardenChartView>
            </div>
        </div>
        <div style="height: calc(50vh - 20px);border: 1px solid #00000050; width: 100%;">
          <TeaTypeChartView></TeaTypeChartView>
        </div>
    </div>
  </template>
  
  <script>
import TeaGardenChartView from './TeaGardenChartView.vue';
import TeaProvinceChartView from './TeaProvinceChartView.vue';
import TeaTypeChartView from './TeaTypeChartView.vue';



  // @ is an alias to /src
  
  
  export default {
    name: 'SaleView',
    components:{
      TeaGardenChartView,
      TeaProvinceChartView,
      TeaTypeChartView,
    }
  
  }
  </script>