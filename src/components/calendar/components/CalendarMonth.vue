<template>
  <div class="vl-calendar-month">
    <div class="vl-calendar-month__title">
      {{ monthName }} {{ year }}
    </div>

    <div class="vl-flex vl-calendar-month_week">
      <span
        v-for="(dayname, key) in daynames"
        :key="key"
        class="vl-calendar-month__week-day"
      >
        {{ dayname }}
      </span>
    </div>

    <div class="vl-flex">
      <span
        v-for="day in days"
        :key="day.num"
        class="vl-calendar-month__day"
        :class="day.class.join(' ')"
        @click="$emit('input', getDate(day.num))"
      >
        {{ day.day }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { createRange } from '../utils/CollectionUtils'
import { countDays, formatDate, getMonthName } from '../utils/DatesUtils'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

interface Day {
  num: number
  day: number
  class: Array<string>
}

@Component
export default class VlCalendarMonth extends Vue {
  @Prop({ default: 0 }) month!: number
  @Prop({ default: 0 }) year!: number
  @Prop({ default: () => {} }) isSelected!: Function
  @Prop({ default: () => {} }) isDisabled!: Function

  get monthName() {
    return getMonthName(this.month)
  }

  daynames: Array<string> = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  get days() {
    let offset = (new Date(this.year, this.month, 1).getDay() + 6) % 7
    var days_in_month = 33 - new Date(this.year, this.month, 33).getDate()
    let offsetend = new Date(this.year, this.month, days_in_month).getDay() % 7
    let range = createRange(
      1 - offset,
      countDays(this.month, this.year) + (7 - offsetend)
    )
    let days: Array<Day> = []
    range.forEach((num) => {
      days.push({
        num: num,
        day: 0,
        class: []
      })
    })
    this.calculateClasses(days)
    return days
  }

  getDate(day: number) {
    return formatDate(day, this.month, this.year)
  }

  getDayNumber(day: number) {
    return new Date(this.year, this.month, day).getDate()
  }

  getMonth(date: string) {
    return new Date(date).getMonth()
  }

  calculateClasses(days: Array<Day>) {
    days.forEach((day: Day) => {
      day.day = this.getDayNumber(day.num)
      const date = this.getDate(day.num)

      if (this.isSelected && this.isSelected(date)) {
        day.class.push('selected')

        if (!this.isSelected(this.getDate(day.num - 1))) {
          day.class.push('selected--first')
        }

        if (!this.isSelected(this.getDate(day.num + 1))) {
          day.class.push('selected--last')
        }
      }

      if (this.isDisabled && this.isDisabled(date)) {
        day.class.push('disabled')

        if (!this.isDisabled(this.getDate(day.num - 1))) {
          day.class.push('disabled--first')
        }

        if (!this.isDisabled(this.getDate(day.num + 1))) {
          day.class.push('disabled--last')
        }
      }

      if (this.getMonth(date) != this.month) {
        day.class.push('another-month')
      }
    })

    return days
  }
}
</script>
