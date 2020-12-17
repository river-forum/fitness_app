import MachineCard from './MachineCard.vue'

export default {
  title:
    'screen/common/trainingLabel/trainingLabelInner/machineCard/MachineCard',
  component: MachineCard,
}

export const HowToUse = () => ({
  components: { MachineCard },
  template: `<div class="inner-wrap" style="width: 37.5rem">
  <MachineCard class="m-10"/></div>`,
})
