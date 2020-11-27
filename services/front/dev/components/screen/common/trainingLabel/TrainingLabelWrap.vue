<template>
  <div class="label-wrapper">
    <div class="flex">
      <RunTrainingLabel :current="current" @selected="selectedListener" />
      <MachineTrainingLabel :current="current" @selected="selectedListener" />
      <StretchTrainingLabel :current="current" @selected="selectedListener" />
      <WeightTrainingLabel :current="current" @selected="selectedListener" />
    </div>
    <component :is="currentComponent" class="mt-10" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import RunTrainingLabel from './RunTrainingLabel'
import MachineTrainingLabel from './MachineTrainingLabel'
import StretchTrainingLabel from './StretchTrainingLabel'
import WeightTrainingLabel from './WeightTrainingLabel'
import RunTrainingInner from './trainingLabelInner/RunTrainingInner'
import MachineTrainingInner from './trainingLabelInner/MachineTrainingInner'
import StretchTrainingInner from './trainingLabelInner/StretchTrainingInner'
import WeightTrainingInner from './trainingLabelInner/WeightTrainingInner'

export default defineComponent({
  components: {
    RunTrainingLabel,
    MachineTrainingLabel,
    StretchTrainingLabel,
    WeightTrainingLabel,
    RunTrainingInner,
    MachineTrainingInner,
    StretchTrainingInner,
    WeightTrainingInner,
  },
  setup(props, ctx) {
    const current = ref('run')

    function selectedListener(val) {
      current.value = val
      ctx.emit('current', val)
    }

    const currentComponent = computed(() => {
      switch (current.value) {
        case 'run':
          return RunTrainingInner
        case 'machine':
          return MachineTrainingInner
        case 'stretch':
          return StretchTrainingInner
        case 'weight':
          return WeightTrainingInner
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
