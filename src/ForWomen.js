import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
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
  //   div.style {
  //     padding: 0;
  //     width: "300px";
  //     height: "100%";
  //     position: "relative";
  //     boxshadow: "0 2px 4px 0 rgba(0,0,0,0.5)";
  //   }
`;

const view = "search";
const selectedProvider = null;

export default function ForWomen() {
  return (
    <ForWomenStyled>
      <div className="ForWomen">
        <h1>For Women Page</h1> <br />
        <span>Sign Up</span>
        <span>Log In</span>
        <Row style={{ height: "550px", width: "100%" }}>
          {/* <Collapse in={view === "search"} dimension="width" timeout={0}> */}
          <div
            style={{
              padding: 0,
              width: "300px",
              height: "100%",
              position: "relative",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
              margin: "5px"
            }}
          >
            <Filter></Filter>
          </div>
          {/* </Collapse> */}
          <div
            style={{
              padding: 0,
              width: "calc(100% - 630px)",
              height: "100%",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
              margin: "5px"
            }}
          >
            <SearchResult></SearchResult>
          </div>
          <div
            style={{
              padding: 0,
              width: "300px",
              height: "100%",
              position: "relative",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
              margin: "5px"
            }}
          >
            <Map></Map>
          </div>
        </Row>
      </div>
    </ForWomenStyled>
  );
}
