import ToggleBtn from './ToggleBtn.vue'

export default {
  title: 'ui/button/ToggleBtn',
  component: ToggleBtn,
}

export const HowToUse = () => ({
  components: { ToggleBtn },
  template: `<div class="m-10">
  <ToggleBtn :buttonInnerTexts="['RUN','BIKE']" />
  </div>`,
})
