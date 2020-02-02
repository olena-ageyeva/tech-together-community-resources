import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Card, CardGroup } from "react-bootstrap";
import { providerDatabase } from "../data/providerDatabase";

const FilterStyled = styled.label`
  .Filter {
    padding: 10px;
  }
  .input-form input {
    padding: 0;
    margin: 0;
    height: 24px !important;
    line-height: 24px;
    vertical-align: top;
    transition-property: color;
    transition-duration: 0.3s;
    background: url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D)
      transparent;
    outline: none;
    border: none;
    font-size: 15px;
  }
  .input-form {
    position: relative;
  }

  .search-button-container {
    position: absolute;
    right: 75px;
    top: 20px;
  }
  .search-button-container::after {
    content: "";
    position: absolute;
    right: -16px;
    top: -4px;
    border-left: 1px solid #ddd;
    height: 28px;
  }
  svg.svg-inline--fa.fa-search.fa-w-16.fa-lg.search-icon {
    font-size: 18px;
    color: grey;
  }
  svg.svg-inline--fa.fa-times.fa-w-11.times-icon {
    left: 50px;
    top: 0px;
    position: absolute;
    font-size: 18px;
    color: grey;
  }
  svg.svg-inline--fa.fa-bars.fa-w-14.bars-icon {
    left: 25px;
    top: 20px;
    position: absolute;
    font-size: 18px;
    color: grey;
  }

  .search-container {
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15);
    font-size: 12px;
    color: #333333;
    text-align: center;
    outline: none;
    min-height: 22px;
    box-sizing: border-box;
    width: 95%;
    height: 48px;
    padding: 12px 104px 11px 64px;
    white-space: normal;
    margin: 5px 10px;
  }
  button {
    background: transparent;
    border: 0;
    border-radius: 0;
    font: inherit;
    list-style: none;
    margin: 0;
    outline: 0;
    overflow: visible;
    padding: 0;
    vertical-align: baseline;
  }
  .provider-card {
    min-height: 112px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 18px 10px 24px;
  }
  div {
    display: block;
  }

  .card-text {
    color: #70757a;
    display: inline-block;
    font-size: 13px;
    line-height: 16px;
    min-width: 1px;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 55%;
  }

  .card-title {
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
    color: black;
    font-weight: bold;
  }
  .card-action {
    width: 18%;
    margin: 5px 5px 5px 10px;
    text-align: center;
  }
  input[type="text"] {
    float: left;
  }

  .action-image {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: -webkit-flex;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    display: flex;
    border: 1px solid #bdc1c6;
    border-radius: 36px;
    height: 36px;
    width: 36px;
    margin: 5px auto;
  }

  img {
    height: 20px;
    width: 20px;
  }
`;

export default function Filter() {
  const [search, setSearch] = useState();
  const [filteredResult, setFilteredResult] = useState(providerDatabase);

  console.log("filter", providerDatabase, search, filteredResult);

  function applyFilter(e) {
    if (e.key === "Enter") {
      console.log("apply filter", search);
      search.length > 3
        ? setFilteredResult(providerDatabase)
        : setFilteredResult(null);
    }
  }

  const onSubmit = () => {};
  const onChange = () => {};
  return (
    <FilterStyled>
      <form className="input-form" onSubmit={ev => {}}>
        <div className="search-container">
          <button>
            <FontAwesomeIcon className="bars-icon" icon={faBars} />
          </button>
          <input
            type="text"
            onChange={e => setSearch(e.target.value)}
            onKeyDown={() => setFilteredResult(providerDatabase)}
            value={search}
            placeholder="Start Searching for Help"
          />
          <div className="search-button-container">
            <button>
              <FontAwesomeIcon
                className="search-icon"
                icon={faSearch}
                size="lg"
              />{" "}
            </button>
            <button>
              <FontAwesomeIcon
                className="times-icon"
                icon={faTimes}
                size="lg"
              />
            </button>
          </div>
        </div>
      </form>
      <div className="results">
        {filteredResult
          ? filteredResult.map(provider => (
              <div className="provider-card">
                <div className="card-text">
                  <div className="card-title">{provider.name}</div>
                  <div className="card-description">{provider.description}</div>
                  <div className="card-description">{provider.address}</div>
                </div>
                <div className="card-action">
                  <div className="action-image">
                    <img
                      alt="Website"
                      jstcache="261"
                      src="//www.gstatic.com/images/icons/material/system_gm/2x/public_gm_blue_20dp.png"
                      class="section-result-action-icon"
                    />
                  </div>
                  <div className="action-text">
                    <a>Website</a>
                  </div>
                </div>
                <div className="card-action">
                  <div className="action-image">
                    <img
                      alt="Website"
                      jstcache="261"
                      src="//www.gstatic.com/images/icons/material/system/2x/directions_googblue_20dp.png"
                      class="section-result-action-icon"
                    />
                  </div>
                  <div className="action-text">
                    <a>Directions</a>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </FilterStyled>
  );
}
