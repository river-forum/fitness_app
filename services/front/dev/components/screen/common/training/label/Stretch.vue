<template>
  <Frame
    :active="active"
    current-color="#a1c556"
    @click.native="selectedListener"
  >
    <template slot="contents">ストレッチ</template>
  </Frame>
</template>
<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import Frame from './_Frame'

const IDENTIFY = 'stretch'

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
