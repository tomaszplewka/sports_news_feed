import React from "react";

import "./FormInput.scss";

const FormInput = ({ id, label, ...otherProps }) => (
  <div className="d-flex flex-md-row flex-column my-3 form-input__wrapper">
    <label
      className="fs-6 mb-md-0 mb-1 d-inline-flex justify-content-start align-items-center text-uppercase fw-bold"
      htmlFor={id}
    >
      {label}
    </label>
    <input placeholder="Fill in" id={id} {...otherProps} required />
  </div>
);

export default FormInput;
