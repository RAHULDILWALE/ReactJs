import React from "react";
import App1 from "./app1";



const Posts = ({ posts, loading }) => {
  window.posts1 = posts;
  window.loading1 = loading;
  console.log(123)

  if (loading) {
    return <div><img src={ require('./loading.png') } /></div>;
  }

  return (<div>
      <table class="table table-bordered">
      <thead
        style={{
          "text-align": "center"
        }}
      >
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(person => (
          <tr>
            <td>{person.id}</td> <td>{person.title}</td>
            <td>{person.body}</td>
            <td>
              <button onClick={() => deletePost(person.id)}>Delete Post</button>
            </td>
            <td>
              <button>Edit Post</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
   
  );
};

function deletePost(id){
  console.log(window.posts1);
  window.posts1 = window.posts1.filter(i => i.id !== id);
  
  console.log(window.posts1);

  return (
    <div>
        <h1>del</h1>
      <Posts posts={window.posts1} loading={window.loading1}/>
    </div>
  );
};








export default Posts;
