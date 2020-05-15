import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';

import styles from './HelloWorld.css?module'
import CalendarOneMonth from '@/components/calendar/CalendarOneMonth.vue'
import Tasks from '@/components/tasks/Tasks'

import { storeTasks } from "@/store/index";

interface Props {
  msg: string
}

@Component
export default class HelloWorld extends VueComponent<Props> {

  @Prop()
  private msg!: string;

  get store() {
    return storeTasks
  }

  created() {
    this.store.addTask({
      text: "just now created",
      date: new Date()
    })
  }

  render() {
    return (
      <div class={styles.hello}>
        <CalendarOneMonth
          is-selected={this.store.tasksByDate}
        />
        <Tasks class={styles.tasks}/>
      </div>
    )
  }
}
