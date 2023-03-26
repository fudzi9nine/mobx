import { Button, Typography } from "@mui/material";
import React from "react";
import { TaskType } from "../../../../types/TaskType";
import AddTaskModalContainer from "../../../addTaskModal/containers/addTaskModalContainer";
import { TaskList } from "../../../taskList";

type Props = {
  completedTasks: TaskType[];
  uncompletedTasks: TaskType[];
  isAddTaskModalVisible: boolean;
  openAddTaskModal: () => void;
  closeAddTaskModal: () => void;
};

const MainScreenComponent = ({
  completedTasks,
  uncompletedTasks,
  isAddTaskModalVisible,
  openAddTaskModal,
  closeAddTaskModal,
}: Props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="h4" style={{ color: "#fff", marginBottom: 10 }}>
          Task list
        </Typography>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <TaskList data={uncompletedTasks} />
          <TaskList data={completedTasks} complited />
        </div>
        <Button variant="contained" onClick={openAddTaskModal}>
          Add Task
        </Button>
      </div>
      <AddTaskModalContainer
        isVisible={isAddTaskModalVisible}
        closeModal={closeAddTaskModal}
      />
    </>
  );
};

export default MainScreenComponent;
