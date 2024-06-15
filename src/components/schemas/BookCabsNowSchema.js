import * as Yup from "yup";

export const BookCabsNowSchema = Yup.object({
  pickupLocation: Yup.string().required("Pickup location is required"),
  dropLocation: Yup.string().required("Drop location is required"),
  name: Yup.string().min(2).max(14).required("Firstname is required"),
  phonenumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Phone number must be at least 10 characters")
    .max(11, "Phone number must be at most 11 characters")
    .required("Phone number is required"),
  dateTime: Yup.date().required("Date and time are required"),
  passengers: Yup.number()
    .min(1, "Minimum passengers must be 1")
    .max(49, "Maximum passengers must be 49")
    .required("Number of passengers is required"),
});
