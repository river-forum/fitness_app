import Machine from './Machine.vue'

export default {
  title: 'screen/common/training/label/Machine',
  component: Machine,
}

export const HowToUse = () => ({
  components: { Machine },
  template: `<div style="width: 37.5rem"><Machine class="m-10 relative" @current="currentListener"/>
  </div>`,
})
