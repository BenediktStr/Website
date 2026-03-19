import Info from "../components/info/Info";
import RecentPosts from "../components/blog/RecentPosts";

// Homepage Komponente
export default function HomePage() {
  return (
    <>
      <div className="fade-top"></div>
      <Info />
      <hr className="divider-subtle" />
      <RecentPosts />
      <div className="blur-bottom"></div>
    </>
  );
}
