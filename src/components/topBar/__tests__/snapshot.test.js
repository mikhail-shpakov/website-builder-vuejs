import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import topBar from '../index'

describe('./index.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  it('when load page, topBar renders correctly', () => {
    const wrapper = shallowMount(topBar, {
      localVue
    })
    expect(wrapper).toMatchSnapshot()
  })
})
