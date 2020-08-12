import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Start from '../index'
import { getField, updateField } from 'vuex-map-fields'

const localVue = createLocalVue()
const moment = require('moment')

localVue.use(Buefy)
localVue.use(Vuex)
localVue.use(require('vue-moment'), { moment })

describe('./Start.vue', () => {
  let store
  let actions

  beforeEach(() => {
    window.confirm = jest.fn(() => true)

    const template = {
      id: 'some_id',
      siteName: 'some_name',
      saveTime: null,
      options: {
        grid: false,
        width: 960,
        height: 960
      },
      blocks: []
    }

    const state = {
      current: template,
      history: [template]
    }

    const getters = {
      getField
    }

    const mutations = {
      updateField
    }

    actions = {
      CREATE_NEW_SITE: jest.fn(),
      OPEN_HISTORY_PROJECT: jest.fn(),
      DELETE_HISTORY_PROJECT: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        builder: {
          state,
          getters,
          mutations,
          actions,
          namespaced: true
        }
      }
    })
  })

  it('when load page, Start page renders correctly', () => {
    const wrapper = shallowMount(Start, {
      localVue,
      store
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('when clicking a buttons ,' +
    ' will be called appropriate action', () => {
    const wrapper = shallowMount(Start, {
      localVue,
      store
    })

    const listActions = {
      'button-create': 'CREATE_NEW_SITE',
      'button-open': 'OPEN_HISTORY_PROJECT',
      'button-delete': 'DELETE_HISTORY_PROJECT'
    }

    Object.keys(listActions).forEach(e => {
      const button = wrapper.findComponent({ ref: e })
      button.trigger('click')

      const actionName = listActions[e]
      expect(actions[actionName]).toHaveBeenCalled()
    })
  })
})
