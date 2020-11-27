<template>
  <ul class="flex bg-gray-400 border-2 border-solid rounded border-gray-500/">
    <li
      v-for="text in buttonInnerTexts"
      :key="text"
      class="w-2/4 toggle-button"
    >
      <button
        class="flex items-center justify-center w-full h-24 rounded toggle-button__item"
        :class="isActive(text)"
        @click="changeActive(text)"
      >
        {{ text }}
      </button>
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    buttonInnerTexts: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const current = ref(props.buttonInnerTexts[0])
    function changeActive(text) {
      current.value = text
    }

    const isActive = computed(() => {
      return (text) => {
        return current.value === text ? 'is-active' : ''
      }
    })

    return {
      changeActive,
      isActive,
    }
  },
})
</script>

<style lang="scss">
.toggle-button {
  &__item {
    transition: 0.3s ease;
    &.is-active {
      background: #fff;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
}
</style>
