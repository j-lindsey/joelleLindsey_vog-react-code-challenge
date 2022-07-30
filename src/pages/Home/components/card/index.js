import React from "react";
import "./card.css";

const Card = ({ title, message, id, userId }) => {
  return (
    <div className="card_container">
      <div className="card_text">
        <p className="card_user">User: {userId}</p>
        <h3 className="card_title">{title}</h3>
        <p className="card_message">{message}</p>
      </div>
    </div>
  );
};

export default Card;
