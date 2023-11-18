<template>
  <div class="container">

    <div class="top-section">
      <!--左上区域-->
      <div class="left-panel">

        <!-- 说明文字 -->
        <div style="background-color:var(--td-bg-color-container);height: 30vh;width: calc(100% - 24px);">
          <div v-if="showImage1" style="height: 50%;">
        <p class="caption">绿茶制作流程</p>
        <p class="sub-title">TEA PRODUCTION PROCESS</p>
        <div>
          <ul class="sub-caption">
            <li><strong>采青：</strong> 在春季或早夏，嫩叶最为嫩绿，因此是最佳采摘时机。通常选择手工采摘，保证采摘到最嫩的茶叶。</li>
            <li><strong>杀青：</strong> 将采摘的茶叶经过高温处理，阻止叶中酶的活动，保留茶叶的颜色、香气和营养成分。</li>
            <li><strong>揉捻：</strong> 经过杀青后，茶叶进行揉捻，帮助茶叶保持特定的形状，同时有助于释放茶叶的香气。</li>
            <li><strong>烘青：</strong> 揉捻后的茶叶会经过烘干处理，高温稳定茶叶的品质，确保茶叶不会变质。</li>
            <li><strong>干燥：</strong> 最后，茶叶会进行干燥处理，以确保茶叶的水分达到适当的水平，便于长期储存，并保持茶叶的品质和口感。</li>
          </ul>
        </div>
        </div>
        <div v-if="showImage2" style="height: 50%;">
        <p class="caption">白茶制作流程</p>
        <p class="sub-title">TEA PRODUCTION PROCESS</p>
        <div>
          <ul class="sub-caption">
            <li><strong>采青：</strong> 与其他茶类制作过程相似，白茶的制作也始于采摘。采摘白茶时，通常选择嫩绿的茶芽和叶子作为原料。</li>
            <li><strong>晾干：</strong> 采摘后的茶叶会进行晾晒处理。这个步骤不涉及高温处理或杀青，而是让茶叶自然地在阳光下或通风良好的环境中晾干，使其逐渐失去水分。</li>
            <li><strong>干燥：</strong> 在晾干之后，茶叶经过最终的干燥阶段。这个步骤有助于确保茶叶的水分含量达到适当的水平，以便储存和保持其品质。</li>
          </ul>
        </div>
        </div>
        <div v-if="showImage3" style="height: 50%;">
        <p class="caption">黄茶制作流程</p>
        <p class="sub-title">TEA PRODUCTION PROCESS</p>
        <div>
          <ul class="sub-caption">
            <li><strong>采青：</strong> 和其他茶类一样，黄茶的制作始于采摘。采摘时通常选择嫩绿的茶芽和叶子作为原料。</li>
            <li><strong>萎凋：</strong> 采摘的茶叶会经历一个特殊的萎凋过程，与其他茶类不同，黄茶的萎凋阶段时间较长，让茶叶逐渐失去水分并变软。</li>
            <li><strong>杀青：</strong> 经过萎凋后，茶叶会进行杀青处理，这个阶段的杀青相对柔和，不像绿茶那样高温处理。杀青有助于保留茶叶的颜色和香气。</li>
            <li><strong>烘青：</strong> 杀青后，茶叶经过烘焙处理，这个步骤有助于进一步固定茶叶的香气和品质。</li>
            <li><strong>干燥：</strong> 最后，茶叶会进行干燥处理，确保茶叶中的水分达到适当的水平，以便长期储存，并保持其品质和口感。</li>
          </ul>
        </div>
        </div>
        <div v-if="showImage4" style="height: 50%;">
        <p class="caption">青茶制作流程</p>
        <p class="sub-title">TEA PRODUCTION PROCESS</p>
        <div>
          <ul class="sub-caption">
            <li><strong>采青：</strong> 茶叶制作始于采摘。在制作青茶时，通常选择嫩绿的茶芽和嫩叶作为原料。</li>
            <li><strong>摇青：</strong> 在采摘后，茶叶经过摇晃或轻轻滚动的过程，这有助于破碎叶缘并释放汁液。</li>
            <li><strong>杀青：</strong> 接下来的步骤是进行杀青，阻止茶叶发酵并保留茶叶的颜色和香气。这个步骤通常涉及高温处理。</li>
            <li><strong>揉捻：</strong> 杀青后的茶叶会进行揉捻，这有助于形成茶叶特定的形状并释放茶叶的香气。</li>
            <li><strong>干燥：</strong> 最后，茶叶会进行干燥处理，确保茶叶中的水分达到适当的水平，便于长期储存，并保持茶叶的品质和口感。</li>
          </ul>
        </div>
        </div>
        <div v-if="showImage5" style="height: 50%;">
        <p class="caption">红茶制作流程</p>
        <p class="sub-title">TEA PRODUCTION PROCESS</p>
        <div>
          <ul class="sub-caption">
            <li><strong>采青：</strong> 茶叶制作始于采摘。通常会选择嫩绿的茶芽和嫩叶作为制作红茶的原料。</li>
            <li><strong>萎凋：</strong> 采摘后的茶叶经历萎凋过程，让茶叶逐渐失去水分并变软。这个过程有助于茶叶中化学成分的改变。</li>
            <li><strong>揉捻：</strong> 茶叶进行揉捻，帮助释放茶叶内部的汁液，形成特定的形状。</li>
            <li><strong>氧化发酵：</strong> 接下来的关键步骤是氧化发酵。茶叶被散放在适当的环境中，让其在空气中发酵，氧化过程赋予了红茶独特的色泽和口感。</li>
            <li><strong>干燥：</strong> 最后，茶叶会进行干燥处理，以确保茶叶的水分达到适当的水平，便于长期储存，并保持其品质和口感。</li>
          </ul>
        </div>
        </div>
        <div v-if="showImage6" style="height: 50%;">
        <p class="caption">黑茶制作流程</p>
        <p class="sub-title">TEA PRODUCTION PROCESS</p>
        <div>
          <ul class="sub-caption">
            <li><strong>采青：</strong> 黑茶的制作始于采摘。通常会选择嫩绿的茶芽和嫩叶作为制作黑茶的原料。</li>
            <li><strong>萎凋：</strong> 采摘后的茶叶经历萎凋过程，让茶叶逐渐失去水分并变软。这个过程有助于茶叶中化学成分的改变。</li>
            <li><strong>杀青：</strong> 接下来的步骤是进行杀青处理，这个过程相对较温和，有助于保留茶叶的颜色和香气。</li>
            <li><strong>揉捻：</strong> 经过杀青后，茶叶会进行揉捻，这有助于形成茶叶特定的形状并释放茶叶的香气。</li>
            <li><strong>晒青：</strong> 黑茶制作的独特之处在于晒青这个步骤。茶叶会被摊开并在适当的环境中暴晒，让茶叶进一步发酵和氧化。</li>
            <li><strong>干燥：</strong> 最后，茶叶会进行干燥处理，以确保茶叶的水分达到适当的水平，便于长期储存，并保持其品质和口感。</li>
          </ul>
        </div>
        </div>

        </div>


      </div>
      <!--右上区域-->
      <div class="right-panel">
        <div style="height: 30vh;display: flex;">
          <!-- 标题区域 -->
          <div class="right-title-container">
            <p class="caption" style="padding:0;">茶的种类发酵工艺</p>
            <p class="sub-title" style="padding: 0;line-height: 12px;margin-top: 4px;">FERMENTATION TECHNOLOGY</p>
            <p class="sub-caption" style="padding: 0;padding-top: 12px;text-indent: 2em;">
              茶叶的发酵实际上是茶叶细胞中茶多酚和多酚氧化酶相互作用的过程。发酵的程度不同，影响了茶叶的颜色、味道、香气和汤色等特征，从而将茶叶分为六大类。
            </p>
          </div>
          <!-- 图表区域 -->
          <div class="right-chart-container" style="display:flex;">
            <!-- 左边的图例区域 -->
            <div class="fermentation-legend-container">
              <p>低</p>
              <div class="fermentation-legend"></div>
              <p>高</p>
            </div>
            <!-- 右边的主体区域 -->
            <div class="chart-containter">
              <div class="chart-item-container" v-for="(item, index) in fermentation_data">
                <img :src="item.img" alt="" height="100%">
                <div style="width:80px" >
                  <p class="type-text">{{ item.type }}</p>
                </div>
                <template><div style="width:14vw;">
                  <div style="position: relative;top: 30%;">
                    <t-progress :percentage="item.percentage" :label="false" theme="plump" :color="{ from: '#32846e', to: '#00A870' }" trackColor="#e7e7e780" :status="'active'"/>
                  </div>
                </div></template>
                <div style="width:83px">
                  <p class="type-text">{{ item.percentage_text }}</p>
                </div>
              </div>
                
            </div>
          </div>
        </div>
        

      </div>
    </div>

    
            <!-- 步骤条 -->
      <div style="width: calc(100vw - 350px); display: flex;justify-content: center;">
        <div style="width: calc(100vw - 460px);"   :class="{ 'last-step': showImage6 }">
          <div v-if="showImage1" style="height: 50%;display: flex; justify-content: center; align-items: center; ">
          <template>
            <t-steps layout="horizontal" current="FINISH" :onChange="onCurChanged" theme="dot">
              <t-step-item title="采青" content="收集茶叶原料">
              </t-step-item>
              <t-step-item title="杀青" content="保留颜色香气">
                <template slot="extra" v-if="current === 1">
                   
                </template>
              </t-step-item>
              <t-step-item title="揉捻" content="形成特定形状">
                <template slot="extra" v-if="current === 2">
     
                </template>
              </t-step-item>
              <t-step-item title="烘青" content="高温稳定品质">
                <template slot="extra" v-if="current === 3">
                </template>
              </t-step-item>
              <t-step-item title="干燥" content="完全除去水分">
                <template slot="extra" v-if="current === 4">
                </template>
              </t-step-item>
            </t-steps>
          </template>
        </div>
        <div v-if="showImage2" style="height: 50%;display: flex; justify-content: center; align-items: center;">
          <template>
            <t-steps layout="horizontal" current="FINISH" :onChange="onCurChanged" theme="dot">
              <t-step-item title="采青" content="收集茶叶原料">
                <template slot="extra" v-if="current === 0">

                </template>
              </t-step-item>
              <t-step-item title="晾干" content="自然风干茶叶">
                <template slot="extra" v-if="current === 1">
                
                </template>
              </t-step-item>
              <t-step-item title="干燥" content="完全除去水分">
                <template slot="extra" v-if="current === 2">

                </template>
              </t-step-item>
            </t-steps>
          </template>

        </div>
        <div v-if="showImage3" style="height: 50%;display: flex; justify-content: center; align-items: center;">
          <template>
            <t-steps layout="horizontal" current="FINISH" :onChange="onCurChanged" theme="dot">
              <t-step-item title="采青" content="收集茶叶原料">
              </t-step-item>
              <t-step-item title="萎凋" content="失水软化叶片">
                <template slot="extra" v-if="current === 1">
                   
                </template>
              </t-step-item>
              <t-step-item title="杀青" content="保留颜色香气">
                <template slot="extra" v-if="current === 2">
                   
                </template>
              </t-step-item>
              <t-step-item title="烘青" content="高温稳定品质">
                <template slot="extra" v-if="current === 3">
                </template>
              </t-step-item>
              <t-step-item title="干燥" content="完全除去水分">
                <template slot="extra" v-if="current === 4">
                </template>
              </t-step-item>
            </t-steps>
          </template>

        </div>
        <div v-if="showImage4" style="height: 50%;display: flex; justify-content: center; align-items: center;">
          <template>
            <t-steps layout="horizontal" current="FINISH" :onChange="onCurChanged" theme="dot">
              <t-step-item title="采青" content="收集茶叶原料">
                <template slot="extra" v-if="current === 0">

                </template>
              </t-step-item>
              <t-step-item title="摇青" content="破碎叶缘释汁液">
                <template slot="extra" v-if="current === 1">
           
                </template>
              </t-step-item>
              <t-step-item title="杀青" content="保留颜色香气">
                <template slot="extra" v-if="current === 2">

                </template>
              </t-step-item>
              <t-step-item title="揉捻" content="形成特定形状">
                <template slot="extra" v-if="current === 2">

                </template>
              </t-step-item>.
              <t-step-item title="干燥" content="完全除去水分">
                <template slot="extra" v-if="current === 2">

                </template>
              </t-step-item>
            </t-steps>
          </template>

        </div>
        <div v-if="showImage5" style="height: 50%;display: flex; justify-content: center; align-items: center;">
          <template>
            <t-steps layout="horizontal" current="FINISH" :onChange="onCurChanged" theme="dot">
              <t-step-item title="采青" content="收集茶叶原料">
              </t-step-item>
              <t-step-item title="萎凋" content="失水软化叶片">
                <template slot="extra" v-if="current === 1">
                   
                </template>
              </t-step-item>
              <t-step-item title="揉捻" content="形成特定形状">
                <template slot="extra" v-if="current === 2">
                   
                </template>
              </t-step-item>
              <t-step-item title="氧化发酵" content="空气中发酵茶叶">
                <template slot="extra" v-if="current === 3">
                </template>
              </t-step-item>
              <t-step-item title="干燥" content="完全除去水分">
                <template slot="extra" v-if="current === 4">
                </template>
              </t-step-item>
            </t-steps>
          </template>

        </div>
        <div v-if="showImage6" style="height: 50%;width: 106%;display: flex; justify-content: center; align-items: center;">
          <template>
            <t-steps layout="horizontal" current="FINISH" :onChange="onCurChanged" theme="dot">
              <t-step-item title="采青" content="收集茶叶原料">
                <template slot="extra" >
                </template>
              </t-step-item>
              <t-step-item title="萎凋" content="失水软化叶片">
                <template slot="extra" v-if="current === 1">
      
                </template>
              </t-step-item>
              <t-step-item title="杀青" content="保留颜色香气">
                <template slot="extra" v-if="current === 2">

                </template>
              </t-step-item>
              <t-step-item title="揉捻" content="形成特定形状">
                <template slot="extra" v-if="current === 3">

                </template>
              </t-step-item>
              <t-step-item title="晒青" content="自然晾干茶叶">
                <template slot="extra" v-if="current === 4">

                </template>
              </t-step-item>
              <t-step-item title="干燥" content="完全除去水分">
                <template slot="extra" v-if="current === 5">

                </template>
              </t-step-item>
            </t-steps>
          </template>

        </div>
      </div>
    </div>


    <!--底部区域-->
    <div class="bottom-section">

      <!--第一部分-->
      <div class="image-with-circles-container">

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="#D0DC89CC" opacity="0.7" stroke-opacity="1" stroke="#D0DC89"
              stroke-width="3" />
            <circle cx="50%" cy="30%" r="15" fill="#D0DC89CC" opacity="0.7" stroke-opacity="1" stroke="#D0DC89"
              stroke-width="3" />
            <circle cx="50%" cy="50%" r="15" fill="#D0DC89CC" opacity="0.7" stroke-opacity="1" stroke="#D0DC89"
              stroke-width="3" />
            <circle cx="50%" cy="70%" r="15" fill="#D0DC89CC" opacity="0.7" stroke-opacity="1" stroke="#D0DC89"
              stroke-width="3" />
            <circle cx="50%" cy="90%" r="15" fill="#D0DC89CC" opacity="0.7" stroke-opacity="1" stroke="#D0DC89"
              stroke-width="3" />
          </svg>
          <img class="image" src="../assets/img/producetea13.jpg" alt="Image 1" @click="showGraph(1)">
        </div>
        <div class="text-container">
          <p class="slanted-text">西湖龙井</p>
          <p class="slanted-text">碧螺春</p>
          <p class="slanted-text">黄山毛峰</p>
          <p class="slanted-text">玉露</p>
          <p class="slanted-text">滇青</p>
          <p
            style=" right: 20%;top: 115%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">
            绿茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="#D9D9D9CC" opacity="0.7" stroke-opacity="1" stroke="#D9D9D9"
              stroke-width="3" />
            <circle cx="50%" cy="30%" r="15" fill="#D9D9D9CC" opacity="0.7" stroke-opacity="1" stroke="#D9D9D9"
              stroke-width="3" />
            <circle cx="50%" cy="50%" r="15" fill="#D9D9D9CC" opacity="0.7" stroke-opacity="1" stroke="#D9D9D9"
              stroke-width="3" />
            <circle cx="50%" cy="70%" r="15" fill="#D9D9D9CC" opacity="0.7" stroke-opacity="1" stroke="#D9D9D9"
              stroke-width="3" />
            <circle cx="50%" cy="90%" r="15" fill="#D9D9D9CC" opacity="0.7" stroke-opacity="1" stroke="#D9D9D9"
              stroke-width="3" />
          </svg>
          <img class="image" src="../assets/img/producetea14.jpg" alt="Image 2" @click="showGraph(2)">
        </div>
        <div class="text-container">
          <p class="slanted-text">白毫银针</p>
          <p class="slanted-text">白牡丹</p>
          <p class="slanted-text">寿眉</p>
          <p class="slanted-text">贡眉</p>
          <p class="slanted-text">黄山白茶</p>
          <p
            style=" right: 20%;top: 115%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">
            白茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="#E9CB6ACC" opacity="0.7" stroke-opacity="1" stroke="#E9CB6A"
              stroke-width="3" />
            <circle cx="50%" cy="30%" r="15" fill="#E9CB6ACC" opacity="0.7" stroke-opacity="1" stroke="#E9CB6A"
              stroke-width="3" />
            <circle cx="50%" cy="50%" r="15" fill="#E9CB6ACC" opacity="0.7" stroke-opacity="1" stroke="#E9CB6A"
              stroke-width="3" />
            <circle cx="50%" cy="70%" r="15" fill="#E9CB6ACC" opacity="0.7" stroke-opacity="1" stroke="#E9CB6A"
              stroke-width="3" />
            <circle cx="50%" cy="90%" r="15" fill="#E9CB6ACC" opacity="0.7" stroke-opacity="1" stroke="#E9CB6A"
              stroke-width="3" />
          </svg>
          <img class="image" src="../assets/img/producetea15.jpg" alt="Image 3" @click="showGraph(3)">
        </div>
        <div class="text-container">
          <p class="slanted-text">海马宫茶</p>
          <p class="slanted-text">蒙顶黄芽</p>
          <p class="slanted-text">霍山黄芽</p>
          <p class="slanted-text">广东大叶青</p>
          <p class="slanted-text">北港毛尖</p>
          <p
            style=" right: 20%;top: 115%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">
            黄茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="#ECB924CC" opacity="0.7" stroke-opacity="1" stroke="#ECB924"
              stroke-width="3" />
            <circle cx="50%" cy="30%" r="15" fill="#ECB924CC" opacity="0.7" stroke-opacity="1" stroke="#ECB924"
              stroke-width="3" />
            <circle cx="50%" cy="50%" r="15" fill="#ECB924CC" opacity="0.7" stroke-opacity="1" stroke="#ECB924"
              stroke-width="3" />
            <circle cx="50%" cy="70%" r="15" fill="#ECB924CC" opacity="0.7" stroke-opacity="1" stroke="#ECB924"
              stroke-width="3" />
            <circle cx="50%" cy="90%" r="15" fill="#ECB924CC" opacity="0.7" stroke-opacity="1" stroke="#ECB924"
              stroke-width="3" />
          </svg>
          <img class="image" src="../assets/img/producetea16.jpg" alt="Image 4" @click="showGraph(4)">
        </div>
        <div class="text-container">
          <p class="slanted-text">铁观音</p>
          <p class="slanted-text">大红袍</p>
          <p class="slanted-text">肉桂</p>
          <p class="slanted-text">水仙</p>
          <p class="slanted-text">北斗</p>
          <p
            style=" right: 20%;top: 115%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">
            乌龙茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="#C54522CC" opacity="0.7" stroke-opacity="1" stroke="#C54522"
              stroke-width="3" />
            <circle cx="50%" cy="30%" r="15" fill="#C54522CC" opacity="0.7" stroke-opacity="1" stroke="#C54522"
              stroke-width="3" />
            <circle cx="50%" cy="50%" r="15" fill="#C54522CC" opacity="0.7" stroke-opacity="1" stroke="#C54522"
              stroke-width="3" />
            <circle cx="50%" cy="70%" r="15" fill="#C54522CC" opacity="0.7" stroke-opacity="1" stroke="#C54522"
              stroke-width="3" />
            <circle cx="50%" cy="90%" r="15" fill="#C54522CC" opacity="0.7" stroke-opacity="1" stroke="#C54522"
              stroke-width="3" />
          </svg>
          <img class="image" src="../assets/img/producetea17.jpg" alt="Image 5" @click="showGraph(5)">
        </div>
        <div class="text-container">
          <p class="slanted-text">坦洋工夫</p>
          <p class="slanted-text">祁门红茶</p>
          <p class="slanted-text">滇红</p>
          <p class="slanted-text">正山小种</p>
          <p class="slanted-text">金骏眉</p>
          <p
            style=" right: 20%;top: 115%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">
            红茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="#594445CC" opacity="0.7" stroke-opacity="1" stroke="#594445"
              stroke-width="3" />
            <circle cx="50%" cy="30%" r="15" fill="#594445CC" opacity="0.7" stroke-opacity="1" stroke="#594445"
              stroke-width="3" />
            <circle cx="50%" cy="50%" r="15" fill="#594445CC" opacity="0.7" stroke-opacity="1" stroke="#594445"
              stroke-width="3" />
            <circle cx="50%" cy="70%" r="15" fill="#594445CC" opacity="0.7" stroke-opacity="1" stroke="#594445"
              stroke-width="3" />
            <circle cx="50%" cy="90%" r="15" fill="#594445CC" opacity="0.7" stroke-opacity="1" stroke="#594445"
              stroke-width="3" />
          </svg>
          <img class="image" src="../assets/img/producetea18.jpg" alt="Image 6" @click="showGraph(6)">
        </div>
        <div class="text-container">
          <p class="slanted-text">安化黑茶</p>
          <p class="slanted-text">普洱茶</p>
          <p class="slanted-text">六堡茶</p>
          <p class="slanted-text">泾阳茯砖茶</p>
          <p class="slanted-text">千两茶</p>
          <p
            style=" right: 20%;top: 115%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">
            黑茶
          </p>
        </div>
      </div>

      <!--第二部分-->
      <div id="container" style="height: 20%;margin-top: 5%; position: relative;"></div>

      <!--第三部分-->
      <div style="height: 10%; display: flex;">

        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea1.jpg" alt="Image 1" class="bottom-image">
          <p class="text">采青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea2.jpg" alt="Image 2" class="bottom-image">
          <p class="text">萎凋</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea3.jpg" alt="Image 3" class="bottom-image">
          <p class="text">摇青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea4.jpg" alt="Image 4" class="bottom-image">
          <p class="text">杀青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea5.jpg" alt="Image 5" class="bottom-image">
          <p class="text">揉捻</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea6.jpg" alt="Image 6" class="bottom-image">
          <p class="text">氧化发酵</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea7.jpg" alt="Image 7" class="bottom-image">
          <p class="text">晒青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea8.jpg" alt="Image 8" class="bottom-image">
          <p class="text">渥堆</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea9.jpg" alt="Image 9" class="bottom-image">
          <p class="text">晾干</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea10.jpg" alt="Image 10" class="bottom-image">
          <p class="text">闷黄</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea11.jpg" alt="Image 11" class="bottom-image">
          <p class="text">烘青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/producetea12.jpg" alt="Image 12" class="bottom-image">
          <p class="text">干燥</p>
        </div>
      </div>

    </div>

  </div>
