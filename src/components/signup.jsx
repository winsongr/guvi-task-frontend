import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      rePassword: "",
      age: "",
      gender: "",
      mobileNumber: "",
      error: "",
    };

    this.onbtnPressed = this.onbtnPressed.bind(this);
    this.onUsername = this.onUsername.bind(this);
    this.onEmail = this.onEmail.bind(this);
    this.onPassword = this.onPassword.bind(this);
    this.changeRePassword = this.changeRePassword.bind(this);
    this.onAge = this.onAge.bind(this);
    this.onGender = this.onGender.bind(this);
    this.onMobileNumber = this.onMobileNumber.bind(this);
  }

  onUsername(event) {
    this.setState({
      username: event.target.value,
    });
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

  changeRePassword(event) {
    this.setState({
      rePassword: event.target.value,
    });
  }

  onMobileNumber(event) {
    this.setState({
      mobileNumber: event.target.value,
    });
  }

  onAge(event) {
    this.setState({
      age: event.target.value,
    });
    if (this.state.password !== this.state.rePassword) {
      this.setState({
        error: "Password does not match",
      });
    } else {
      this.setState({
        error: "",
      });
    }
  }

  onGender(event) {
    this.setState({
      gender: event.target.value,
    });
  }

  onbtnPressed(event) {
    event.preventDefault();
    const registered = {
      userName: this.state.username,
      email: this.state.email,
      password: this.state.rePassword,
      age: this.state.age,
      gender: this.state.gender,
      mobile: this.state.mobileNumber,
    };

    axios
      .post("https://guvitask.onrender.com/register", registered)
      .then((res) => {
        if (res.data["message"] === "success") {
          swal({
            icon: "success",
            title: "Registered!",
            text: "Goto to login",
          }).then((value) => {
            window.location.href = "/sign-in";
          });
        } else if (res.data["message"] === "user exists") {
          swal({
            icon: "warning",
            title: "User exists!",
            text: "goto to login",
          }).then((value) => {
            window.location.href = "/sign-in";
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
          username: "",
          password: "",
          rePassword: "",
          age: "",
          gender: "",
          mobileNumber: "",
        });
      });
  }
  render() {
    return (
      <form onSubmit={this.onbtnPressed}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            onChange={this.onUsername}
            value={this.state.username}
            required
          />
        </div>

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
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-Enter password"
            onChange={this.changeRePassword}
            value={this.state.rePassword}
            required
          />
          <p className="text-danger">{this.state.error}</p>
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            onChange={this.onAge}
            value={this.state.age}
            required
          />
        </div>
        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Mobile Number"
            onChange={this.onMobileNumber}
            value={this.state.mobileNumber}
            required
            minLength={10}
            maxLength={10}
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            placeholder="Gender"
            onChange={this.onGender}
            value={this.state.gender}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/sign-in">Sign in</a>
        </p>
      </form>
    );
  }
}
