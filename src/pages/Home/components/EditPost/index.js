import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";
import "./editpost.css";
import { editPosts } from "../../../../api/posts";

const EditPost = ({ postTitle, postBody, userId, id, onButtonClose }) => {
  const [title, setTitle] = useState(postTitle);
  const [body, setBody] = useState(postBody);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitPost = async () => {
    const data = {
        id,
      title,
      body,
      userId,
    };
    try {
      const res = await editPosts(id, data);
      toast.success("Post was updated successfully");
    } catch (e) {
      console.log(e.response);
      toast.error(e.response);
    }
  };

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      submitPost();
      setIsSubmitting(false);
      onButtonClose();
    }
  }, [isSubmitting, errors]);

  const handleChange = (e) => {
    setIsSubmitting(false);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "body") {
      setBody(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorCheck = {};
    if (!title) {
      errorCheck.title = "Title is required";
    }
    if (!body) {
      errorCheck.body = "Body is required";
    }
    setErrors(errorCheck);
    setIsSubmitting(true);
  };

  return (
    <div className="add_post_background_container">
      <div className="add_post_container">
        <div className="add_post_title">
          <h3>Edit Post</h3>
          <div className="close" onClick={onButtonClose}>
            <FontAwesomeIcon icon={faTimes} size="lg" onClick={onButtonClose} />
          </div>
        </div>
        <form className="add_post_form" onSubmit={handleSubmit}>
          <div className="edit_post_text">
            <p>User Id: {userId}</p>
            <p>Id: {id}</p>
          </div>
          <div className="input-effect">
            <textarea
              className={errors.title ? "error effect-16 title" : "effect-16 title"}
              type="text"
              name="title"
              value={title}
              placeholder=""
              onChange={handleChange}
              required
            />
            <label>Title</label>
            <span className="focus-border"></span>
          </div>
          {!errors ? null : <p className="error_message">{errors.title}</p>}
          <div className="input-effect">
            <textarea
              className={errors.body ? "error effect-16" : "effect-16"}
              name="body"
              value={body}
              placeholder=""
              onChange={handleChange}
              required
            />
            <label>Body</label>
            <span className="focus-border"></span>
          </div>
          {!errors ? null : <p className="error_message">{errors.body}</p>}
          <button className="edit_post" onClick={handleSubmit}>
            Edit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
