import Weight from './Weight.vue'

export default {
  title: 'screen/common/training/contents/Weight',
  component: Weight,
}

export const HowToUse = () => ({
  components: { Weight },
  template: `<div class="inner-wrap relative" style="width: 37.5rem">
  <Weight class="m-10"/></div>`,
})
