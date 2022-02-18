import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import UrlInput from "../components/UrlInput";

const Home = () => {
  return (
    <React.Fragment>
      <div className="title-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faLink} className="header-icon" />
        </div>
        <h1>Build your own custom short URL!</h1>
      </div>
      <UrlInput />
    </React.Fragment>
  );
};

export default Home;
