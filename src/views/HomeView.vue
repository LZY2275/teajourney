<template>
  <div class="home">
    <template><t-button>确定</t-button></template>
    <template><t-steps :defaultCurrent="0"
  layout="vertical"
  theme="dot">
          <t-step-item title="步骤1" content="提示文字" />
          <t-step-item title="步骤2" content="提示文字" />
          <t-step-item title="步骤3" content="提示文字" />
        </t-steps></template>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',

}
</script>
