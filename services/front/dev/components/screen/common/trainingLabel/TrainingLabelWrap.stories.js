import trainingLabelWrap from './TrainingLabelWrap.vue'

export default {
  title: 'screen/common/trainingLabel/trainingLabelWrap',
  component: trainingLabelWrap,
}

export const HowToUse = () => ({
  components: { trainingLabelWrap },
  data() {
    return {
      selected: 'Run',
    }
  },
  template: `<div style="width: 37.5rem"><trainingLabelWrap class="m-10 relative" @current="currentListener"/>
  </div>`,
  methods: {
    currentListener(val) {
      this.selected = val
    },
  },
})
