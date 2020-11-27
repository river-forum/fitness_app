import MachineTrainingInner from './MachineTrainingInner.vue'

export default {
  title: 'screen/common/trainingLabel/trainingLabelInner/MachineTrainingInner',
  component: MachineTrainingInner,
}

export const HowToUse = () => ({
  components: { MachineTrainingInner },
  template: `<div class="inner-wrap" style="width: 37.5rem">
  <MachineTrainingInner class="m-10"/></div>`,
})
