import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import UrlInput from "../components/UrlInput";

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faLink} className="header-icon" />
        </div>
        <p className="header-text">SH-O-RT</p>
      </div>
      <UrlInput />
    </div>
  );
};

export default Home;
