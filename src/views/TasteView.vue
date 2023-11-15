<template>
  <div>
    <div class="global1">

      <!-- 评鉴方法 -->
      <div style="width: 50%;">
        <t-divider class="FirstDivider"></t-divider>
        <div style="display: flex;">
          <div>
            <p class="EvaluationMethod">评鉴方法</p>
            <p class="Method">METHOD</p>
          </div>
          <p class="Caption1">说明文字：这是说明文字这是说明文字这是说明文字这是说明文字这是说明文字这是说明文字这是说明文字这是说明文字这是说明文字。</p>
        </div>

        <div style=".container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
  margin-top: 2vh; /* Top spacing */
  margin-bottom: 2vh; /* Bottom spacing */
}
">

        <!-- 评茶方式 -->
        <div class="section">
        <t-card
          style="width:35vw;border:0px; margin-bottom:3vh; margin-top:2vh; background: rgba(255, 249, 232, 1); display: flex; flex-direction: column; align-items: center;">
          <div style="display: flex; width: 100%;margin-bottom: 2vh;">
            <div style="flex: 1;">
              <p class="Three">评茶方式</p>
              <p class="ThreeSub">TEAWARE EVALUATOION</p>
            </div>
            <p class="Caption2">评茶是一种传统的中国茶文化活动，通常由茶艺师或茶叶爱好者主持。在评茶过程中，参与者会品尝不同种类的茶叶，并对其外形、香气、滋味、汤色等方面进行评价。</p>
          </div>
          <div style="display: flex; width: 100%;">
            <t-card class="card-left card-first-2"
