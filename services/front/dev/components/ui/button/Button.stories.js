import Button from './Button.vue'

export default {
  title: 'ui/button/Button',
  component: Button,
}

export const HowToUse = () => ({
  components: { Button },
  template: `<div class="m-10">
  <Button buttonInnerText="記録する" />
  </div>`,
})
