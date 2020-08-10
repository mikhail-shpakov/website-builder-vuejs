import { createLocalVue, RouterLinkStub, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import Error404 from '../index'

describe('Error404', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)
  localVue.component('router-link', RouterLinkStub)

  it('when load page, renders correctly', () => {
    const wrapper = shallowMount(Error404, {
      localVue
    })

    expect(wrapper).toMatchSnapshot()
  })
})
