import {
  Card,
  CardContent,
  CardHeader,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { TaskType } from "../../../../types/TaskType";

type Props = {
  isVisible: boolean;
  task: TaskType;
  closeModal: () => void;
};

const SelectedTaskComponent = ({ isVisible, task, closeModal }: Props) => {
  return (
    <Modal
      open={isVisible}
      onClose={closeModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        elevation={5}
        style={{
          minWidth: 300,
          maxWidth: 500,
          minHeight: 200,
          maxHeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <CardHeader title={task.title} />

        <CardContent>
          <Typography
            paragraph
            style={{
              wordWrap: "break-word",
              maxWidth: 500,
              maxHeight: 400,
              overflow: "auto",
            }}
          >
            {task.description}
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default SelectedTaskComponent;
