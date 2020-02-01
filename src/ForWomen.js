import React from "react";
import styled from "styled-components";
import {Row} from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import Filter from "./Filter";
import SearchResult from "./SearchResult";
import Map from "./Map";

const ForWomenStyled = styled.label`
  .ForWomen {
    width: 100%;
  }
  span {
    margin: 5px;
    float: right;
  }
  div {
    display: inline-block;
  }
  .row div {
    vertical-align: top;
    text-align: left;
  }
  h1 {
    text-align: center;
    margin: 10px;
  }
`;

const view = "search";
const selectedProvider = null;
const style = {
  padding: 0,
  width: "400px",
  height: "100%",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
  margin: "5px"
};

const providerDatabase = [
  {
    name: "League of Women For Comm Services",
    description: "Social services organization",
    address: "558 Chester Square",
    website: null
  },
  {
    name: "Bedford Youth and Family Services",
    description: "Social services organization",
    address: "12 Mudge Way #1",
    website: "https://www.bedfordma.gov/youth-family"
  },
  {
    name: "Womens Action-New Direction",
    description: "Women's Health Clinic",
    address: "621 Massachusetts Ave #2",
    website: null
  },
  {
    name: "Womens Action-New Direction",
    description: "Women's Health Clinic",
    address: "621 Massachusetts Ave #2",
    website: null
  },
  {
    name: "Authentic Woman Counseling for Girls and Women",
    description: "Family councelor",
    address: "282 Massachusetts Ave",
    website: "http://authenticwoman.net/"
  }
];

export default function ForWomen() {
  return (
    <ForWomenStyled>
      <div className="ForWomen">
        <h1>Women Support Portal</h1> <br />
        <span>Sign Up</span>
        <span>Log In</span>
        <Row style={{ height: "550px", width: "100%" }}>
          {/* <Collapse in={view === "search"} dimension="width" timeout={0}> */}
          <div style={{ ...style }}>
            <Filter></Filter>
          </div>
          {/* </Collapse> */}
          <div style={{ ...style, width: "calc(100% - 800px)" }}>
            <SearchResult></SearchResult>
          </div>
          <div style={{ ...style, width: "350px" }}>
            <Map></Map>
          </div>
        </Row>
      </div>
    </ForWomenStyled>
  );
}
