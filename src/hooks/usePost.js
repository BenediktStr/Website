import { useState, useEffect } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/src/data/posts/index.json");
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    getRecentPosts: (count) => posts.slice(0, count),
    getAllPosts: () => posts,
    getById: (id) => posts.find((post) => post.id === id),
  };
}
