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
            <div class="card-back">
              <img :src="getImage(card.value)" alt="card image" class="card-image" v-show="card.flipped">
            </div>
            <div class="card-front"></div>
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
            <div class="card-back">
              <img :src="getImage(card.value)" alt="card image" class="card-image" v-show="card.flipped">
            </div>
            <div class="card-front"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="timer" v-if="gameStarted && !gameOver">{{ time }}</div>
    <button @click="startGame" v-if="!gameStarted">Start Game</button>
    <button @click="resetGame" v-if="gameStarted">Reset Game</button>
  </div>
</template>

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

button {
  margin-top: 20px;
}

.card-image {
  max-width: 100%;
  max-height: 100%;
}
</style>
