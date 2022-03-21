import React from "react";

import "./FormTextarea.scss";

const FormTextarea = ({ id, label, ...otherProps }) => (
  <div className="d-flex flex-md-row flex-column align-items-start form-textarea__container">
    <label
      className="fs-6 mb-md-0 mb-1 d-inline-flex justify-content-start align-items-center text-uppercase fw-bold"
      htmlFor={id}
    >
      {label}
    </label>
    <textarea placeholder="Fill in" id={id} {...otherProps} required />
  </div>
);

export default FormTextarea;
