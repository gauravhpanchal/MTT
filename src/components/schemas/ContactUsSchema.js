import * as Yup from "yup";

export const ContactUsSchema = Yup.object({
  firstname: Yup.string().min(2).max(14).required("Firstname is required"),
  lastname: Yup.string().min(2).max(14).required("Lastname is required"),
  email: Yup.string().email().required("Email is required"),
  phonenumber: Yup.string()
    .min(10)
    .max(11)
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});
