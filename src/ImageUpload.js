import React, { Component } from "react";
import storage from "./index2";
import axios from "axios";
import { Button } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      productName: "",
      price: "",
      quantity: "",
      isAvailable: true,
      description : "",
      flag : false
    };
  }

  handleChange = e => {
    if (e.target.name === "uploadfile" && e.target.files[0]) {
      const image = e.target.files[0];
      console.log(image)
      this.setState(() => ({ image }));
    } else {
      this.setState({ [e.target.name]: e.target.value });
      console.log(e.target.name);
    }
  };

  handleUpload = (e) => {
      e.preventDefault()
    const { image } = this.state;
    console.log(image);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    console.log(uploadTask);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });

          this.setState({flag : true})
        console.log(this.state.url);
      }
    );

    axios.post(`http://localhost:3000/products`, this.state).then(res => {
        console.log(res);
        console.log(res.data);
        alert("Product Added SuccessFully");
       
      });
  };
  render() {
    return (
      <div>
        <div>
          <h1
            style={{
              "text-align": "center",
              color: "black",
              "margin-left": "-50px"
            }}
          >
            Add Product
          </h1>
          <form
            onSubmit={event => this.handleSubmit(event)}
            style={{
              "margin-left": "580px",
              "margin-top": "50px"
            }}
          >
            <input
              type="text"
              value={this.state.productName}
              name="productName"
              onChange={event => this.handleChange(event)}
              placeholder="Enter productName"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              value={this.state.price}
              name="price"
              onChange={event => this.handleChange(event)}
              placeholder="Enter price"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              value={this.state.quantity}
              name="quantity"
              onChange={event => this.handleChange(event)}
              placeholder="Enter quantity"
            />
            <br></br>
            <br></br>

          
          <textarea placeholder ="Enter Product Description" value={this.state.description} onChange={event => this.handleChange(event)} name="description" />
      
            <br></br>
            {/* <progress
              value={this.state.progress}
              max="100"
              className="progress"
            /> */}
            <input
              name="uploadfile"
              type="file"
              
              onChange={event => this.handleChange(event)}
              
            />
            <br></br>

            <button
              onClick={event => this.handleUpload(event)}
              className="btn btn-primary"
            >
              Add
            </button>
          </form>

          <br />
        <br />

        <div>

            {this.state.flag && 

<Card  style={{
    "margin-left": "500px",
    "margin-top": "50px",
     "height": "300px",
  "width":"400px"
  }}>
  <CardImg top width="100%"src={this.state.url || "https://via.placeholder.com/400x300"} alt="Card image cap" />
  <CardBody  style={{
   "backgroundColor" : "black", color : "white"
  }}>
<CardTitle>{this.state.productName}</CardTitle>
    <CardSubtitle>{this.state.price}</CardSubtitle>
    <CardText>{this.state.quantity}</CardText>
    <CardText>{this.state.description}</CardText>
    
    <Button className ="btn btn-primary">Button</Button>
  </CardBody>
</Card>
            
            
            }
      
      </div>
      
        </div>

     
      </div>
    );
  }
}



  
 