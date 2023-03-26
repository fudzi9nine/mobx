import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import MainScreenComponent from "../components/mainScreen";
import Store, { StoreClass } from "../../../store/store";

type Props = {
  store: StoreClass;
  isAddTaskModalVisible: boolean;
  openAddTaskModal: () => void;
  closeAddTaskModal: () => void;
};

const MainScreen = observer(
  ({
    store,
    isAddTaskModalVisible,
    openAddTaskModal,
    closeAddTaskModal,
  }: Props) => (
    <MainScreenComponent
      completedTasks={store.completedTasks}
      uncompletedTasks={store.uncompletedTasks}
      isAddTaskModalVisible={isAddTaskModalVisible}
      openAddTaskModal={openAddTaskModal}
      closeAddTaskModal={closeAddTaskModal}
    />
  )
);

const MainScreenContainer = () => {
  const [isAddTaskModalVisible, setIsAddTaskModalVisible] =
    useState<boolean>(false);

  const openAddTaskModal = () => {
    setIsAddTaskModalVisible(true);
  };

  const closeAddTaskModal = () => {
    setIsAddTaskModalVisible(false);
  };
  return (
    <MainScreen
      store={Store}
      isAddTaskModalVisible={isAddTaskModalVisible}
      openAddTaskModal={openAddTaskModal}
      closeAddTaskModal={closeAddTaskModal}
    />
  );
};
export default MainScreenContainer;
