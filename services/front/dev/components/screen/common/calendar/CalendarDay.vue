<template>
  <div>
    <div class="date__current-month font-bold">
      {{ records.currntMonth }}
    </div>
    <ul class="date__day flex overflow-scroll">
      <li v-for="record in records" :key="record.date.toString()" class="day">
        <button class="day__btn" :class="record.active ? 'is-active' : ''">
          <span class="day__num">{{ record.date.date() }}</span>
          <br /><span class="day__of-week">{{ record.dayStr }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import moment from 'moment'
import { getDatesDiff } from '@/utils/calender'
import Records from '@/data/records'

const getRecordsOnDay = () => {
  return getDatesDiff(
    // 2ヶ月前をYYYY-MM-DD
    moment().subtract(2, 'months').format('YYYY-MM-DD'),
    // YYYY-MM-DDにフォーマット
    moment().format('YYYY-MM-DD')
    // dateにはgetDatesDiffで取得したものが入る
  ).map((date) => {
    return {
      date,
      currntMonth: date.month(),
      // .day()は曜日を0~6でかえす
      dayStr: ['日', '月', '火', '水', '木', '金', '土'][date.day()],
      // DATAとかぶっている箇所にactiveをつける
      active: !!Records.find(
        // Q:!!にする理由
        (item) =>
          moment(item.createdAt).format('YYYY-MM-DD') ===
          date.format('YYYY-MM-DD')
      ),
    }
  })
}

export default defineComponent({
  setup() {
    return {
      records: getRecordsOnDay(),
    }
  },
})
</script>
