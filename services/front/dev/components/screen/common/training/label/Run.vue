<template>
  <Frame
    current-color="#d37d71"
    :active="active"
    @click.native="selectedListener"
  >
    <template slot="contents">Run</template>
  </Frame>
</template>
<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import Frame from './_Frame'

const IDENTIFY = 'run'

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
