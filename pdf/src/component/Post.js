import React, { Component } from "react";

const styles = {
  Post: {
    maxWidth: "880px",
    width: "100%",
    display: "table",
    margin: "0 auto",
    padding: "20px 50px",
  },
};

class Post extends Component {
  state = {
    title: "",
    content: " ",
    image: "",
    postSubmitted: false,
  };

  render() {
    return <div>POST</div>;
  }
}

export default Post;
