import { mount } from '@vue/test-utils'
import Training from '../Training.vue'

it('Training Component renders correctly', () => {
  const app = mount(Training)

  expect(app.html()).toMatchSnapshot()
})
