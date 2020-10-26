<template>
  <div class="label text-white">
    <button
      class="label__body flex justify-center items-center bg-gray-400"
      :style="{ 'background-color': currentColor }"
    >
      <div class="label__item">
        <slot name="contents"></slot>
      </div>
      <div v-if="active">▼</div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentColor: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss">
$skew-value: 3deg;

.label {
  &__body {
    width: 17rem;
    height: 17rem;
    transform: skewX(-#{$skew-value});
  }

  &__item {
    transform: skewX($skew-value);
  }
}
</style>
