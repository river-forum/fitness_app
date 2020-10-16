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

const getDatesDiff = (startDate, endDate, dateFormat = 'YYYY-MM-DD') => {
  const getDateAsArray = (date) => {
    return moment(date.split(/\D+/), dateFormat)
  }
  const diff =
    getDateAsArray(endDate).diff(getDateAsArray(startDate), 'days') + 1
  const dates = []
  for (let i = 0; i < diff; i++) {
    const nextDate = getDateAsArray(startDate).add(i, 'day')
    dates.push(nextDate)
  }
  return dates
}

export const getRecordsOnDay = () => {
  return getDatesDiff(
    moment().subtract(2, 'months').format('YYYY-MM-DD'),
    moment().format('YYYY-MM-DD')
  ).map((date) => {
    return {
      date,
      dayStr: ['日', '月', '火', '水', '木', '金', '土'][date.day()],
      active: !!DATA.find(
        (item) =>
          moment(item.createdAt).format('YYYY-MM-DD') ===
          date.format('YYYY-MM-DD')
      ),
    }
  })
}

export const getRecordsOnWeek = () => {
  function getDate(date) {
    const lastDayOfWeek = date.endOf('week')
    const firstDayOfMonth = lastDayOfWeek.clone().startOf('month')

    return {
      year: lastDayOfWeek.year(),
      month: lastDayOfWeek.month(),
      week: lastDayOfWeek.diff(firstDayOfMonth, 'weeks'),
    }
  }

  return _.uniqBy(
    getDatesDiff(
      moment().subtract(2, 'months').format('YYYY-MM'),
      moment().format('YYYY-MM')
    ).map((date) => {
      return {
        date,
        week: getDate(date),
        dayStr: ['日', '月', '火', '水', '木', '金', '土'][date.day()],
        // TODO ミスってる
        active: !!DATA.find(
          (item) =>
            moment(item.createdAt).format('YYYY-MM') === date.format('YYYY-MM')
        ),
      }
    }),
    (item) => item.week.year + '' + item.week.month + '' + item.week.week
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
