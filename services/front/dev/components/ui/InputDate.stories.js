import InputDate from './InputDate.vue'

export default {
  title: 'screen.ui.InputDate',
  component: InputDate,
}

export const HowToUse = () => ({
  components: { InputDate },
  template: `<div class="m-10 w-3/12">
  <InputDate />
  </div>`,
})
