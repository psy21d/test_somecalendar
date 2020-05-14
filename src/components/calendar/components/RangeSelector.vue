<template>
  <vl-calendar
    ref="calendar"
    :is-selected="isSelected"
    :is-disabled="isDisabled"
    @input="(date) => emitDate(date)"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import VlCalendar from './Calendar.vue'

@Component({
  components: {
    VlCalendar
  }
})
export default class VlRangeSelector extends Vue {
  @Prop({ default: '' }) startDate!: string
  @Prop({ default: '' }) endDate!: string

  emitDate(date: string) {
    if (
      ((this.startDate === date || this.endDate !== date) &&
        this.startDate !== this.endDate) ||
      !this.endDate
    ) {
      this.$emit('update:start-date', date)
      this.$emit('update:end-date', date)
    } else if (date < this.startDate) {
      this.$emit('update:start-date', date)
      this.$emit('update:end-date', this.startDate)
    } else {
      this.$emit('update:end-date', date)
    }
    this.$emit('focus')
  }

  isSelected(date: string) {
    if (!this.startDate && !this.endDate) {
      return false
    } else if (!this.endDate) {
      return this.startDate === date
    } else if (this.startDate && this.endDate) {
      return date >= this.startDate && date <= this.endDate
    } else {
      return false
    }
  }

  isDisabled(date: string) {
    if (this.startDate && !this.endDate) {
      return date <= this.startDate
    } else {
      return false
    }
  }
}
</script>
