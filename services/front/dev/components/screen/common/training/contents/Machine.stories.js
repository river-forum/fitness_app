import Machine from './Machine.vue'

export default {
  title: 'screen/common/training/contents/Machine.vue',
  component: Machine,
}

export const HowToUse = () => ({
  components: { Machine },
  template: `<div class="inner-wrap relative" style="width: 37.5rem">
  <Machine class="m-10"/></div>`,
})
