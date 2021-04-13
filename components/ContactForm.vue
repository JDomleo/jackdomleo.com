<template>
  <form class="contact" method="POST" name="contact" netlify>
    <div class="textfield">
      <label for="contact-name">Name<span aria-hidden="true">*</span> <span class="sr-only">(required)</span></label>
      <span class="textfield__entry">
        <svg-icon name="user" />
        <input v-model="contactFormData.name" @change="autosave" id="contact-name" name="name" type="text" inputmode="text" autocomplete="name" placeholder="Mickey Mouse" required />
      </span>
    </div>
    <div class="textfield">
      <label for="contact-email">Email<span aria-hidden="true">*</span> <span class="sr-only">(required)</span></label>
      <span class="textfield__entry">
        <svg-icon name="email" />
        <input v-model="contactFormData.email" @change="autosave" id="contact-email" name="email" type="email" inputmode="email" autocomplete="email" placeholder="mickey.mouse@example.com" required />
      </span>
    </div>
    <div class="textfield">
      <label for="contact-message">Message<span aria-hidden="true">*</span> <span class="sr-only">(required)</span></label>
      <span class="textfield__entry">
        <svg-icon name="pencil" />
        <textarea v-model="contactFormData.message" @change="autosave" id="contact-message" name="message" type="text" inputmode="text" placeholder="Jack, I am contacting you on this fine day because..." required />
      </span>
    </div>
    <button class="btn" type="submit">Send</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface IContactFormData {
  email: string;
  name: string;
  message: string;
}

@Component
export default class ContactForm extends Vue {
  private contactFormData: IContactFormData = {
    email: '',
    name: '',
    message: ''
  };

  private mounted(): void {
    const data = sessionStorage.getItem("autosave");

    if (data) {
      this.contactFormData = JSON.parse(data);
    }
  }

  private autosave(): void {
    sessionStorage.setItem("autosave", JSON.stringify(this.contactFormData));
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