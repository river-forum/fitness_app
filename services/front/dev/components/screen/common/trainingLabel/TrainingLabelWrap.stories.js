import trainingLabelWrap from './TrainingLabelWrap.vue'

export default {
  title: 'screen.common.trainingLabel.trainingLabelWrap',
  component: trainingLabelWrap,
}

export const HowToUse = () => ({
  components: { trainingLabelWrap },
  template: `<trainingLabelWrap class="m-10"/>`,
})
