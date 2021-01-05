import React from "react";
import Loader from './Loader'
import PostsList from "./PostsList";

function ShowOrEmpty({ loading = false, posts = [] }) {
  return (
    <div className="showOrEmpty">
      {loading && <Loader />}

      {!loading && posts.length > 0 ? (
        <PostsList posts={posts} />
      ) : (
        <h2>List is empty</h2>
      )}
    </div>
  );
}

export default ShowOrEmpty;