</template>




<script>
import G6 from '@antv/g6';

export default {

  data() {
    return {
      current: 'FINISH',
      showImage1: true,
      showImage2: false,
      showImage3: false,
      showImage4: false,
      showImage5: false,
      showImage6: false,
      fermentation_data:[
        {
          img:require('../assets/img/producetea13.jpg'),
          type:'绿茶发酵',
          percentage:2.5,
          percentage_text:'0%~5%'
        },
        {
          img:require('../assets/img/producetea14.jpg'),
          type:'白茶发酵',
          percentage:7.5,
          percentage_text:'0%~10%'
        },
        {
          img:require('../assets/img/producetea15.jpg'),
          type:'黄茶发酵',
          percentage:15,
          percentage_text:'10%~20%'
        },
        {
          img:require('../assets/img/producetea16.jpg'),
          type:'乌龙茶发酵',
          percentage:50,
          percentage_text:'30%~60%'
        },
        {
          img:require('../assets/img/producetea17.jpg'),
          type:'红茶发酵',
          percentage:85,
          percentage_text:'80%~90%'
        },
        {
          img:require('../assets/img/producetea18.jpg'),
          type:'黑茶发酵',
          percentage:95,
          percentage_text:'85%~100%'
        },
      ]
    };
  },
  mounted() {
    this.initGraph1()
  },

  methods: {
    onCurChanged(cur, pre) {
      this.current = cur;
    },
    initGraph1() {
      const data = {
        nodes: [
          {
            id: 'node1',
            x: -1.60 * document.getElementById('container').clientWidth,
            y: -0.6 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node2',
            x: -1.598 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node3',
            x: -1.355 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node4',
            x: -1.273 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node5',
            x: -0.77 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node6',
            x: -0.688 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },

        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node3',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node4',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node5',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node6',
            type: 'cubic-vertical',
          },
        ],
      };

      const width = document.getElementById('container').scrollWidth;
      const height = document.getElementById('container').scrollHeight || 500;
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        modes: {
          default: ['drag-canvas'],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#32846e80', // 浅绿色
            lineWidth: 2, // 控制边的粗细
          },
          stateStyles: {
            hover: {
              // 原来的颜色#A7E4AE
              stroke: '#32846e80',
              lineWidth: 4,
            },
          },
        },

      });
      graph.data(data);
      graph.render();

      graph.on('edge:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
      });

      graph.on('edge:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
      });

      graph.on('edge:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
      });
      graph.on('canvas:click', (evt) => {
        graph.getEdges().forEach((edge) => {
          graph.clearItemStates(edge);
        });
      });
    },
    initGraph2() {

      const data = {
        nodes: [
          {
            id: 'node1',
            x: -1.73 * document.getElementById('container').clientWidth,
            y: -0.6 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node2',
            x: -1.9 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node3',
            x: -1.24 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node4',
            x: -0.99 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node3',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node4',
            type: 'cubic-vertical',
          },

        ],
      };

      const width = document.getElementById('container').scrollWidth;
      const height = document.getElementById('container').scrollHeight || 500;
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        modes: {
          default: ['drag-canvas'],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#32846e80', // 浅绿色
            lineWidth: 2, // 控制边的粗细
          },
          stateStyles: {
            hover: {
              stroke: '#32846e80',
              lineWidth: 4,
            },
          },
        },

      });
      graph.data(data);
      graph.render();

      graph.on('edge:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
      });

      graph.on('edge:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
      });

      graph.on('edge:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
      });
      graph.on('canvas:click', (evt) => {
        graph.getEdges().forEach((edge) => {
          graph.clearItemStates(edge);
        });
      });
    },
    initGraph3() {

      const data = {
        nodes: [
          {
            id: 'node1',
            x: -1.265 * document.getElementById('container').clientWidth,
            y: -0.6 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node2',
            x: -1.59 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node3',
            x: -1.51 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node4',
            x: -1.344 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node5',
            x: -0.77 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node6',
            x: -0.688 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },

        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node3',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node4',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node5',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node6',
            type: 'cubic-vertical',
          },
        ],
      };

      const width = document.getElementById('container').scrollWidth;
      const height = document.getElementById('container').scrollHeight || 500;
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        modes: {
          default: ['drag-canvas'],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#32846e80', // 浅绿色
            lineWidth: 2, // 控制边的粗细
          },
          stateStyles: {
            hover: {
              stroke: '#32846e80',
              lineWidth: 4,
            },
          },
        },

      });
      graph.data(data);
      graph.render();

      graph.on('edge:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
      });

      graph.on('edge:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
      });

      graph.on('edge:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
      });
      graph.on('canvas:click', (evt) => {
        graph.getEdges().forEach((edge) => {
          graph.clearItemStates(edge);
        });
      });
    },
    initGraph4() {

      const data = {
        nodes: [
          {
            id: 'node1',
            x: -1.09 * document.getElementById('container').clientWidth,
            y: -0.6 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node2',
            x: -1.59 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node3',
            x: -1.59 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node4',
            x: -1.42 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node5',
            x: -1.339 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node6',
            x: -1.257 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node7',
            x: -0.68 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node3',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node4',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node5',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node6',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node7',
            type: 'cubic-vertical',
          },
        ],
      };

      const width = document.getElementById('container').scrollWidth;
      const height = document.getElementById('container').scrollHeight || 500;
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        modes: {
          default: ['drag-canvas'],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#32846e80', // 浅绿色
            lineWidth: 2, // 控制边的粗细
          },
          stateStyles: {
            hover: {
              stroke: '#32846e80',
              lineWidth: 4,
            },
          },
        },

      });
      graph.data(data);
      graph.render();

      graph.on('edge:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
      });

      graph.on('edge:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
      });

      graph.on('edge:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
      });
      graph.on('canvas:click', (evt) => {
        graph.getEdges().forEach((edge) => {
          graph.clearItemStates(edge);
        });
      });
    },
    initGraph5() {

      const data = {
        nodes: [
          {
            id: 'node1',
            x: -1.382 * document.getElementById('container').clientWidth,
            y: -0.6 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node2',
            x: -2.05 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node3',
            x: -1.965 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node4',
            x: -1.715 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node5',
            x: -1.635 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node6',
            x: -1.142 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },

        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node3',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node4',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node5',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node6',
            type: 'cubic-vertical',
          },

        ],
      };

      const width = document.getElementById('container').scrollWidth;
      const height = document.getElementById('container').scrollHeight || 500;
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        modes: {
          default: ['drag-canvas'],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#32846e80', // 浅绿色
            lineWidth: 2, // 控制边的粗细
          },
          stateStyles: {
            hover: {
              stroke: '#32846e80',
              lineWidth: 4,
            },
          },
        },

      });
      graph.data(data);
      graph.render();

      graph.on('edge:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
      });

      graph.on('edge:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
      });

      graph.on('edge:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
      });
      graph.on('canvas:click', (evt) => {
        graph.getEdges().forEach((edge) => {
          graph.clearItemStates(edge);
        });
      });
    },
    initGraph6() {

      const data = {
        nodes: [
          {
            id: 'node1',
            x: -0.735 * document.getElementById('container').clientWidth,
            y: -0.6 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node2',
            x: -1.567 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node3',
            x: -1.485 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node4',
            x: -1.318 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node5',
            x: -1.234 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node6',
            x: -1.068 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
          {
            id: 'node7',
            x: -0.66 * document.getElementById('container').clientWidth,
            y: 0.1 * document.getElementById('container').clientHeight,
            size: 10,
            style: {
              fill: '#32846e80', // 浅绿色
              stroke: '#32846e80',
            },
            anchorPoints: [
              [0.5, 0.5],
              [0.5, 0.5],
            ],
          },
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node3',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node4',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node5',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node6',
            type: 'cubic-vertical',
          },
          {
            source: 'node1',
            target: 'node7',
            type: 'cubic-vertical',
          },
        ],
      };

      const width = document.getElementById('container').scrollWidth;
      const height = document.getElementById('container').scrollHeight || 500;
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        modes: {
          default: ['drag-canvas'],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#32846e80', // 浅绿色
            lineWidth: 2, // 控制边的粗细
          },
          stateStyles: {
            hover: {
              stroke: '#32846e80',
              lineWidth: 4,
            },
          },
        },

      });
      graph.data(data);
      graph.render();

      graph.on('edge:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
      });

      graph.on('edge:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
      });

      graph.on('edge:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
      });
      graph.on('canvas:click', (evt) => {
        graph.getEdges().forEach((edge) => {
          graph.clearItemStates(edge);
        });
      });
    },
    showGraph(graphNumber) {
      // 清除容器内容
      document.getElementById('container').innerHTML = '';
      switch (graphNumber) {
        case 1:
          this.initGraph1();
          this.current=0,
          this.showImage1 = true;
          this.showImage2 = false;
          this.showImage3 = false;
          this.showImage4 = false;
          this.showImage5 = false;
          this.showImage6 = false;
          break;
        case 2:
          this.initGraph2();
          this.current=0,
          this.showImage1 = false;
          this.showImage2 = true;
          this.showImage3 = false;
          this.showImage4 = false;
          this.showImage5 = false;
          this.showImage6 = false;
          break;
        case 3:
          this.initGraph3();
          this.current=0,
          this.showImage1 = false;
          this.showImage2 = false;
          this.showImage3 = true;
          this.showImage4 = false;
          this.showImage5 = false;
          this.showImage6 = false;
          break;
        case 4:
          this.initGraph4();
          this.current=0,
          this.showImage1 = false;
          this.showImage2 = false;
          this.showImage3 = false;
          this.showImage4 = true;
          this.showImage5 = false;
          this.showImage6 = false;
          break;
        case 5:
          this.initGraph5();
          this.current=0,
          this.showImage1 = false;
          this.showImage2 = false;
          this.showImage3 = false;
          this.showImage4 = false;
          this.showImage5 = true;
          this.showImage6 = false;
          break;
        case 6:
          this.initGraph6();
          this.current=0,
          this.showImage1 = false;
          this.showImage2 = false;
          this.showImage3 = false;
          this.showImage4 = false;
          this.showImage5 = false;
          this.showImage6 = true;
          break;
        default:
          // 默认情况
          break;
      }
    }
  },

}

