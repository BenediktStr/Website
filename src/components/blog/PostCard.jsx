import React from "react";
import "./PostCard.css";

function PostCard({ post }) {
  return (
    <div className="postcard">
      <div className="post-content">
        <h1>{post.title}</h1>
        <h3>{post.subtitle}</h3>
      </div>
      <small className="post-date">{post.date}</small>
    </div>
  );
}

export default PostCard;
