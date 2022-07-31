import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";
import "./deletePost.css";
import { deletePosts } from "../../../../api/posts";

const DeletePost = ({ id, onButtonClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deletePost = async () => {
    try {
      const res = await deletePosts(id);
      toast.success("Post was deleted successfully");
    } catch (e) {
      console.log(e.response);
      toast.error(e.response);
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      deletePost();
      setIsSubmitting(false);
      onButtonClose();
    }
  }, [isSubmitting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className="add_post_background_container">
      <div className="delete_post_container">
        <div className="add_post_title">
          <h3>Delete Post</h3>
          <div className="close" onClick={onButtonClose}>
            <FontAwesomeIcon icon={faTimes} size="lg" onClick={onButtonClose} />
          </div>
        </div>
        <div className="delete_post_text">
          <p>
            Deleting the post will remove it from the list. Are you sure you
            want to delete it?
          </p>
        </div>

        <button className="delete_post" onClick={handleSubmit}>
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default DeletePost;
