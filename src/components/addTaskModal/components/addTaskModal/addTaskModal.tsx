import { Button, Modal, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "../../constansts";

type Props = {
  isVisible: boolean;
  addTask: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => void;
  closeModal: () => void;
};

const AddTaskModalComponent = ({ isVisible, addTask, closeModal }: Props) => {
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
      <Paper
        elevation={5}
        style={{
          width: 500,
          height: 550,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <h2>Add task</h2>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={addTask}
        >
          {(formikProps) => {
            return (
              <>
                <TextField
                  name={"title"}
                  onBlur={formikProps.handleBlur}
                  label={"Title"}
                  value={formikProps.values.title}
                  error={Boolean(
                    formikProps.errors.title && formikProps.touched.title
                  )}
                  onChange={formikProps.handleChange}
                  required
                  style={{ width: "100%" }}
                  helperText={
                    formikProps.errors.title &&
                    formikProps.touched.title &&
                    String(formikProps.errors.title)
                  }
                />
                <div
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    name={"description"}
                    label={"Description"}
                    value={formikProps.values.description}
                    onChange={formikProps.handleChange}
                    multiline
                    inputProps={{
                      style: {
                        height: 300,
                        overflow: "auto",
                      },
                    }}
                    style={{
                      width: "100%",
                    }}
                  />
                  <Button
                    style={{ marginTop: 20 }}
                    onClick={formikProps.submitForm}
                  >
                    Submit
                  </Button>
                </div>
              </>
            );
          }}
        </Formik>
      </Paper>
    </Modal>
  );
};

export default AddTaskModalComponent;
