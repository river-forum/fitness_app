import ToggleBtn from './ToggleBtn.vue'

export default {
  title: 'common.ui.ToggleBtn',
  component: ToggleBtn,
}

export const HowToUse = () => ({
  components: { ToggleBtn },
  template: `<div class="m-10">
  <ToggleBtn />
  </div>`,
})
