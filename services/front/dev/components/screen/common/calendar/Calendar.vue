<template>
  <div class="calendar">
    <div class="relative p-4 pb-0 bg-green-500 calendar__wrap">
      <div class="absolute top-0 right-0 ymd">
        <ul class="flex ymd__contents">
          <li class="opacity-75 ymd__li">
            <button
              class="px-4 py-1 font-bold text-white bg-black"
              @click="changeEventListener('d')"
            >
              D
            </button>
          </li>
          <li class="opacity-75 ymd__li">
            <button
              class="px-4 py-1 font-bold text-white bg-black"
              @click="changeEventListener('w')"
            >
              W
            </button>
          </li>
          <li class="opacity-75 ymd__li">
            <button
              class="px-4 py-1 font-bold text-white bg-black"
              @click="changeEventListener('m')"
            >
              M
            </button>
          </li>
        </ul>
      </div>
      <div class="text-white date">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import Day from './day/Day'
import Week from './week/Week'
import Month from './month/Month'

export default defineComponent({
  setup() {
    const current = ref('d')

    const currentComponent = computed(() => {
      switch (current.value) {
        case 'd':
          return Day
        case 'w':
          return Week
        case 'm':
          return Month
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
