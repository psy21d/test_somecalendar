import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './HelloWorld.css?module'

interface Props {
  msg: string
}

@Component
export default class HelloWorld extends VueComponent<Props> {

  @Prop()
  private msg!: string;

  render() {
    return (
      <div class={styles.hello}>
        123test
      </div>
    )
  }
}
