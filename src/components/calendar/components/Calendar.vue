<template>
  <div class="vl-calendar">
    <span
      class="vl-calendar__arrow vl-calendar__arrow--back-year"
      @click="moveBackYear()"
    />
    <span
      class="vl-calendar__arrow vl-calendar__arrow--back"
      @click="moveBack()"
    />

    <span
      class="vl-calendar__arrow vl-calendar__arrow--forward"
      @click="moveForward()"
    />
    <span
      class="vl-calendar__arrow vl-calendar__arrow--forward-year"
      @click="moveForwardYear()"
    />

    <vl-calendar-month
      class="vl-calendar__month"
      :month="currentMonthMonth"
      :year="currentMonthYear"
      :is-selected="isSelected"
      :is-disabled="isDisabled"
      @input="(date) => $emit('input', date)"
    />
  </div>
</template>

<script lang="ts">
import VlCalendarMonth from './CalendarMonth.vue'
import * as DatesUtils from '../utils/DatesUtils'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  components: {
    VlCalendarMonth
  }
})
export default class VlCalendar extends Vue {
  @Prop({ default: () => {} }) isSelected!: Function
  @Prop({ default: () => {} }) isDisabled!: Function

  currentMonthMonth: number = 0
  currentMonthYear: number = 0

  constructor() {
    super()
  }

  created() {
    const today = DatesUtils.getToday()
    this.currentMonthMonth = today.getMonth()
    this.currentMonthYear = today.getFullYear()
  }

  get nextMonthMonth() {
    return this.currentMonthMonth === 11 ? 0 : this.currentMonthMonth + 1
  }

  get nextMonthYear() {
    return this.currentMonthMonth === 11
      ? this.currentMonthYear + 1
      : this.currentMonthYear
  }

  moveBack() {
    if (this.currentMonthMonth === 0) {
      this.currentMonthMonth = 11
      this.currentMonthYear--
    } else {
      this.currentMonthMonth--
    }
  }

  moveForward() {
    if (this.currentMonthMonth === 11) {
      this.currentMonthMonth = 0
      this.currentMonthYear++
    } else {
      this.currentMonthMonth++
    }
  }

  moveBackYear() {
    this.currentMonthYear--
  }

  moveForwardYear() {
    this.currentMonthYear++
  }
}
</script>
