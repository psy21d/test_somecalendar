import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';

import styles from './HelloWorld.css?module'
import CalendarOneMonth from '@/components/calendar/CalendarOneMonth.vue'
import Tasks from '@/components/tasks/Tasks'
import Input from '@/components/input/Input.vue'


import { storeTasks } from "@/store/index";

interface Props {
  msg: string
}

@Component
export default class HelloWorld extends VueComponent<Props> {

  @Prop()
  private msg!: string;
  private currentDate = new Date()
  private addTaskValue = ""

  get store() {
    return storeTasks
  }

  created() {
    this.store.addTask({
      text: "just now created",
      date: this.currentDate
    })

    this.store.addTask({
      text: "another task",
      date: this.currentDate
    })
  }

  selectDate(event: Date) {
    this.currentDate = event
  }

  addTask(event: string) {
    console.log('add')
    this.store.addTask({
      text: event,
      date: this.currentDate
    })
  }

  render() {
    return (
      <div class={styles.hello}>
        <CalendarOneMonth
          is-selected={this.store.tasksByDate}
          current-date={this.currentDate}
          onDateSelect={this.selectDate}
        />
        <Tasks class={styles.tasks}>
           <div class={styles.taskshead}>
             События
           </div>  
           <div>
            {this.store.tasksByDate(this.currentDate).map( item => <div class={styles.listitem}><input type="checkbox"/>{item}</div> ) }
            <Input
              label="добавить задачу"
              v-model={this.addTaskValue}
              type="text"
              onenter={this.addTask}
            />
           </div>
        </Tasks>
      </div>
    )
  }
}
