import React from "react";
import "./universitycard.css";

const UniversityCard = ({ university }) => {
  const renderDomains = () => {
    if (!university.domains) {
      return;
    } else {
      return university.domains.map((domain) => {
        return <li key={domain}>{domain}</li>;
      });
    }
  };
  const renderWebpages = () => {
    if (!university.web_pages) {
        return;
      } else {
        return university.web_pages.map((webpage) => {
          return <li key={webpage}><a href={webpage} target="_blank" rel="noreferrer">{webpage}</a></li>;
        });
      }
  };
  return (
    <div className="wrapper">
      <div className="title"></div>
      <div className="flip3D">
        <div className="back">
          <h3>Webpages:</h3>
          <ul>{renderWebpages()}</ul>
          <h3>Domains: </h3>
          <ul>{renderDomains()}</ul>
        </div>
        <div className="front">
          <h2>{university.name}</h2>
          <h3>{university.country}</h3>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
