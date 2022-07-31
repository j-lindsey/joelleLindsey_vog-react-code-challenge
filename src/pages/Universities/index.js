import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Pagination } from "antd";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

import universityImage from "../../assets/images/universitiesImage.jpg";
import { getCountries, getUniversities } from "../../app/universitiesSlice";
import CountrySelect from "./CountrySelect";

import "./universities.css";
import UniversityCard from "./UniversityCard";

const Universities = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("Canada");
  const universities = useSelector((state) => state.universities.universities);
  const totalCount = universities.length;
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getUniversities(country));
    setCurrent(1);
  }, [country]);

  const renderUniversities = () => {
    const startSlice = (current - 1) * 24;
    const endSlice = (current - 1) * 24 + 24;
    const selectedUniversities = universities.slice(startSlice, endSlice);
    return selectedUniversities.map((university) => {
      return <UniversityCard key={university.name} university={university} />;
    });
  };

  return (
    <div>
      <Navbar />
      <Header title="Universities" image={universityImage} />
      <div className="universities_container">
        <CountrySelect setSelectedCountry={setCountry} />
        <div className="university_card_container">{renderUniversities()}</div>
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            total={totalCount}
            current={current}
            onChange={onChange}
            defaultPageSize={20}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Universities;
