import InputTrainingName from './InputTrainingName.vue'

export default {
  title: 'screen/common/inputTrainingName/InputTrainingName',
  component: InputTrainingName,
}

export const HowToUse = () => ({
  components: { InputTrainingName },
  template: `<div style="width: 320px"><InputTrainingName class="m-10"/></div>`,
})
