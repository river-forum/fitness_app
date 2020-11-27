import RunTrainingInner from './RunTrainingInner.vue'

export default {
  title: 'screen/common/trainingLabel/trainingLabelInner/RunTrainingInner',
  component: RunTrainingInner,
}

export const HowToUse = () => ({
  components: { RunTrainingInner },
  template: `<div class="inner-wrap" style="width: 37.5rem">
  <RunTrainingInner class="m-10"/></div>`,
})
