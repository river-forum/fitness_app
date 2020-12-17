<template>
  <div class="px-6 accordion">
    <button
      type="button"
      class="px-2 py-4 text-left accordion__trigger"
      :class="{ '_state-open': isOpened }"
      @click="accordionToggle()"
    >
      {{ accordionTitle }}
    </button>
    <transition
      name="js-accordion"
      @before-enter="accAnimationFn.beforeEnter"
      @enter="accAnimationFn.enter"
      @after-enter="accAnimationFn.afterEnter"
      @before-leave="accAnimationFn.beforeLeave"
      @leave="accAnimationFn.leave"
    >
      <div
        v-if="isOpened"
        class="accordion__target"
        :class="{ '_state-open': isOpened }"
      >
        <ul class="accordion__body">
          <li v-for="parts in partsArr" :key="parts.id">
            <button class="relative w-full py-4 text-left accordion__machine">
              <span
                class="absolute top-0 bottom-0 right-0 w-8 h-8 m-auto bg-teal-300 rounded-full circle"
              ></span>
              {{ parts.name }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    accordionTitle: {
      type: String,
      required: true,
    },
    arrEachPart: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const isOpened = ref(false)
    function accordionToggle() {
      isOpened.value = !isOpened.value
    }

    const accAnimationFn = {
      beforeEnter(el) {
        el.style.height = '0'
      },
      enter(el) {
        el.style.height = el.scrollHeight + 'px'
      },
      afterEnter(el) {
        el.style.height = 'auto'
      },
      beforeLeave(el) {
        el.style.height = el.scrollHeight + 'px'
      },
      leave(el) {
        el.style.height = '0'
      },
    }

    const partsArr = props.arrEachPart

    return {
      isOpened,
      accordionToggle,
      accAnimationFn,
      partsArr,
    }
  },
})
</script>

<style lang="scss">
.accordion {
  &__trigger {
    position: relative;
    display: block;
    width: 100%;
    transition: all 0.2s ease-in;
    font-size: 1.4rem;
    border-bottom: 1px solid rgba(#333, 0.2);

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      display: block;
      content: '';
      width: 1rem;
      height: 1rem;
      border-right: 1px solid rgba(#333, 0.2);
      border-bottom: 1px solid rgba(#333, 0.2);
      transform: rotate(45deg);
      transition: 0.4s ease-in-out;
    }

    &._state-open {
      &::after {
        transform: rotate(-135deg);
      }
    }
  }

  &__target {
    overflow: hidden;
    transition: height 0.4s ease-in-out;
  }

  &__body {
    will-change: height;
  }

  &-enter-active {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: js-accordion--anime__opend;
  }

  &-leave-active {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: js-accordion--anime__closed;
  }

  &__machine {
    color: #4d68b7;
  }
}

.circle {
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    display: block;
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    border-right: 2px solid #fff;
    border-top: 2px solid #fff;
    transform: rotate(45deg);
  }
}

button {
  &:focus {
    outline: none;
  }
}

@keyframes js-accordion--anime__opend {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes js-accordion--anime__closed {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
