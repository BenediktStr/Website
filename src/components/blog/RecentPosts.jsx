import React from "react";
import PostCard from "./PostCard";
import usePosts from "../../hooks/usePost";

export default function RecentPosts() {
  const { posts, loading, getRecentPosts } = usePosts();

  if (loading) return <div>Loading posts...</div>;

  const recentPosts = getRecentPosts(5);

  return (
    <div className="recent-posts">
      <h2>Recent Posts</h2>
      {recentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
