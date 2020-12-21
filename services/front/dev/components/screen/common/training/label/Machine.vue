<template>
  <TrainingLabelItem
    current-color="#718ec5"
    :active="active"
    @click.native="selectedListener"
  >
    <template slot="contents">マシーン</template>
  </TrainingLabelItem>
</template>
<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import TrainingLabelItem from './TrainingLabelItem.vue'

const IDENTIFY = 'machine'

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
