import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from './Model';
import PropTypes from 'prop-types';



export default class Operations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '',
      posts: [],
      isAddPost: false,
      title: "",
      body: "",
      isEditPost: false,
      username : " ",
      post : {},
      isSearchPost: false,
      isListPost : true,
      errorMsg  :  " "
    };
    this.deletePosts = this.deletePosts.bind(this);

    this.addpost = this.addpost.bind(this);

    this.editPost = this.editPost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.updateData = this.updateData.bind(this);
    this.handleChange2= this.handleChange2.bind(this);


  }

  handleChange2(event){

    this.setState({[event.target.name] : event.target.value})

    var uid= parseInt(event.target.value);
    console.log(typeof uid)

    if( !isNaN(uid)){
      console.log("Search")
      axios.get("http://localhost:3000/posts/" + uid).then(res => {
      const post = res.data;
      console.log(post)
      this.setState({ post, isSearchPost : true,isListPost : false });
    });
   

    }else{

      
      this.setState({ errorMsg : "Please Enter Valid Post ID" });



    }

    


   
   


  }

  updateData(event,id){

    console.log(id)

    axios.put("http://localhost:3000/posts/"+ window.id1, { title : this.state.title, author : this.state.author})
    .then(function (response) {
      console.log(response.data);
//    
    })
    .catch(function (error) {
        console.log(error);
        alert('Sorry! Server is not able to process this request at the moment.')
    });

    this.setState({isEditPost : false})

  }

  editPost(event, id) {
    window.id1=id
    console.log(id);
    this.setState({ isEditPost: true });

    axios.get("http://localhost:3000/posts/" + id).then(res => {
      const posts = res.data;
      console.log(posts);
      console.log(posts.title);
      console.log(posts.author);

      this.setState({ title :posts.title, author : posts.author});
    });
  }
  addpost() {
    this.setState({ isAddPost: true });
    console.log(this.state.isAddPost);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    //   alert('The Post title is : ' + this.state.title + " Author Name is " + this.state.author);
    console.log(JSON.stringify(this.state));
    event.preventDefault();

    axios.post(`http://localhost:3000/posts`, this.state).then(res => {
      console.log(res);
      console.log(res.data);
      alert("Post Added SuccessFully");
      this.setState({ isAddPost: false });
    });
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    axios.get(`http://localhost:3000/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }
  deletePosts = (event, id) => {
    console.log(id);

    var res = window.confirm("Do you really want to delete this Post ?????");
    if (res === true) {
      axios.delete("http://localhost:3000/posts/" + id).then(res => {
        console.log(res.data);
      });
      this.setState({isListPost : true})

    }
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    var data1 = event.target.value;
  }

  render() {
    var template;

    if (this.state.isAddPost) {
      template = (
        <div
          style={{
            display: "inline"
          }}
        >
          <h3
            style={{
              "margin-top": "60px",
              "text-align": "center",
              color: "black"
            }}
          >
            Add Post
          </h3>

          <form
            onSubmit={this.handleSubmit}
            style={{ "margin-left": "600px", "margin-top": "40px" }}
          >
            <input
              required
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
              placeholder="Enter Post Title"
            />
            <br />
            <br />
            <input
              required
              type="text"
              value={this.state.author}
              onChange={this.handleChange}
              name="author"
              placeholder="Enter Author Name"
            />
            <br />
            <br />
            <button>Add</button>
          </form>
        </div>
      );
    } else if(this.state.isEditPost) {

      template = (
        <div
          style={{
            display: "inline"
          }}
        >
          <h3
            style={{
              "margin-top": "60px",
              "text-align": "center",
              color: "black"
            }}
          >
            Update Post
          </h3>

          <form
            onSubmit={this.handleSubmit}
            style={{ "margin-left": "600px", "margin-top": "40px" }}
          >
            <input
              required
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
              placeholder="Enter Post Title"
            />
            <br />
            <br />
            <input
              required
              type="text"
              value={this.state.author}
              onChange={this.handleChange}
              name="author"
              placeholder="Enter Author Name"
            />
            <br />
            <br />
            <button onClick={(event)=>this.updateData(event, this.state.id)} className="btn btn-primary">Update</button>
          </form>
        </div>
      )
      
         
          
    } else {
      template = (
        <div>
            <div  style={{ float: "left", "margin-top": "10px","margin-left": "10px" }}>
            <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={event => this.handleChange2(event)}
            placeholder="Enter User Id"
           />
            <br></br>
          <h6 style={{ color : "red"}}>{this.state.errorMsg}</h6>

            </div>
           
          <button
            className="btn btn-primary"
            style={{ float: "right", "margin-right": "30px" }}
            onClick={() => this.addpost()}
          >
            Add Post <span className = "glyphicon glyphicon-plus"></span>
          </button>
          <table
            class="table table-bordered"
            style={{ float: "right", "margin-top": "60px" }}
          >
            <thead
              style={{
                "text-align": "center"
              }}
            >
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Delete</th>
                <th>Edit</th>
                <th>Post Details</th>
              </tr>
            </thead>
            <tbody>

              {this.state.isSearchPost && this.state.post &&    <tr>
                  <td>{this.state.post.id}</td> <td>{this.state.post.title}</td>
                  <td>{this.state.post.author}</td>


                  <td>
                    <a
                      
                      onClick={event => this.deletePosts(event, this.state.post.id)}
                    >
                      <span className = "glyphicon glyphicon-trash"></span>
                   
                    </a>
                  </td>
                  <td>
                    <a
                      onClick={event => this.editPost(event, this.state.post.id)}
                    
                    >
                        <span className = "glyphicon glyphicon-pencil"></span>
                      
                    </a>
                  </td>
                  <td>
                    <Link to={`/details/${this.state.post.id}`}> <span className = "glyphicon glyphicon-eye-open "></span></Link>
                  </td>

                  </tr>}
              {this.state.isListPost && this.state.posts.map(person => (
                <tr>
                  <td>{person.id}</td> <td>{person.title}</td>
                  <td>{person.author}</td>
                  <td>
                    <a
                      
                      onClick={event => this.deletePosts(event, person.id)}
                    >
                      <span className = "glyphicon glyphicon-trash"></span>
                   
                    </a>
                  </td>
                  <td>
                    <a
                      onClick={event => this.editPost(event, person.id)}
                    
                    >
                        <span className = "glyphicon glyphicon-pencil"></span>
                      
                    </a>
                  </td>
                  <td>
                    <Link to={`/details/${person.id}`}> <span className = "glyphicon glyphicon-eye-open "></span></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return <div>{template}</div>;
  }
}
