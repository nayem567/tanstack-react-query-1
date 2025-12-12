import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostsById from "./components/PostsById";

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <>
      <button onClick={() => setIsMounted((prev) => !prev)}>Toggle</button>
      {isMounted && <Posts />}
      <PostsById id={3} />
    </>
  );
}
