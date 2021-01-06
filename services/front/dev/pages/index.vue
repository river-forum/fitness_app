<template>
  <div class="container">
    <Calender />
    <Grid />
    <Footer class="fixed bottom-0 left-0" />
  </div>
</template>

<script lang="ts">
import Footer from '@/components/screen/common/footer/Footer.vue'
import Calender from '@/components/screen/common/calendar/Calendar.vue'
import Grid from '@/components/screen/common/grid/Grid.vue'

export default {
  components: {
    Footer,
    Calender,
    Grid,
  },
}
</script>
