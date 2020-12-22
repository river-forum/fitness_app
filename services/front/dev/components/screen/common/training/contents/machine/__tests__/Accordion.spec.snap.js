import { mount } from '@vue/test-utils'
import Accordion from '../Accordion.vue'

it('Accordion Component renders correctly', () => {
  const app = mount(Accordion)

  expect(app.html()).toMatchSnapshot()
})
