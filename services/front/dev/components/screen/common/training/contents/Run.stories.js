import Run from './Run.vue'

export default {
  title: 'screen/common/training/contents/Run',
  component: Run,
}

export const HowToUse = () => ({
  components: { Run },
  template: `<div class="inner-wrap relative" style="width: 37.5rem">
  <Run class="m-10"/></div>`,
})
