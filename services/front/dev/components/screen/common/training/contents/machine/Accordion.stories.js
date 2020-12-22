import MasterData from '@/data/master'
import Accordion from './Accordion.vue'

export default {
  title: 'screen/common/training/contents/machine/Accordion.vue',
  component: Accordion,
}

export const HowToUse = () => ({
  data() {
    return {
      MasterData,
    }
  },
  components: { Accordion },
  template: `<div class="m-10">
  <Accordion v-for="data in MasterData" :key="data.id" />
  </div>`,
})
