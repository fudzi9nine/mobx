import React from "react";
import Store from "../../../store/store";
import AddTaskModalComponent from "../components/addTaskModal/addTaskModal";

type Props = {
  isVisible: boolean;
  closeModal: () => void;
};

const AddTaskModalContainer = ({ isVisible, closeModal }: Props) => {
  const onAddTask = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    Store.addTask({
      title,
      description,
      id: Store.newTaskID,
      completed: false,
    });
    closeModal();
  };

  return (
    <AddTaskModalComponent
      addTask={onAddTask}
      isVisible={isVisible}
      closeModal={closeModal}
    />
  );
};

export default AddTaskModalContainer;
