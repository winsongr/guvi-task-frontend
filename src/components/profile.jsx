import React, { Component } from "react";
import "../style/profile.css";
import axios from "axios";
import swal from "sweetalert";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      age: "",
      gender: "",
      mobileNumber: "",
    };
    this.onEmail = this.onEmail.bind(this);
    this.onAge = this.onAge.bind(this);
    this.onGender = this.onGender.bind(this);
    this.onMobileNumber = this.onMobileNumber.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("userId") == null) {
      window.location.href = "/sign-in";
    }
    this.getProfileData();
  }

  onEmail(event) {
    this.setState({
      email: event.target.value,
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
  }

  onGender(event) {
    this.setState({
      gender: event.target.value,
    });
  }

  async getProfileData() {
    await axios("https://guvitask.onrender.com/profile", {
      params: {
        id: localStorage.getItem("userId"),
      },
    })
      .then((res) => {
        this.setState({
          email: res.data["email"],
          mobileNumber: res.data["mobile"],
          age: res.data["age"],
          gender: res.data["gender"],
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  logout() {
    localStorage.clear();
    window.location.href = "/sign-in";
  }
  updateProfile(event) {
    event.preventDefault();
    axios
      .post("https://guvitask.onrender.com/profile", {
        id: localStorage.getItem("userId"),
        userName: "",
        email: "",
        password: "",
        age: this.state.age,
        gender: this.state.gender,
        mobile: this.state.mobileNumber,
      })
      .then((res) => {
        if (res.data["message"] === "success") {
          swal({
            icon: "success",
            title: "updated!",
            text: "done",
          }).then((value) => {
            window.location.reload();
          });
        } else {
          swal({
            icon: "error",
            title: "Try again!",
            text: "failed",
          });
        }
      });
  }
  render() {
    return (
      <div className="profile-card">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src={
                    "https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                  }
                  className="card-img-top avatar"
                  alt=""
                />
                <h5 className="card-title">My Profile</h5>
                <p className="card-text">❤️</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={this.updateProfile}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={this.state.email}
              disabled
            />
          </div>
          <div className="mb-3">
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              onChange={this.onAge}
              value={this.state.age}
            />
          </div>
          <div className="mb-3">
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="mobile"
              onChange={this.onMobileNumber}
              value={this.state.mobileNumber}
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
            />
          </div>
          <br />
          <div className="row px-3">
            <button type="submit" className="btn col-5 btn-warning me-5">
              Edit Profile
            </button>
            <button onClick={this.logout} className="btn btn-danger col-5">
              Logout
            </button>
          </div>
        </form>
      </div>
    );
  }
}
