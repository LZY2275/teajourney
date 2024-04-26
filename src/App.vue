<template>
  <div id="app">
    <!-- 常驻聊天框按钮 -->
    <div style="position: fixed;bottom: 80px; z-index: 999;">
      <!-- <t-button theme="primary" size="large" variant="base"><t-icon name="chat"></t-icon></t-button>
       -->
       <t-sticky-tool
          @click="handleClickSticky"
        >
          <t-sticky-item
            label="聊天"
            :icon="renderChatIcon"
            trigger="click"
            :popup="renderPopup"
            :popup-props="{ overlayInnerStyle: { padding: '4px', position: 'relative', bottom: '20px'} }"
            >
          </t-sticky-item>
        </t-sticky-tool>
    </div>
    <!-- 首页 -->
    <div style="width: 99vw;height: 100vh;background: linear-gradient(180deg, rgba(20, 81, 82, 1) 0%, rgba(218, 231, 182, 1) 100%);">
      <!-- 不要直接在这里编写代码！！！！先只在views文件夹下编写views 高度为100vh-->
      <HomeView></HomeView>
    </div>
    <div style="display: flex;">
      <!-- 左侧导航栏 -->
      <div>
        <!-- <div class="nav">
          <p class="nav-title">{{ title[current] }}</p>
          <t-divider></t-divider>
          <t-anchor container="#content-view" @click="handleClick">
            <t-anchor-item href="#plant" title="种茶"></t-anchor-item>
            <t-anchor-item href="#pick" title="采茶"></t-anchor-item>
            <t-anchor-item href="#produce" title="制茶"></t-anchor-item>
            <t-anchor-item href="#sale" title="销茶"></t-anchor-item>
          <t-anchor-item href="#taste" title="品茶"></t-anchor-item>
          </t-anchor>
        </div> -->

        <div class="nav">
          <p class="nav-title">{{ title[current] }}</p>
          <t-divider></t-divider>
          <template>
            <t-steps :defaultCurrent="current"
                      separator="dashed"
                      layout="vertical"
                      theme="dot"
                      @change="onChangeSteps"
                      style="text-align: left">
              <t-step-item :title="$t('种茶')" :content="$t('春风吹绿苗')" />
              <t-step-item :title="$t('采茶')" :content="$t('晨朝掇灵芽')" />
              <t-step-item :title="$t('制茶')" :content="$t('蒸青是主流')" />
              <t-step-item :title="$t('销茶')" :content="$t('茶香弥漫市')" />
              <t-step-item :title="$t('品茶')" :content="$t('圭璧无纤瑕')" />
              <t-step-item :title="$t('忆茶')" :content="$t('古韵千年传')" />
            </t-steps>
          </template>
        </div>
        <div>
          <!-- <TeaInfoView :data="customEventData"></TeaInfoView> -->
        </div>
      </div>

      <!-- 右侧内容区 -->
      <div class="content-view" id="content-view" style="overflow-x: hidden;" >
        <section id="plant" class="section-first-3-add" style="position: relative;">
          <!-- 不要直接在这里编写代码！！！！先只在views文件夹下编写views，页面的宽度为calc（100vw - 300px） -->
          <!-- <PlantView @customEvent="handleCustomEvent"></PlantView> -->
          <PlantView></PlantView>
        </section>
        <section id="plant" class="section-second-3-add" style="position: relative;">
          <!-- 不要直接在这里编写代码！！！！先只在views文件夹下编写views，页面的宽度为calc（100vw - 300px） -->
          <!-- <PlantView @customEvent="handleCustomEvent"></PlantView> -->
        <PlaceView></PlaceView>
        </section>
        <section id="pick" class="section-first-3">
          <!-- 不要直接在这里编写代码！！！！先只在views文件夹下编写views，页面的宽度为calc（100vw - 300px） -->
          <PickView></PickView>
        </section>
        <section id="produce" class="section-first-3">
          <!-- 不要直接在这里编写代码！！！！先只在views文件夹下编写views，页面的宽度为calc（100vw - 300px） -->
          <ProduceView></ProduceView>
        </section>
        <section id="sale" class="section-first-3">
          <!-- 不要直接在这里编写代码！！！！先只在views文件夹下编写views，页面的宽度为calc（100vw - 300px） -->
          <SaleView></SaleView>
        </section>
        <section id="taste" class="section4">
          <!-- 不要直接在这里编写代码！！！！先只在views文件夹下编写views，页面的宽度为calc（100vw - 300px） -->
          <TasteView></TasteView>
        </section>
        <section id="huiyi" class="section4">
          <!-- 不要直接在这里编写代码！！！！先只在views文件夹下编写views，页面的宽度为calc（100vw - 300px） -->
          <YiTeaView></YiTeaView>
        </section>
      </div>
    </div>
    <div style="width: 100vw">
      <AboutView></AboutView>
    </div>

  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
import PickView from './views/PickView.vue';
import PlantView from './views/PlantView.vue';
import ProduceView from './views/ProduceView.vue';
import SaleView from './views/SaleView.vue';
import TasteView from './views/TasteView.vue';
import TeaInfoView from './views/TeaInfoView.vue';
import AboutView from './views/AboutView.vue';
import PlaceView from './views/PlaceView.vue';
import YiTeaView from './views/YiTeaView.vue';
import ChatView from './views/ChatView.vue';

