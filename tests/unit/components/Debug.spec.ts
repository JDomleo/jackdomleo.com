import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'

import Debug from '@/components/Debug.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because this component is isolated
  }
})

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

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(Debug, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      }
    })

    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})
