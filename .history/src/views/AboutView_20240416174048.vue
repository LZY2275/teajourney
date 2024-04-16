<template>
  <div id="memory-game">
    <div class="cards">
      <div class="row">
        <div
          v-for="(card, index) in topCards"
          :key="index"
          class="card"
          :class="{ flipped: card.flipped, matched: card.matched }"
          @click="flipCard(index)"
        >
          <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">
              <img :src="getImage(card.value)" alt="card image" class="card-image" v-show="card.flipped">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(card, index) in bottomCards"
          :key="index"
          class="card"
          :class="{ flipped: card.flipped, matched: card.matched }"
          @click="flipCard(index + totalPairs)"
        >
          <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">
              <img :src="getImage(card.value)" alt="card image" class="card-image" v-show="card.flipped">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="timer" v-if="gameStarted && !gameOver">{{ time }}</div>
    <div class="message" v-if="!gameStarted">
      <p>Click the button to start the game!</p>
    </div>
    <t-dialog
      theme="success"
      header="恭喜通关!"
      :body="`You completed the game in ${time} seconds!`"
      :visible.sync="showModal"
      @confirm="closeModal"
      :cancelBtn="null"
    />
    <t-button theme="success"  @click="startGame" v-if="!gameStarted">开始游戏</t-button>
    <t-button theme="success" @click="resetGame" v-if="gameStarted">重置游戏</t-button>

  </div>
</template>

<script>
import { CheckCircleFilledIcon } from 'tdesign-icons-vue';
export default {
  components: {
    CheckCircleFilledIcon,
  },
  data() {
    return {
      cards: [],
      flippedCards: [],
      pairsFound: 0,
      totalPairs: 6,
      cardValues: ["A", "B", "C", "D", "E", "F"],
      time: 0,
      gameOver: false,
      timer: null,
      gameStarted: false,
      images: {
        A: "https://img1.baidu.com/it/u=922333340,3094795098&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=601",
        B: "https://img1.baidu.com/it/u=1342494103,2806505097&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        C: "https://img2.baidu.com/it/u=2633629294,87637224&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=440",
        D: "https://img0.baidu.com/it/u=1630442102,233957103&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
        E: "https://img2.baidu.com/it/u=1530273410,2090261928&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=743",
        F: "https://img1.baidu.com/it/u=3347037938,1870993218&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
      },
      showModal: false,
    };
  },
  computed: {
    topCards() {
      return this.cards.slice(0, this.totalPairs);
    },
    bottomCards() {
      return this.cards.slice(this.totalPairs);
    }
  },
  mounted() {
    this.initializeGame();
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    startGame() {
      this.gameStarted = true;
      this.startTimer();
    },
    initializeGame() {
      this.cards = [];
      this.flippedCards = [];
      this.pairsFound = 0;

      // Create pairs of cards
      let values = this.cardValues.concat(this.cardValues);
      values = this.shuffleArray(values);

      values.forEach((value, index) => {
        this.cards.push({
          value: value,
          flipped: false, // Initially hide cards
          matched: false
        });
      });

      setTimeout(() => {
        this.cards.forEach(card => {
          card.flipped = false; // Hide cards after a short delay
        });
      }, 2000);
    },
    flipCard(index) {
      // Check if the game has started
      if (!this.gameStarted) {
        alert("Please start the game first!");
        return; // Do nothing if the game hasn't started
      }

      if (!this.cards[index].flipped && !this.cards[index].matched && this.flippedCards.length < 2) {
        this.cards[index].flipped = true;
        this.flippedCards.push(index);

        if (this.flippedCards.length === 2) {
          setTimeout(() => {
            this.checkMatch();
          }, 2000);
        }
      }
    },
    checkMatch() {
      const [index1, index2] = this.flippedCards;
      if (this.cards[index1].value === this.cards[index2].value) {
        this.cards[index1].matched = true;
        this.cards[index2].matched = true;
        this.pairsFound++;
      } else {
        this.cards[index1].flipped = false;
        this.cards[index2].flipped = false;
      }

      this.flippedCards = [];

      if (this.pairsFound === this.totalPairs) {
        clearInterval(this.timer);
        this.showModal = true;
      }
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    resetGame() {
      clearInterval(this.timer);
      this.time = 0;
      this.gameOver = false;
      this.gameStarted = false;
      this.initializeGame();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    },
    getImage(value) {
      return this.images[value];
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
#memory-game {
  text-align: center;
}

.cards {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: center;
}

.card {
  width: 100px;
  height: 150px;
  margin: 10px;
  perspective: 1000px;
  cursor: pointer;
}

.card .card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card .card-inner .card-front,
.card .card-inner .card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .card-inner .card-front {
  background-color: #ccc;
}

.card .card-inner .card-back {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg); /* Initially hidden */
}

.card.matched {
  pointer-events: none;
  opacity: 0.5;
}

.timer {
  font-size: 24px;
  margin-top: 20px;
}

.message {
  margin-top: 20px;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

button {
  margin-top: 20px;
}

.card-image {
  max-width: 100%;
  max-height: 100%;
}
</style>
