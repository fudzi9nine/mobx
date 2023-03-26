import React, { useState } from "react";
import Store from "../../../store/store";
import { TaskType } from "../../../types/TaskType";
import TaskItemComponent from "../components/taskItem";

type Props = {
  task: TaskType;
  complited?: boolean;
};

const TaskItemContainer = ({ task, complited }: Props) => {
  const [isTaskOpen, setIsTaskOpen] = useState<boolean>(false);

  const openTask = () => {
    setIsTaskOpen(true);
  };

  const closeTask = () => {
    setIsTaskOpen(false);
  };

  return (
    <TaskItemComponent
      task={task}
      complited={complited}
      isTaskOpen={isTaskOpen}
      openTask={openTask}
      closeTask={closeTask}
      toggleTask={Store.toggleTask}
      deleteTask={Store.deleteTask}
    />
  );
};

export default TaskItemContainer;
