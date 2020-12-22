import Training from './Training.vue'

export default {
  title: 'screen/common/training/Training.vue',
  component: Training,
}

export const HowToUse = () => ({
  components: { Training },
  data() {
    return {
      selected: 'Run',
    }
  },
  template: `<div style="width: 37.5rem"><Training class="m-10 relative" @current="currentListener"/>
  </div>`,
  methods: {
    currentListener(val) {
      this.selected = val
    },
  },
})
