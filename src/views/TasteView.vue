<template>
  <div>
    <div class="global1">

      <!-- 评鉴方法 -->
      <div style="width: 50%;">
        <t-divider></t-divider>
        <div style="display: flex;">
          <div>
            <p class="EvaluationMethod">评鉴方法</p>
            <p class="Method">METHOD</p>
          </div>
          <p class="Caption1">{{ $t('鉴别茶叶品质好坏，主要采用感官审评的方法，对茶叶的外形与内质进行评判。具体步骤主要分为闻、观、饮三步。') }}</p>
        </div>

        <div style=".container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    margin-top: 2vh; /* Top spacing */
                    margin-bottom: 2vh; /* Bottom spacing */
                  }">

          <!-- 评茶方式 -->
          <div class="section">
            <t-card
              style="width:35vw;border:0px; margin-bottom:3vh; margin-top:2vh;background-color: var(--td-bg-color-container);; display: flex; flex-direction: column; align-items: center;">
              <div style="display: flex; width: 100%;margin-bottom: 2vh;">
                <div style="flex: 1;">
                  <p class="Three">{{ $t('评茶方式') }}</p>
                  <p class="ThreeSub">TEAWARE EVALUATOION</p>
                </div>
                <p class="Caption2">{{ $t('评茶是一种传统的中国茶文化活动，通常由茶艺师或茶叶爱好者主持。在评茶过程中，参与者会品尝不同种类的茶叶，并对其外形、香气、滋味、汤色等方面进行评价。')
                  }}
                </p>
              </div>
              <div style="display: flex; width: 100%;">
                <t-card class="card-left card-first-2">
                  <img src="../assets/img/method1.jpg" style="width: 107px; height: 107px; border-radius: 50%;">
                  <p class="NewlyTea">{{ $t('闻') }}</p>
                  <p class="Caption3">{{ $t('将茶汤倒入茶海，闻盖碗中茶叶香气，评鉴茶叶香气和杂味。') }}</p>
                </t-card>

                <t-card class="card-left card-first-2">

                  <img src="../assets/img/method2.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

                  <p class="NewlyTea">{{ $t('观') }}</p>
                  <p class="Caption3">{{ $t('从玻璃茶海观茶汤色色泽、清亮度、有无沉淀、有无漂浮。') }}</p>
                </t-card>
                <t-card class="card-left">

                  <img src="../assets/img/method3.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

                  <p class="NewlyTea">{{ $t('饮') }}</p>
                  <p class="Caption3">{{ $t('当茶汤温度降至45℃以下，取10ml-15ml含入口中，让茶汤接触口腔所有部位，之后缓慢吞下。') }}</p>
                </t-card>
              </div>
            </t-card>
          </div>
          <!-- 三看 -->
          <div class="section">
            <t-card
              style="width:35vw;border:0px; margin-bottom:3vh; margin-top:2vh; background-color: var(--td-bg-color-container);; display: flex; flex-direction: column; align-items: center;">
              <div style="display: flex; width: 100%;margin-bottom: 2vh;">
                <div style="flex: 1;">
                  <p class="Three">三看</p>
                  <p class="ThreeSub">THREE LOOK</p>
                </div>
                <p class="Caption2">{{ $t('净、整、色') }}</p>
              </div>
              <div style="display: flex; width: 100%;">
                <t-card class="card-left card-first-2">
                  <img src="../assets/img/method4.jpg" style="width: 107px; height: 107px; border-radius: 50%;">
                  <p class="NewlyTea">{{ $t('看干茶') }}</p>
                  <p class="Caption3">{{ $t('看干茶的色泽、质地、匀齐度、紧结度、显毫状况。') }}</p>
                </t-card>

                <t-card class="card-left card-first-2">

                  <img src="../assets/img/method5.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

                  <p class="NewlyTea">{{ $t('看茶汤色泽') }}</p>
                  <p class="Caption3">{{ $t('观茶茶汤的色泽，主要看鲜亮度、透析度、有无杂质、有无浑浊。') }}</p>
                </t-card>
                <t-card class="card-left">

                  <img src="../assets/img/method6.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

                  <p class="NewlyTea">{{ $t('看茶底') }}</p>
                  <p class="Caption3">{{ $t('看展开后茶叶的细嫩、匀齐以及完整度，还要看是否存有焦斑、红筋、红梗等现象。') }}</p>
                </t-card>
              </div>
            </t-card>
          </div>

          <!-- 三闻 -->
          <div class="section">
            <t-card
              style="width:35vw;border:0px; margin-bottom:3vh; margin-top:2vh; background-color: var(--td-bg-color-container);; display: flex; flex-direction: column; align-items: center;">
              <div style="display: flex; width: 100%;margin-bottom: 2vh;">
                <div style="flex: 1;">
                  <p class="Three">三闻</p>
                  <p class="ThreeSub">THREE SMELL</p>
                </div>
                <p class="Caption2">{{ $t('干、热、冷') }}</p>
              </div>
              <div style="display: flex; width: 100%;">
                <t-card class="card-left card-first-2">
                  <img src="../assets/img/method7.jpg" style="width: 107px; height: 107px; border-radius: 50%;">
                  <p class="NewlyTea">{{ $t('干闻（干茶）') }}</p>
                  <p class="Caption3">{{ $t('该有的茶味：香味、纯净度：不该有的茶味：杂味、陈味、霉味、沾染的其他味道。') }}</p>
                </t-card>

                <t-card class="card-left card-first-2">

                  <img src="../assets/img/method8.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

                  <p class="NewlyTea">{{ $t('热闻（冲泡后）') }}</p>
                  <p class="Caption3">{{ $t('在茶温度较高时闻香。闻香形式：盖碗缝隙、盖香、茶香、公道杯香。') }}</p>
                </t-card>
                <t-card class="card-left">

                  <img src="../assets/img/method9.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

                  <p class="NewlyTea">{{ $t('冷闻（器皿及茶底）') }}</p>
                  <p class="Caption3">{{ $t('温度降低后再闻茶盖或杯底留香，这时可闻到在高温时，因茶叶芬香物大量挥发而掩盖的其他香味。') }}</p>
                </t-card>
              </div>
            </t-card>
          </div>

          <!-- 三品 -->
          <div class="section">
            <t-card
              style="width:35vw;border:0px; margin-bottom:3vh; margin-top:2vh; background-color: var(--td-bg-color-container);; display: flex; flex-direction: column; align-items: center;">
              <div style="display: flex; width: 100%;margin-bottom: 2vh;">
                <div style="flex: 1;">
                  <p class="Three">三品</p>
                  <p class="ThreeSub">THREE SAMPLE</p>
                </div>
                <p class="Caption2">{{ $t('甘、润、韵。品茶方法：将茶汤含在嘴里，像含着一朵鲜花一样慢慢感受，细细品味，吞下去时还要注意感受茶汤过喉时是否爽滑。') }}</p>
              </div>
              <div style="display: flex; width: 100%;">
                <t-card class="card-left card-first-2">
                  <img src="../assets/img/method10.jpg" style="width: 107px; height: 107px; border-radius: 50%;">
                  <p class="NewlyTea">{{ $t('滋味') }}</p>
                  <p class="Caption3">{{ $t('让茶汤在口腔内流动，与舌部充分接触，细品茶味是浓烈鲜爽、甜爽，还是苦涩、淡薄。') }}</p>
                </t-card>

                <t-card class="card-left card-first-2">

                  <img src="../assets/img/method11.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

                  <p class="NewlyTea">{{ $t('甘醇度') }}</p>
                  <p class="Caption3">{{ $t('厚：代表茶浸出物多，丰富、耐泡；细腻度、油润度：又厚又油润喝起来就不会烫刺喉咙。') }}</p>
                </t-card>
                <t-card class="card-left">

                  <img src="../assets/img/method12.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

                  <p class="NewlyTea">{{ $t('回味') }}</p>
                  <p class="Caption3">{{ $t('当茶汤温度降至45℃以下，取10ml-15ml含入口中，让茶汤接触口腔所有部位，之后缓慢吞下。') }}</p>
                </t-card>
              </div>
            </t-card>
          </div>

        </div>
      </div>

      <!-- 右侧的信息 -->
      <div style="margin-left: 4%;width: 50%;">
        <t-divider class="FirstDivider"></t-divider>

        <div>
          <p class="Feeling">感受</p>
          <p class="FeelingSub">FEELING</p>
        </div>

        <template>
          <div style="width:100%;height:26% ;">
            <!-- 换成轮播图 -->
            <t-swiper :duration="300" :interval="6000" :navigation="{ placement: 'outside' }">
              <t-swiper-item>
                <div style="margin-top:3vh;width: 100%;">
                  <div style="display: flex;">
                    <div class="four-container">
                      <div><img src="../assets/img/feeling1.jpg"></div>
                      <div class="item-title">{{ $t('清香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('见于鲜叶嫩度在一芽二、三叶，制茶及时正常的绿茶等。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling2.jpg"></div>
                      <div class="item-title">{{ $t('青草香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('野生茶具备的浓郁香味，用青草香来描述。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling3.jpg"></div>
                      <div class="item-title">{{ $t('花香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('各种类似鲜花的香气，按花香青甜的不同，分为青花香和甜花香两种。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling4.jpg"></div>
                      <div class="item-title">{{ $t('板栗香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('似栗子炒熟时发出的香气。高山优质茶的香型。') }}</div>
                    </div>
                  </div>
                  <div class="three-padding"></div>
                  <div style="display: flex;">
                    <div class="four-container">
                      <div><img src="../assets/img/feeling5.jpg"></div>
                      <div class="item-title">{{ $t('兰香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('幽然之香，清爽幽雅，是最珍贵的茶香。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling6.jpg"></div>
                      <div class="item-title">{{ $t('水果香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('类似各种水果香气，如雪梨香、佛手香、桔子香、李子香等等。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling7.jpg"></div>
                      <div class="item-title">{{ $t('蜜香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('2~5年的茶都会呈现出的香味，即经过发酵一段时间的生饼。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling8.jpg"></div>
                      <div class="item-title">{{ $t('火香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('茶叶在干燥时温度比较高，在精制时适度焙火而来。') }}</div>
                    </div>
                  </div>
                  <div class="three-padding"></div>
                </div>
              </t-swiper-item>
              <t-swiper-item>
                <div style="margin-top:3vh;width: 100%;">
                  <div style="display: flex;">
                    <div class="four-container">
                      <div><img src="../assets/img/feeling9.jpg"></div>
                      <div class="item-title">{{ $t('檀香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('青壮叶生茶在一定时间的高温存储和退仓后，茶汤所产生的特有香气。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling10.jpg"></div>
                      <div class="item-title">{{ $t('药香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('在年份老的茶中出现的香味，与熬中药的药汤外形和口感都接近。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling11.jpg"></div>
                      <div class="item-title">{{ $t('荷香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('茶叶经过适当的陈化后发酵，去掉青叶香后留下了淡淡的荷香。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling12.jpg"></div>
                      <div class="item-title">{{ $t('参香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('木质化香气，陈年老茶居多。') }}</div>
                    </div>
                  </div>
                  <div class="three-padding"></div>
                  <div style="display: flex;">
                    <div class="four-container">
                      <div><img src="../assets/img/feeling13.jpg"></div>
                      <div class="item-title">{{ $t('枣香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('老白茶具有的像红枣般的香气。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling16.jpg"></div>
                      <div class="item-title">{{ $t('菌花香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('部分有“金花”的黑茶特有的香气。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling14.jpg"></div>
                      <div class="item-title">{{ $t('日晒香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('白茶经过日晒产生的气味。') }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img src="../assets/img/feeling15.jpg"></div>
                      <div class="item-title">{{ $t('麦香') }}</div>
                      <div class="item-note" style="margin-top:8px;overflow: auto;  height: 60px;">
                        {{ $t('经过麦香香精的注入或者与麦香干燥花朵混合加工而成的香气。') }}</div>
                    </div>
                  </div>
                  <div class="three-padding"></div>
                </div>
              </t-swiper-item>

            </t-swiper>
          </div>
        </template>
        <div style="width: 100%;height: 48%; margin-top: 36px;">
          <TeaFragranceView></TeaFragranceView>
        </div>

        <div style="height:18%">
          <p class="Feeling">新式茶饮</p>
          <p class="FeelingSub">NEW-STYLE TEA DRINKS</p>

          <template>
            <div :style="{ width: '100%' }">
              <!-- 换成轮播图 -----lzy修改 -->
              <t-swiper :duration="300" :interval="6000" :navigation="{ placement: 'outside' }">
                <t-swiper-item>
                  <div style="margin-top:3vh;width: 100%;display: flex;">
                    <div class="four-container">
                      <div><img :src="new_style_drinks[0].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[0].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[0].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[1].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[1].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[1].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[2].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[2].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[2].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[3].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[3].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[3].note) }}</div>
                    </div>
                  </div>
                </t-swiper-item>
                <t-swiper-item>
                  <div style="margin-top:3vh;width: 100%;display: flex;">
                    <div class="four-container">
                      <div><img :src="new_style_drinks[4].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[4].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[4].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[5].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[5].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[5].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[6].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[6].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[6].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[7].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[7].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[7].note) }}</div>
                    </div>
                  </div>
                </t-swiper-item>
                <t-swiper-item>
                  <div style="margin-top:3vh;width: 100%;display: flex;">
                    <div class="four-container">
                      <div><img :src="new_style_drinks[8].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[8].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[8].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[9].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[9].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[9].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[10].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[10].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[10].note) }}</div>
                    </div>
                    <div class="three-padding"></div>
                    <div class="four-container">
                      <div><img :src="new_style_drinks[11].image_path"></div>
                      <div class="item-title">{{ $t(new_style_drinks[11].name) }}</div>
                      <div class="item-note" style="margin-top:8px;">{{ $t(new_style_drinks[11].note) }}</div>
                    </div>
                  </div>
                </t-swiper-item>
              </t-swiper>
            </div>

          </template>
        </div>
      </div>

    </div>

    <div style="padding:26px 45px 0 68px">
      <div style="width: 100%; height: 70vh;">
        <SankeyView></SankeyView>
      </div>
    </div>

    <!-- 汤色 -->
    <div class="card">
      <div style="margin-left: 2vw;margin-top: 12px">
        <p class="Colour">汤色</p>
        <p class="ColourSub">COLOR OF TEA</p>
        <p class="Caption6">{{ $t('由于茶汤中的茶多酚与空气接触会很快氧化，以致茶汤容易变色。因而要及时欣赏汤色，主要从色度、亮度、清浊度等方面，辨别茶汤颜色深浅、正常与否、茶汤暗明、清澈或浑浊程度。')
          }}
        </p>
      </div>

      <div ref="main" style="width: 60vw; height: 60vh;margin-left: -8vw;margin-top: -6vh;"></div>

      <div v-for="(item, index) in items" v-if="item.isTrue" :key="index" style="margin-left: -12vw">
        <img :src="item.imageSrc" style="width: 100px; height: 100px; border-radius: 50%;margin-top: 2vh;">
        <p class="BrightGreen">{{ $t(item.title) }}</p>
        <p class="Caption7">{{ $t(item.description) }}</p>
      </div>

    </div>

  </div>
</template>

<script>

import SankeyView from '../views/SankeyView.vue';
import TeaFragranceView from '../views/TeaFragranceView.vue'
import * as echarts from 'echarts';
import Vue from 'vue';
export default {
  name: 'TasteView',
  components: {
    SankeyView,
    TeaFragranceView
  },

  computed: {
    option() {
      return {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return `<img class="custom-tooltip-image" src="${params.data.image}" style="width:100px;height:100px;">`;
          }
        },

        series: [
          {
            type: 'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              // borderRadius: 0,
              // borderColor: '#fff',
              // borderWidth: 0
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'rgba(50, 132, 110, 1)',
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 1, name: this.$t('明亮'), image: 'https://s2.loli.net/2024/04/24/iQtS1RGn8YzAmZv.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[0].x,
                    y: this.angle[0].y,
                    x2: this.angle[0].x2,
                    y2: this.angle[0].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#eae5a4' },
                      { offset: 1, color: '#e1d461' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('艳绿'), image: 'https://s2.loli.net/2024/04/24/1H3rMxknaFbpuTl.jpg',
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[1].x,
                    y: this.angle[1].y,
                    x2: this.angle[1].x2,
                    y2: this.angle[1].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#e1d461' },
                      { offset: 1, color: '#edd163' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('绿黄'), image: 'https://s2.loli.net/2024/04/24/4Monmf3IsGSlpLB.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[2].x,
                    y: this.angle[2].y,
                    x2: this.angle[2].x2,
                    y2: this.angle[2].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#edd163' },
                      { offset: 0.5, color: '#cb6d05' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('黄绿'), image: 'https://s2.loli.net/2024/04/24/9ivw27oMRquN3yP.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[3].x,
                    y: this.angle[3].y,
                    x2: this.angle[3].x2,
                    y2: this.angle[3].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#cb6d05' },
                      { offset: 1, color: '#ecbf53' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('浅黄'), image: 'https://s2.loli.net/2024/04/24/DWt34RUVnrljNOx.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[4].x,
                    y: this.angle[4].y,
                    x2: this.angle[4].x2,
                    y2: this.angle[4].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#ecbf53' },
                      { offset: 1, color: '#efad02' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('金黄'), image: 'https://s2.loli.net/2024/04/24/Y3J6uHW1ePRN9Z7.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[5].x,
                    y: this.angle[5].y,
                    x2: this.angle[5].x2,
                    y2: this.angle[5].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#efad02' },
                      { offset: 1, color: '#eb8205' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('橙黄'), image: 'https://s2.loli.net/2024/04/24/OP4ICcgqY9ZKnvu.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[6].x,
                    y: this.angle[6].y,
                    x2: this.angle[6].x2,
                    y2: this.angle[6].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#eb8205' },
                      { offset: 1, color: '#ed7107' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('橙红'), image: 'https://s2.loli.net/2024/04/24/5GZsXROPhnwCgHQ.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[7].x,
                    y: this.angle[7].y,
                    x2: this.angle[7].x2,
                    y2: this.angle[7].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#ed7107' },
                      { offset: 1, color: '#eb4f06' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('红汤'), image: 'https://s2.loli.net/2024/04/24/VCUpOEnwTZRrJsz.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[8].x,
                    y: this.angle[8].y,
                    x2: this.angle[8].x2,
                    y2: this.angle[8].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#eb4f06' },
                      { offset: 1, color: '#b44b02' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('浑浊'), image: 'https://s2.loli.net/2024/04/24/MGh2NjbgvPuf7BY.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[9].x,
                    y: this.angle[9].y,
                    x2: this.angle[9].x2,
                    y2: this.angle[9].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#b44b02' },
                      { offset: 1, color: '#901505' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('凝乳'), image: 'https://s2.loli.net/2024/04/24/9yvYoe6NlSG5tnV.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[10].x,
                    y: this.angle[10].y,
                    x2: this.angle[10].x2,
                    y2: this.angle[10].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0, color: '#901505' },
                      { offset: 1, color: '#802011' },
                    ]
                  },
                }
              },
              {
                value: 1, name: this.$t('昏暗'), image: 'https://s2.loli.net/2024/04/24/Fwe15xYVZjyAcJp.jpg', itemStyle: {
                  color: {
                    type: 'linear',
                    x: this.angle[11].x,
                    y: this.angle[11].y,
                    x2: this.angle[11].x2,
                    y2: this.angle[11].y2,
                    colorStops: [
                      // !! 在此添加想要的渐变过程色 !!
                      { offset: 0.5, color: '#802011' },
                      { offset: 1, color: '#eae5a4' },
                    ]
                  },
                }
              }
            ]
          }
        ]
      };
    }
  },

  data() {
    return {
      items: [
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/1H3rMxknaFbpuTl.jpg', title: '艳绿', description: '“艳绿”所指的茶汤色泽，通常为清澈透明、明亮鲜艳的绿色，展现出茶叶新鲜、活力的特质，其色泽饱满生动，常被视为绿茶优质的象征之一。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/4Monmf3IsGSlpLB.jpg', title: '绿黄', description: '“绿黄”茶汤色泽具有一定的绿色和黄色的混合特征，呈现出柔和明亮的外观，通常不如艳绿那样饱满明亮，而是更具有一种柔和平和的感觉。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/9ivw27oMRquN3yP.jpg', title: '黄绿', description: '“黄绿”茶汤色泽具有一定的黄色和绿色的混合特征，呈现出柔和、明亮、清澈的外观，通常不如艳绿那样饱满明亮，而是更具有一种柔和平和的感觉。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/DWt34RUVnrljNOx.jpg', title: '浅黄', description: '“浅黄”茶汤色泽呈现出柔和的黄色调，清澈透明，通常具有一定的清淡感和平和感，是一种较为温和的茶汤颜色。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/Y3J6uHW1ePRN9Z7.jpg', title: '金黄', description: '“金黄”茶汤色泽呈现出鲜艳的金黄色调，色泽明亮而饱满，具有极高的透明度和光泽感，通常具有浓郁的香气和口感，是一种高档茶汤的典型特征。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/OP4ICcgqY9ZKnvu.jpg', title: '橙黄', description: '“橙黄”茶汤色泽呈现出明显的橙色和黄色的混合特征，通常呈现出明亮而饱满的外观，色泽鲜艳，但不像金黄那样明亮，而是更倾向于橙色。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/5GZsXROPhnwCgHQ.jpg', title: '橙红', description: '“橙红”茶汤色泽呈现出明显的橙色和红色的混合特征，通常呈现出鲜艳而丰富的外观，色泽明亮，光泽度较高，是一种具有特殊风味的茶汤色泽。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/VCUpOEnwTZRrJsz.jpg', title: '红汤', description: '“红汤”茶汤色泽呈现出明显的红色调，色泽鲜艳而丰富，具有浓烈的红色，香气浓郁，口感醇厚，是红茶特有的一种茶汤颜色，也是其独特风味的象征。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/9yvYoe6NlSG5tnV.jpg', title: '凝乳', description: '“凝乳”茶汤色泽呈现出乳白色或者奶白色的特殊状态，具有非常低的透明度和浑浊感，散发出特殊的乳香或者奶香，是某些优质白茶或者普洱茶的特有特征之一，也是其独特风味的象征。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/iQtS1RGn8YzAmZv.jpg', title: '明亮', description: '“明亮”茶汤色泽呈现出清澈透明的状态，色泽鲜艳明亮，通透度高，没有任何混浊或浑浊的迹象，是优质茶汤的典型特征之一，也是其独特风味的象征。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/MGh2NjbgvPuf7BY.jpg', title: '浑浊', description: '“浑浊”茶汤色泽呈现出不清晰、不透明的状态，具有一定的混浊度，通常是茶汤中悬浮着茶叶碎屑、细小颗粒或者茶汤沉淀物所致，影响了茶汤的透明度和口感，通常不是优质茶汤的特征。' },
        { isTrue: false, imageSrc: 'https://s2.loli.net/2024/04/24/Fwe15xYVZjyAcJp.jpg', title: '昏暗', description: '“昏暗”茶汤色泽呈现出暗淡、不明亮的状态，颜色偏暗，缺乏光泽和活力，是一种不理想的茶汤状态，通常不符合优质茶汤的特征。' },
      ],
      lastHighlightedIndex: '',
      clickedIndex: -1, // 记录点击的索引
      currentIndex: 0, // 当前显示的索引
      timer: null, // 定时器
      new_style_drinks: [
        {
          name: '茉莉奶绿',
          note: '七窖茉莉香气馥郁端正，制成奶茶清甜怡人，浓郁奶香和茉莉花香经唇入喉，淡雅香气经久留存。',
          image_path: require('../assets/img/newtea1.jpg')
        },
        {
          name: '铁观音奶冻',
          note: '铁观音自带清雅兰香，搭配嫩滑奶冻，带来清爽又兼具浓郁奶香的丰富滋味。',
          image_path: require('../assets/img/newtea2.jpg')
        },
        {
          name: '黄金椰椰乌龙',
          note: '岩韵奇兰奶茶底蕴含绵远花香与豆香，入喉茶味香醇，加入Q弹椰果为茶香增添了无限玩味。',
          image_path: require('../assets/img/newtea3.jpg')
        },
        {
          name: '桂花酒酿奶绿',
          note: '精选一年一季的优质五常糯米搭配桂林金桂，酿出微醺甜润，融入七窖茉莉茶底，口感更轻盈。',
          image_path: require('../assets/img/newtea4.jpg')
        },
        {
          name: '芝芝绿妍茶后',
          note: '2012年首创第一杯芝士茶。定制绿茶底，融入真牛乳。',
          image_path: require('../assets/img/newtea5.jpg')
        },
        {
          name: '青稞牛乳茶',
          note: '经典嫣红牛乳茶加入软糯有嚼劲的青稞，入口奶香、茶香醇醇鲜明，还带有淡淡自然青稞麦香。',
          image_path: require('../assets/img/newtea6.jpg')
        },
        {
          name: '超清爽柠打绿',
          note: '优选新鲜柠檬，每日鲜切暴打，融合甄选茶园定制绿茶汤，酸甜沁爽。',
          image_path: require('../assets/img/newtea7.jpg')
        },
        {
          name: '青提柠绿茶',
          note: '优选阳光玫瑰青提，颗颗精细去皮，加入暴打新鲜柠檬，融合绿茶底。',
          image_path: require('../assets/img/newtea8.jpg')
        },
        {
          name: '米布丁珍珠大红袍',
          note: '大师定制武夷山大红袍，13道工序传承东方岩韵，花香焙火香浑然天成。',
          image_path: require('../assets/img/newtea9.jpg')
        },
        {
          name: '碧螺知春拿铁',
          note: '优选碧螺知春茶底，呈现花香蜜韵。',
          image_path: require('../assets/img/newtea10.jpg')
        },
        {
          name: '茉莉海盐拿铁',
          note: '源自广西横州双瓣茉莉，六窨一提工艺，香气升级。',
          image_path: require('../assets/img/newtea11.jpg')
        },
        {
          name: '葡萄碎玉',
          note: '铁观音遇上当季葡萄，王者相逢，清甜顺滑的茶香融入葡萄的鲜甜可口。',
          image_path: require('../assets/img/newtea12.jpg')
        },
      ],
      myChart: null, // 用于存储 echarts 实例
      angle: [],
    }
  },
  methods: {
    handleResize() {
      // 获取图表容器
      const chartDom = this.$refs.main;
      // 初始化 echarts 实例
      this.myChart = echarts.init(chartDom);
      // 渲染图表
      this.myChart.setOption(this.option);
    },
    // 点击事件处理函数
    handleClick(index) {
      // 清除定时器
      this.clearTimer();
      // 切换显示项
      this.items.forEach(item => item.isTrue = false);
      this.items[index].isTrue = true;
      // 更新点击的索引
      this.clickedIndex = index;
      // 启动定时器
      this.startTimer();
    },
    // 启动定时器
    startTimer() {
      this.timer = setInterval(() => {
        // 切换到下一个项
        this.nextItem();
      }, 5000); // 切换间隔时间，单位毫秒
    },
    // 清除定时器
    clearTimer() {
      clearInterval(this.timer);
    },
    // 切换到下一个项
    nextItem() {
      // 获取图表容器
      const chartDom = this.$refs.main;
      // 初始化 echarts 实例
      this.myChart = echarts.init(chartDom);
      // 先取消上一个高亮项的高亮效果
      if (this.lastHighlightedIndex !== undefined) {
        this.myChart.dispatchAction({
          type: 'downplay',
          dataIndex: this.lastHighlightedIndex
        });
      }
      this.items.forEach(item => item.isTrue = false);
      // 计算下一个项的索引
      if (this.clickedIndex !== -1) {
        this.currentIndex = (this.clickedIndex + 1) % this.items.length;
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }
      this.items[this.currentIndex].isTrue = true;
      this.myChart.dispatchAction({
        type: 'highlight', // 触发高亮效果，实现放大过渡
        dataIndex: this.currentIndex // 要高亮的数据索引
      });
      // 将当前索引设为上一个高亮项的索引
      this.lastHighlightedIndex = this.currentIndex;

    },

    /**
     * 线性渐变起止方向的计算方法
     *
     *
     * @param {*} startArc 开始角度
     * @param {*} endArc 结束角度
     * @returns 四个坐标 x,y,x2,y2
     */
    getCoordinates(startArc, endArc) {
      const posi = [
        Math.sin(startArc),
        -Math.cos(startArc),
        Math.sin(endArc),
        -Math.cos(endArc)
      ]
      // console.log(posi);
      const dx = posi[2] - posi[0]
      const dy = posi[3] - posi[1]

      return this.getLocation(dx, dy)
    },

    getLocation(dx, dy) {
      const tanV = dx / dy
      const directSign = Math.abs(tanV) < 1
      const t = directSign ? tanV : 1 / tanV

      const sign1 = t > 0 ? 1 : -1
      const sign2 = dx > 0 ? 1 : -1
      const sign = directSign ? sign1 * sign2 : sign2

      const group1 = [0.5 - sign * t / 2, 0.5 + sign * t / 2]
      const group2 = sign > 0 ? [0, 1] : [1, 0]
      const group = [...group1, ...group2]
      const keys = directSign ? ['x', 'x2', 'y', 'y2'] : ['y', 'y2', 'x', 'x2']
      let res = {}
      keys.forEach((k, idx) => {
        res[k] = group[idx]
      })
      return res
    },

    compute_angle() {
      var angle = [[0, Math.PI / 6], [Math.PI / 6, 2 * Math.PI / 6], [2 * Math.PI / 6, 3 * Math.PI / 6], [3 * Math.PI / 6, 4 * Math.PI / 6], [4 * Math.PI / 6, 5 * Math.PI / 6], [5 * Math.PI / 6, 6 * Math.PI / 6], [6 * Math.PI / 6, 7 * Math.PI / 6], [7 * Math.PI / 6, 8 * Math.PI / 6], [8 * Math.PI / 6, 9 * Math.PI / 6], [9 * Math.PI / 6, 10 * Math.PI / 6], [10 * Math.PI / 6, 11 * Math.PI / 6], [11 * Math.PI / 6, 12 * Math.PI / 6]]
      var zuobiao_res = []
      for (let i = 0; i < 12; i++) {
        var result = this.getCoordinates(angle[i][0], angle[i][1])
        zuobiao_res.push(result)
      }
      console.log(zuobiao_res);
      this.angle = zuobiao_res
    }
  },
  watch: {
    //监听语言是否变化，若变化调用createPieChart()
    '$i18n.locale': {
      handler() {
        // 处理语言变化的逻辑
        this.handleResize()
      },
      immediate: true // 立即执行一次回调函数
    }
  },
  destroyed() {
    // 在组件销毁时清除定时器
    this.clearTimer();
  },
  mounted() {
    window.addEventListener('resize', this.handleResize); //监听窗口大小改变

    // 计算角度
    this.compute_angle()

    // 启动定时器
    this.startTimer();
    // 获取图表容器
    const chartDom = this.$refs.main;
    // 初始化 echarts 实例
    this.myChart = echarts.init(chartDom);
    // 渲染图表
    this.myChart.setOption(this.option);
    this.myChart.on('click', (params) => {

      // 获取点击的数据索引
      var dataIndex = params.dataIndex;
      this.currentIndex = dataIndex;
      // 先取消上一个高亮项的高亮效果
      if (this.lastHighlightedIndex !== undefined) {
        this.myChart.dispatchAction({
          type: 'downplay',
          dataIndex: this.lastHighlightedIndex
        });
      }
      this.items[this.currentIndex].isTrue = true;
      this.myChart.dispatchAction({
        type: 'highlight', // 触发高亮效果，实现放大过渡
        dataIndex: this.currentIndex // 要高亮的数据索引
      });
      this.lastHighlightedIndex = this.currentIndex;
      // 调用 handleClick 方法处理点击事件
      this.handleClick(dataIndex);
      if (params.componentType === 'series') {
        if (params.seriesType === 'pie') {
          if (params.data.name === '艳绿') {
            this.items[0].isTrue = true
            for (let i = 1; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '绿黄') {
            this.items[0].isTrue = false
            this.items[1].isTrue = true
            for (let i = 2; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '黄绿') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = true
            for (let i = 3; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '浅黄') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = true
            for (let i = 4; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '金黄') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = false
            this.items[4].isTrue = true
            for (let i = 5; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '橙黄') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = false
            this.items[4].isTrue = false
            this.items[5].isTrue = true
            for (let i = 6; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '橙红') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = false
            this.items[4].isTrue = false
            this.items[5].isTrue = false
            this.items[6].isTrue = true
            for (let i = 7; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '红汤') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = false
            this.items[4].isTrue = false
            this.items[5].isTrue = false
            this.items[6].isTrue = false
            this.items[7].isTrue = true
            for (let i = 8; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '凝乳') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = false
            this.items[4].isTrue = false
            this.items[5].isTrue = false
            this.items[6].isTrue = false
            this.items[7].isTrue = false
            this.items[8].isTrue = true
            for (let i = 9; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '明亮') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = false
            this.items[4].isTrue = false
            this.items[5].isTrue = false
            this.items[6].isTrue = false
            this.items[7].isTrue = false
            this.items[8].isTrue = false
            this.items[9].isTrue = true
            for (let i = 10; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '浑浊') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = false
            this.items[4].isTrue = false
            this.items[5].isTrue = false
            this.items[6].isTrue = false
            this.items[7].isTrue = false
            this.items[8].isTrue = false
            this.items[9].isTrue = false
            this.items[10].isTrue = true
            for (let i = 11; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
          if (params.data.name === '昏暗') {
            this.items[0].isTrue = false
            this.items[1].isTrue = false
            this.items[2].isTrue = false
            this.items[3].isTrue = false
            this.items[4].isTrue = false
            this.items[5].isTrue = false
            this.items[6].isTrue = false
            this.items[7].isTrue = false
            this.items[8].isTrue = false
            this.items[9].isTrue = false
            this.items[10].isTrue = false
            this.items[11].isTrue = true
            for (let i = 12; i < this.items.length; i++) {
              this.items[i].isTrue = false
            }
          }
        }
      }
    });


  }
}


</script>

<style scoped>
/* @font-face {
font-family: "HanaMinA";
src: url("E:/program_respository/teajourney/public/HanaMinA.ttf") format("ttf"),
}  */
.global1 {
  /* width: calc(100vw - 300px); */
  display: flex;
  padding: 80px 68px 0px 68px;
}


.EvaluationMethod {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.Method {
  width: 129px;
  height: 29px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.Caption1 {
  width: 353px;
  height: 43px;
  font-size: 12px;
  margin-left: 25%;
  font-weight: 500;
  line-height: 16px;
  color: rgba(50, 132, 110, 0.5);
  text-align: left;
  vertical-align: middle;
}

.TeaEvaluationMethods {
  width: 96px;
  height: 22px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 21.1px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.ThreeSub {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 178px;
  height: 29px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
}

.Caption2 {
  height: 43px;
  font-size: 12px;
  margin-left: 24px;
  font-weight: 500;
  line-height: 15px;
  color: rgba(50, 132, 110, 0.5);
  text-align: left;
  vertical-align: middle;
  display: flex;
  align-items: center;
}

.NewlyTea {
  margin-top: 2vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1em;
  font-weight: 500;
  line-height: 14.06px;
  color: rgba(50, 132, 110, 1);
}

.Caption3 {
  height: 100px;
  overflow: auto;
  margin-top: 2vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8em;
  font-weight: 400;
  line-height: 14.06px;
  letter-spacing: 1px;
  color: rgba(50, 132, 110, 0.5);
}

.Three {
  width: 180px;
  height: 22px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 21.1px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Feeling {
  width: 97px;
  height: 29px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.FeelingSub {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.Taste {
  margin-top: 2vh;
  margin-right: 10%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1em;
  font-weight: 500;
  line-height: 14.06px;
  color: rgba(50, 132, 110, 1);

}

.Caption4 {
  margin-top: 2vh;
  margin-right: 10%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8em;
  font-weight: 400;
  line-height: 14.06px;
  color: rgba(50, 132, 110, 0.5);
}

.NewlyTeaDrink {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 17.38px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.section {
  flex: 1;
  background-color: rgba(255, 249, 232, 1);
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0px;
}

.Colour {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 21.1px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.ColourSub {
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 17.38px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.Caption6 {
  text-indent: 2em;
  width: 170px;
  height: 43px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  color: rgba(50, 132, 110, 0.5);
  text-align: left;
  vertical-align: middle;
}

.BrightGreen {
  margin-top: 2vh;
  width: 150px;
  height: 22px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 15px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

/* ——————————————————————————————————lzy写的样式从这里开始———————————————————————————————————— */
.four-container {
  margin-top: 10px;
  width: 22.012%;
}

.four-container img {
  width: 100%;
  border-radius: 8px
}

.three-padding {
  width: 3.984%;
}

.item-title {
  font-size: 1em;
  font-weight: 500;
  color: rgba(50, 132, 110, 1);

}

.item-note {
  height: 8vh;
  overflow: auto;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: rgba(50, 132, 110, 0.5);

}

.card-left {
  flex: 1;
  height: 290px;
  border: 0;
  display: flex;
  flex-direction: column;
  background: rgb(255, 254, 242, 1);
}

.card-first-2 {
  margin-right: 1vw;
}

.Caption7 {
  text-indent: 2em;
  width: 250px;
  height: 43px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: rgba(50, 132, 110, 0.5);
  text-align: left;
  vertical-align: middle;
}

/* —————————————————————————————————xhc补充汤色的样式从这里开始———————————————————————————————————— */
.custom-tooltip-image {
  position: absolute;
  transform: translate(-50%, 50%);
  /* 将图片位置移动到tooltip的右上方 */
  width: 100px;
  height: 100px;
}

.card {
  background-color: rgba(255, 249, 232, 1);
  /* 设置背景颜色 */
  margin-left: 4.3vw;
  margin-top: 4vh;
  height: 48vh;
  width: 91%;
  display: flex;
}
</style>