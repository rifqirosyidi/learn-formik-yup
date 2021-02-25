import React from "react";
import { Style } from "./Style";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");
  return (
    <>
      <label className="checkbox">
        <select {...field} {...props}>
          {children}
        </select>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function App() {
  return (
    <Style>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          acceptedTerms: "false",
          selectCity: "",
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .min(3, "Must be at least 3 character")
            .max("15", "Must be 15 character or less")
            .required("Required"),
          lastname: Yup.string()
            .min(3, "Must be at least 3 character")
            .max("15", "Must be 15 character or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "Must accept terms and conditions"),
          selectCity: Yup.string()
            .oneOf(["first", "second", "three"], "Invalid Select")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <h1>Sign Up</h1>
            <CustomTextInput
              label="firstname"
              name="firstname"
              type="text"
              placeholder="First Name"
            />
            <CustomTextInput
              label="lastname"
              name="lastname"
              type="text"
              placeholder="Last Name"
            />
            <CustomTextInput
              label="email"
              name="email"
              type="text"
              placeholder="Last Name"
            />
            <CustomSelect label="Select City" name="selectCity">
              <option value="">select city</option>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
            </CustomSelect>
            <CustomCheckBox name="acceptedTerms">
              i accept the terms conditions
            </CustomCheckBox>
            <button type="submit">
              {props.isSubmitting ? "Processing..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </Style>
  );
}

export default App;
