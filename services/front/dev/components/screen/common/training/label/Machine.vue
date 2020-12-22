<template>
  <Frame
    current-color="#718ec5"
    :active="active"
    @click.native="selectedListener"
  >
    <template slot="contents">マシーン</template>
  </Frame>
</template>
<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import Frame from './_Frame'

const IDENTIFY = 'machine'

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
