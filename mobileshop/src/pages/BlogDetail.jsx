import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function BlogDetail() {
  const { id } = useParams(); // Lấy ID từ URL
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPostDetail = async () => {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPostDetail();
  }, [id]);

  return (
    <React.Fragment>
      <div className="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link> {">"}
            </li>
            <li>
              <Link to="/blog">Blog</Link> {">"}
            </li>
            <li>{post.title}</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div
          className="title"
          style={{ margin: "25px 0 15px", fontSize: "30px" }}
        >
          {post.title}
        </div>
        <div>{post.body}</div>
        {post.tags && (
          <div className="tags" style={{ marginTop: "10px" }}>
            <strong>Tags: </strong>s
            {post.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default BlogDetail;
