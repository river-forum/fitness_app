<template>
  <ul class="flex rounded border-solid border-2 border-gray-500/ bg-gray-400">
    <li class="w-2/4">
      <button
        class="button h-32 w-full flex justify-center items-center rounded"
        @click="changeActive()"
      >
        RUN
      </button>
    </li>
    <li class="w-2/4">
      <button
        class="button h-32 w-full flex justify-center items-center rounded"
        @click="changeActive()"
      >
        BIKE
      </button>
    </li>
  </ul>
</template>

<style lang="scss">
.button {
  &.is-active {
    background: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}
</style>
