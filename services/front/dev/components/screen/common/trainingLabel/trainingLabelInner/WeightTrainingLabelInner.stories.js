import WeightTrainingLabelInner from './WeightTrainingLabelInner.vue'

export default {
  title:
    'screen/common/trainingLabel/trainingLabelInner/WeightTrainingLabelInner',
  component: WeightTrainingLabelInner,
}

export const HowToUse = () => ({
  components: { WeightTrainingLabelInner },
  template: `<div style="max-width: 375px;">
  <WeightTrainingLabelInner class="m-10"/>
  </div>`,
})
