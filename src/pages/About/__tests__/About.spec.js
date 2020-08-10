import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import About from '../index'

describe('About', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  it('when load page, renders correctly', () => {
    const wrapper = shallowMount(About, {
      localVue
    })

    expect(wrapper).toMatchSnapshot()
  })
})
