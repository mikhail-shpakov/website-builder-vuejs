import { getField, updateField } from 'vuex-map-fields'

const state = {
  current: {
    name: 'Тестовый проект',
    options: {
      grid: true,
      width: 960,
      height: 960
    },
    blocks: []
  },
  history: []
}

const getters = {
  getField
}

const mutations = {
  updateField,
  SAVE_BLOCK_STATE (state, blockState) {
    const currentBlock = state.current.blocks.find(e => e.id === blockState.id)
    currentBlock.attributes = blockState.attributes.slice()
  },
  DELETE_BLOCK (state, id) {
    state.current.blocks = state.current.blocks.filter(e => e.id !== id)
  }
}

const actions = {
  SAVE_BLOCK_STATE: (context, blockState) => {
    context.commit('SAVE_BLOCK_STATE', blockState)
  },
  DELETE_BLOCK: (context, id) => {
    context.commit('DELETE_BLOCK', id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
