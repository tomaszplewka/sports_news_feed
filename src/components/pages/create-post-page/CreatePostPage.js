import React, { useEffect, useState } from "react";

import Form from "../../form/Form";

import axios from "axios";

const CreatePostPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (isFormSubmitted) {
      const postPost = async () => {
        await axios.post("https://jsonplaceholder.typicode.com/posts");
      };

      postPost();
    }
  }, [isFormSubmitted]);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {isFormSubmitted ? (
        <div className="my-5 py-5">
          <h1 className="my-5 py-5 text-center text-uppercase">
            Form submitted
          </h1>
        </div>
      ) : (
        <Form handleFormSubmit={handleFormSubmit} />
      )}
    </>
  );
};

export default CreatePostPage;
