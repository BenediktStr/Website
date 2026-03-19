import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="postcard">
      <div className="post-content">
        <h1>{post.title}</h1>
        <h3>{post.subtitle}</h3>
      </div>
      <small className="post-date">{post.date}</small>
    </Link>
  );
}

export default PostCard;
