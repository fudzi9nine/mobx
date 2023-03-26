import React from "react";
import { TaskType } from "../../../types/TaskType";
import TaskListComponent from "../components/taskList";

type Props = {
  data: TaskType[];
  complited?: boolean;
};

const TaskListContainer = ({ data, complited }: Props) => {
  return <TaskListComponent data={data} complited={complited} />;
};

export default TaskListContainer;
