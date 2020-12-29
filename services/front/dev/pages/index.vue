<template>
  <div class="container">
    <Calender />
    <Footer />
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