</script>
  
<style>
.circle {
  fill: aqua
}

.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top-section {
  display: flex;
  flex: 4;
}

.left-panel {
  flex: 2;
  /* border: 1px solid black; */
}

.right-panel {
  flex: 2;
  /* border: 1px solid black; */
}

.bottom-section {
  flex: 6;
  /* border: 1px solid black; */
}

.image-with-circles-container {
  display: flex;
  height: 50%;
}

.image-with-circles {
  position: relative;
  justify-content: space-between;
  text-align: center;
  width: 16.5%;
  height: 120%;
}

.circle-svg {
  top: 5%;
  position: relative;
  justify-content: space-between;
  text-align: center;
  height: 80%;
  width: 50%;
}

.image {
  width: 35%;
  height: auto;
  display: block;
  position: absolute;
  top: 95%;
  left: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
}

.text {
  font-size: 16px;
  font-family: serif;
}

.bottom-image {
  position: relative;
  justify-content: space-between;
  text-align: center;
  width: 40%;
  height: auto;
}

.text-container {
  right: 2%;
  width: 12%;
  top: 10%;
  height: 85%;
  position: relative;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  align-items: flex-start;
  /* 让子元素在垂直方向上向上对齐 */
}

.slanted-text {
  transform: rotate(-20deg);
  transform-origin: 0 100%;
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: #00000080;
}

