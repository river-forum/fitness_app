import { mount } from '@vue/test-utils'
import Machine from '../Machine.vue'

it('Machine Component renders correctly', () => {
  const app = mount(Machine)

  expect(app.html()).toMatchSnapshot()
})
