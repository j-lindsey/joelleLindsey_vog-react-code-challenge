import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGraduationCap,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";
import 'antd/dist/antd.css';
import React, { useState } from "react";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    label: "Universities",
    key: "universities",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
  },
  {
    label: "Postal Lookup",
    key: "postalLookup",
    icon: <FontAwesomeIcon icon={faEnvelopesBulk} />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
