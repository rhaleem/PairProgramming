import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import axios from "axios";

class App extends Component {
  state = {
    success: ''
  }

  postComment = (username, email, password) => {
    let registerInfo = { name: username, email: email, password: password };
    console.log(registerInfo);
    axios
      .post(`http://localhost:5000`, registerInfo)
      .then((res) => {
        this.setState({
          success: 'Registration Successful'
        })
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          success: 'Registration Fail'
        })
      })
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>World's Most Secure Email Service</h1>
          <Form postComment={this.postComment} />
          {
          this.state.success === 'Registration SuccessFul' ? 
          <h1 className='successful'>{this.state.success}</h1> 
          : 
          <h1 className='unsuccessful'>{this.state.success}</h1>
          }

        </div>
      </>
    );
  }
}

export default App;
