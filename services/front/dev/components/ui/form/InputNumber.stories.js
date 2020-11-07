import InputNumber from './InputNumber.vue'

export default {
  title: 'ui.form.InputNumber',
  component: InputNumber,
}

export const HowToUse = () => ({
  components: { InputNumber },
  template: `<div class="m-10 w-3/12">
  <InputNumber currentType="weight" />
  <InputNumber currentType="distance" />
  <InputNumber currentType="set" />
  <InputNumber currentType="times" />
  </div>`,
})
