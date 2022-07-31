import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import homeImage from "../../assets/images/homeImage.jpg";
import AddPost from "./components/AddPost";

import { getPosts } from "../../app/postSlice";

import Card from "./components/card";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const [search, setSearch] = useState("");
  const [addPostState, setAddPostState] = useState(false);

  useEffect(() => {
    if (!search) {
      dispatch(getPosts(null));
    } else {
      dispatch(getPosts(search));
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleAddPost = () => {
    setAddPostState(true);
  };

  const renderPosts = () => {
    if (!posts || posts.length === 0) {
      return;
    }
    if (typeof posts === "object" && posts !== null && !Array.isArray(posts)) {
      return (
        <Card
          key={posts.id}
          title={posts.title}
          message={posts.body}
          id={posts.id}
          userId={posts.userId}
        />
      );
    } else {
      return posts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            message={post.body}
            id={post.id}
            userId={post.userId}
          />
        );
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Header title="Home" image={homeImage} />
      <div className="post_container">
        <div className="searchbar_container">
          <input
            type="number"
            name="search"
            value={search}
            placeholder="Search by Id"
            onChange={handleChange}
          />
          <FontAwesomeIcon
            className="search_icon"
            icon={faSearch}
            size="lg"
            style={{ color: "#f1faee" }}
          />
          <button className="add_post" onClick={handleAddPost}>
            Add A Post
          </button>
        </div>
        {renderPosts()}
        {addPostState ? (
          <AddPost onButtonClose={() => setAddPostState(false)} />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
