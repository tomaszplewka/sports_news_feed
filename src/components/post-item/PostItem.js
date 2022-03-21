import React from "react";
import { useNavigate } from "react-router-dom";

import "./PostItem.scss";

const PostItem = ({ id, title, body, image, extraClass }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`text-primary bg-white fw-bold text-uppercase d-flex flex-column justify-content-between shadow post-item ${extraClass}`}
      onClick={() => navigate(`./post/${id}`)}
    >
      {extraClass ? (
        <div className="text-center mb-3 post-item__image__wrapper">
          <img src={image} alt="dummy" className="img-fluid post-item__image" />
        </div>
      ) : null}
      <div className="h-100 d-flex flex-column justify-content-center post-item__content__wrapper">
        <h5 className="post-item__title">{title}</h5>
        <p className="small-text text-wrap text-muted text-truncate post-item__body">
          {body}
        </p>
      </div>
    </div>
  );
};

export default PostItem;
