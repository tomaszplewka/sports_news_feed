import React, { useState } from "react";

import FormInput from "../form-input/FormInput";
import FormTextarea from "../form-textarea/FormTextarea";
import Btn from "../btn/Btn";

import "./Form.scss";

const INITIAL_STATE = {
  first: "",
  last: "",
  title: "",
  body: "",
  id: 666
};

const Form = ({ handleFormSubmit }) => {
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleInputChange = (e) =>
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(INITIAL_STATE);
    handleFormSubmit();
  };

  return (
    <div className="my-xl-5 my-0 position-relative m-auto overflow-hidden p-md-5 p-4 shadow form__container">
      <h2 className="text-center fw-bolder text-uppercase text-white form__title">
        add post
      </h2>
      <p className="d-flex justify-content-center align-items-center text-white form__subtitle">
        fill in the form and hit submit to add a new post
      </p>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <FormInput
          name="first"
          id="first"
          type="text"
          label="First Name"
          value={formState.first}
          onChange={handleInputChange}
        />
        <FormInput
          name="last"
          id="last"
          type="text"
          label="Last Name"
          value={formState.last}
          onChange={handleInputChange}
        />
        <FormInput
          name="title"
          id="title"
          type="text"
          label="Title"
          value={formState.title}
          onChange={handleInputChange}
        />
        <FormTextarea
          name="body"
          id="body"
          label="Body"
          value={formState.body}
          onChange={handleInputChange}
        />
        <div className="text-center m-0 form__submit__wrapper">
          <Btn>Submit</Btn>
        </div>
      </form>
    </div>
  );
};

export default Form;
