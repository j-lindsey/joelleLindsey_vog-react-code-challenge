import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import homeImage from "../../assets/images/homeImage.jpg";
import { getPosts } from "../../app/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const renderPosts = () => {
    if (!posts || posts.length === 0) {
      return;
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
      <div className="post_container">{renderPosts()}</div>
    </div>
  );
};

export default Home;
