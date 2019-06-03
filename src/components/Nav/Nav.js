import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <div>
      {props.location.pathname === "/" ? null : (
        <div>
          <Link to="/dashboard">
            <button>Home</button>
          </Link>
          <Link to="new">
            <button>New Post</button>
          </Link>
          <Link to="/">
            <button>Logout</button>
          </Link>
          <h1>Username: {props.username}</h1>
          <h1>Id: {props.id}</h1>
          <h2>Profile Picture: {props.profilePic}</h2>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  let { id, username, profilePic } = state;
  return {
    id,
    username,
    profilePic
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Nav)
);
