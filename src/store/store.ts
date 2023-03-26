import { makeAutoObservable } from "mobx";
import { SAMPLE_TASKS } from "../constants";
import { TaskType } from "../types/TaskType";

class StoreClass {
  tasks: TaskType[] = SAMPLE_TASKS;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get completedTasks() {
    return this.tasks.filter((task) => task.completed);
  }

  get uncompletedTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  get newTaskID() {
    if (this.tasks.length) {
      return this.tasks.sort((a, b) => b.id - a.id)[0].id + 1;
    } else {
      return 1;
    }
  }

  addTask(task: TaskType) {
    this.tasks = [...this.tasks, task];
  }

  toggleTask(taskId: number) {
    const newTasks = this.tasks;
    const complitedTaskIndex = this.tasks.findIndex(
      (task) => task.id === taskId
    );
    const toggledTask: TaskType = {
      ...this.tasks[complitedTaskIndex],
      completed: !this.tasks[complitedTaskIndex].completed,
    };

    newTasks.splice(complitedTaskIndex, 1, toggledTask);
    this.tasks = newTasks;
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}

const Store = new StoreClass();
export { StoreClass };

export default Store;
