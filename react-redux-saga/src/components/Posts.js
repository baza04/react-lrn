import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncState }) => {
  if (!syncState.length) {
    return <p className="test-center">Post List is Empty</p>;
  }

  return syncState.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncState: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
