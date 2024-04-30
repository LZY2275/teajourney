<template>
  <div class="tea-type">

    <div style="display: flex;justify-content: space-between;align-items: center;">
      <p class="title">
        {{$t('茶省产销气泡图')}}
      </p>
      <div class="tabs">
        <template>
          <t-tabs :defaultValue="1" @change="selectTab">
            <!-- 默认插槽 和 具名插槽（panel）都是用来渲染面板内容 -->
            <t-tab-panel :value="1" :label = "$t('产量（吨）')" >

            </t-tab-panel>
            <t-tab-panel :value="2" :label = "$t('产值（亿元）')" >

            </t-tab-panel>

          </t-tabs>
        </template>

      </div>

    </div>
    
    <div>
    <A1 v-if="selectedTab === 1"></A1>
    <A2 v-else="selectedTab === 2"></A2>
  </div>

  </div>
</template>

<script>

import A1 from './a1.vue';
import A2 from './a2.vue';
export default {
  data() {
    return {
      value: '1',
      tab: 1,
      selectedTab: 1,
    };
  },
  components: {
    A1,
    A2,
  },
  methods: {
    selectTab(tabNumber) {
      this.selectedTab = tabNumber;
    },
    handleTabClick(value) {
      this.selectedTab = value;
    }
  },

};
</script>

<style scoped>
.tabs {
  padding: 10px 10px 0 0;
  text-align: right;
}

.tab {
  font-size: 14px;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #cccccc;
  color: rgba(50, 132, 110, 1);
  font-weight: bold;
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

.title {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: var(--td-brand-color-6);
  line-height: 49px;
  margin-left: 20px;
}
</style>
