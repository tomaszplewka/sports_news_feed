import React from "react";

import "./Btn.scss";

const Btn = ({ children }) => (
  <button className="d-inline-block my-3 text-center position-relative text-uppercase overflow-hidden btn">
    <span className="d-block w-100 h-100 p-3 fw-bold fs-6 btn__overlay">
      {children}
    </span>
  </button>
);

export default Btn;
