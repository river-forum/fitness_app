<template>
  <div class="calendar max-w-md">
    <div class="calendar__wrap p-4 pb-0 bg-green-500 relative">
      <div class="ymd absolute right-0 top-0">
        <ul class="ymd__contents flex">
          <li class="ymd__li opacity-75">
            <button
              class="py-1 px-4 bg-black text-white font-bold"
              @click="changeEventListener('d')"
            >
              D
            </button>
          </li>
          <li class="ymd__li opacity-75">
            <button
              class="py-1 px-4 bg-black text-white font-bold"
              @click="changeEventListener('w')"
            >
              W
            </button>
          </li>
          <li class="ymd__li opacity-75">
            <button
              class="py-1 px-4 bg-black text-white font-bold"
              @click="changeEventListener('m')"
            >
              M
            </button>
          </li>
        </ul>
      </div>
      <div class="date text-white">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import CalendarDay from './CalendarDay'
import CalendarWeek from './CalendarWeek'
import CalendarMonth from './CalendarMonth'

export default defineComponent({
  setup() {
    const current = ref('d')

    const currentComponent = computed(() => {
      switch (current.value) {
        case 'd':
          return CalendarDay
        case 'w':
          return CalendarWeek
        case 'm':
          return CalendarMonth
      }
    })

    function changeEventListener(_current) {
      current.value = _current
    }

    return {
      changeEventListener,
      current,
      currentComponent,
    }
  },
})
</script>
<style lang="scss">
.date {
  &__day {
    position: relative;
  }
}

.day {
  $this: #{&};

  padding: 0 1rem;
  position: relative;
  line-height: 1;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &__btn {
    position: relative;
    padding: 0 0 1.5rem;
    &.is-active {
      &::after {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        background-color: #000;
        position: absolute;
        bottom: 0.5rem;
        border-radius: 50%;
        right: 0;
        left: 0;
        margin: auto;
      }
    }
  }

  &__num {
    font-size: 1.6rem;
    font-weight: 500;
  }

  &__of-week {
    font-size: 0.6rem;
  }
}
</style>
