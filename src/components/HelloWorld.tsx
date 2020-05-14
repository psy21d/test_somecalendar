import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';

import styles from './HelloWorld.css?module'
import CalendarOneMonth from '@/components/calendar/CalendarOneMonth.vue'
import Tasks from '@/components/tasks/Tasks'

import { TasksStore } from "@/store/tasks.store";

interface Props {
  msg: string
}

@Component
export default class HelloWorld extends VueComponent<Props> {

  @Prop()
  private msg!: string;

  get store() {
    return TasksStore
  }

  render() {
    return (
      <div class={styles.hello}>
        <CalendarOneMonth />
        <Tasks class={styles.tasks}/>
      </div>
    )
  }
}
