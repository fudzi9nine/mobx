import * as Yup from "yup";

export const INITIAL_VALUES = {
  title: "",
  description: "",
};

export const VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string()
    .min(5, "Why so short")
    .max(70, "Enough, move it to the description ")
    .required("Required"),
  description: Yup.string(),
});
