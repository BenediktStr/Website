import React from "react";
import PostCard from "./PostCard";
import usePosts from "../../hooks/usePost";
import "./RecentPost.css";

export default function RecentPosts() {
  const { posts, loading, getRecentPosts } = usePosts();

  if (loading) return <div>Loading posts...</div>;

  const recentPosts = getRecentPosts(5);

  return (
    <div className="recent-posts">
      <div className="header">
        <h2>New posts</h2>
        <button className="button">
          All posts
          <span className="arrow">→</span>
        </button>
      </div>
      {recentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
