import item from './item.vue'

export default {
  title: 'screen/common/grid/item',
  component: item,
}

export const HowToUse = () => ({
  components: { item },
  template: `<item />`,
})
