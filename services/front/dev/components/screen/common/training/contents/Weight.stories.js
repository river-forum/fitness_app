import WeightTrainingInner from './WeightTrainingInner.vue'

export default {
  title: 'screen/common/trainingLabel/trainingLabelInner/WeightTrainingInner',
  component: WeightTrainingInner,
}

export const HowToUse = () => ({
  components: { WeightTrainingInner },
  template: `<div class="inner-wrap relative" style="width: 37.5rem">
  <WeightTrainingInner class="m-10"/></div>`,
})
