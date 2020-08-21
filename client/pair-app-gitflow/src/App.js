import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import axios from "axios";

class App extends Component {
  postComment = (username, email, password) => {
    let registerInfo = { name: username, email: email, password: password };
    console.log(registerInfo);
    axios
      .post(`http://localhost:3000`, registerInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>World's Most Secure Email Service</h1>
          <Form postComment={this.postComment} />
        </div>
      </>
    );
  }
}

export default App;
