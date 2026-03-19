import React from "react";
import PostCard from "./PostCard";
import usePosts from "../../hooks/usePost";
import "./BlogList.css";

export default function BlogList() {
  const { loading, getAllPosts } = usePosts();

  if (loading) return <div>Loading all posts...</div>;

  const allPosts = getAllPosts();

  return (
    <div className="blog-list">
      <div className="header">
        <h1>All Posts</h1>
        <span className="post-count">({allPosts.length} posts)</span>
      </div>

      <div className="posts-container">
        {allPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
