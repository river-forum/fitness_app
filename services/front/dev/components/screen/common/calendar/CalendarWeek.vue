<template>
  <div>
    <div class="flex overflow-x-scroll" style="min-height: 112px">
      <div
        v-for="record in records"
        :key="record.date.toString()"
        class="font-bold pr-6"
        style="min-width: 70px"
      >
        <p>{{ record.month }}月</p>
        <p>{{ record.week.firstDateOnWeek.format('DD') }}</p>
        <p>{{ record.week.lastDateOnWeek.format('DD') }}</p>
        <template v-if="record.active">
          <p>◯</p>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import _ from 'lodash'
import moment from 'moment'
import { getDatesDiff } from '@/utils/calender'
import Records from '@/data/records'

function getDate(_date) {
  const targetDate = moment('2020-01-01 00:00:00')
    .add((_date.week() - 1) * 7, 'day')
    .clone()
  return {
    firstDateOnWeek: targetDate.clone().startOf('week'),
    lastDateOnWeek: targetDate.clone().endOf('week'),
  }
}

// 週を取得する
export const getRecordsOnWeek = () => {
  return _.uniqBy(
    // 配列から一意な値を取得する
    getDatesDiff(
      moment().subtract(2, 'months').format('YYYY-MM-DD'), // 2ヶ月前
      moment().format('YYYY-MM-DD') // 今現在
    ).map((date) => {
      date = date.clone()
      return {
        date,
        month: date.month() + 1,
        week: getDate(date.clone()),
        dayStr: ['日', '月', '火', '水', '木', '金', '土'][date.day()],
        // TODO ミスってる
        active: !!Records.find(
          (item) =>
            moment(item.createdAt).format('YYYY-MM') === date.format('YYYY-MM')
        ),
      }
    }),
    (item) => item.week.firstDateOnWeek + '' + item.week.lastDateOnWeek
  )
}

export default defineComponent({
  setup() {
    return {
      records: getRecordsOnWeek(),
    }
  },
})
</script>
