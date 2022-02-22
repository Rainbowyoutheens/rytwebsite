import React from "react";
import PopularPost from "./Subcomponents/PopularPost";
import RecentPost from "./Subcomponents/RecentPost";

function Blog() {
  return (
    <div>
      <div className="blog-bg">
        <div className="blog text-white">
          <h2 className="text-center">RYT Blog</h2>
          <h4 className="text-center">"Study To Show Thyself Approved"</h4>
        </div>
      </div>
      <div className="container-sm">
        <div className="d-flex justify-content-between">
          <div className="post-33">
            <h3 className="mt-3">LATEST POSTS</h3>
            <div className="red-line-left mb-0 mt-2"></div>
            <RecentPost />
          </div>
          <div className="post-33 mtop-6">
            <RecentPost />
          </div>
          <div className="post-33">
            <h3 className="mt-3">Popular Posts</h3>
            <div className="red-line-left mb-2 mt-2"></div>
            <div className="mt-4">
            <PopularPost />
            <PopularPost />
            <PopularPost />
            <PopularPost />
            <PopularPost /> 
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div className="post-33">
            <RecentPost />
          </div>
          <div className="post-33">
            <RecentPost />
          </div>
          <div className="post-33">
            <RecentPost />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="my-3 border-0 px-4 rounded-3 shadow py-2 yel-col" type="button">LOAD MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
