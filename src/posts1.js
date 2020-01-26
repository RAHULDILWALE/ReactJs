import React, { Component } from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


export default class Posts1 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.posts);
    console.log(this.props.loading);
  }

  state = {
    posts: this.props.posts,
    loading: this.props.loading
  };

  if(loading) {
    return (
      <div>
        <img src={require("./loading.png")} />
      </div>
    );
  }

  deletePost = id => {
    var data = this.props.posts.filter(function(i) {
      return id != i.id;
    });
    console.log(data);

    this.props.posts.filter(i => i.id !== id);
    this.setState({ posts: data });
    console.log(id);
  };

  render() {
    return (
      <div>

<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS" style={{float : "right", "backgroundcolor" : "green"}}/>
        <table class="table table-bordered" id="table-to-xls">
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
            {this.props.posts.map(person => (
              <tr>
                <td>{person.id}</td> <td>{person.title}</td>
                <td>{person.body}</td>
                <td>
                  <button onClick={() => this.deletePost(person.id)} className = "btn btn-danger" >
                  <span className = "glyphicon glyphicon-trash"></span>

                    Delete 
                  </button>
                </td>
                <td>
                  <button className = "btn btn-primary" >
                  <span className = "glyphicon glyphicon-pencil"></span>

                  Edit Post

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
