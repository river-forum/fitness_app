/**
 * 汎用のカレンダーと日付関数パッケージ
 */

import moment from 'moment'

/**
 * 今現在から過去2ヶ月分の差分をゲットする
 * @param startDate
 * @param endDate
 * @param dateFormat
 * @returns {[]}
 */
export const getDatesDiff = (
  startDate: any,
  endDate: any,
  dateFormat: string = 'YYYY-MM-DD'
) => {
  // startDate 2ヶ月前 endDate 今現在 //

  const getDateAsArray = (date: string) => {
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
