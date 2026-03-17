import React from "react";
import PostCard from "./PostCard";

function PostList() {
  const allPosts = getAllPosts();

  return (
    <div className="post-list">
      {allPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
export default PostList;
