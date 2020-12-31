import { mount } from '@vue/test-utils'
import Run from '../Run.vue'

it('Run Component renders correctly', () => {
  const app = mount(Run)

  expect(app.html()).toMatchSnapshot()
})
