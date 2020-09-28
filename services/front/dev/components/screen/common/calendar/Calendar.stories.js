import Calendar from './Calendar.vue'

export default {
  title: 'screen.common.calendar.Calendar',
  component: Calendar,
}

export const HowToUse = () => ({
  components: { Calendar },
  template: `<Calendar class="m-10"/>`,
})
