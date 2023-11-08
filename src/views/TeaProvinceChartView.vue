<template>
  <div class="tea-type">

    <div style="display: flex;justify-content: space-between;align-items: center;">
      <p class="title">
        各省份近五年产量产值
      </p>
      <div class="tabs">
        <div class="tab" :class="{ 'active': selectedTab === 1 }" @click="selectTab(1)">产量（吨）</div>
        <div class="tab" :class="{ 'active': selectedTab === 2 }" @click="selectTab(2)">产值（亿元）</div>
      </div>
    </div>
    <component :is="selectedTab === 1 ? 'a1' : 'a2'"></component>

  </div>
</template>

<script>

import A1 from './a1.vue';
import A2 from './a2.vue';
export default {
  data() {
    return {
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
  display: flex;
  margin-left: 0%;
  margin-top: 0%;
  font-size: 14px;
  font-weight: bold;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: top;
  padding-left: 10px;
  width: auto;
  height: auto;
}
</style>
