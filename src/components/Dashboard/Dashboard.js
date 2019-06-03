import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  state = {
    searchInput: "",
    myPosts: true,
    posts: [
      { title: "hi", author: "me", picture: "here" },
      { title: "hello", author: "someone", picture: "hmm" }
    ]
  };

  async componentDidMount() {
    let res = await axios.get(`/api/user-posts`);
    console.log(res.data);
  }

  updateSearch(e) {
    this.setState({
      searchInput: e
    });
  }

  toggleMyPosts() {
    this.setState({
      myPosts: !this.state.myPosts
    });
  }

  resetSearch() {
    this.setState({
      searchInput: ""
    });
  }

  render() {
    return (
      <div>
        Dashboard
        <input
          placeholder="Search posts..."
          value={this.state.searchInput}
          onChange={e => this.updateSearch(e.target.value)}
        />
        <input
          type="checkbox"
          id="myPostsCheckbox"
          onChange={() => this.toggleMyPosts()}
        />{" "}
        <span> My Posts </span>
        <button>Search</button>
        <button onClick={() => this.resetSearch()}>Reset</button>
        {this.state.posts.map(val => {
          return (
            <div>
              <p>Title: {val.title}</p>
              <p>Author: {val.author}</p>
              <p>Picture: {val.profilePic}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
