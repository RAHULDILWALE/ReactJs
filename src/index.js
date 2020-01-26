import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Hoc from "./Hoc";
import About from "./About";
import Home from "./home";
import Contact from "./Contact";
import Nav from "./Nav";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Fotter from "./Fotter";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App1 from "./app1";
import { createStore } from "redux";
import postReducer from "./reducers/postReducer";
import { Provider } from "react-redux";
import Table from "./Table";
import Conditional from "./Conditional";
import Sorting from "./Sorting";
import App2 from "./App2";
import Operations from "./Operations";
import PostDetails from "./PostDetails";

import DisplayCart from "./Cart";

import BulkUpload from "./BulkUpload";
import Test from "./export";
import ReactTable2 from "./reacttable";
import reducer from './reducers/combinereducers'


import ImageUpload from './ImageUpload'


var hocImageUpload = Hoc(ImageUpload);

var hocLogin = Hoc(Login);
var hocAbout = Hoc(About);
var hocHome = Hoc(Home);
var hocContact = Hoc(Contact);
var hocRegister = Hoc(Register);
var hocApp1 = Hoc(App1);
var hocApp = Hoc(App);
var hocTable = Hoc(Table);
var hocOperations = Hoc(Operations);
var hocSorting = Hoc(Sorting);
var hocPostDetails = Hoc(PostDetails);

var hocBulkUpload = Hoc(BulkUpload);

var hocCart = Hoc(DisplayCart);


const store = createStore(reducer);

const routing = (
  <Router>
    <div>
      <Route path="/login" component={hocLogin} />
      <Route path="/register" component={hocRegister} />
      <Route path="/home" component={hocApp1} />

      <Route path="/about" component={hocSorting} />
      <Route path="/contact" component={hocContact} />
      <Route path="/table" component={hocTable} />
      <Route path="/conditional" component={hocOperations} />
      <Route path="/details/:id" component={PostDetails} />
      <Route path="/add" component={hocBulkUpload} />
      <Route path="/export" component={Test} />

      <Route path="/react" component={ReactTable2} />
      <Route path="/logout" component={hocLogin} />
    </div>
  </Router>
);

//  ReactDOM.render(  <Provider store={store}>
//   <App />
//   </Provider>, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/login" component={hocLogin} />
        <Route path="/register" component={hocRegister} />
        <Route path="/home" component={hocApp1} />
        <Route path="/redux" component={App} />


        <Route path="/about" component={hocSorting} />
        <Route path="/contact" component={hocContact} />
        <Route path="/table" component={hocTable} />
        <Route path="/conditional" component={hocOperations} />
        <Route path="/details/:id" component={PostDetails} />
        <Route path="/add" component={hocBulkUpload} />
        <Route path="/export" component={Test} />

        <Route path="/react" component={ReactTable2} />
        <Route path="/logout" component={hocLogin} />
        <Route path="/cart" component={hocCart} />
        
        <Route path="/reactupload" component={hocImageUpload} />

      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
console.log("state is : " + store.getState().postReducer)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
