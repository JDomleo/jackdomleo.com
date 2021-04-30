<template>
  <div class="text-input">
    <label :for="forId">
      {{ label }}
      <template v-if="required">
        <span aria-hidden="true">
          *
        </span> <span class="sr-only">
          (required)
        </span>
      </template>
    </label>
    <span class="text-input__entry">
      <svg-icon v-if="icon" :name="icon" />
      <textarea
        v-if="multiline"
        :id="forId"
        v-model="inputValue"
        :name="name"
        :type="type"
        :inputmode="inputmode"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required"
        :aria-invalid="errorMsg ? 'true' : 'false'"
        :aria-describedby="errorMsg && `${forId}--error`"
        @change="onChange"
        @input="onInput"
        @blur="onBlur"
      />
      <input
        v-else
        :id="forId"
        v-model="inputValue"
        :name="name"
        :type="type"
        :inputmode="inputmode"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required"
        :aria-invalid="errorMsg ? 'true' : 'false'"
        :aria-describedby="errorMsg && `${forId}--error`"
        @change="onChange"
        @input="onInput"
        @blur="onBlur"
      >
    </span>
    <span v-if="errorMsg" :id="`${forId}--error`" class="text-input__error" role="alert">
      {{ errorMsg }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'
import { stringHasNoWhitespace } from '@/helpers/propValidators'

@Component
export default class TextInput extends Vue {
  @Prop({
    type: String,
    required: true
  }) private readonly label!: string;

  @Prop({
    type: String,
    required: true,
    validator (value: string): boolean {
      return stringHasNoWhitespace(value)
    }
  }) private readonly forId!: string;

  @Prop({
    type: String,
    default: undefined
  }) private readonly value!: string;

  @Prop({
    type: String,
    default: 'text',
    validator: (value: string): boolean => {
      return ['text', 'email'].includes(value) && stringHasNoWhitespace(value)
    }
  }) private readonly type!: string;

  @Prop({
    type: String,
    default: undefined,
    validator: (value: string): boolean => {
      return ['text', 'email'].includes(value) && stringHasNoWhitespace(value)
    }
  }) private readonly inputmode!: string;

  @Prop({
    type: Boolean,
    default: false
  }) private readonly required!: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) private readonly multiline!: boolean;

  @Prop({
    type: String,
    default: undefined,
    validator (value: string): boolean {
      return stringHasNoWhitespace(value)
    }
  }) private readonly icon!: string;

  @Prop({
    type: String,
    default: undefined,
    validator (value: string): boolean {
      return stringHasNoWhitespace(value)
    }
  }) private readonly name!: string;

  @Prop({
    type: String,
    default: undefined
  }) private readonly placeholder!: string;

  @Prop({
    type: String,
    default: undefined
  }) private readonly autocomplete!: string;

  @Prop({
    type: String,
    default: undefined
  }) private readonly errorMsg!: string;

  private _inputValue: string = '';

  get inputValue (): string {
    if (this.value && this.value.toString() !== this._inputValue) {
      this._inputValue = this.value.toString()
    }
    return this._inputValue
  }

  set inputValue (value: string) {
    this._inputValue = value
  }

  private created () {
    if (this.value) {
      this._inputValue = this.value.toString()
    }
  }

  @Emit('change')
  private onChange (event: Event): string {
    return (event.target as HTMLInputElement).value
  }

  @Emit('input')
  private onInput (event: Event): string {
    return (event.target as HTMLInputElement).value
  }

  @Emit('blur')
  private onBlur (event: Event): string {
    return (event.target as HTMLInputElement).value
  }
}
</script>

<style lang="scss">
:root {
  --text-input-border: var(--body-color);

  --text-input-placeholder: var(--base-grey-middle);
}

.theme--dark {
  --text-input-placeholder: var(--base-grey-lighter);
}
</style>

<style lang="scss" scoped>
.text-input {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  label {
    font-size: 1.2rem;

    span[aria-hidden="true"] {
      color: var(--alt-orange);
      user-select: none;
    }
  }

  &__entry {
    display: flex;
    gap: 0.5rem;
    border: 2px solid var(--text-input-border);
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:focus-within {
      border-color: var(--alt-orange);

      svg {
        color: var(--alt-orange);
      }
    }

    svg {
      height: 2.5rem;
      width: 2.5rem;
      padding-right: 0.5rem;
      border-right: 2px solid currentColor;
    }

    input,
    textarea {
      flex: 1;
      background-color: transparent;
      color: currentColor;
      border: none;

      &::placeholder {
        color: var(--text-input-placeholder);
      }

      &:focus {
        outline: none;
      }
    }

    textarea {
      resize: vertical;
      min-height: 25vmin;

      @media (min-width: 550px) {
        min-height: 15vmin;
      }
    }
  }

  &__error {
    color: var(--base-red);
    font-weight: 700;
  }
}
</style>
