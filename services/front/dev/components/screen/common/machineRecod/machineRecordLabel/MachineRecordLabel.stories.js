import MasterData from '@/data/master'
import MachineRecordLabel from './MachineRecordLabel.vue'

export default {
  title: 'screen/common/machineRecod/machineRecordLabel/MachineRecordLabel.vue',
  component: MachineRecordLabel,
}

export const HowToUse = () => ({
  data() {
    return {
      MasterData,
    }
  },
  components: { MachineRecordLabel },
  template: `<div class="m-10">
  <AccordionItem v-for="data in MasterData" :key="data.id" />
  </div>`,
})
