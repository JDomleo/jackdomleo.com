<template>
  <form method="POST" name="contact" data-netlify="true" netlify-honeypot="bot-field">
    <div class="contact">
      <input type="hidden" name="form-name" value="contact">
      <div style="display: none">
        <label for="bot-field">
          Do not fill out this field if you are human!
        </label>
        <input id="bot-field" name="bot-field">
      </div>
      <div class="textfield">
        <label for="contact-name">
          Name<span aria-hidden="true">
            *
          </span> <span class="sr-only">
            (required)
          </span>
        </label>
        <span class="textfield__entry">
          <svg-icon name="user" />
          <input
            id="contact-name"
            v-model="contactForm.name"
            name="name"
            type="text"
            inputmode="text"
            autocomplete="name"
            placeholder="Mickey Mouse"
            required
            :aria-invalid="$v.contactForm.name.$dirty && $v.contactForm.name.$invalid.toString()"
            :aria-describedby="$v.contactForm.name.$dirty && $v.contactForm.name.$invalid && 'contact-name--error'"
            @change="autosave"
            @input="touch('name')"
            @blur="touch('name')"
          >
        </span>
        <span v-if="$v.contactForm.name.$error" id="contact-name--error" class="textfield__error" role="alert">
          This field is required
        </span>
      </div>
      <div class="textfield">
        <label for="contact-email">
          Email<span aria-hidden="true">
            *
          </span> <span class="sr-only">
            (required)
          </span>
        </label>
        <span class="textfield__entry">
          <svg-icon name="email" />
          <input
            id="contact-email"
            v-model="contactForm.email"
            name="email"
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="mickey.mouse@example.com"
            required
            :aria-invalid="$v.contactForm.email.$dirty && $v.contactForm.email.$invalid.toString()"
            :aria-describedby="$v.contactForm.email.$dirty && $v.contactForm.email.$invalid && 'contact-email--error'"
            @change="autosave"
            @input="touch('email')"
            @blur="touch('email')"
          >
        </span>
        <span v-if="$v.contactForm.email.$error" id="contact-email--error" class="textfield__error" role="alert">
          <template v-if="!$v.contactForm.email.email">
            Enter a valid email address
          </template><template v-else-if="!$v.contactForm.email.required">
            This field is required
          </template>
        </span>
      </div>
      <div class="textfield">
        <label for="contact-message">
          Message<span aria-hidden="true">
            *
          </span> <span class="sr-only">
            (required)
          </span>
        </label>
        <span class="textfield__entry">
          <svg-icon name="pencil" />
          <textarea
            id="contact-message"
            v-model="contactForm.message"
            name="message"
            type="text"
            inputmode="text"
            placeholder="Jack, I am contacting you on this fine day because..."
            required
            :aria-invalid="$v.contactForm.message.$dirty && $v.contactForm.message.$invalid.toString()"
            :aria-describedby="$v.contactForm.message.$dirty && $v.contactForm.message.$invalid && 'contact-message--error'"
            @change="autosave"
            @input="touch('message')"
            @blur="touch('message')"
          />
        </span>
        <span v-if="$v.contactForm.message.$error" id="contact-message--error" class="textfield__error" role="alert">
          This field is required
        </span>
      </div>
      <button class="btn" type="submit" :disabled="$v.contactForm.$invalid" :aria-label="$v.contactForm.$invalid ? 'Some required fields are missing' : undefined" :data-cooltipz-dir="$v.contactForm.$invalid ? 'left' : undefined">
        Send
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { email, required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  mixins: [validationMixin],
  validations: {
    contactForm: {
      name: {
        required
      },
      email: {
        email,
        required
      },
      message: {
        required
      }
    }
  }
})
export default class ContactForm extends Vue {
  private contactForm: IContactForm = {
    name: '',
    email: '',
    message: ''
  };

  private mounted (): void {
    const data = sessionStorage.getItem('autosave')

    if (data) {
      this.contactForm = JSON.parse(data)
    }
  }

  private autosave (): void {
    sessionStorage.setItem('autosave', JSON.stringify(this.contactForm))
  }

  private touch (formField: string): void {
    return this.$v.contactForm[formField]!.$touch()
  }
}
</script>

<style lang="scss">
:root {
  --contact-border: var(--body-color);
  --contact-placeholder: var(--base-grey-middle);
}

.theme--dark {
  --contact-placeholder: var(--base-grey-lighter);
}
</style>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button[type="submit"] {
    align-self: flex-end;
  }
}

.textfield {
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
    border: 2px solid var(--contact-border);
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
        color: var(--contact-placeholder);
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

.btn {
  border: 2px solid currentColor;
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  transition: background-color 160ms ease;

  &:not( [disabled] ) {
    &:hover,
    &:focus {
      background-color: var(--base-orange);
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
}
</style>
