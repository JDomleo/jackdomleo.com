import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'

import TextInput from '@/components/form/TextInput.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because this component is isolated
  }
})

describe('TextInput.vue component', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input'
      }
    })

    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  /**
   * Emitters
   */

  it('emits the change event when onChange is called on the input', async () => {
    const change = jest.fn()

    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input'
      },
      listeners: {
        change
      }
    })

    await wrapper.find('input').trigger('change')
    expect(change).toHaveBeenCalled()
  })

  it('emits the change event when onChange is called on the textarea', async () => {
    const change = jest.fn()

    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input',
        multiline: true
      },
      listeners: {
        change
      }
    })

    await wrapper.find('textarea').trigger('change')
    expect(change).toHaveBeenCalled()
  })

  it('emits the input event when onInput is called on the input', async () => {
    const input = jest.fn()

    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input'
      },
      listeners: {
        input
      }
    })

    await wrapper.find('input').trigger('input')
    expect(input).toHaveBeenCalled()
  })

  it('emits the input event when onInput is called on the textarea', async () => {
    const input = jest.fn()

    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input',
        multiline: true
      },
      listeners: {
        input
      }
    })

    await wrapper.find('textarea').trigger('input')
    expect(input).toHaveBeenCalled()
  })

  it('emits the blur event when onInput is called on the input', async () => {
    const blur = jest.fn()

    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input'
      },
      listeners: {
        blur
      }
    })

    await wrapper.find('input').trigger('blur')
    expect(blur).toHaveBeenCalled()
  })

  it('emits the blur event when onInput is called on the textarea', async () => {
    const blur = jest.fn()

    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'test-input',
        multiline: true
      },
      listeners: {
        blur
      }
    })

    await wrapper.find('textarea').trigger('blur')
    expect(blur).toHaveBeenCalled()
  })

  /**
   * v-model
   */

  it('should set its input element\'s value to string "Jack" when v-model equals string "Jack"', () => {
    const wrapper = mount({
      data: () => ({ userName: 'Jack' }),
      components: { FormTextInput: TextInput },
      template: '<FormTextInput v-model="userName" label="Name" for-id="user-name" />'
    })

    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('Jack')
  })

  it('should set its textarea element\'s value to string "Jack" when v-model equals string "Jack"', () => {
    const wrapper = mount({
      data: () => ({ userName: 'Jack' }),
      components: { FormTextInput: TextInput },
      template: '<FormTextInput v-model="userName" label="Name" for-id="user-name" multiline />'
    })

    expect((wrapper.find('textarea').element as HTMLTextAreaElement).value).toBe('Jack')
  })

  it('should alter its input element\'s value to "banana" when the v-model value is changed from "apple" to "banana"', async () => {
    const apple = 'apple'
    const banana = 'banana'
    const wrapper = mount({
      components: { FormTextInput: TextInput },
      data: () => ({ fruit: apple }),
      template: '<FormTextInput v-model="fruit" label="Favourite fruit" for-id="fav-fruit" />'
    })

    const input = wrapper.find('input')

    expect((input.element as HTMLInputElement).value).toBe(apple)

    await wrapper.setData({ fruit: banana })

    expect((input.element as HTMLInputElement).value).toBe(banana)
  })

  it('should alter its textarea element\'s value to "banana" when the v-model value is changed from "apple" to "banana"', async () => {
    const apple = 'apple'
    const banana = 'banana'
    const wrapper = mount({
      components: { FormTextInput: TextInput },
      data: () => ({ fruit: apple }),
      template: '<FormTextInput v-model="fruit" label="Favourite fruit" for-id="fav-fruit" multiline />'
    })

    const input = wrapper.find('textarea')

    expect((input.element as HTMLTextAreaElement).value).toBe(apple)

    await wrapper.setData({ fruit: banana })

    expect((input.element as HTMLTextAreaElement).value).toBe(banana)
  })

  /**
   * Props
   */

  it('should render a label when passed a truthy value', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Your message',
        forId: 'example'
      }
    })

    expect(wrapper.find('label').text()).toBe('Your message')
  })

  it('should render `an` id on the input with an identical `for` on the label', () => {
    const forId = 'example'
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId
      }
    })

    expect(wrapper.find('label').attributes('for')).toBe(forId)
    expect(wrapper.find('input').attributes('id')).toBe(forId)
  })

  it('should render `an` id on the textarea with an identical `for` on the label', () => {
    const forId = 'example'
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId,
        multiline: true
      }
    })

    expect(wrapper.find('label').attributes('for')).toBe(forId)
    expect(wrapper.find('textarea').attributes('id')).toBe(forId)
  })

  it('should render a input of type `email` on the input when `type` is set to `email`', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        type: 'email'
      }
    })

    expect(wrapper.find('input').attributes('type')).toBe('email')
  })

  it('should render a input of type `email` on the textarea when `type` is set to `email`', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        type: 'email',
        multiline: true
      }
    })

    expect(wrapper.find('textarea').attributes('type')).toBe('email')
  })

  it('should render a input of inputmode `email` on the input when `inputmode` is set to `email`', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        inputmode: 'email'
      }
    })

    expect(wrapper.find('input').attributes('inputmode')).toBe('email')
  })

  it('should render a input of inputmode `email` on the textarea when `inputmode` is set to `email`', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        inputmode: 'email',
        multiline: true
      }
    })

    expect(wrapper.find('textarea').attributes('inputmode')).toBe('email')
  })

  it('should render a required input when required is true', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        required: true
      }
    })

    expect(wrapper.find('label > span[aria-hidden="true"]').text()).toBe('*')
    expect(wrapper.find('label > span.sr-only').text()).toBe('(required)')
    expect(wrapper.find('input').attributes('required')).toBe('required')
  })

  it('should render a required textarea when required is true', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        multiline: true,
        required: true
      }
    })

    expect(wrapper.find('label > span[aria-hidden="true"]').text()).toBe('*')
    expect(wrapper.find('label > span.sr-only').text()).toBe('(required)')
    expect(wrapper.find('textarea').attributes('required')).toBe('required')
  })

  it('should render a textarea when multiline is true', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        multiline: true
      }
    })

    expect(wrapper.find('.text-input__entry > textarea').exists()).toBe(true)
    expect(wrapper.find('.text-input__entry > input').exists()).toBe(false)
  })

  it('should render an input when multiline is false', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        multiline: false
      }
    })

    expect(wrapper.find('.text-input__entry > input').exists()).toBe(true)
    expect(wrapper.find('.text-input__entry > textarea').exists()).toBe(false)
  })

  it('should render an input when multiline is undefined', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example'
      }
    })

    expect(wrapper.find('.text-input__entry > input').exists()).toBe(true)
    expect(wrapper.find('.text-input__entry > textarea').exists()).toBe(false)
  })

  it('renders a pencil svg-icon component', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        icon: 'pencil'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.find('svg-icon-stub').attributes('name')).toBe('pencil')
  })

  it('renders a name attribute on the input when passed', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        name: 'email'
      }
    })

    expect(wrapper.find('input').attributes('name')).toBe('email')
  })

  it('renders a name attribute on the textarea when passed', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        name: 'email',
        multiline: true
      }
    })

    expect(wrapper.find('textarea').attributes('name')).toBe('email')
  })

  it('renders a placeholder on the input when passed a value', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        placeholder: 'mickey.mouse@example.com'
      }
    })

    expect(wrapper.find('input').attributes('placeholder')).toBe('mickey.mouse@example.com')
  })

  it('renders a placeholder on the textarea when passed a value', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        multiline: true,
        placeholder: 'mickey.mouse@example.com'
      }
    })

    expect(wrapper.find('textarea').attributes('placeholder')).toBe('mickey.mouse@example.com')
  })

  it('renders a autocomplete on the input when passed a value', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        autocomplete: 'name'
      }
    })

    expect(wrapper.find('input').attributes('autocomplete')).toBe('name')
  })

  it('renders a autocomplete on the textarea when passed a value', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        multiline: true,
        autocomplete: 'name'
      }
    })

    expect(wrapper.find('textarea').attributes('autocomplete')).toBe('name')
  })

  it('displays an accessible error with message on the input when an errorMsg is set', () => {
    const forId = 'example'
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId,
        errorMsg: 'This field is required'
      }
    })

    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
    expect(wrapper.find('input').attributes('aria-describedby')).toBe(`${forId}--error`)
    expect(wrapper.find('span.text-input__error').attributes('id')).toBe(`${forId}--error`)
    expect(wrapper.find('span.text-input__error').text()).toBe('This field is required')
  })

  it('displays an accessible error with message on the textarea when an errorMsg is set', () => {
    const forId = 'example'
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId,
        errorMsg: 'This field is required',
        multiline: true
      }
    })

    expect(wrapper.find('textarea').attributes('aria-invalid')).toBe('true')
    expect(wrapper.find('textarea').attributes('aria-describedby')).toBe(`${forId}--error`)
    expect(wrapper.find('span.text-input__error').attributes('id')).toBe(`${forId}--error`)
    expect(wrapper.find('span.text-input__error').text()).toBe('This field is required')
  })

  it('does not display an error message on the input when an errorMsg is not set', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example'
      }
    })

    expect(wrapper.find('input').attributes('aria-invalid')).toBe('false')
    expect(wrapper.find('input').attributes('aria-describedby')).toBeUndefined()
    expect(wrapper.find('span.text-input__error').exists()).toBe(false)
  })

  it('does not display an error message on the textarea when an errorMsg is not set', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Label',
        forId: 'example',
        multiline: true
      }
    })

    expect(wrapper.find('textarea').attributes('aria-invalid')).toBe('false')
    expect(wrapper.find('textarea').attributes('aria-describedby')).toBeUndefined()
    expect(wrapper.find('span.text-input__error').exists()).toBe(false)
  })
})
