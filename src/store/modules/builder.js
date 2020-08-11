import { getField, updateField } from 'vuex-map-fields'

const state = {
  current: {
    name: 'Тестовый проект',
    options: {
      grid: true,
      width: 960,
      height: 960
    }
  },
  history: []
}

const getters = {
  getField
}

const mutations = {
  updateField,
  SAVE_META_RESULT (state, data) {
  }
}

const actions = {
  SAVE_PROJECT: (context, status) => {
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