import { ChatIcon} from 'tdesign-icons-vue';
  export default {
    components:{
        HomeView,
        PlantView,
        PickView,
        SaleView,
        TasteView,
        TeaInfoView,
        ProduceView,
        AboutView,
        PlaceView,
        YiTeaView,
        ChatView
    },
    data() {
      return {
        current:0,
        title:[this.$t('种茶'),this.$t('采茶'),this.$t('制茶'),this.$t('销茶'),this.$t('品茶'),this.$t('忆茶')],
        scrollHeight:0, //当前滚轮高度
        metaHeight:15,  //最小滚动距离
        metaTime: 10,   //最小执行时间
        targetHeight:0,     //目标区域滚轮高度
        clientHeight:0,
        customEventData: -1,
      };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      // handleClick({ e, href, title }) {
      //   e.preventDefault();
      //   console.log('click', href, title);
      // },
      renderChatIcon() {
        return <ChatIcon />;
      },
      renderPopup(){
        // return <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />;
        return <ChatView />;
      },
      onChangeSteps(e){
        this.current=e;
        this.toArea(e);
      },
      handleScroll(e){
        // console.log(e)
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.scrollHeight = scrollTop
        let clientHeight = window.innerHeight;
        this.clientHeight = clientHeight
        // console.log(scrollTop,clientHeight);
        if(scrollTop >= 2*clientHeight-300 && scrollTop < 3*clientHeight-300){
          this.current=0;
        }else if(scrollTop >= 3*clientHeight-300 && scrollTop < 4*clientHeight-300){
          this.current=1
        }else if(scrollTop >= 4*clientHeight-300 && scrollTop < 5*clientHeight-300){
          this.current=2;
        }else if(scrollTop >= 5*clientHeight-300 && scrollTop < 6*clientHeight-300){
          this.current=3;
        }else if(scrollTop >= 6*clientHeight-300 && scrollTop < 8.5*clientHeight-300){
          this.current=4;
        }else if(scrollTop >= 8.5*clientHeight+600){
          this.current=5;
        }
      },
      toArea(index) { // 这里的index是左侧导航栏传的参数，是不同区域设定好的索引值
        switch (index) { // 匹配不同区域的滚轮高度
          case 0: //区域一
            this.targetHeight= this.clientHeight  //这里将第一步获取到的滚轮高度取整
            break;
          case 1: //区域二
            this.targetHeight= 3*this.clientHeight
            break;
          case 2: //区域三
            this.targetHeight= 4*this.clientHeight
            break;
          case 3: //区域四
            this.targetHeight= 5*this.clientHeight
            break;
          case 4: //区域五
            this.targetHeight= 6*this.clientHeight
            break;
          case 5: //区域六
            this.targetHeight= 10*this.clientHeight
            break;
          default: //默认：区域一
            this.targetHeight= this.clientHeight
            break;
        }

        // 当指定区域高度大于当前滚动条位置时（即目标区在当前滚轮的下方）
        if(this.targetHeight> this.scrollHeight){
          // 计算高度差
          let x = this.targetHeight- this.scrollHeight;
          // 先加上余数，保证高度差能整除设定的最小移动单位
          document.documentElement.scrollTop += x%this.metaHeight;
          x -= x%this.metaHeight;
          const goto = setInterval(() => { // 建立执行操作的定时器
            document.documentElement.scrollTop  += this.metaHeight; // 控制移动滚动条
            x-= this.metaHeight; // 缩减高度差
            if (x == 0) { // 到达指定位置后清除定时器
              clearInterval(goto); //清除定时器
            }
          }, this.metaTime);
        }
        // 当指定区域高度小于当前滚动条位置时（即目标区在当前滚轮的上方）
        else{
          // 计算高度差
          let x = this.scrollHeight - this.targetHeight;
          // 先减去余数，保证高度差能整除设定的最小移动单位
          document.documentElement.scrollTop -= x%this.metaHeight;
          x -= x%this.metaHeight;
          const goto = setInterval(() => {
            document.documentElement.scrollTop -= this.metaHeight;
            x-= this.metaHeight;
            if (x == 0) {
              clearInterval(goto); //清除定时器
            }
          }, 1);
        }
      },
      handleCustomEvent(data){
        this.customEventData = data
        console.log(data);
      }
    },
    created(){
      window.addEventListener('scroll', this.handleScroll);
      let clientHeight = window.innerHeight;
      this.clientHeight = clientHeight
    }

  };
</script>

<!-- <style rel="stylesheet/scss" lang="scss">

  @import url("./assets/font/font.css");

  body{
    font-family:HYRunYuan-65W
  }
</style> -->

<style lang="less">
*{
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "HYRunYuan-65W";
  src: url("./assets/font/HYRunYuan-65W.ttf") format("truetype"),
}

#app {
  font-family:Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFFEF2;
}

.nav{
  padding: 48px 0 30px 30px;
  height: 50vh;
  width: 270px;
  position: sticky;
  top: 0;
  background: linear-gradient(180deg, #FFFEF2 0%, rgba(204, 204, 204, 0) 100%);

}
.nav-title{
  color: var(--td-brand-color);font-size: 36px; font-weight: 600; text-align: left; margin-bottom: 36px;
}

.content-view{
  width: 100%;
  overflow-x:hidden;
}

/* 内容 */
.section-first-3 {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // text-align: center;
    width: 100%;
    height: 100vh;
    /* 放在子元素上，和上面那个父元素一伙的 */
    scroll-snap-align: center;
  }
  /*添加产地*/
.section-first-3-add{
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // text-align: center;
    width: 100%;
    height: 100vh;
    /* 放在子元素上，和上面那个父元素一伙的 */
    scroll-snap-align: center;
}
.section-second-3-add{
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // text-align: center;
    width: 100%;
    height: 100vh;
    /* 放在子元素上，和上面那个父元素一伙的 */
    scroll-snap-align: center;
}
.section4{
  display: flex;
  flex-direction: column;
  width: 100%;
  /* 放在子元素上，和上面那个父元素一伙的 */
  scroll-snap-align: center;
}
</style>
