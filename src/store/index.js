import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import builder from './modules/builder'

const ls = new SecureLS({
  encodingType: 'aes',
  isCompression: false
})

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key)
    }
  })],
  modules: {
    builder
  }
})

export default store
