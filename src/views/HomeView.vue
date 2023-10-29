<template>
  <div class="global">
    <div style="padding-top: 5.17578vh;padding-left: 5.347vw;display: flex;">
      <div style="display: flex;">
        <div class="top">
          <p>{{ top_text1 }}</p>
        </div>
        <div class="top" style="margin-left: 3.8194vw;">
          <p>{{ top_text2 }}</p>
        </div>
      </div>
      <div style="display: flex;margin-left: 59.26vw;">
        <div class="top">
          <p>{{ top_text3 }}</p>
        </div>
        <div class="top" style="margin-left: 3.8194vw;">
          <p>{{ top_text4 }}</p>
        </div>
      </div>
    </div>
    <div style="padding-top: 4.5898vh;padding-left: 4.58vw;display: flex;">
      <div class="title">{{ title }}</div>
      <div v-html="right" style="margin-left: 59.26vw;"></div>
    </div>
    <div class="titleen" style="display: flex;padding-left: 4.58vw;margin-top: 2;">
      <p>{{ titleen }}</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data(){
    return{
      top_text1:'WORKS',
      top_text2:'ABOUT',
      top_text3:'DATA',
      top_text4:'VISUALIZATION',
      title:'灵芽之旅',
      right:'<p style="color: rgba(255, 255, 255, 1);font-weight: 10;text-align: right;font-size: 20px;"><span style="font-weight: 500;font-size: 24px">灵芽[ líng yá ]：</span><br>1. 瑞草。<br>2. 指<span style="font-weight: 500;font-size: 24px">茶叶</span>。<br>3.神明本性。</p>',
      titleen:'Tea Journey',
    };
  },

}
</script>

<style scoped>
  @font-face {  
    font-family: "HanaMinA";  
    src: url("E:/program_respository/teajourney/public/HanaMinA.ttf") format("truetype"), 
  } 
  .top{
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 3px;
    line-height: 18.75px;
    color: rgba(255, 255, 255, 1);
  }
  .title{
    text-shadow: 0px 1.82px 7.29px;
    font-size: 9.77vh;
    font-weight: 400;
    color: rgb(255, 255, 255, 1);
    vertical-align: top;
    font-family: "HanaMinA", sans-serif;
  }
  .titleen{
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 0.5);
  }
  .global{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url("../assets/img/first.png");
    background-repeat: no-repeat;
    background-clip: padding-box;
    background-size: cover;
    background-position: 0 20vh;
  }

</style>