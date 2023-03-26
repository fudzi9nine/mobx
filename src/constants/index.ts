import { TaskType } from "../types/TaskType";

export const SAMPLE_TASKS: TaskType[] = [
  {
    id: 1,
    title: "Sample task",
    description: "Kind of empty",
    completed: false,
  },
  {
    id: 2,
    title: "Forget my tasks",
    description: "Pleeeeeeease",
    completed: false,
  },
  {
    id: 3,
    title: "Sample closed task",
    description: "Enought, I'm done",
    completed: true,
  },
  { id: 4, title: "Learn MobX", description: "Hope so", completed: true },
];
