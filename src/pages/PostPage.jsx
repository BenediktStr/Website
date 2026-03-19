import React, { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import usePosts from "../hooks/usePost";
import "./PostPage.css";

export default function PostPage() {
  const { id } = useParams();
  const { posts, loading, getPostWithContent } = usePosts();
  const [postDetail, setPostDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(true);

  useEffect(() => {
    const loadPostDetail = async () => {
      if (id) {
        const detail = await getPostWithContent(id);
        setPostDetail(detail);
        setLoadingDetail(false);
      }
    };

    if (!loading) {
      loadPostDetail();
    }
  }, [id, loading, getPostWithContent]);

  if (loading || loadingDetail) return <div>Loading...</div>;

  const post = posts.find((p) => p.id === id);

  if (!post || !postDetail) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <div className="fade-top"></div>
      <div className="post-detail">
        <div className="back-container">
          <Link to="/blog" className="back-link">
            <span className="back-arrow">←</span>Back
          </Link>
        </div>
        <div className="post-header">
          <h1>{post.title}</h1>
          <h3>{post.subtitle}</h3>
          <small className="post-date">{post.date}</small>
        </div>
        <div className="post-content">
          <p>{postDetail.content || "Post content coming soon..."}</p>
        </div>
      </div>
      <div className="blur-bottom"></div>
    </>
  );
}
