import Header from './Header.vue'

export default {
  title: 'screen/common/header/Header',
  component: Header,
}

export const HowToUse = () => ({
  components: { Header },
  template: `<div style="width: 375px;"><Header /></div>`,
})
