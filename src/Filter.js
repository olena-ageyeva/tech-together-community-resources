import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

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
`;

// const style={borderradius: 4px;
//   boxshadow: inset 0px 1px 3px rgba(0, 0, 0, 0.15);
//   fontsize: 12px;
//   color: #333333;
//   textalign: center;
//   outline: none;
//   minheight: 22px;
//   boxsizing: border-box;
//   width: 95%;
//   height: 50px;
//   padding: 12px 104px 11px 64px;
//   whitespace: normal;
//   margin: 5px 10px;}

export default function Filter() {
  const [search, setSearch] = useState();

  const minLength = 3;

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
            onChange={ev => setSearch(ev.target.value)}
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
    </FilterStyled>
  );
}
