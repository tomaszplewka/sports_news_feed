import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const PostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/post") {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  return (
    <section className="py-sm-5 pt-5 pb-0 bg-white">
      <div className="container bg-light shadow mt-sm-5 mt-0 p-sm-5 p-3">
        <Outlet />
      </div>
    </section>
  );
};

export default PostPage;
