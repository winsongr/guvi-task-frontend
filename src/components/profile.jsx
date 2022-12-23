import React, { Component } from "react";
import "../style/profile.css";

class Profile extends Component {
  state = {};

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
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="mb-3">
            <label>User name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label>Age</label>
            <input type="text" className="form-control" placeholder="Age" />
          </div>
          <div className="mb-3">
            <label>Mobile Number</label>
            <input type="text" className="form-control" placeholder="Number" />
          </div>
          <div className="mb-3">
            <label>Gender</label>
            <input type="text" className="form-control" placeholder="Gender" />
          </div>
          <br />
          <div className="row px-3">
            <button type="submit" className="btn col-5 btn-warning me-5">
              Edit Profile
            </button>
            <button className="btn btn-danger col-5">Logout</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
