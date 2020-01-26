import React from "react";


class par extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  
  
  return (
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
            <td>{person.id}</td> <td>{person.title}</td><td>{person.body}</td><td><button onClick="deletePost({person.id})">Delete Post</button></td><td><button>Edit Post</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
