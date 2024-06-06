<template>
  <div class="sale" style="padding: 20px;">
    <div style="display: flex;height:calc(40vh - 20px);">
      <div style="height: 100% ;width: calc(50vh - 20px);">
        <TeaGardenChartView></TeaGardenChartView>
      </div>
      <div style=" width: calc(100vw - 340px - 49vh);height: 100%;">
        <TeaTypeChartView></TeaTypeChartView>
      </div>
    </div>
    <div style="height: calc(60vh - 20px); width: 100%;display: flex;">
      <TeaProvinceChartView style="width: 55%"></TeaProvinceChartView>
      <div style="width: 45%;">
        <TeaWorldSale></TeaWorldSale>
      </div>
    </div>
  </div>
</template>

<script>
import TeaGardenChartView from './TeaGardenChartView.vue';
import TeaProvinceChartView from './TeaProvinceChartView.vue';
import TeaTypeChartView from './TeaTypeChartView.vue';
import TeaWorldSale from './TeaWorldSale.vue';

export default {
  name: 'SaleView',
  components: {
    TeaGardenChartView,
    TeaProvinceChartView,
    TeaTypeChartView,
    TeaWorldSale
  }

}
</script>