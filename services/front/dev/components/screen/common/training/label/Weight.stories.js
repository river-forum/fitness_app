import Weight from './Weight.vue'

export default {
  title: 'screen/common/training/label/Weight',
  component: Weight,
}

export const HowToUse = () => ({
  components: { Weight },
  template: `<div style="width: 37.5rem"><Weight class="m-10 relative" @current="currentListener"/>
  </div>`,
})
