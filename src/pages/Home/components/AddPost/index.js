import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

import "./addpost.css";
import { addPosts } from "../../../../api/posts";

const AddPost = ({ onButtonClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitPost = async () => {
    const data = {
      title,
      body,
      userId,
    };
    try {
      const res = await addPosts(data);
      toast.success("Post was added successfully");
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
  },[isSubmitting, errors]);

  const handleChange = (e) => {
    setIsSubmitting(false);
    if (e.target.name === "userId") {
      setUserId(e.target.value);
    }
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
    if (!userId) {
      errorCheck.userId = "User Id is required";
    }
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
          <h3>Add A Post</h3>
          <div className="close" onClick={onButtonClose}>
            <FontAwesomeIcon icon={faTimes} size="lg" onClick={onButtonClose} />
          </div>
        </div>
        <form className="add_post_form" onSubmit={handleSubmit}>
          <div className="input-effect">
            <input
              className={errors.userId ? "error effect-16" : "effect-16"}
              type="number"
              name="userId"
              value={userId}
              placeholder=""
              onChange={handleChange}
              required
            />
            <label>User Id</label>
            <span className="focus-border"></span>
          </div>
          {!errors ? null : <p className="error_message">{errors.userId}</p>}
          <div className="input-effect">
            <input
              className={errors.title ? "error effect-16" : "effect-16"}
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
          <button className="add_post" onClick={handleSubmit}>
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
