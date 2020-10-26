import CalendarDay from './CalendarDay.vue'

export default {
  title: 'screen/common/calendar/CalendarDay',
  component: CalendarDay,
}

export const HowToUse = () => ({
  components: { CalendarDay },
  template: `<CalendarDay class="m-10"/>`,
})
