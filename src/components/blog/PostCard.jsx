import React from "react";

function PostCard({ post }) {
  return (
    <div className="postcard">
      <h1>{post.title}</h1>
      <h3>{post.subtitle}</h3>
      <small>{post.date}</small>
    </div>
  );
}

export default PostCard;
