import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
