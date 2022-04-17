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

export { loginValidationSchema };
