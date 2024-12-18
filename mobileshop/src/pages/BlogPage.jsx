import React from "react";
import { Link } from "react-router";

function BlogPage() {
  const posts = JSON.parse(localStorage.getItem("posts"));

  return (
    <React.Fragment>
      <div className="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link> {">"}
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="heading">Blogs</div>

        {posts && (
          <div className="list-posts">
            {posts.map((post) => (
              <div
                key={post.id}
                className="item"
                style={{ paddingBottom: "0" }}
              >
                {post.image && <img src={post.image} alt="" />}
                <div className="info">
                  <div className="title" style={{ fontSize: "24px" }}>
                    {post.title}
                  </div>
                  <div className="content">{post.content}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default BlogPage;
