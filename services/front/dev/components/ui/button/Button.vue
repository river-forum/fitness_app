<template>
  <button
    class="flex items-center justify-center w-full p-6 text-2xl border button"
  >
    {{ buttonInnerText }}
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    buttonInnerText: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.button {
  $default-color: #489fa6;

  height: 6rem;
  border-radius: 5rem;
  border-color: $default-color;
  color: $default-color;
  letter-spacing: 0.1em;
}
</style>
