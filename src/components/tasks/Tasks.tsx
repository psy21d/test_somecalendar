import { Component } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';

import styles from './Tasks.css?module'

@Component
export default class Tasks extends VueComponent {

  render() {
    return (
      <div class={ styles.block }>
        {this.$slots.default}
      </div>
    )
  }
}
