import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert";

export default class Login extends Component {
  constructor(params) {
    super();
    this.onloginPressed = this.onloginPressed.bind(this);
    this.state = { email: "", password: "" };
    this.onEmail = this.onEmail.bind(this);
    this.onPassword = this.onPassword.bind(this);
  }
  onEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  onloginPressed(event) {
    event.preventDefault();
    const login = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post("https://guvitask.onrender.com/login", login).then((res) => {
      console.log(res);
      if (res.data["message"] === "success") {
        swal({
          icon: "success",
          title: "Registered!",
          text: "goto to login",
        }).then((value) => {
          window.location.href = "/profile";
        });
      } else if (res.data["message"] === "Oops!, Wrong Password try again") {
        swal({
          icon: "warning",
          title: "Wrong Password!",
          text: "try again",
        });
      } else if (res.data["message"] === "no users with this email") {
        swal({
          icon: "warning",
          title: "No user with this email!",
          text: "register first",
        }).then((value) => {
          window.location.href = "/sign-up";
        });
      } else {
        swal({
          icon: "error",
          title: "Try again!",
          text: "failed",
        });
      }
      this.setState({
        email: "",
        password: "",
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.onloginPressed}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.onEmail}
            value={this.state.email}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.onPassword}
            value={this.state.password}
            required
          />
        </div>
        <div className="d-grid">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
        <p className="forgot-password text-right">
          New here? <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    );
  }
}
