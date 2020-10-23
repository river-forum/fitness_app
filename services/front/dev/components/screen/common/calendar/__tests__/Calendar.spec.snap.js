import { mount } from '@vue/test-utils'
import Footer from '../Calendar.vue'

it('Calendar Component renders correctly', () => {
  const app = mount(Footer)

  expect(app.html()).toMatchSnapshot()
})
