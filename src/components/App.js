import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Spinner from "./spinner/Spinner";

import axios from "axios";

const FrontPage = lazy(() => import("./pages/front-page/FrontPage"));
const SinglePostPage = lazy(() =>
  import("./pages/single-post-page/SinglePostPage")
);
const PostPage = lazy(() => import("./pages/post-page/PostPage"));
const CreatePostPage = lazy(() =>
  import("./pages/create-post-page/CreatePostPage")
);

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!posts) {
      const getPosts = async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      };

      getPosts();
    }
  }, [posts]);

  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<FrontPage posts={posts} />} />
          <Route path="/post" element={<PostPage />}>
            <Route path=":postId" element={<SinglePostPage posts={posts} />} />
            <Route path="create" element={<CreatePostPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
