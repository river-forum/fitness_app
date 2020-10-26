<template>
  <TrainingLabelItem
    current-color="#d37d71"
    :active="active"
    @click.native="selectedListener"
  >
    <template slot="contents">Run</template>
  </TrainingLabelItem>
</template>
<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import TrainingLabelItem from './TrainingLabelItem.vue'

const IDENTIFY = 'run'

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
