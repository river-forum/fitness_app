import TrainingLabelItem from './TrainingLabelItem.vue'

export default {
  title: 'screen/common/TrainingLabel/TrainingLabelItem',
  component: TrainingLabelItem,
}

export const HowToUse = () => ({
  components: { TrainingLabelItem },
  template: `<TrainingLabelItem class="m-10"/>`,
})
