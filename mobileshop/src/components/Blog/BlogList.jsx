import React from "react";
import "./BlogList.css";
import { Link } from "react-router";

function BlogList({ posts }) {
  return (
    <div className="list-posts">
      {posts.map((post) => (
        <div key={post.id} className="item">
          <img
            src="https://dummyjson.com/image/400x200/282828"
            alt={post.title}
          />
          <div className="info">
            <div className="title">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </div>
            <div>
              <Link className="btn-default" to={`/blog/${post.id}`}>
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
