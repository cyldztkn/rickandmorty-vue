<script setup>
import { ref } from 'vue'
let openMenuSrc = './images/open-the-menu.svg'

let asideClass = ref('close')

let menuToggler = () => {
  if (asideClass.value === 'close') {
    asideClass.value = ''
  } else {
    asideClass.value = 'close'
  }
}
</script>

<template>
  <aside :class="asideClass">
    <img :src="openMenuSrc" alt="" @click="menuToggler" />

    <slot></slot>
  </aside>
</template>

<style>
aside {
  background-color: var(--primary);
  box-shadow: var(--sidebar-shadow);
  flex: 5 0 auto;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: var(--transition);
  height: unset;
  padding: 28px 24px;
  max-width: 320px;
  gap: 40px;
  overflow: hidden;
  max-height: 92dvh;

  form {
    opacity: 1;
    visibility: visible;
    transition: var(--transition);
    width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--secondary-default);
    gap: 20px;

    label,
    input {
      display: inline-flex;
      opacity: inherit;
      visibility: inherit;
      border: none;
      outline: none;
      text-transform: capitalize;
      gap: 4px;
      font-size: 16px;
      cursor: pointer;
    }

    input[type='text'] {
      background-color: var(--primary);
      color: var(--secondary-default);
      font-size: 1rem;
      font-weight: 400;
      border: 1px solid var(--secondary-default);
      border-radius: 8px;
      padding: 16px 8px;
    }

    input[type='text']::placeholder {
      color: var(--secondary-op40);
    }

    input[type='text']:focus {
      border: 1px solid var(--secondary-light);
      box-shadow: var(--input-focus-shadow);
    }

    .status-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    hr {
      width: 100%;
      border: 1px solid var(--secondary-default);
    }

    .species {
      display: flex;
      gap: 16px;

      .col {
        flex: 1 0 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }

  img {
    rotate: 180deg;
    transition: var(--transition);
    margin-left: auto;
  }
}

aside.close {
  flex: 1 0 auto;
  max-width: 80px;

  img {
    rotate: 0deg;
    margin-left: auto;
    transition: var(--transition);
  }

  form {
    opacity: 0;
    visibility: hidden;

    label,
    input {
      /* display: none; */
      opacity: inherit;
      visibility: inherit;
    }
  }
}

@media screen and (max-width: 744px) {
  aside {
    position: absolute;
    width: 324px;
    height: 96%;
    left: 0;
    top: 24px;
    padding: 32px 20px 12px 20px;
    justify-content: flex-start;
    z-index: 100;
  }

  aside.close {
    width: 76px;
    height: 76px;
    padding: 0px;
    padding-top: 20px;
    padding-right: 20px;
    justify-content: flex-start;

    img {
      margin-left: auto;
      /* margin-right: auto; */
    }

    form {
      /* display: none; */
      visibility: hidden;
      opacity: 0;
    }
  }
}
</style>
