import RunTrainingLabelInner from './RunTrainingLabelInner.vue'

export default {
  title: 'screen/common/trainingLabel/trainingLabelInner/RunTrainingLabelInner',
  component: RunTrainingLabelInner,
}

export const HowToUse = () => ({
  components: { RunTrainingLabelInner },
  template: `<div style="max-width: 375px;">
  <RunTrainingLabelInner class="m-10"/>
  </div>`,
})