.tree-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  /* 或者使用 fixed，根据你的需求 */
  top: 0;
  left: 0;
}

.tree-path {
  fill: none;
  stroke: rgba(50, 132, 110, 1);
  stroke-width: 2;
}

.caption {
  text-align: left;
  font-size: 18px;
  /* font-weight: bold; */
  color: var(--td-brand-color-6);
  line-height: 26.06px;
  padding: 16px 24px 0 24px;
}

.sub-caption {
  padding: 12px 24px 12px 48px;
  text-align: left;
  /* text-indent: 2em; */
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5em;
  color: rgba(50, 132, 110, 0.5);
}

.last-step{
  position: relative;
  left: -3vw;
}

.sub-title{
  padding: 0 24px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(50, 132, 110, 1);
  text-align: left;
}

.right-title-container{
  width: 152px;
  padding: 0 12px;
}

/* .right-title-container p{
  font-size: 18px;
  color: var(--td-brand-color-6);
  letter-spacing: 1px;
} */

.right-chart-container{
  width: calc(100% - 160px);
  height: 30vh;
  background-color: var(--td-bg-color-container);
}

.fermentation-legend-container{
  padding: 12px 12px;
  width: 16px;
  height: calc(100% - 24px);
}

.fermentation-legend-container p{
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  color: var(--td-brand-color-6);
}

.fermentation-legend{
  border-radius: 8px;
  width: 16px;
  height: calc(100% - 48px);
  background: linear-gradient(to bottom, #00A870, var(--td-brand-color-6));  
}

.chart-item-container{
  height: 16.67%;
  /* background-color: rgb(180, 199, 199); */
  display: flex;
}

.chart-containter{
  margin-left:6px;
  padding: 12px 0;
  background-color: var(--td-bg-color-container);
}

.type-text{
  height: 100%;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: var(--td-brand-color-6);
}
</style>
