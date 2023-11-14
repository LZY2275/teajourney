<template>
  <div class="main-container">

    <div class="left-area">
      <!-- 左边的内容 -->
   
    </div>

    <div class="right-area">
      <!-- 右边的内容 -->
      <!--第一部分-->
      <div class="image-with-circles-container">

        <div class="image-with-circles" >
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="20" fill="green"  />
            <circle cx="50%" cy="30%" r="20" fill="green" />
            <circle cx="50%" cy="50%" r="20" fill="green" />
            <circle cx="50%" cy="70%" r="20" fill="green" />
            <circle cx="50%" cy="90%" r="20" fill="green" />
          </svg>
          <img src="../assets/img/tea.png" alt="Image 1"  @click="showSecondPart1"  >
        </div>
        <div class="text-container">
          <p class="slanted-text">西湖龙井</p>
          <p class="slanted-text">碧螺春</p>
          <p class="slanted-text">黄山毛峰</p>
          <p class="slanted-text">玉露</p>
          <p class="slanted-text">滇青</p>
          <p style=" right: 20%;top: 130%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">绿茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="20" fill="red" />
            <circle cx="50%" cy="30%" r="20" fill="blue" />
            <circle cx="50%" cy="50%" r="20" fill="purple" />
            <circle cx="50%" cy="70%" r="20" fill="purple" />
            <circle cx="50%" cy="90%" r="20" fill="purple" />
          </svg>
          <img src="../assets/img/tea.png" alt="Image 2"  @click="showSecondPart2" >
        </div>
        <div class="text-container">
          <p class="slanted-text">白毫银针</p>
          <p class="slanted-text">白牡丹</p>
          <p class="slanted-text">寿眉</p>
          <p class="slanted-text">贡眉</p>
          <p class="slanted-text">黄山白茶</p>
          <p style=" right: 20%;top: 130%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">白茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="20" fill="orange" />
            <circle cx="50%" cy="30%" r="20" fill="orange" />
            <circle cx="50%" cy="50%" r="20" fill="orange" />
            <circle cx="50%" cy="70%" r="20" fill="orange" />
            <circle cx="50%" cy="90%" r="20" fill="orange" />
          </svg>
          <img src="../assets/img/tea.png" alt="Image 3"  @click="showSecondPart3" > 
        </div>
        <div class="text-container">
          <p class="slanted-text">海马宫茶</p>
          <p class="slanted-text">蒙顶黄芽</p>
          <p class="slanted-text">霍山黄芽</p>
          <p class="slanted-text">广东大叶青</p>
          <p class="slanted-text">北港毛尖</p>
          <p style=" right: 20%;top: 130%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">黄茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="20" fill="blue" />
            <circle cx="50%" cy="30%" r="20" fill="blue" />
            <circle cx="50%" cy="50%" r="20" fill="blue" />
            <circle cx="50%" cy="70%" r="20" fill="blue" />
            <circle cx="50%" cy="90%" r="20" fill="blue" />
          </svg>
          <img src="../assets/img/tea.png" alt="Image 4" @click="showSecondPart4" >
        </div>
        <div class="text-container">
          <p class="slanted-text">铁观音</p>
          <p class="slanted-text">大红袍</p>
          <p class="slanted-text">肉桂</p>
          <p class="slanted-text">水仙</p>
          <p class="slanted-text">北斗</p>
          <p style=" right: 20%;top: 130%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">青茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="20" fill="red" />
            <circle cx="50%" cy="30%" r="20" fill="red" />
            <circle cx="50%" cy="50%" r="20" fill="red" />
            <circle cx="50%" cy="70%" r="20" fill="red" />
            <circle cx="50%" cy="90%" r="20" fill="red" />
          </svg>
          <img src="../assets/img/tea.png" alt="Image 5"  @click="showSecondPart5">
        </div>
        <div class="text-container">
          <p class="slanted-text">祁门红茶</p>
          <p class="slanted-text">滇红</p>
          <p class="slanted-text">正山小种</p>
          <p class="slanted-text">金骏眉</p>
          <p class="slanted-text">坦洋工夫</p>
          <p style=" right: 20%;top: 130%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">红茶
          </p>
        </div>

        <div class="image-with-circles">
          <svg class="circle-svg">
            <circle cx="50%" cy="10%" r="20" fill="black" />
            <circle cx="50%" cy="30%" r="20" fill="black" />
            <circle cx="50%" cy="50%" r="20" fill="black" />
            <circle cx="50%" cy="70%" r="20" fill="black" />
            <circle cx="50%" cy="90%" r="20" fill="black" />
          </svg>
          <img src="../assets/img/tea.png" alt="Image 6"  @click="showSecondPart6">
        </div>
        <div class="text-container">
          <p class="slanted-text">安化黑茶</p>
          <p class="slanted-text">普洱茶</p>
          <p class="slanted-text">六堡茶</p>
          <p class="slanted-text">泾阳茯砖茶</p>
          <p class="slanted-text">千两茶</p>
          <p style=" right: 20%;top: 130%;width:100%;display: block;position: absolute;font-family: serif;font-weight: bold;font-size: 20px;">黑茶
          </p>
        </div>
      </div>

      <!--第二部分-->
      <div style="height: 40%; position: relative;">

        <svg class="tree-svg" v-show="showSecondPartContent1">
          <path class="tree-path" d="M60 5 Q25 25, 40 400" />
          <path class="tree-path" d="M60 5 Q40 250, 500 400" />
          <path class="tree-path" d="M60 5 Q200 200, 550 400" />
          <path class="tree-path" d="M60 5 Q900 50, 1080 350" />
          <path class="tree-path" d="M60 5 Q1000 50, 1220 400" />
          <circle cx="60" cy="8" r="8" fill="green"  />
        </svg>

        <svg class="tree-svg" v-show="showSecondPartContent2">
          <path class="tree-path" d="M280 5 Q25 25, 40 400" />
          <path class="tree-path" d="M280 5 Q500 10, 950 400" />
          <path class="tree-path" d="M280 5 Q900 10, 1200 380" />
          <circle cx="280" cy="8" r="8" fill="green"  />
        </svg>

        <svg class="tree-svg" v-show="showSecondPartContent3">      
          <path class="tree-path" d="M480 5 Q25 25, 45 400" />
          <path class="tree-path" d="M480 5 Q25 25, 180 400" />
          <path class="tree-path" d="M480 5 Q50 50, 400 400" />
          <path class="tree-path" d="M480 5 Q1000 100, 980 400" />
          <path class="tree-path" d="M480 5 Q1000 100, 1220 400" />
          <circle cx="480" cy="8" r="8" fill="green"  />
        </svg>

        <svg class="tree-svg" v-show="showSecondPartContent4">          
          <path class="tree-path" d="M680 5 Q25 25, 45 400" />
          <path class="tree-path" d="M680 5 Q25 25, 180 400" />
          <path class="tree-path" d="M680 5 Q25 25, 300 400" />
          <path class="tree-path" d="M680 5 Q25 25, 420 400" />
          <path class="tree-path" d="M680 5 Q25 25, 550 400" />
          <path class="tree-path" d="M680 5 Q800 20, 1220 380" />
          <circle cx="680" cy="8" r="8" fill="green"  />
        </svg>
        <svg class="tree-svg" v-show="showSecondPartContent5">  
          <path class="tree-path" d="M880 5 Q25 25, 45 400" />
          <path class="tree-path" d="M880 5 Q25 25, 180 400" />
          <path class="tree-path" d="M880 5 Q25 25, 540 400" />
          <path class="tree-path" d="M880 5 Q250 50, 620 400" />
          <path class="tree-path" d="M880 5 Q1000 50, 1200 400" />
          <circle cx="880" cy="8" r="8" fill="green"  />
        </svg>
        <svg class="tree-svg" v-show="showSecondPartContent6">
          <path class="tree-path" d="M1080 5 Q25 25, 45 400" />
          <path class="tree-path" d="M1080 5 Q25 25, 180 400" />
          <path class="tree-path" d="M1080 5 Q25 25, 400 400" />
          <path class="tree-path" d="M1080 5 Q500 50, 440 400" />
          <path class="tree-path" d="M1080 5 Q700 50, 650 400" />
          <path class="tree-path" d="M1080 5 Q800 50, 750 400" />
          <path class="tree-path" d="M1080 5 Q1250 100, 1170 400" />
          <circle cx="1080" cy="8" r="8" fill="green"  />
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

