import React from "react";

const InputField = (props) => {
  const { type, name, label, placeholder, error } = props;

  const fieldType = type ? type : "text";

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        type={fieldType}
        className="form-control"
        id={name}
        placeholder={placeholder}
      />

      {/* {error && <div className="invalid-feedback">{error}</div>} */}
    </div>
  );
};

export default InputField;
