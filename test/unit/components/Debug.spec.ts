import { mount, shallowMount } from '@vue/test-utils'
import Debug from '@/components/Debug.vue'

describe('Debug.vue component', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(Debug, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(Debug, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(Debug, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
