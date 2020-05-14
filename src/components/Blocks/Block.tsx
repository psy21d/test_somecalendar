import { Component } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './Block.css?module'

@Component
export default class HelloWorld extends VueComponent {

  render() {
    return (
      <div class={ styles.block }>
        <slot />
      </div>
    )
  }
}
