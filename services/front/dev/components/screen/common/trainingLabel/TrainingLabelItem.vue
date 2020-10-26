<template>
  <div class="label text-white" :class="currentColor">
    <button class="label__body flex justify-center items-center bg-gray-400">
      <div class="label__item">
        {{ currentColor }}
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: ['currentColor'],
}
</script>

<style lang="scss">
$color01: #d37d71;
$color02: #718ec5;
$color03: #a1c556;
$color04: #f6dd72;
$skew-value: 3deg;

.label {
  &__body {
    width: 17rem;
    height: 17rem;
    transform: skewX(-#{$skew-value});
    .red & {
      background: $color01;
    }
    .blue & {
      background: $color02;
    }
    .green & {
      background: $color03;
    }
    .yellow & {
      background: $color04;
    }
  }

  &__item {
    transform: skewX($skew-value);
  }
}
</style>
