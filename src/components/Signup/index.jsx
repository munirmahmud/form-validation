import React, { useState } from "react";
import { validateForm } from "../../helpers";
import InputField from "../InputField";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(values));
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation">
      <InputField
        name="firstName"
        label="First Name"
        placeholder="First Name"
        error={errors.firstName && "First name is required"}
      />
      <InputField name="lastName" label="Last Name" placeholder="Last Name" />
      <InputField type="email" name="email" label="Email" placeholder="Email" />
      <InputField
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
      />

      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </form>
  );
};

export default Signup;
