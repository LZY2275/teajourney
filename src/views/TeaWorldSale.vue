<template>
    <div>
        <!-- 标题区域 -->
        <div style="display: flex;justify-content: space-between;align-items: center;">
            <p class="title">
                {{$t('茶的世界贸易')}}
            </p>
            <div class="tabs">
                <template>
                <t-tabs :defaultValue="1" @change="selectTab">
                    <!-- 默认插槽 和 具名插槽（panel）都是用来渲染面板内容 -->
                    <t-tab-panel :value="1" :label = "$t('茶马古道')" >
                    </t-tab-panel>
                    <t-tab-panel :value="2" :label = "$t('万里茶道')" >
                    </t-tab-panel>
                </t-tabs>
                </template>
            </div>
        </div>
        <!-- 内容区域 -->
        <div class="image-container">
            <img src="../assets/img/teaworldsale_1.png" alt="" height="100%" v-show="cur==1"/>
            <img src="../assets/img/teaworldsale_2_1.png" alt="" height="100%" v-show="cur==2" style="border-radius: 12px;"/>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            // img_src:["../assets/img/teaworldsale_1.png","../assets/img/teaworldsale_2.png"],
            cur:1
        }
    },
    methods:{
        selectTab(value){
            // console.log('selectTab:',value)
            this.cur = value
            this.$forceUpdate()
        }
    }

}
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

.image-container{
    width: 100%;
    height: calc(58.5vh - 72px);
    padding: 12px;
}
</style>