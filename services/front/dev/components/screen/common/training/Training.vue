<template>
  <div class="label-wrapper">
    <div class="flex">
      <RunLabel :current="current" @selected="selectedListener" />
      <MachineLabel :current="current" @selected="selectedListener" />
      <StretchLabel :current="current" @selected="selectedListener" />
      <WeightLabel :current="current" @selected="selectedListener" />
    </div>
    <component :is="currentComponent" class="mt-10" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import RunLabel from './label/Run'
import MachineLabel from './label/Machine'
import StretchLabel from './label/Stretch'
import WeightLabel from './label/Weight'
import RunInner from './contents/Run'
import MachineInner from './contents/Machine'
import StretchInner from './contents/Stretch'
import WeightInner from './contents/Weight'

export default defineComponent({
  components: {
    RunLabel,
    MachineLabel,
    StretchLabel,
    WeightLabel,
    RunInner,
    MachineInner,
    StretchInner,
    WeightInner,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    const current = ref('run')

    function selectedListener(val) {
      current.value = val
      ctx.emit('current', val)
    }

    const currentComponent = computed(() => {
      switch (current.value) {
        case 'run':
          return RunInner
        case 'machine':
          return MachineInner
        case 'stretch':
          return StretchInner
        case 'weight':
          return WeightInner
      }
    })

    return {
      current,
      selectedListener,
      currentComponent,
    }
  },
})
</script>
