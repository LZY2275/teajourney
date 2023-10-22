<template>
  <div id="app">
    <!-- 右侧导航栏 -->
    <div class="nav">
      <p class="nav-title">种茶</p>
      <template>
        <t-steps :defaultCurrent="1"
                  separator="dashed"
                  layout="vertical"
                  theme="dot">
          <t-step-item title="种茶" content="提示文字" />
          <t-step-item title="采茶" content="提示文字" />
          <t-step-item title="销茶" content="提示文字" />
          <t-step-item title="品茶" content="提示文字" />
        </t-steps>
      </template>
    </div>
  </div>
</template>


<style lang="less">
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav{
  padding: 48px 30px;
}
.nav-title{
  color: var(--td-brand-color);font-size: 36px; font-weight: 600; text-align: left; margin-bottom: 36px;
}
</style>
