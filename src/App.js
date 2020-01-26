import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostForm from "./PostForm";
import AllPost from "./AllPost";
import CartComponent from "./CartComponent";

function App() {
  return (
  <div className="App">
  <div className="navbar">
    <h2 className="center ">Post App</h2>
    </div>
    <CartComponent></CartComponent>
    <PostForm />
    <AllPost />
</div>
  );
}

export default App;
