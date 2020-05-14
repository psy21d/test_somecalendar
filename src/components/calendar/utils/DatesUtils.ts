import { twoDigits } from './NumberUtils'

export function getToday() {
  return new Date()
}

export function countDays(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate()
}

export function formatDate(day: number, month: number, year: number) {
  const date = new Date(year, month, day)
  return `${date.getFullYear()}-${twoDigits(date.getMonth() + 1)}-${twoDigits(
    date.getDate()
  )}`
}

export function getMonthName(month: number): string {
  return [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ][month]
}

export function getDayName(day: number): string {
  return ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'][day]
}
