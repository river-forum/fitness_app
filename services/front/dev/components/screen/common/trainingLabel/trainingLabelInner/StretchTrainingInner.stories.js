import StretchTrainingInner from './StretchTrainingInner.vue'

export default {
  title: 'screen/common/trainingLabel/trainingLabelInner/StretchTrainingInner',
  component: StretchTrainingInner,
}

export const HowToUse = () => ({
  components: { StretchTrainingInner },
  template: `<div class="inner-wrap" style="width: 37.5rem">
  <StretchTrainingInner class="m-10"/></div>`,
})
