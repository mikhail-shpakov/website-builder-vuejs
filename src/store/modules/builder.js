import { getField, updateField } from 'vuex-map-fields'
import { ToastProgrammatic as Toast } from 'buefy'
import router from '../../router'

const state = {
  current: {},
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
    state.current.blocks = state.current.blocks.filter(e => e.id !== id).slice()
  },
  SAVE_PROJECT (state) {
    // удаляем из истории старую версию расчёта и сохраняем новую
    state.history = state.history.filter(e => e.id !== state.current.id)

    const copy = Object.assign({}, state.current)
    copy.saveTime = Date.now()

    state.history.push(copy)

    Toast.open({
      message: 'Проект успешно сохранён в историю',
      position: 'is-bottom',
      type: 'is-success',
      duration: 3000
    })
  },
  CREATE_NEW_SITE (state, siteName) {
    const id = Math.random().toString(36).substring(7)
    const template = {
      id,
      siteName,
      saveTime: null,
      options: {
        grid: false,
        width: 960,
        height: 960
      },
      blocks: []
    }

    state.current = Object.assign({}, template)
  },
  OPEN_HISTORY_PROJECT (state, id) {
    const findInHistory = state.history.find(e => e.id === id)
    state.current = Object.assign({}, findInHistory)
  },
  DELETE_HISTORY_PROJECT (state, id) {
    state.history = state.history.filter(e => e.id !== id).slice()
  }
}

const actions = {
  SAVE_BLOCK_STATE: (context, blockState) => {
    context.commit('SAVE_BLOCK_STATE', blockState)
  },
  DELETE_BLOCK: (context, id) => {
    context.commit('DELETE_BLOCK', id)
  },
  SAVE_PROJECT: (context) => {
    context.commit('SAVE_PROJECT')
  },
  CREATE_NEW_SITE: async (context, siteName) => {
    context.commit('CREATE_NEW_SITE', siteName)
    await router.push('builder')
  },
  OPEN_HISTORY_PROJECT: async (context, id) => {
    context.commit('OPEN_HISTORY_PROJECT', id)
    await router.push('builder')
  },
  DELETE_HISTORY_PROJECT: (context, id) => {
    context.commit('DELETE_HISTORY_PROJECT', id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
