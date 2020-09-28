import Card from './Card.vue'

export default {
  title: 'screen.list.Card',
  component: Card,
}

export const HowToUse = () => ({
  components: { Card },
  template: `<div class="m-10 flex items-center space-x-4">
  <Card :dates="[new Date(), new Date(), new Date()]" />
  </div>`,
})
