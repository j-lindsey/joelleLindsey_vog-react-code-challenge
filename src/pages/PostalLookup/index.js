import React, { useEffect, useState } from "react";

import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Leaflet from "./leaflet";

import universityImage from "../../assets/images/universitiesImage.jpg";
import "./postalLookup.css";
import { getPostalLookup } from "../../app/postalSlice";
import { useDispatch, useSelector } from "react-redux";

const PostalLookup = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const places = useSelector((state) => state.postalLookup.postalLookup.places);
  const errorMessage = useSelector((state) => state.postalLookup.errorMessage);

  useEffect(() => {
    dispatch(getPostalLookup(90210));
  }, []);

  useEffect(() => {
    if (search.length === 5) {
      dispatch(getPostalLookup(search));
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value.replace(/[^\d{5}]$/, "").substr(0, 5));
  };

  return (
    <div>
      <Navbar />
      <Header title="Postal Lookup" image={universityImage} />
      <div className="postal_container">
        <div className="searchbar_container">
          <input
            type="number"
            name="search"
            value={search}
            placeholder="Enter Zip Code"
            onChange={handleChange}
          />
          <FontAwesomeIcon
            className="search_postal_icon"
            icon={faSearch}
            size="lg"
            style={{ color: "#f1faee" }}
          />
        </div>
        {
          <div className="error_postal">
            <p className="error_message">{errorMessage}</p>
          </div>
        }
        <div className="map_description">
          <div className="map_title">
            <h3>{!places ? null : places[0]["place name"]},</h3>
            <h3>{!places ? null : places[0].state}</h3>
          </div>
          <p>
            {!places
              ? null
              : `Latitude: ${places[0].latitude}, Longitude: ${places[0].longitude}`}
          </p>
        </div>
        <div className="map_container">
          {!places ? null : (
            <Leaflet
              latitude={places[0].latitude}
              longitude={places[0].longitude}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostalLookup;
