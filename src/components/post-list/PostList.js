import React from "react";

import PostItem from "../post-item/PostItem";

import "./PostList.scss";

import placeholder from "../../assets/images/placeholder.png";

const PostList = ({ data }) => {
  const renderedList = data.map((item) => {
    let extraClass = "";
    if (!(item.id % 3)) {
      extraClass = "span-2";
    } else if (!(item.id % 11)) {
      extraClass = "span-3";
    }

    return (
      <PostItem
        key={item.id}
        id={item.id}
        title={item.title}
        image={placeholder}
        body={item.body}
        extraClass={extraClass}
      />
    );
  });

  return <div className="post-list__wrapper">{renderedList}</div>;
};

export default PostList;
