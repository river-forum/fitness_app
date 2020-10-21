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
        <template v-if="current === 'd'">
          <div class="date__current-month font-bold">
            {{ records.currntMonth }}
          </div>
          <ul class="date__day flex overflow-scroll">
            <li v-for="(record, index) in records" :key="index" class="day">
              <button
                class="day__btn"
                :class="record.active ? 'is-active' : ''"
              >
                <span class="day__num">{{ record.date.date() }}</span>
                <br /><span class="day__of-week">{{ record.dayStr }}</span>
              </button>
            </li>
          </ul>
        </template>

        <template v-if="current === 'w'">
          <div class="flex overflow-x-scroll" style="min-height: 112px">
            <div
              v-for="(record, index) in records"
              :key="index"
              class="font-bold pr-6"
              style="min-width: 70px"
            >
              <p>{{ record.week.week + 1 }}週目</p>
              <template v-if="record.active">
                <p>◯</p>
              </template>
            </div>
          </div>
        </template>

        <template v-if="current === 'm'">
          <div class="flex" style="min-height: 112px">
            <div
              v-for="(record, index) in records"
              :key="index"
              class="font-bold text-xl pr-6"
            >
              <p>{{ record.date.months() + 1 }}月</p>
              <template v-if="record.active">
                <p>◯</p>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import {
  getRecordsOnDay,
  getRecordsOnWeek,
  getRecordsMonth,
} from '~/components/screen/common/calendar/records'

export default defineComponent({
  setup() {
    const current = ref('d')
    const records = computed(() => {
      switch (current.value) {
        case 'd':
          return getRecordsOnDay()
        case 'w':
          return getRecordsOnWeek()
        case 'm':
          return getRecordsMonth()
      }
    })

    function changeEventListener(_current) {
      current.value = _current
    }
    return {
      changeEventListener,
      records,
      current,
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
