import BlogList from "../components/blog/BlogList";

// Blog Seite mit allen Posts
export default function BlogPage() {
  return (
    <>
      <div className="fade-top"></div>
      <BlogList />
      <div className="blur-bottom"></div>
    </>
  );
}
