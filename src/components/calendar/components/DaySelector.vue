<template>
  <vl-calendar
    ref="calendar"
    :is-selected="(date) => date === currentDate"
    @input="(date) => emitDate(date)"
  />
</template>

<script>
import VlCalendar from './Calendar'

export default {
  name: 'VlDaySelector',

  components: {
    VlCalendar
  },
  model: {
    prop: 'currentDate'
  },

  props: {
    currentDate: {
      type: String,
      default: () => ``
    }
  },

  methods: {
    emitDate(date) {
      this.$emit('update:date', date)
      this.$emit('focus')
    }
  }
}
</script>
