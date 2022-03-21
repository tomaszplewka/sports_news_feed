import React from "react";

import Spinner from "../../spinner/Spinner";
import PostList from "../../post-list/PostList";

const FrontPage = ({ posts }) => (
  <section className="py-sm-5 pt-5 pb-0 bg-white">
    <div className="container bg-light shadow mt-sm-5 mt-0 p-sm-5 p-3">
      {!posts ? <Spinner /> : <PostList data={posts} />}
    </div>
  </section>
);

export default FrontPage;
