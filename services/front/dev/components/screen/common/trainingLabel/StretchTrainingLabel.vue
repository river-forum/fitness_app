<template>
  <TrainingLabelItem
    :active="active"
    current-color="#a1c556"
    @click.native="selectedListener"
  >
    <template slot="contents">ストレッチ</template>
  </TrainingLabelItem>
</template>
<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import TrainingLabelItem from './TrainingLabelItem.vue'

const IDENTIFY = 'stretch'

export default defineComponent({
  components: {
    TrainingLabelItem,
  },
  props: {
    current: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const active = computed(() => props.current === IDENTIFY)
    function selectedListener() {
      ctx.emit('selected', IDENTIFY)
    }

    return {
      selectedListener,
      active,
    }
  },
})
</script>
