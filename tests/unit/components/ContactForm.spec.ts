import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'

import ContactForm from '@/components/ContactForm.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because this component is isolated
  }
})

describe('ContactForm.vue component', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(ContactForm, {
      stubs: ['svg-icon']
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(ContactForm, {
      stubs: ['svg-icon']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(ContactForm, {
      stubs: ['FormTextInput']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(ContactForm, {
      stubs: ['svg-icon']
    })

    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  /**
   * Interactivity
   */

  it('enables the send button when all fields have been filled in', async () => {
    const wrapper = mount(ContactForm, {
      stubs: ['svg-icon']
    })

    const sendButton = wrapper.find('button[type="submit"]')

    expect(sendButton.attributes('disabled')).toBe('disabled')

    await wrapper.find('input#contact-name').setValue('Mickey Mouse')
    await wrapper.find('input#contact-email').setValue('mickey.mouse@example.com')
    await wrapper.find('textarea#contact-message').setValue('Hello Jack!')

    expect(sendButton.attributes('disabled')).toBeUndefined()

    await wrapper.find('input#contact-name').setValue('')
    await wrapper.find('input#contact-email').setValue('')
    await wrapper.find('textarea#contact-message').setValue('')

    expect(sendButton.attributes('disabled')).toBe('disabled')
  })

  it('only shows errors if the form field is dirty and is invalid', async () => {
    const wrapper = mount(ContactForm, {
      stubs: ['svg-icon']
    })

    expect(wrapper.find('span#contact-name--error').exists()).toBe(false)
    expect(wrapper.find('span#contact-email--error').exists()).toBe(false)
    expect(wrapper.find('span#contact-message--error').exists()).toBe(false)

    await wrapper.find('input#contact-name').setValue('Mickey Mouse')
    await wrapper.find('input#contact-email').setValue('mickey.mouse@example.com')
    await wrapper.find('textarea#contact-message').setValue('Hello Jack!')

    expect(wrapper.find('span#contact-name--error').exists()).toBe(false)
    expect(wrapper.find('span#contact-email--error').exists()).toBe(false)
    expect(wrapper.find('span#contact-message--error').exists()).toBe(false)

    await wrapper.find('input#contact-name').setValue('')
    await wrapper.find('input#contact-email').setValue('')
    await wrapper.find('textarea#contact-message').setValue('')

    expect(wrapper.find('span#contact-name--error').exists()).toBe(true)
    expect(wrapper.find('span#contact-email--error').exists()).toBe(true)
    expect(wrapper.find('span#contact-message--error').exists()).toBe(true)

    await wrapper.find('input#contact-name').setValue('Mickey Mouse')
    await wrapper.find('input#contact-email').setValue('mickey.mouse@example.com')
    await wrapper.find('textarea#contact-message').setValue('Hello Jack!')

    expect(wrapper.find('span#contact-name--error').exists()).toBe(false)
    expect(wrapper.find('span#contact-email--error').exists()).toBe(false)
    expect(wrapper.find('span#contact-message--error').exists()).toBe(false)
  })
})
