import Stretch from './Stretch.vue'

export default {
  title: 'screen/common/training/contents/Stretch',
  component: Stretch,
}

export const HowToUse = () => ({
  components: { Stretch },
  template: `<div class="inner-wrap relative" style="width: 37.5rem">
  <Stretch class="m-10"/></div>`,
})
