<template>
  <div class="container">

    <div class="top-section">
      <!--左上区域-->
      <div class="left-panel">

<p class="caption">说明文字</p>
<p class="sub-caption">说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字</p>





      </div>
      <!--右上区域-->
      <div class="right-panel">


      </div>
    </div>

      <!--底部区域-->
    <div class="bottom-section">

      <!--第一部分-->
      <div class="image-with-circles-container">

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="green" />
            <circle cx="50%" cy="30%" r="15" fill="green" />
            <circle cx="50%" cy="50%" r="15" fill="green" />
            <circle cx="50%" cy="70%" r="15" fill="green" />
            <circle cx="50%" cy="90%" r="15" fill="green" />
          </svg>
          <img class="image" src="../assets/img/tea.png" alt="Image 1" @click="showSecondPart1">
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
            <circle cx="50%" cy="10%" r="15" fill="red" />
            <circle cx="50%" cy="30%" r="15" fill="blue" />
            <circle cx="50%" cy="50%" r="15" fill="purple" />
            <circle cx="50%" cy="70%" r="15" fill="purple" />
            <circle cx="50%" cy="90%" r="15" fill="purple" />
          </svg>
          <img class="image" src="../assets/img/tea.png" alt="Image 2" @click="showSecondPart2">
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
            <circle cx="50%" cy="10%" r="15" fill="orange" />
            <circle cx="50%" cy="30%" r="15" fill="orange" />
            <circle cx="50%" cy="50%" r="15" fill="orange" />
            <circle cx="50%" cy="70%" r="15" fill="orange" />
            <circle cx="50%" cy="90%" r="15" fill="orange" />
          </svg>
          <img class="image" src="../assets/img/tea.png" alt="Image 3" @click="showSecondPart3">
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
            <circle cx="50%" cy="10%" r="15" fill="blue" />
            <circle cx="50%" cy="30%" r="15" fill="blue" />
            <circle cx="50%" cy="50%" r="15" fill="blue" />
            <circle cx="50%" cy="70%" r="15" fill="blue" />
            <circle cx="50%" cy="90%" r="15" fill="blue" />
          </svg>
          <img class="image" src="../assets/img/tea.png" alt="Image 4" @click="showSecondPart4">
        </div>
        <div class="text-container">
          <p class="slanted-text">铁观音</p>
          <p class="slanted-text">大红袍</p>
          <p class="slanted-text">肉桂</p>
          <p class="slanted-text">水仙</p>
          <p class="slanted-text">北斗</p>
          <p
            style=" right: 20%;top: 115%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">
            青茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="red" />
            <circle cx="50%" cy="30%" r="15" fill="red" />
            <circle cx="50%" cy="50%" r="15" fill="red" />
            <circle cx="50%" cy="70%" r="15" fill="red" />
            <circle cx="50%" cy="90%" r="15" fill="red" />
          </svg>
          <img class="image" src="../assets/img/tea.png" alt="Image 5" @click="showSecondPart5">
        </div>
        <div class="text-container">
          <p class="slanted-text">祁门红茶</p>
          <p class="slanted-text">滇红</p>
          <p class="slanted-text">正山小种</p>
          <p class="slanted-text">金骏眉</p>
          <p class="slanted-text">坦洋工夫</p>
          <p
            style=" right: 20%;top: 115%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">
            红茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="15" fill="black" />
            <circle cx="50%" cy="30%" r="15" fill="black" />
            <circle cx="50%" cy="50%" r="15" fill="black" />
            <circle cx="50%" cy="70%" r="15" fill="black" />
            <circle cx="50%" cy="90%" r="15" fill="black" />
          </svg>
          <img class="image" src="../assets/img/tea.png" alt="Image 6" @click="showSecondPart6">
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
      <div style="height: 20%;margin-top: 5%; position: relative;">

        <svg class="tree-svg" v-show="showSecondPartContent1" viewBox="0 0 100 100">
          <path class="tree-path" d="M-590 5 Q-600 80, -600 100" />
          <path class="tree-path" d="M-590 5 Q-230 100, -250 100" />
          <path class="tree-path" d="M-590 5 Q-230 50, -80 120" />
          <path class="tree-path" d="M-590 5 Q-150 -10, 720 120" />
          <path class="tree-path" d="M-590 5 Q-50 -10, 850 120" />
          <circle cx="-590" cy="8" r="8" fill="green" />
        </svg>

        <svg class="tree-svg" v-show="showSecondPartContent2" viewBox="0 0 100 100">
          <path class="tree-path" d="M-352 5 Q-500 5, -595 100" />
          <path class="tree-path" d="M-352 5 Q700 50, 190 180" />
          <path class="tree-path" d="M-352 5 Q800 40, 700 120" />
          <circle cx="-352" cy="8" r="8" fill="green" />
        </svg>

        <svg class="tree-svg" v-show="showSecondPartContent3" viewBox="0 0 100 100">
          <path class="tree-path" d="M-116 5 Q-500 5, -595 100" />
          <path class="tree-path" d="M-116 5 Q-500 5, -480 120" />
          <path class="tree-path" d="M-116 5 Q-200 5, -260 140" />
          <path class="tree-path" d="M-116 5 Q700 10, 380 200" />
          <path class="tree-path" d="M-116 5 Q1000 10, 620 220" />
          <circle cx="-116" cy="8" r="8" fill="green" />
        </svg>

        <svg class="tree-svg" v-show="showSecondPartContent4" viewBox="0 0 100 100">
          <path class="tree-path" d="M120 5 Q-500 15, -595 100" />
          <path class="tree-path" d="M120 5 Q-500 15, -480 120" />
          <path class="tree-path" d="M120 5 Q-500 15, -320 180" />
          <path class="tree-path" d="M120 5 Q-300 15, -250 200" />
          <path class="tree-path" d="M120 5 Q-200 50, -100 200" />
          <path class="tree-path" d="M120 5 Q1000 0, 600 300" />
          <circle cx="120" cy="8" r="8" fill="green" />
        </svg>
        <svg class="tree-svg" v-show="showSecondPartContent5" viewBox="0 0 100 100">
          <path class="tree-path" d="M350 5 Q-500 15, -610 100" />
          <path class="tree-path" d="M350 5 Q-400 20, -490 100" />
          <path class="tree-path" d="M350 5 Q-100 15, -120 100" />
          <path class="tree-path" d="M350 5 Q20 15, -90 200" />
          <path class="tree-path" d="M350 5 Q1000 40, 520 300" />
          <circle cx="365" cy="8" r="8" fill="green" />
        </svg>
        <svg class="tree-svg" v-show="showSecondPartContent6" viewBox="0 0 100 100">
          <path class="tree-path" d="M610 5 Q-500 15, -610 100" />
          <path class="tree-path" d="M610 5 Q-400 25, -490 100" />
          <path class="tree-path" d="M610 5 Q-200 25, -250 100" />
          <path class="tree-path" d="M610 5 Q-250 40, -110 140" />
          <path class="tree-path" d="M610 5 Q-80 50, 190 160" />
          <path class="tree-path" d="M610 5 Q-90 50, 500 400" />
          <path class="tree-path" d="M610 5 Q1000 350, 1300 600" />
          <circle cx="610" cy="8" r="8" fill="green" />
        </svg>
      </div>

      <!--第三部分-->
      <div style="height: 10%; display: flex;">

        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 1" class="bottom-image">
          <p class="text">采青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 2" class="bottom-image">
          <p class="text">萎凋</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 3" class="bottom-image">
          <p class="text">摇青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 4" class="bottom-image">
          <p class="text">杀青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 5" class="bottom-image">
          <p class="text">揉捻</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 6" class="bottom-image">
          <p class="text">氧化发酵</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 7" class="bottom-image">
          <p class="text">晒青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 8" class="bottom-image">
          <p class="text">渥堆</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 9" class="bottom-image">
          <p class="text">晾干</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 10" class="bottom-image">
          <p class="text">闷黄</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 11" class="bottom-image">
          <p class="text">烘青</p>
        </div>
        <div style="flex: 1; box-sizing: border-box;">
          <img src="../assets/img/tea.png" alt="Image 12" class="bottom-image">
          <p class="text">干燥</p>
        </div>
      </div>

    </div>

  </div>
