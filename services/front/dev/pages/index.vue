<template>
  <div class="container">
    <Calender />
    <Footer class="fixed bottom-0 left-0" />
  </div>
</template>

<script lang="ts">
import Footer from '@/components/screen/common/footer/Footer.vue'
import Calender from '@/components/screen/common/calendar/Calendar.vue'

export default {
  components: {
    Footer,
    Calender,
  },
}
</script>
