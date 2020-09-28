import { mount } from '@vue/test-utils'
import Footer from '../Footer.vue'

it('Footer Component renders correctly', () => {
  const app = mount(Footer)

  expect(app.html()).toMatchSnapshot()
})
