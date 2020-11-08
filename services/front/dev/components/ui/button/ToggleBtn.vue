<template>
  <ul class="flex bg-gray-400 border-2 border-solid rounded border-gray-500/">
    <li
      v-for="(text, index) in buttonInnerTexts"
      :key="text"
      class="w-2/4 toggle-button"
    >
      <button
        class="flex items-center justify-center w-full h-32 rounded toggle-button__item"
        :class="[index === 0 || isActive ? 'is-active' : '']"
        @click="isActive = !isActive"
      >
        {{ text }}
        {{ index }}
      </button>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    buttonInnerTexts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isActive: true,
    }
  },
  setup() {
    function changeActive(current) {
      console.log(current)
    }

    return {
      changeActive,
    }
  },
})
</script>

<style lang="scss">
.toggle-button {
  &__item {
    transform: 0.3s ease;
    &.is-active {
      background: #fff;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
}
</style>
