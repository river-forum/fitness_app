<template>
  <div class="label-wrapper flex">
    <RunTrainingLabel :current="current" @selected="selectedListener" />
    <MachineTrainingLabel :current="current" @selected="selectedListener" />
    <StretchTrainingLabel :current="current" @selected="selectedListener" />
    <WeightTrainingLabel :current="current" @selected="selectedListener" />
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import RunTrainingLabel from './RunTrainingLabel'
import MachineTrainingLabel from './MachineTrainingLabel'
import StretchTrainingLabel from './StretchTrainingLabel'
import WeightTrainingLabel from './WeightTrainingLabel'

export default defineComponent({
  components: {
    RunTrainingLabel,
    MachineTrainingLabel,
    StretchTrainingLabel,
    WeightTrainingLabel,
  },
  setup(props, ctx) {
    const current = ref('run')

    function selectedListener(val) {
      current.value = val
      ctx.emit('current', val)
    }

    return {
      current,
      selectedListener,
    }
  },
})
</script>
