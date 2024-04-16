<template>
  <div id="memory-game">
    <div class="cards">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :class="{ flipped: card.flipped, matched: card.matched }"
        @click="flipCard(index)"
      >
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back">{{ card.value }}</div>
        </div>
      </div>
    </div>
    <div class="timer" v-if="!gameOver">{{ time }}</div>
    <button @click="resetGame">Reset Game</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
      flippedCards: [],
      pairsFound: 0,
      totalPairs: 6,
      cardValues: ["A", "B", "C", "D", "E", "F"],
      time: 0,
      gameOver: false,
      timer: null
    };
  },
  mounted() {
    this.initializeGame();
    this.startTimer();
  },
  methods: {
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
          flipped: false,
          matched: false,
          position: index < this.totalPairs ? "top" : "bottom"
        });
      });
    },
    flipCard(index) {
      if (this.flippedCards.length < 2 && !this.cards[index].flipped && !this.cards[index].matched) {
        this.cards[index].flipped = true;
        this.flippedCards.push(index);

        if (this.flippedCards.length === 2) {
          setTimeout(() => {
            this.checkMatch();
          }, 1000);
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
        this.gameOver = true;
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
      this.initializeGame();
      this.startTimer();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
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
  flex-wrap: wrap;
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
  background-color: #f00;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card.matched {
  pointer-events: none;
  opacity: 0.5;
}

.timer {
  font-size: 24px;
  margin-top: 20px;
}

button {
  margin-top: 20px;
}
</style>
