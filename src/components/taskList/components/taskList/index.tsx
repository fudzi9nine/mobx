import React from "react";
import List from "@mui/material/List";

import TaskItemContainer from "../../containers/taskItemContainer";
import { TaskType } from "../../../../types/TaskType";
import { Paper, Typography } from "@mui/material";

type Props = {
  data: TaskType[];
  complited?: boolean;
};

const TaskListComponent = ({ data, complited }: Props) => {
  return (
    <Paper
      elevation={0}
      style={{
        height: 300,
        width: 400,
        justifyContent: "center",
        overflow: "auto",
        backgroundColor: "transparent",
      }}
    >
      <Typography variant="h5" color={"#fff"}>
        {complited ? "Complited Tasks" : "Tasks"}
      </Typography>
      <List dense sx={{ width: "100%" }}>
        {data.map((task) => (
          <TaskItemContainer task={task} complited={complited} />
        ))}
      </List>
    </Paper>
  );
};

export default TaskListComponent;
