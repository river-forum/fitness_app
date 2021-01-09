import Menu from './Menu.vue'

export default {
  title: 'screen/common/header/Menu',
  component: Menu,
}

export const HowToUse = () => ({
  components: { Menu },
  template: `<div style="width: 375px;"><Menu /></div>`,
})
