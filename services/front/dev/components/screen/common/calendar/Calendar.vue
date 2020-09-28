<template>
  <div class="calendar max-w-md">
    <div class="calendar__wrap p-2 pb-0 bg-green-500 relative">
      <div class="ymd absolute right-0 top-0">
        <ul class="ymd__contents flex">
          <li
            class="ymd__li py-1 px-4 opacity-75 bg-black text-white font-bold"
          >
            D
          </li>
          <li
            class="ymd__li py-1 px-4 opacity-75 bg-black text-white font-bold"
          >
            W
          </li>
          <li
            class="ymd__li py-1 px-4 opacity-75 bg-black text-white font-bold"
          >
            M
          </li>
        </ul>
      </div>
      <div class="date text-white">
        <div class="date__current-month font-bold">9</div>
        <ul class="date__day flex overflow-scroll">
          <li class="day">
            <button class="day__btn is-active">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn is-active">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
          <li class="day">
            <button class="day__btn">
              <span class="day__num">13</span><br /><span class="day__of-week"
                >SUN</span
              >
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

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
