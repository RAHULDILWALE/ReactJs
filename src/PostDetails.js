import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";



 class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts : []}

  }

  componentDidMount() {
    let id = this.props.match.params.id;    
    console.log(id)
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(res => {
        const posts1 = res.data;
        console.log(posts1)
        this.setState({ posts : posts1 });
      })
  }

 


  render() {
    return (

      <div>

        {this.props.posts}
        <button style = {{"margin-left" :"100px", "margin-top" :"100px"}}  className="btn btn-primary">
        <Link   to={`/conditional`}> <span className = "glyphicon glyphicon-arrow-left" style = {{"color" : "white"}} ></span></Link>
          Back
        </button>

      <div>
<h1 style ={{color : "black",  "text-align": "center"}}> Post Details of Seleted Post </h1>
<table class="table table-bordered" style ={{ "text-align": "center", "margin-top" :"60px"}}>

    <thead  ><tr style ={{color : "black",  "text-align": "center"}}>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Add to Cart</th>

             
            </tr>
          </thead>
          <tbody>
            {
              <tr>
                <td>{this.state.posts.id}</td> 
                <td>{this.state.posts.title}</td> 
                <td>{this.state.posts.author}</td> 
                <td><button type="Submit" className="btn btn-primary"  onClick={()=>this.props.dispatch({type:'ADD_TO_CART',post : this.state.posts})}>Add to Cart </button></td>
                
              </tr>
             }
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log("login satate " + state.cartReducer)
  return {
    posts: state.cartReducer
  };
};
export default connect(mapStateToProps)(PostDetails);