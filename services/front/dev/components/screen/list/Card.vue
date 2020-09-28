<template>
  <div>
    <div class="flex items-center space-x-4">
      <p
        v-for="(i, n) in NarrowDown"
        :key="i"
        class="cursor-pointer bg-green-500 hover:opacity-75 px-3 py-2 text-white"
        @click="narrowDownClickListener(n)"
      >
        {{ n }}
      </p>
    </div>

    <div class="flex items-center flex-wrap space-x-3">
      <p v-for="(d, i) in computedDates" :key="i">
        {{ d }}
      </p>
    </div>
    {{ currentNarrowDown }}
  </div>
</template>
<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'

const NarrowDown = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
}

export default defineComponent({
  props: {
    dates: {
      type: Array,
      required: true,
    },
  },
  setup({ dates }) {
    const currentNarrowDown = ref(NarrowDown.DAY)

    const computedDates = computed(() => {
      switch (currentNarrowDown.value) {
        case NarrowDown.DAY:
          return dates.map((date) => date.getDay())
        case NarrowDown.WEEK:
          return dates.map((date) => date.getFullYear())
        case NarrowDown.MONTH:
          return dates.map((date) => date.getMonth())
      }

      throw new Error('不正な日付フォーマットの選択肢です。')
    })

    function narrowDownClickListener(val) {
      currentNarrowDown.value = val.toLowerCase()
    }
    return {
      NarrowDown,
      computedDates,
      currentNarrowDown,
      narrowDownClickListener,
    }
  },
})
</script>
