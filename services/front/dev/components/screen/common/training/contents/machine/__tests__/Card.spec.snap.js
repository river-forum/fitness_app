import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

it('Card Component renders correctly', () => {
  const app = mount(Card)

  expect(app.html()).toMatchSnapshot()
})
