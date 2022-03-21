import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../../spinner/Spinner";
import Comment from "../../comment/Comment";

import axios from "axios";

import "./SinglePostPage.scss";

import placeholder from "../../../assets/images/placeholder.png";

const SinglePostPage = ({ posts }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (!posts) {
      const getPost = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        );
        setPost(response.data);
      };

      getPost();
    } else {
      setPost(posts[params.postId - 1]);
    }
  }, [posts, params.postId]);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
      );
      setComments(response.data);
    };

    getComments();
  }, [params.postId]);

  if (!post || !comments) {
    return <Spinner />;
  }

  return (
    <div className="single-post__wrapper">
      <h1 className="mb-lg-5 mb-3 single-post__title">{post.title}</h1>
      <div className="mb-2 single-post__image__wrapper">
        <img
          src={placeholder}
          alt="dummy"
          className="img-fluid single-post__image"
        />
      </div>
      <div className="text-uppercase text-muted fs-6 single-post__date-author">
        by john doe, 2022-22-2
      </div>
      <div className="bg-white shadow mt-5 single-post__content__wrapper">
        <p className="p-lg-5 p-4 single-post__content__body">{post.body}</p>
      </div>
      <div className="mt-lg-5 mt-3 single-post__comments__wrapper">
        {comments.map((comment, index) => (
          <Comment key={index} id={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default SinglePostPage;
