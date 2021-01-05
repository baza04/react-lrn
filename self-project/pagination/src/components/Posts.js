import React from "react";

const styles = {
  ul: {
    minHeight: "200px",
    color: "white"
  },
  li: {
    borderRadius: "5px",
    border: "2px solid white"
  }
};

function Posts({ posts, loading }) {
  if (loading) return <h2>Loading...</h2>;
  else if (posts.length == 0) return <h2>List Is Empty</h2>;

  return (
    <ul className="Posts" style={styles.ul}>
      {posts.map((post) => {
        <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
}

export default Posts;