>
                <img src="../assets/img/method1.jpg" style="width: 107px; height: 107px; border-radius: 50%;">
                <p class="NewlyTea">闻</p>
              <p class="Caption3">将茶汤倒入茶海，闻盖碗中茶叶香气，评鉴茶叶香气和杂味。</p>
            </t-card>
            
            <t-card class="card-left card-first-2">
             
                <img src="../assets/img/method2.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

              <p class="NewlyTea">观</p>
              <p class="Caption3">从玻璃茶海观茶汤色色泽、清亮度、有无沉淀、有无漂浮。</p>
            </t-card>
            <t-card class="card-left">
            
                <img src="../assets/img/method3.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

              <p class="NewlyTea">饮</p>
              <p class="Caption3">当茶汤温度降至45℃以下，取10ml-15ml含入口中，让茶汤接触口腔所有部位，之后缓慢吞下。</p>
            </t-card>
          </div>
        </t-card>
      </div>
        <!-- 三看 -->
        <div class="section">
        <t-card
          style="width:35vw;border:0px; margin-bottom:3vh; margin-top:2vh; background: rgba(255, 249, 232, 1); display: flex; flex-direction: column; align-items: center;">
          <div style="display: flex; width: 100%;margin-bottom: 2vh;">
            <div style="flex: 1;">
              <p class="Three">三看</p>
              <p class="ThreeSub">THREE LOOK</p>
            </div>
            <p class="Caption2">净、整、色</p>
          </div>
          <div style="display: flex; width: 100%;">
            <t-card class="card-left card-first-2">
                <img src="../assets/img/method4.jpg" style="width: 107px; height: 107px; border-radius: 50%;">
                <p class="NewlyTea">看干茶</p>
              <p class="Caption3">看干茶的色泽、质地、匀齐度、紧结度、显毫状况。</p>
            </t-card>
            
            <t-card class="card-left card-first-2">
             
                <img src="../assets/img/method5.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

              <p class="NewlyTea">看茶汤色泽</p>
              <p class="Caption3">观茶茶汤的色泽，主要看鲜亮度、透析度、有无杂质、有无浑浊。</p>
            </t-card>
            <t-card class="card-left">
            
                <img src="../assets/img/method6.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

              <p class="NewlyTea">看茶底</p>
              <p class="Caption3">看展开后茶叶的细嫩、匀齐以及完整度，还要看是否存有焦斑、红筋、红梗等现象。</p>
            </t-card>
          </div>
        </t-card>
      </div>

        <!-- 三闻 -->
        <div class="section">
        <t-card
          style="width:35vw;border:0px; margin-bottom:3vh; margin-top:2vh; background: rgba(255, 249, 232, 1); display: flex; flex-direction: column; align-items: center;">
          <div style="display: flex; width: 100%;margin-bottom: 2vh;">
            <div style="flex: 1;">
              <p class="Three">三闻</p>
              <p class="ThreeSub">THREE SMELL</p>
            </div>
            <p class="Caption2">干、热、冷。</p>
          </div>
          <div style="display: flex; width: 100%;">
            <t-card class="card-left card-first-2">
                <img src="../assets/img/method7.jpg" style="width: 107px; height: 107px; border-radius: 50%;">
                <p class="NewlyTea">干闻（干茶）</p>
              <p class="Caption3">该有的茶味：香味、纯净度：不该有的茶味：杂味、陈味、霉味、沾染的其他味道。</p>
            </t-card>
            
            <t-card class="card-left card-first-2">
             
                <img src="../assets/img/method8.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

              <p class="NewlyTea">热闻（冲泡后）</p>
              <p class="Caption3">在茶温度较高时闻香。闻香形式：盖碗缝隙、盖香、茶香、公道杯香。</p>
            </t-card>
            <t-card class="card-left">
            
                <img src="../assets/img/method9.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

              <p class="NewlyTea">冷闻（器皿及茶底）</p>
              <p class="Caption3">温度降低后再闻茶盖或杯底留香，这时可闻到在高温时，因茶叶芬香物大量挥发而掩盖的其他香味。</p>
            </t-card>
          </div>
        </t-card>
      </div>

        <!-- 三品 -->
        <div class="section">
        <t-card
          style="width:35vw;border:0px; margin-bottom:3vh; margin-top:2vh; background: rgba(255, 249, 232, 1); display: flex; flex-direction: column; align-items: center;">
          <div style="display: flex; width: 100%;margin-bottom: 2vh;">
            <div style="flex: 1;">
              <p class="Three">三品</p>
              <p class="ThreeSub">THREE SAMPLE</p>
            </div>
            <p class="Caption2">甘、润、韵。品茶方法：将茶汤含在嘴里，像含着一朵鲜花一样慢慢感受，细细品味，吞下去时还要注意感受茶汤过喉时是否爽滑。</p>
          </div>
          <div style="display: flex; width: 100%;">
            <t-card class="card-left card-first-2">
                <img src="../assets/img/method10.jpg" style="width: 107px; height: 107px; border-radius: 50%;">
                <p class="NewlyTea">滋味</p>
              <p class="Caption3">让茶汤在口腔内流动，与舌部充分接触，细品茶味是浓烈鲜爽、甜爽，还是苦涩、淡薄。</p>
            </t-card>
            
            <t-card class="card-left card-first-2">
             
                <img src="../assets/img/method11.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

              <p class="NewlyTea">甘醇度</p>
              <p class="Caption3">厚：代表茶浸出物多，丰富、耐泡；细腻度、油润度：又厚又油润喝起来就不会烫刺喉咙。</p>
            </t-card>
            <t-card class="card-left">
            
                <img src="../assets/img/method12.jpg" style="width: 107px; height: 107px; border-radius: 50%;">

              <p class="NewlyTea">回味</p>
              <p class="Caption3">当茶汤温度降至45℃以下，取10ml-15ml含入口中，让茶汤接触口腔所有部位，之后缓慢吞下。</p>
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
                    <div><img src="../assets/img/feeling1.jpg" ></div>
                    <div class="item-title">清香</div>
                    <div class="item-note" style="margin-top:8px;">见于鲜叶嫩度在一芽二、三叶，制茶及时正常的绿茶等。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling2.jpg" ></div>
                    <div class="item-title">青草香</div>
                    <div class="item-note" style="margin-top:8px;">野生茶具备的浓郁香味，用青草香来描述。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling3.jpg" ></div>
                    <div class="item-title">花香</div>
                    <div class="item-note" style="margin-top:8px;">各种类似鲜花的香气，按花香青甜的不同，分为青花香和甜花香两种。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling4.jpg" ></div>
                    <div class="item-title">板栗香</div>
                    <div class="item-note" style="margin-top:8px;">似栗子炒熟时发出的香气。高山优质茶的香型。</div>
                  </div>       
                </div>
                  <div class="three-padding"></div>
                  <div style="display: flex;">
                  <div class="four-container">
                    <div><img src="../assets/img/feeling5.jpg" ></div>
                    <div class="item-title">兰香</div>
                    <div class="item-note" style="margin-top:8px;">幽然之香，清爽幽雅，是最珍贵的茶香</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling6.jpg" ></div>
                    <div class="item-title">水果香</div>
                    <div class="item-note" style="margin-top:8px;">类似各种水果香气，如雪梨香、佛手香、桔子香、李子香等等。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling7.jpg" ></div>
                    <div class="item-title">蜜香</div>
                    <div class="item-note" style="margin-top:8px;">2~5年的茶都会呈现出的香味，即经过发酵一段时间的生饼。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling8.jpg" ></div>
                    <div class="item-title">火香</div>
                    <div class="item-note" style="margin-top:8px;">茶叶在干燥时温度比较高，在精制时适度焙火而来。</div>
                  </div>       
                </div>
                  <div class="three-padding"></div>
                </div>
              </t-swiper-item>
              <t-swiper-item>
                <div style="margin-top:3vh;width: 100%;">
                  <div style="display: flex;">
                  <div class="four-container">
                    <div><img src="../assets/img/feeling9.jpg" ></div>
                    <div class="item-title">檀香</div>
                    <div class="item-note" style="margin-top:8px;">青壮叶生茶在一定时间的高温存储和退仓后，茶汤所产生的特有香气。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling10.jpg" ></div>
                    <div class="item-title">药香</div>
                    <div class="item-note" style="margin-top:8px;">在年份老的茶中会出现的香味，这种味道与熬中药的药汤外形和口感都接近。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling11.jpg" ></div>
                    <div class="item-title">荷香</div>
                    <div class="item-note" style="margin-top:8px;">茶叶经过适当度的陈化后发酵，去掉浓烈的青叶香，自然而留下淡淡的荷香。。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling12.jpg" ></div>
                    <div class="item-title">参香</div>
                    <div class="item-note" style="margin-top:8px;">木质化香气，陈年老茶居多。</div>
                  </div>       
                </div>
                  <div class="three-padding"></div>
                  <div style="display: flex;">
                  <div class="four-container">
                    <div><img src="../assets/img/feeling5.jpg" ></div>
                    <div class="item-title">兰香</div>
                    <div class="item-note" style="margin-top:8px;">幽然之香，清爽幽雅，是最珍贵的茶香</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling6.jpg" ></div>
                    <div class="item-title">水果香</div>
                    <div class="item-note" style="margin-top:8px;">类似各种水果香气，如雪梨香、佛手香、桔子香、李子香等等。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling7.jpg" ></div>
                    <div class="item-title">蜜香</div>
                    <div class="item-note" style="margin-top:8px;">2~5年的茶都会呈现出的香味，即经过发酵一段时间的生饼。</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img src="../assets/img/feeling8.jpg" ></div>
                    <div class="item-title">火香</div>
                    <div class="item-note" style="margin-top:8px;">茶叶在干燥时温度比较高，在精制时适度焙火而来。</div>
                  </div>       
                </div>
                  <div class="three-padding"></div>
                </div>
              </t-swiper-item>

            </t-swiper>
          </div>
        </template>

        <!-- <div style="margin-top:3vh;">
          <div style="display: flex;">
            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>

            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
            <t-card style="flex: 1;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
          </div>

          <div style="display: flex;">
            <p class="Taste">口感</p>
            <p class="Taste">口感</p>
            <p class="Taste">口感</p>
            <p
              style=" margin-top: 2vh;flex: 1;display: flex;flex-direction: column;justify-content: center;font-size: 1em;font-weight: 500;line-height: 14.06px;color: rgba(50, 132, 110, 1);">
              口感</p>
          </div>

          <div style="display: flex;margin-bottom: 2vh;">
            <p class="Caption4">这是说明文字1</p>
            <p class="Caption4">这是说明文字2</p>
            <p class="Caption4">这是说明文字3</p>
            <p
              style=" margin-top: 2vh;flex: 1;display: flex;flex-direction: column;justify-content: center;font-size: 0.8em;font-weight: 400;line-height: 14.06px;letter-spacing: 1px;color: rgba(50, 132, 110, 0.5);">
              这是说明文字4</p>
          </div>
        </div>
        <div style="margin-top:3vh;">
          <div style="display: flex;">
            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>

            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
            <t-card style="flex: 1;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
          </div>

          <div style="display: flex;">
            <p class="Taste">口感</p>
            <p class="Taste">口感</p>
            <p class="Taste">口感</p>
            <p
              style="
              margin-top: 2vh;flex: 1;display: flex;flex-direction: column;justify-content: center;font-size: 1em;font-weight: 500;line-height: 14.06px;color: rgba(50, 132, 110, 1);">
              口感</p>
          </div>

          <div style="display: flex;margin-bottom: 2vh;">
            <p class="Caption4">这是说明文字5</p>
            <p class="Caption4">这是说明文字6</p>
            <p class="Caption4">这是说明文字7</p>
            <p
              style=" margin-top: 2vh;flex: 1;display: flex;flex-direction: column;justify-content: center;font-size: 0.8em;font-weight: 400;line-height: 14.06px;letter-spacing: 1px;color: rgba(50, 132, 110, 0.5);">
              这是说明文字8</p>
          </div>
        </div>
        <div style="margin-top:3vh;">
          <div style="display: flex;">
            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>

            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
            <t-card style="flex: 1;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
          </div>

          <div style="display: flex;">
            <p class="Taste">口感</p>
            <p class="Taste">口感</p>
            <p class="Taste">口感</p>
            <p
              style="
              margin-top: 2vh;flex: 1;display: flex;flex-direction: column;justify-content: center;font-size: 1em;font-weight: 500;line-height: 14.06px;color: rgba(50, 132, 110, 1);">
              口感</p>
          </div>

          <div style="display: flex;margin-bottom: 2vh;">
            <p class="Caption4">这是说明文字9</p>
            <p class="Caption4">这是说明文字10</p>
            <p class="Caption4">这是说明文字11</p>
            <p
              style=" margin-top: 2vh;flex: 1;display: flex;flex-direction: column;justify-content: center;font-size: 0.8em;font-weight: 400;line-height: 14.06px;letter-spacing: 1px;color: rgba(50, 132, 110, 0.5);">
              这是说明文字12</p>
          </div>
        </div>
        <div style="margin-top:3vh;">
          <div style="display: flex;">
            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>

            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
            <t-card style="flex: 1; margin-right: 10%;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
            <t-card style="flex: 1;height:13.215vh;border:0px;background: rgba(245, 244, 222, 1)">

            </t-card>
          </div>

          <div style="display: flex;">
            <p class="Taste">口感</p>
            <p class="Taste">口感</p>
            <p class="Taste">口感</p>
            <p
              style="
              margin-top: 2vh;flex: 1;display: flex;flex-direction: column;justify-content: center;font-size: 1em;font-weight: 500;line-height: 14.06px;color: rgba(50, 132, 110, 1);">
              口感</p>
          </div>

          <div style="display: flex;margin-bottom: 2vh;">
            <p class="Caption4">这是说明文字13</p>
            <p class="Caption4">这是说明文字14</p>
            <p class="Caption4">这是说明文字15</p>
            <p
              style=" margin-top: 2vh;flex: 1;display: flex;flex-direction: column;justify-content: center;font-size: 0.8em;font-weight: 400;line-height: 14.06px;letter-spacing: 1px;color: rgba(50, 132, 110, 0.5);">
              这是说明文字16</p>
          </div>
        </div> -->


        <!-- 这里放一个茶香图 -->
        <!-- calc(100% - 50px - 46.375px - 18vh - 40vh - 6vh - 52px - 6vh - 2.4em - 3vh - 46.375px) -->
        <div
          style="border: solid 1px #000000; width: 100%;height: 46%; margin-top: 36px;">
          <TeaFragranceView></TeaFragranceView>
        </div>

        <div style="height:18%;margin-top: 2vh;">
          <p class="Feeling">新式茶饮</p>
          <p class="FeelingSub">NEW-STYLE TEA DRINKS</p>
 
        <template>
          <div :style="{ width: '100%' }">
            <!-- 换成轮播图 -----lzy修改 -->
            <t-swiper :duration="300" :interval="6000" :navigation="{ placement: 'outside' }">
              <t-swiper-item>
                <div style="margin-top:3vh;width: 100%;display: flex;">
                  <div class="four-container">
                    <div><img :src="new_style_drinks[0].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[0].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[0].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[1].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[1].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[1].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[2].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[2].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[2].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[3].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[3].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[3].note }}</div>
                  </div>
                </div>
              </t-swiper-item>
              <t-swiper-item>
                <div style="margin-top:3vh;width: 100%;display: flex;">
                  <div class="four-container">
                    <div><img :src="new_style_drinks[4].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[4].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[4].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[5].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[5].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[5].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[6].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[6].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[6].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[7].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[7].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[7].note }}</div>
                  </div>
                </div>
              </t-swiper-item>
              <t-swiper-item>
                <div style="margin-top:3vh;width: 100%;display: flex;">
                  <div class="four-container">
                    <div><img :src="new_style_drinks[8].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[8].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[8].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[9].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[9].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[9].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[10].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[10].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[10].note }}</div>
                  </div>
                  <div class="three-padding"></div>
                  <div class="four-container">
                    <div><img :src="new_style_drinks[11].image_path" ></div>
                    <div class="item-title">{{ new_style_drinks[11].name }}</div>
                    <div class="item-note" style="margin-top:8px;">{{ new_style_drinks[11].note }}</div>
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
    <div style="padding:26px 45px 214px 68px">
      <t-card style="border: 0;background: rgba(252, 249, 232, 1);">
        <div style="display: flex;">

          <div>
            <p class="Colour">汤色</p>
            <p class="ColourSub">COLOR OF TEA</p>
            <p class="Caption6">由于茶汤中的茶多酚与空气接触会很快氧化，以致茶汤容易变色。
              因而要及时欣赏汤色，主要从色度、亮度、清浊度等方面，辨别茶汤颜色深浅、正常与否、茶汤暗明、清澈或浑浊程度。</p>
          </div>

          <div style="width:100%;margin-left: 1vw;">

            <div style="flex: 1; display: flex;margin-bottom: 1vh;">
              <img src="../assets/img/color1.jpg" style="width: 58px; height: 58px; border-radius: 50%;">

              <div style="margin-left: 1vw;">
                <p class="BrightGreen">艳绿</p>
                <p class="Caption7">水色翠绿微黄，清澈鲜艳，亮丽显油光，为质优绿茶的汤色。</p>
              </div>
            </div>

            <div style="flex: 1; display: flex;margin-bottom: 1vh; ">
              <img src="../assets/img/color2.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">绿黄</p>
                <p class="Caption7">绿中显黄的汤色。</p>
              </div>
            </div>

            <div style="flex: 1;display: flex;margin-bottom: 1vh; ">
              <img src="../assets/img/color3.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">黄绿</p>
                <p class="Caption7">黄中带绿的汤色。</p>
              </div>
            </div>

          </div>

          <div style="width:100%;margin-left: 1vw;">


            <div style="flex: 1; display: flex;margin-bottom: 1vh;">
              <img src="../assets/img/color4.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">浅黄</p>
                <p class="Caption7">汤色黄而淡，亦称浅黄色。</p>
              </div>
            </div>

            <div style="flex: 1; display: flex;margin-bottom: 1vh; ">
              <img src="../assets/img/color5.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">金黄</p>
                <p class="Caption7">汤色以黄为主稍带橙黄色，清澈亮丽，犹如黄金之色泽。</p>
              </div>
            </div>

            <div style="flex: 1;display: flex;margin-bottom: 1vh; ">
              <img src="../assets/img/color6.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">橙黄</p>
                <p class="Caption7">汤色黄中带微红，似成熟甜橙之色泽。</p>
              </div>
            </div>
          </div>

          <div style="width:100%;margin-left: 1vw;">
            <div style="flex: 1;display: flex;margin-bottom: 1vh;">
              <img src="../assets/img/color7.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">橙红</p>
                <p class="Caption7">汤色深黄偏红色。</p>
              </div>
            </div>

            <div style="flex: 1; display: flex;margin-bottom: 1vh;">
              <img src="../assets/img/color8.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">红汤</p>
                <p class="Caption7">烘焙过度或陈茶的汤色，呈浅红或暗红。</p>
              </div>
            </div>

            <div style="flex: 1; display: flex;margin-bottom: 1vh; ">
              <img src="../assets/img/color9.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">凝乳</p>
                <p class="Caption7">茶汤冷却后出现浅褐色或橙色乳状的浑汤现象（品质好、滋味浓烈的红茶常有此现象）。</p>
              </div>
            </div>


          </div>

          <div style="width:100%;margin-left: 1vw;">


            <div style="flex: 1; display: flex;margin-bottom: 1vh;">
              <img src="../assets/img/color10.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">明亮</p>
                <p class="Caption7">水色清，显油光。</p>
              </div>
            </div>

            <div style="flex: 1; display: flex;margin-bottom: 1vh; ">
              <img src="../assets/img/color11.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">浑浊</p>
                <p class="Caption7">汤色不清，沉淀物多或悬浮物多。</p>
              </div>
            </div>

            <div style="flex: 1;display: flex;margin-bottom: 1vh; ">
              <img src="../assets/img/color12.jpg" style="width: 58px; height: 58px; border-radius: 50%;">
              <div style="margin-left: 1vw;">
                <p class="BrightGreen">昏暗</p>
                <p class="Caption7">汤色不明亮，但无悬浮物。</p>
              </div>
            </div>

          </div>
        </div>
      </t-card>
    </div>



  </div>
