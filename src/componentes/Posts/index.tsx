import React from "react";
import { PostsTypes } from "../../types/Posts";

function Posts(props: PostsTypes) {
  const { posts } = props;

  return (
    <div>
      {posts.map(({ id, title, userId }) => (
        <div key={id}>
          <h3>Titulo: {title}</h3>
          <p>UserId: ({userId})</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
