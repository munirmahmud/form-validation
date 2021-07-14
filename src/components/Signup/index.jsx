import React from "react";
import InputField from "../InputField";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        name="firstName"
        label="First Name"
        placeholder="First Name"
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
