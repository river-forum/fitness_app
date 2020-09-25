<template>
  <div
    class="flex items-center justify-between px-8 py-5 max-w-md relative"
    style="background-color: #3b3b3b"
  >
    <div
      class="absolute text-white rounded-full bg-green-500 cursor-pointer"
      style="top: 0; left: 50%; transform: translate(-50%, -50%)"
    >
      <img
        class="m-3 hover:opacity-75"
        src="@/assets/icons/add.svg"
        width="20"
        height="20"
        alt="add"
      />
    </div>
    <img
      class="cursor-pointer hover:opacity-75"
      :class="active('grid')"
      src="@/assets/icons/grid.svg"
      width="25"
      height="25"
      alt="grid"
      @click="clickListener('grid')"
    />
    <img
      class="cursor-pointer hover:opacity-75"
      :class="active('dumbbell')"
      src="@/assets/icons/dumbbell.svg"
      width="25"
      height="25"
      alt="dumbbell"
      @click="clickListener('dumbbell')"
    />
    <img
      class="cursor-pointer hover:opacity-75"
      :class="active('graph')"
      src="@/assets/icons/graph.svg"
      width="25"
      height="25"
      alt="graph"
      @click="clickListener('graph')"
    />
    <img
      class="cursor-pointer hover:opacity-75"
      :class="active('calendar')"
      src="@/assets/icons/calendar.svg"
      width="25"
      height="25"
      alt="calendar"
      @click="clickListener('calendar')"
    />
  </div>
</template>
<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'

/**
 * #Footerコンポーネント(SP幅専用)
 */
export default defineComponent({
  setup() {
    const current = ref('grid')
    const active = computed(() => (val) =>
      current.value === val ? 'opacity-100' : 'opacity-25'
    )

    function clickListener(val) {
      current.value = val
    }

    return {
      clickListener,
      active,
    }
  },
})
</script>
