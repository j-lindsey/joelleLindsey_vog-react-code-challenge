import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Loader.css";

const Loader = () => {
  const postloading = useSelector((state) => state.post.loading);
  const universityloading = useSelector((state) => state.universities.loading);
  const postalLookuploading = useSelector(
    (state) => state.postalLookup.loading
  );

  useEffect(() => {
    console.log(postloading, universityloading, postalLookuploading);
  }, [postloading, universityloading, postalLookuploading]);

  return (
    <div
      className={
        postloading || universityloading || postalLookuploading
          ? "show_loading"
          : "hidden"
      }
    >
      <div className="loading_background_container">
        <div className="loading_container">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
