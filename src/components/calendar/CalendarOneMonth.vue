<template>
  <VlCalendarMonth
    :current-date="CurrentDate"
    :is-selected="isSelected"
    @update:date="(date) => $emit('update:date', date)"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import VlCalendarMonth from './components/CalendarMonth.vue'
import { Prop } from 'vue-property-decorator'


@Component({
  components: {
    VlCalendarMonth
  }
})
export default class CalendarOneMonth extends Vue {
  @Prop({ default: null }) CurrentDate!: string
  @Prop({ default: () => {} }) isSelected!: Function
}
</script>

<style>
.vl-calendar-month {
  display: inline-block;
  position: relative;
  background: #fff;
  padding: 20px 0 0;
  text-align: center;
  color: #3e3a4e;
  font-size: 14px;
  user-select: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  width: 383px;
  height: 400px;
}

.vl-calendar__month {
  display: inline-block;
  margin-bottom: 30px;
  width: 383px;
}

.vl-flex {
  display: flex;
  flex-wrap: wrap;
}

.vl-calendar-month__title {
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #000000;
}
.vl-calendar-month_week {
  background-color: #f4f8ff;
  margin-bottom: 18px;
  position: relative;
  width: 383px;
}

.vl-calendar-month__week-day {
  display: inline-block;
  height: 40px;
  width: 14%;
  text-align: center;
  color: #c83f3a;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.71;
  letter-spacing: normal;
  color: #000000;
}

.vl-calendar-month__day {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  cursor: pointer;
  width: 14%;
  height: 40px;
}

.vl-calendar-month.disabled {
  color: #b5b5b5;
  pointer-events: none;
}

.vl-calendar-month--first {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.vl-calendar-month--last {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.vl-calendar-month__day.selected {
  background: #c83f3a;
  color: #fff;
  font-weight: normal;
  background-color: rgba(232, 25, 72, 0.1);
  color: #ab3030;
}

.vl-calendar-month__day.another-month {
  color: #a6a6a6;
  opacity: 0;
  cursor: auto;
}

.vl-calendar-month__day.selected.another-month {
  color: rgba(171, 48, 48, 0.5);
}

.vl-calendar-month__day.selected--first {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.vl-calendar-month__day.selected--last {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
