import Run from './Run.vue'

export default {
  title: 'screen/common/training/label/Run',
  component: Run,
}

export const HowToUse = () => ({
  components: { Run },
  template: `<div style="width: 37.5rem"><Run class="m-10 relative" @current="currentListener"/>
  </div>`,
})
