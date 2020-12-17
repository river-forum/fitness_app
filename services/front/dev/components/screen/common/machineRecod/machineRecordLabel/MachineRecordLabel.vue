<template>
  <div class="test"></div>
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
