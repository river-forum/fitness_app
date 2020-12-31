import { mount } from '@vue/test-utils'
import Stretch from '../Stretch.vue'

it('Stretch Component renders correctly', () => {
  const app = mount(Stretch)

  expect(app.html()).toMatchSnapshot()
})
