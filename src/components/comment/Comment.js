import React from "react";

import avatar from "../../assets/images/avatar.png";

import "./Comment.scss";

const Comment = ({ comment, id }) => (
  <div className="pt-lg-5 pt-4 mx-lg-5 mx-md-3 mx-0 d-flex align-items-start comment__wrapper">
    <div className="me-lg-5 me-3 comment__avatar__wrapper">
      <img
        className="img-fluid img-thumbnail border-0 p-0 rounded-circle"
        src={avatar}
        alt="dummy"
      />
    </div>
    <div className="flex-grow-1 p-lg-4 p-3 shadow bg-white comment__content__wrapper">
      <div className="mb-3">
        <h5 className="mb-1">Dummy name</h5>
        <span className="text-muted">{`${id + 1} days ago`}</span>
      </div>
      <h6>{comment.name}</h6>
      <p>{comment.body}</p>
      <div className="d-flex justify-content-between align-items-center comment__actions__wrapper">
        <div className="comment__votes__wrapper">
          <span className="me-3 text-muted fs-5">150 &#10084;</span>
          <span className="text-muted fs-5">50 &#9759;</span>
        </div>
        <div className="comment__reply__wrapper">
          <span className="text-muted fs-5">&#9735; reply</span>
        </div>
      </div>
    </div>
  </div>
);

export default Comment;
