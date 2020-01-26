import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import "./App.css";
import Posts1 from './posts1';

const App1 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        "margin-top": "20px",
        "text-align": "center",
        backgroundcolor: "black",
        color: "black",
        "margin-left": "400px",
        "margin-right": "400px"
      }}
    >
      <h1 className="text-primary mb-3">Post List</h1>
      <Posts1 posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App1;
