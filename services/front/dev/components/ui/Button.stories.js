import Button from './Button.vue'

export default {
  title: 'screen.ui.Button',
  component: Button,
}

export const HowToUse = () => ({
  components: { Button },
  template: `<div class="m-10">
  <Button buttonInnerText="記録する" />
  </div>`,
})
