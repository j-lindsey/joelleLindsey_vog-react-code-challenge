import React, { useState } from "react";
import DeletePost from "../DeletePost";
import EditPost from "../EditPost";
import "./card.css";

const Card = ({ title, message, id, userId }) => {
  const [editPostState, setEditPostState] = useState(false);
  const [deletePostState, setDeletePostState] = useState(false);

  const handleEditPost = () => {
    setEditPostState(true);
  };

  const handleDeletePost = () => {
    setDeletePostState(true);
  };

  return (
    <div className="card_container">
      <div className="card_text">
        <div className="card_ids">
          <p className="card_user">Id: {id}</p>
          <p className="card_user">User: {userId}</p>
        </div>
        <h3 className="card_title">{title}</h3>
        <p className="card_message">{message}</p>
      </div>
      <div className="card_buttons">
        <button className="edit_post" onClick={handleEditPost}>
          Edit Post
        </button>
        <button className="delete_post" onClick={handleDeletePost}>
          Delete Post
        </button>
      </div>
      {editPostState ? (
        <EditPost
          postTitle={title}
          postBody={message}
          userId={userId}
          id={id}
          onButtonClose={() => setEditPostState(false)}
        />
      ) : null}
      {deletePostState ? (
        <DeletePost id={id} onButtonClose={() => setDeletePostState(false)} />
      ) : null}
    </div>
  );
};

export default Card;
