<template>
  <div class="w-1/4 text-white label">
    <button
      class="relative flex items-center justify-center w-full bg-gray-400 label__body"
      :style="{ 'background-color': currentColor }"
    >
      <div class="label__item">
        <slot name="contents"></slot>
      </div>
      <div
        v-if="active"
        class="absolute left-0 right-0 m-auto text-center triangle-wrap"
      >
        <span
          class="triangle-wrap__item"
          :style="{
            'border-color': `${currentColor} transparent transparent transparent`,
          }"
        ></span>
      </div>
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
    height: 8rem;
    transform: skewX(-#{$skew-value});

    &:focus {
      outline: none;
    }
  }

  &__item {
    transform: skewX($skew-value);
  }
}

.triangle-wrap {
  bottom: -1.2rem;
  .triangle-wrap__item {
    display: block;
    width: 0;
    height: 0;
    margin: 0 auto;
    border-style: solid;
    border-width: 1.2rem 1rem 0 1rem;
  }
}
</style>
