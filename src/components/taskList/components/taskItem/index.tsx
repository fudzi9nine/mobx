import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  IconButton,
  Icon,
} from "@mui/material";
import { TaskType } from "../../../../types/TaskType";
import SelectedTaskComponent from "../selectedTask";

type Props = {
  task: TaskType;
  complited: boolean;
  isTaskOpen: boolean;
  openTask: () => void;
  closeTask: () => void;
  toggleTask: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
};

const TaskItemComponent = ({
  task,
  complited,
  isTaskOpen,
  openTask,
  closeTask,
  toggleTask,
  deleteTask,
}: Props) => {
  return (
    <>
      <ListItem
        key={task.id}
        secondaryAction={
          <>
            <Checkbox
              style={{ color: "#fff" }}
              edge="end"
              onChange={() => toggleTask(task.id)}
              checked={complited}
            />
            {complited && (
              <IconButton onClick={() => deleteTask(task.id)}>
                <Icon color="error">delete</Icon>
              </IconButton>
            )}
          </>
        }
        disablePadding
      >
        <ListItemButton onClick={openTask}>
          <ListItemText style={{ color: "#fff" }} primary={task.title} />
        </ListItemButton>
      </ListItem>
      <SelectedTaskComponent
        task={task}
        isVisible={isTaskOpen}
        closeModal={closeTask}
      />
    </>
  );
};

export default TaskItemComponent;
