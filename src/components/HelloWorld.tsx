import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './HelloWorld.css?module'
import CalendarOneMonth from '@/components/calendar/CalendarOneMonth.vue'

interface Props {
  msg: string
}

@Component({
  components: {
    CalendarOneMonth
  }
})
export default class HelloWorld extends VueComponent<Props> {

  @Prop()
  private msg!: string;

  render() {
    return (
      <div class={styles.hello}>
        <CalendarOneMonth />
      </div>
    )
  }
}
