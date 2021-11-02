<template>
  <div class="container">
    <h3 v-if="isRoundInProgress">
      {{ currentPlayer }} is playing !
    </h3>
    <h3 v-else-if="isDraw">
      It's a draw !
    </h3>
    <h3 v-else>
      {{ currentPlayer }} won !
    </h3>
    <div class="board-wrapper">
      <Board />
    </div>
    <div class="btn-text-center">
      <button @click="restart">
        Restart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Board from '~/components/Board.vue'

export default Vue.extend({
  components: { Board },
  computed: {
    currentPlayer () {
      return this.$store.state.player
    },
    isDraw () {
      return this.$store.state.isDraw
    },
    isRoundInProgress () {
      return this.$store.state.isRoundInProgress
    }
  },
  methods: {
    ...mapMutations(['restart'])
  }
})
</script>

<style>
* {
  --bg-dark: rgba(211, 153, 82, 0.99);
  --bg: #d5d5b9;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

body {
  background-color: var(--bg-dark);
  color: #ffffff;
  margin: 0;
}

h3 {
  margin-bottom: 2rem;
  font-size: 3rem;
  text-align: center;
}

.container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33rem;
  margin: auto;
}

.board-wrapper {
  padding: 2rem;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
}

button {
  width: 8rem;
  height: 3rem;
  font-size: 1.1rem;
  margin-top: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #ec5050;
  color: white;
}

.btn-text-center{
  text-align: center;
}
</style>
