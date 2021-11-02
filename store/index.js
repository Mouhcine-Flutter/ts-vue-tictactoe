import Vue from 'vue'
import { togglePlayer, isWinner, boardIsFull } from '~/utils/game.js'

export const state = () => ({
  board: [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ],
  player: 'X',
  isRoundInProgress: true,
  isDraw: true
})

export const mutations = {
  play (state, positionPayload) {
    const { column, row } = positionPayload
    const tmpColumn = state.board[column]
    if (tmpColumn[row] === ' ' && state.isRoundInProgress) {
      // if you can play then play the move
      Vue.set(tmpColumn, row, state.player)
      Vue.set(state.board, column, tmpColumn)

      // check if player won
      if (isWinner(state)) {
        console.log(state.player + ' is the winner')
        state.isRoundInProgress = false
        state.isDraw = false
      } else if (boardIsFull(state)) {
      // check if it's a draw
        state.isRoundInProgress = false
        console.log('Partie terminé !')
      } else {
      // then toggle the player
        togglePlayer(state)
      }
    }
  },
  restart (state) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        Vue.set(state.board[i], j, ' ')
      }
    }
    state.player = 'X'
    state.isRoundInProgress = true
    state.isDraw = true
  }
}
