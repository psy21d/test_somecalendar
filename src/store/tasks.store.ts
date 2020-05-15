import { createModule, mutation, action, extractVuexModule } from 'vuex-class-component'

// Для возможжности хранения и передачи в task есть полная дата и время
type Task = {
  text: string,
  date: Date
}

const VuexModule = createModule({
  strict: false,
})

export class TasksStore extends VuexModule {
  private tasks:Array<Task> = []
  
  @mutation addTask(task: Task) {
    this.tasks.push(task)
  }

  get tasksByDate() {
    return (date:Date) => {
      return this.tasks.filter((task) => {
        return (task.date.toDateString() === date.toDateString())
      })
    }
  }
}
