<template>
  <div class="flex" style="min-height: 112px">
    <div
      v-for="record in records"
      :key="record.date.toString()"
      class="font-bold text-xl pr-6"
    >
      <p>{{ record.date.month() + 1 }}月</p>
      <template v-if="record.active">
        <p>◯</p>
      </template>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import _ from 'lodash'
import { defineComponent } from '@nuxtjs/composition-api'
import { getDatesDiff } from '@/utils/calender'
import Records from '@/data/records'

export const getRecordsMonth = () => {
  return _.uniqBy(
    getDatesDiff(
      moment().subtract(2, 'months').format('YYYY-MM'),
      moment().format('YYYY-MM')
    ).map((date) => {
      return {
        date,
        currntMonth: date.month(),
        dayStr: ['日', '月', '火', '水', '木', '金', '土'][date.day()],
        active: !!Records.find(
          (item) =>
            moment(item.createdAt).format('YYYY-MM') === date.format('YYYY-MM')
        ),
      }
    }),
    (item) => moment(item.date).format('YYYY-MM')
  )
}

export default defineComponent({
  setup() {
    return {
      records: getRecordsMonth(),
    }
  },
})
</script>
