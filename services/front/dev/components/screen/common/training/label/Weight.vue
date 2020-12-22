<template>
  <Frame
    current-color="#f6dd72"
    :active="active"
    @click.native="selectedListener"
  >
    <template slot="contents">Weight</template>
  </Frame>
</template>
<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import Frame from './_Frame'

const IDENTIFY = 'weight'

export default defineComponent({
  components: {
    Frame,
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
