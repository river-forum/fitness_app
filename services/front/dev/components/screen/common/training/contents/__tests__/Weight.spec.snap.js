import { mount } from '@vue/test-utils'
import Weight from '../Weight.vue'

it('Weight Component renders correctly', () => {
  const app = mount(Weight)

  expect(app.html()).toMatchSnapshot()
})