</template>

<script>
// @ is an alias to /src
import SankeyView from '../views/SankeyView.vue';
import TeaFragranceView from '../views/TeaFragranceView.vue'

export default {
  name: 'TasteView',
  components: {
    SankeyView,
    TeaFragranceView
  },
  data(){
    return{
      new_style_drinks:[
        {
          name:"茉莉奶绿",
          note:"七窖茉莉香气馥郁端正，制成奶茶清甜怡人，浓郁奶香和茉莉花香经唇入喉，淡雅香气经久留存",
          image_path:require('../assets/img/newtea1.jpg')
        },
        {
          name:"铁观音奶冻",
          note:"铁观音自带清雅兰香，搭配嫩滑奶冻，带来清爽又兼具浓郁奶香的丰富滋味",
          image_path:require('../assets/img/newtea2.jpg')
        },
        {
          name:"黄金椰椰乌龙",
          note:"岩韵奇兰奶茶底蕴含绵远花香与豆香，入喉茶味香醇，加入Q弹椰果为茶香增添了无限玩味",
          image_path:require('../assets/img/newtea3.jpg')
        },
        {
          name:"桂花酒酿奶绿",
          note:"精选一年一季的优质五常糯米搭配桂林金桂，酿出微醺甜润，融入七窖茉莉茶底，口感更轻盈",
          image_path:require('../assets/img/newtea4.jpg')
        },
        {
          name:"芝芝绿妍茶后",
          note:"2012年首创第一杯芝士茶。定制绿茶底，融入真牛乳",
          image_path:require('../assets/img/newtea5.jpg')
        },
        {
          name:"青稞牛乳茶",
          note:"经典嫣红牛乳茶加入软糯有嚼劲的青稞，入口奶香、茶香醇醇鲜明，还带有淡淡自然青稞麦香",
          image_path:require('../assets/img/newtea6.jpg')
        },
        {
          name:"超清爽柠打绿",
          note:"优选新鲜柠檬，每日鲜切暴打，融合甄选茶园定制绿茶汤，酸甜沁爽",
          image_path:require('../assets/img/newtea7.jpg')
        },
        {
          name:"青提柠绿茶",
          note:"优选阳光玫瑰青提，颗颗精细去皮，加入暴打新鲜柠檬，融合绿茶底",
          image_path:require('../assets/img/newtea8.jpg')
        },
        {
          name:"米布丁珍珠大红袍",
          note:"大师定制武夷山大红袍，13道工序传承东方岩韵，花香焙火香浑然天成",
          image_path:require('../assets/img/newtea9.jpg')
        },
        {
          name:"碧螺知春拿铁",
          note:"优选碧螺知春茶底，呈现花香蜜韵",
          image_path:require('../assets/img/newtea10.jpg')
        },
        {
          name:"茉莉海盐拿铁",
          note:"源自广西横州双瓣茉莉，六窨一提工艺，香气升级",
          image_path:require('../assets/img/newtea11.jpg')
        },
        {
          name:"葡萄碎玉",
          note:"铁观音遇上当季葡萄，王者相逢，清甜顺滑的茶香融入葡萄的鲜甜可口",
          image_path:require('../assets/img/newtea12.jpg')
        },
      ]
    }
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
  padding: 102px 68px 0px 68px;
}

.FirstDivider {
  width: 35vw;
  height: 0.12%;
  background: rgba(211, 217, 191, 1);
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
  width: 96px;
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
  width: 132px;
  height: 43px;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 15px;
  color: rgba(50, 132, 110, 0.5);
  text-align: left;
  vertical-align: middle;
}

.BrightGreen {
  width: 50px;
  height: 22px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 15px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
  vertical-align: middle;
}

.Caption7 {
  width: 132px;
  height: 43px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 17.38px;
  color: rgba(50, 132, 110, 0.5);
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
/* ——————————————————————————————————lzy写的样式从这里开始———————————————————————————————————— */


.four-container{
  margin-top: 10px;
  width: 22.012%;
}

.four-container img{
  width: 100%;
  border-radius:8px
}

.three-padding{
  width: 3.984%;
}

.item-title{
  font-size: 1em;
  font-weight: 500;
  color: rgba(50, 132, 110, 1);

}

.item-note{
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: rgba(50, 132, 110, 0.5);

}

.card-left{
  flex: 1;
  height: 290px;
  border: 0; 
  display: flex;
  flex-direction: column; 
  background: rgb(255, 254, 242, 1);           
}

.card-first-2{
  margin-right: 1vw;
}

</style>