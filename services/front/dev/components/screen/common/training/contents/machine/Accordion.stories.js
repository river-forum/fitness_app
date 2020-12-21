import MasterData from '@/data/master'
import TrainingAccordion from './TrainingAccordion.vue'

export default {
  title:
    'screen/common/trainingLabel/trainingLabelInner/trainingAccordion/TrainingAccordion',
  component: TrainingAccordion,
}

export const HowToUse = () => ({
  data() {
    return {
      MasterData,
    }
  },
  components: { TrainingAccordion },
  template: `<div class="m-10">
  <TrainingAccordion v-for="data in MasterData" :key="data.id" />
  </div>`,
})
