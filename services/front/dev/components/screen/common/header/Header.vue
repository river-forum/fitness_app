<template>
  <div class="relative flex">
    <Menu class="fixed top-0" :class="{ 'is-active': active }" />
    <header id="header" class="w-full bg-white header">
      <div class="l-container">
        <div class="relative flex items-center justify-center header__wrapper">
          <button
            class="absolute top-0 bottom-0 left-0 w-12 h-10 m-auto menu-button"
            :class="{ 'is-active': active }"
            @click="menuOpen"
          >
            <span
              class="absolute top-0 left-0 right-0 block h-px bg-black menu-button__line"
            ></span>
            <span
              class="absolute top-0 bottom-0 left-0 right-0 block h-px m-auto bg-black menu-button__line"
            ></span>
            <span
              class="absolute bottom-0 left-0 right-0 block h-px bg-black menu-button__line"
            ></span>
          </button>
          <h1 class="text-4xl font-semibold logo">JOY FIT</h1>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Menu from './menu/Menu.vue'

export default defineComponent({
  components: {
    Menu,
  },
  setup() {
    function menuOpen() {
      this.active = !this.active
    }

    return {
      menuOpen,
    }
  },
  data() {
    return {
      active: false,
    }
  },
})
</script>

<style lang="scss">
.menu {
  left: -75%;
  transition: 0.3s ease;

  &.is-active {
    left: 0;
  }
}
.menu-button {
  $this: #{&};
  &__line {
    transition: 0.3s;
  }
  &.is-active {
    #{$this}__line {
      &:first-child {
        transform: rotate(45deg);
        top: 50%;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg);
        top: 50%;
      }
    }
  }
}
</style>