</template>


<script>
export default {
  methods: {
    showSecondPart1() {
      this.showSecondPartContent1 = true;
      this.showSecondPartContent2 = false;
      this.showSecondPartContent3 = false;
      this.showSecondPartContent4 = false;
      this.showSecondPartContent5 = false;
      this.showSecondPartContent6 = false;

    },
    showSecondPart2() {
      this.showSecondPartContent1 = false;
      this.showSecondPartContent2 = true;
      this.showSecondPartContent3 = false;
      this.showSecondPartContent4 = false;
      this.showSecondPartContent5 = false;
      this.showSecondPartContent6 = false;

    },
    showSecondPart3() {
      this.showSecondPartContent1 = false;
      this.showSecondPartContent2 = false;
      this.showSecondPartContent3 = true;
      this.showSecondPartContent4 = false;
      this.showSecondPartContent5 = false;
      this.showSecondPartContent6 = false;

    },
    showSecondPart4() {
      this.showSecondPartContent1 = false;
      this.showSecondPartContent2 = false;
      this.showSecondPartContent3 = false;
      this.showSecondPartContent4 = true;
      this.showSecondPartContent5 = false;
      this.showSecondPartContent6 = false;

    },
    showSecondPart5() {
      this.showSecondPartContent1 = false;
      this.showSecondPartContent2 = false;
      this.showSecondPartContent3 = false;
      this.showSecondPartContent4 = false;
      this.showSecondPartContent5 = true;
      this.showSecondPartContent6 = false;

    },
    showSecondPart6() {
      this.showSecondPartContent1 = false;
      this.showSecondPartContent2 = false;
      this.showSecondPartContent3 = false;
      this.showSecondPartContent4 = false;
      this.showSecondPartContent5 = false;
      this.showSecondPartContent6 = true;

    },
  },
  data() {
    return {
      showSecondPartContent1: true,
      showSecondPartContent2: false,
      showSecondPartContent3: false,
      showSecondPartContent4: false,
      showSecondPartContent5: false,
      showSecondPartContent6: false
    };
  }
}
</script>
  

<style>

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
  border: 1px solid black;
}

.right-panel {
  flex: 3;
  border: 1px solid black;
}

.bottom-section {
  flex: 6;
  border: 1px solid black;
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
  width: 40%;
  height: auto;
  display: block;
  position: absolute;
  top: 95%;
  left: 50%;
  cursor: pointer;
  /* 鼠标悬停时显示可点击状态 */
  transform: translate(-50%, -50%);
}

.text {
  margin-top: -5px;
  font-size: 16px;
  font-family: serif;
}

.bottom-image {
  position: relative;
  justify-content: space-between;
  text-align: center;
  width: 50%;
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

.caption{
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: var(--td-brand-color-6);
  line-height: 49px;
  margin-left: 20px;
}
.sub-caption{
  width: 400px;
  height: 43px;
  font-size: 12px;
  margin-left: 10%;
  font-weight: 1000;
  letter-spacing: 1px;
  line-height: 15px;
  color: rgba(50, 132, 110, 0.5);
  text-align: left;
  vertical-align: middle;
}
</style>
