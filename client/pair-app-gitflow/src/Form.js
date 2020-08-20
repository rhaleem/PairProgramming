import React from "react";
import "./App.css";

function Form(props) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.username.value;
    const password = event.target.password.value;
    props.postComment(username, email, password);
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        placeholder="Username"
        type="text"
        id="name"
        name="username"
        className="form__username"
      ></input>
      <input placeholder="Email" type="text" id="name" name="email"></input>
      <input
        placeholder="Password"
        type="text"
        id="name"
        name="password"
      ></input>
      <input type="submit" value="COMMENT" className="form__btn" />
    </form>
  );
}

export default Form;
