import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "./../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateUsername(e) {
    this.setState({
      username: e
    });
  }

  updatePassword(e) {
    this.setState({
      password: e
    });
  }

  async register() {
    if (!this.state.username || !this.state.password)
      return alert("Please enter a username and password.");
    let res = await axios.post(`/auth/register`, {
      username: this.state.username,
      password: this.state.password
    });
    if (res.data.message === "loggedIn") {
      this.props.history.push("/dashboard");
    } else {
      alert(res.data.message);
    }
  }

  async login() {
    if (!this.state.username || !this.state.password)
      return alert("Please enter a username and password.");
    let res = await axios.post(`/auth/login`, {
      username: this.state.username,
      password: this.state.password
    });
    console.log("res.data", res.data);
    if (res.data.message === "loggedIn") {
      this.props.history.push("/dashboard");
      console.log("redux username", res.data.user.username);
      console.log("redux id", res.data.user.id);
      this.props.updateUser(res.data.user.id, res.data.user.username, "image");
    } else {
      console.log(res.data.message);
    }
  }

  render() {
    return (
      <div>
        Auth
        <input
          type="text"
          onChange={e => this.updateUsername(e.target.value)}
        />
        <input
          type="password"
          onChange={e => this.updatePassword(e.target.value)}
        />
        <button onClick={() => this.login()}>Log In</button>
        <button onClick={() => this.register()}>Register</button>
      </div>
    );
  }
}

export default connect(
  null,
  { updateUser }
)(Auth);
