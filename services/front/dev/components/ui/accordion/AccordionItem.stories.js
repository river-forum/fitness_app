import MasterData from '@/data/master'
import AccordionItem from './AccordionItem.vue'

export default {
  title: 'ui/accordion/AccordionItem',
  component: AccordionItem,
}

export const HowToUse = () => ({
  data() {
    return {
      MasterData,
    }
  },
  components: { AccordionItem },
  template: `<div class="m-10">
  <AccordionItem v-for="data in MasterData" :key="data.id" />
  </div>`,
})
