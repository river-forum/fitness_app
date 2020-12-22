import Card from './Card.vue'

export default {
  title: 'screen/common/training/contents/machine/Card.vue',
  component: Card,
}

export const HowToUse = () => ({
  components: { Card },
  template: `<div class="inner-wrap relative" style="width: 37.5rem">
  <Card class="m-10"/></div>`,
})
