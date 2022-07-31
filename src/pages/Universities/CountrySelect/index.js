import { Select } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux/es/exports";
import React from "react";
import './countryselect.css';
const { Option } = Select;


const CountrySelect = ({ setSelectedCountry }) => {
  const countries = useSelector((state) => state.universities.countries);

  const renderOptions = countries.map((country) => {
    return (
      <Option key={country.alpha3Code} value={country.name}>
        {country.name}
      </Option>
    );
  });

  const onChange = (value) => {
    setSelectedCountry(value);
  };

  const onSearch = (value) => {
  };

  return (
    <Select
      showSearch
      placeholder="Select a country"
      optionFilterProp="children"
      defaultValue={"Canada"}
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      {renderOptions}
    </Select>
  );
};

export default CountrySelect;
