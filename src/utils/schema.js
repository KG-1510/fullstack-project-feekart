import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string().trim().required("This is a required field"),
  password: Yup.string()
    .trim()
    .min(5, "Password should have at least 5 characters")
    .required("This is a required field"),
  captcha: Yup.string()
    .trim()
    .min(4, "CAPTCHA should have at least 4 characters")
    .required("This is a required field"),
});

const registerValidationSchema = Yup.object({
  name: Yup.string().trim().required("This is a required field"),
  email: Yup.string().trim().required("This is a required field"),
  password: Yup.string()
    .trim()
    .min(5, "Password should have at least 5 characters")
    .required("This is a required field"),
  image: Yup.string().trim().url("This is not a valid URL"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("This is a required field"),
  year: Yup.string().trim().required("This is a required field"),
  branch: Yup.string().trim().required("This is a required field"),
  spl: Yup.string().trim().required("This is a required field"),
});

export { loginValidationSchema, registerValidationSchema };
