import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title: {this.props.post.title}</h5>
        </div>
      </div>
    );
  }
}
