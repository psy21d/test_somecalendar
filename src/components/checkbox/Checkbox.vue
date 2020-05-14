<template>
  <label class="container">
    <input
      type="checkbox"
      name="checkbox"
      :value="checked"
      :checked="checked"
      v-on="{
        ...$listeners,
        change: (event) => $emit('change', event.target.value)
      }"
    >
    <div class="dot">
      <div class="dot-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="10"
          viewBox="0 0 14 10"
          class="icon"
        >
          <path
            fill="#FFF"
            d="M13.457 1.478L5.079 9.856c-.074.074-.193.074-.267 0L.055 5.099c-.073-.074-.073-.193 0-.267l1.156-1.156c.074-.074.193-.074.267 0l3.468 3.468L12.034.055c.074-.073.193-.073.267 0l1.156 1.156c.074.074.074.193 0 .267z"
          />
        </svg>
      </div>
    </div>
    <span class="capture"><slot /></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Model } from 'vue-property-decorator'

@Component
export default class Checkbox extends Vue {
  @Model('change', { type: Boolean }) checked!: any
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  & > input {
    position: absolute;
    opacity: 0;
  }

  & > input:checked ~ .dot > .dot-center {
    background: #e81948;
    transform: scale(1.1);
  }

  & > input:checked ~ .dot {
    border: 1px solid #e81948;
  }

  & > input:active ~ .dot {
    transform: scale(0.95);
    border: 1px solid #e81948;
    & > .dot-center {
      background: #e81948;
      transform: scale(0.8);
    }
  }
}

.dot {
  width: 24px;
  height: 24px;
  border: 1px solid #d6dcef;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-in-out;
}

.dot-center {
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background: #d6dcef;
  transition: transform 0.3s ease-in-out;
  transform: scale(0);
  & > .icon {
    position: relative;
    left: 5px;
    top: 0px;
  }
}

.capture {
  margin-left: 10px;
  font-size: 14px;
}
</style>
