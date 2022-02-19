import axios from "axios";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCheckCircle,
  faSpinner,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import "./UrlInput.css";

const UrlInput = () => {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const postUrl = "https://sh-o-rt.herokuapp.com/url";

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlJson = {
      actualUrl: url,
    };
    try {
      setLoading(true);
      const res = await axios.post(postUrl, urlJson);
      setResponse(res.data);
      setLoading(false);
      setError(false);
      setUrl("");
    } catch (err) {
      setResponse(err.response.data);
      setLoading(false);
      setError(true);
      setUrl("");
    }
  };

  return (
    <div className="input-container">
      <div className="trimmed-container">
        <div className="form-container">
          <input
            placeholder="Enter URL to shorten"
            onChange={handleInputChange}
            value={url}
          />
          {/* <button onClick={handleSubmit}>Submit</button> */}
          <FontAwesomeIcon
            onClick={handleSubmit}
            icon={faArrowRight}
            className="submit-button"
          />
        </div>
        {!loading && response && error && (
          <div className="response-container error">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="icon error"
            />
            <p className="response-text">
              {response.body}
              <a href={response.url}>{response.url}</a>
            </p>
          </div>
        )}
        {!loading && response && !error && (
          <div className="response-container">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <p className="response-text">
              {response.body}
              <a href={response.url}>{response.url}</a>
            </p>
          </div>
        )}
        {loading && (
          <div className="response-container loading">
            <FontAwesomeIcon icon={faSpinner} className="load-icon spin" />
            <p className="response-text">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlInput;
