import { useState, useEffect } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/data/posts/index.json");
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

  const getPostWithContent = async (id) => {
    try {
      // Try loading a .md file first
      const mdResponse = await fetch(`/data/posts/content/${id}.md`);
      if (mdResponse.ok) {
        const mdContent = await mdResponse.text();
        // Find the post metadata from index
        const post = posts.find((p) => p.id === id);
        return {
          ...post,
          content: mdContent,
        };
      }

      // Fallback to JSON file
      const response = await fetch(`/data/posts/${id}.json`);
      const postData = await response.json();
      return postData;
    } catch (error) {
      console.error(`Error loading post ${id}:`, error);
      return null;
    }
  };

  return {
    posts,
    loading,
    getRecentPosts: (count) => posts.slice(0, count),
    getAllPosts: () => posts,
    getById: (id) => posts.find((post) => post.id === id),
    getPostWithContent,
  };
}
