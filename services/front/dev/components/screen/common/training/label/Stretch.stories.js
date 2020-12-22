import Stretch from './Stretch.vue'

export default {
  title: 'screen/common/training/label/Stretch',
  component: Stretch,
}

export const HowToUse = () => ({
  components: { Stretch },
  template: `<div style="width: 37.5rem"><Stretch class="m-10 relative" @current="currentListener"/>
  </div>`,
})