<style scoped>
.main-container {
  padding: 30px;
  display: flex;
  height: 100vh;
}

.tree-svg {
  width: 100%;
  height: 100%;
  position: absolute; /* 或者使用 fixed，根据你的需求 */
  bottom: 0;
  left: 0;
}

.tree-path {
  fill: none;
  stroke: rgba(50, 132, 110, 1);
  stroke-width: 2;
}

.left-area {
  border: 1px solid black;
  width: 20%;
}

.right-area {
  width: 80%;
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
  height: 100%;
}
.circle-svg {
  top: 5%;
  position: relative;
  justify-content: space-between;
  text-align: center;
  height: 70%;
  width: 50%;
}

img {
  width: 40%;
  height: auto;
  display: block;
  position: absolute;
  top: 90%;
  left: 50%;
  cursor: pointer; /* 鼠标悬停时显示可点击状态 */
  transform: translate(-50%, -50%);
}

.text {
  margin-top: 15%;
  font-size: 16px;
  font-family: serif;
}

.bottom-image {
  position: relative;
  justify-content: space-between;
  text-align: center;
  width: 60%;
  height: auto;
  top: 50%;
}

.text-container {
  right: 2%;
  width: 12%;
  top: 10%;
  height: 60%;
  position: relative;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  align-items: flex-start;
  /* 让子元素在垂直方向上向上对齐 */
}

.slanted-text {
  font-style: italic;
  transform: rotate(-40deg);
  transform-origin: 0 100%;
  margin: 0;
}</style>
