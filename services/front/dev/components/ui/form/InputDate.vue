<template>
  <div class="flex justify-between w-full pb-1 text-3xl border-b border-solid">
    <div class="date-text">
      <p class="text">日付</p>
    </div>
    <Datepicker class="date-input" :format="dateFormat" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default defineComponent({
  components: {
    Datepicker,
  },
  setup() {
    function dateFormat(date) {
      return moment(date).format('YYYY-MM-DD')
    }

    return {
      dateFormat,
    }
  },
})
</script>

<style lang="scss">
// .date-input {
//   input {
//     text-align: right;
//     &:focus {
//       outline: 0;
//     }
//   }
// }
//
</style>
