<template>
  <ul class="flex bg-gray-400 border-2 border-solid rounded border-gray-500/">
    <li class="w-2/4">
      <button
        class="flex items-center justify-center w-full h-32 rounded button"
        @click="changeActive()"
      >
        RUN
      </button>
    </li>
    <li class="w-2/4">
      <button
        class="flex items-center justify-center w-full h-32 rounded button"
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
