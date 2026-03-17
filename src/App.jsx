import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import RecentPosts from "./components/blog/RecentPosts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="fade-top"></div>
      <Info />
      <hr className="divider-subtle" />
      <RecentPosts />
      <div className="blur-bottom"></div>
    </>
  );
}

export default App;
