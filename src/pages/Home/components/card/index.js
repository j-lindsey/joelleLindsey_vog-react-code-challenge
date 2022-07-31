import React from "react";
import "./card.css";

const Card = ({ title, message, id, userId }) => {
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
        <button className="edit_post">Edit Post</button>
        <button className="delete_post">Delete Post</button>
      </div>
    </div>
  );
};

export default Card;
