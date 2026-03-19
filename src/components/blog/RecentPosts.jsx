import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/blog" className="button">
          All posts
          <span className="arrow">→</span>
        </Link>
      </div>
      {recentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
