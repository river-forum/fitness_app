import Grid from './Grid.vue'

export default {
  title: 'screen/common/grid/Grid',
  component: Grid,
}

export const HowToUse = () => ({
  components: { Grid },
  template: `<div style="width: 320px"><Grid /></div>`,
})
