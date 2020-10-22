import moment from 'moment'
import _ from 'lodash'

const DATA = [
  {
    id: 1,
    body: 'ランニングした',
    createdAt: '2020/09/01 00:00:00',
  },
  {
    id: 2,
    body: 'ランニングした2',
    createdAt: '2020/09/20 00:00:00',
  },
  {
    id: 3,
    body: '筋トレした',
    createdAt: '2020/10/01 00:00:00',
  },
  {
    id: 4,
    body: 'ストレッチした',
    createdAt: '2020/10/10 00:00:00',
  },
]

// 今現在から過去2ヶ月分の差分をゲットする //

const getDatesDiff = (startDate, endDate, dateFormat = 'YYYY-MM-DD') => {
  // startDate 2ヶ月前 endDate 今現在 //

  const getDateAsArray = (date) => {
    return moment(date.split(/\D+/), dateFormat)
  }

  // 今現在と過去2ヶ月分の差分をdiff入れる
  const diff =
    getDateAsArray(endDate).diff(getDateAsArray(startDate), 'days') + 1

  const dates = []

  for (let i = 0; i < diff; i++) {
    // forで回してdatesにdiff分の日付等のデータを入れる
    const nextDate = getDateAsArray(startDate).add(i, 'day')
    dates.push(nextDate)
  }

  return dates
}

// {date: Moment, dayStr: "火", active: false} こんな感じでオブジェクト返してくれる
export const getRecordsOnDay = () => {
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
      active: !!DATA.find(
        // Q:!!にする理由
        (item) =>
          moment(item.createdAt).format('YYYY-MM-DD') ===
          date.format('YYYY-MM-DD')
      ),
    }
  })
}

function getDate(_date) {
  const targetDate = moment('2020-01-01 00:00:00')
    .add((_date.week() - 1) * 7, 'day')
    .clone()
  return {
    firstDateOnWeek: targetDate.startOf('week').format('YYYY-MM-DD'),
    lastDateOnWeek: targetDate.endOf('week').format('YYYY-MM-DD'),
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
        active: !!DATA.find(
          (item) =>
            moment(item.createdAt).format('YYYY-MM') === date.format('YYYY-MM')
        ),
      }
    }),
    (item) => item.week.firstDateOnWeek + '' + item.week.lastDateOnWeek
  )
}

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
        active: !!DATA.find(
          (item) =>
            moment(item.createdAt).format('YYYY-MM') === date.format('YYYY-MM')
        ),
      }
    }),
    (item) => moment(item.date).format('YYYY-MM')
  )
}
