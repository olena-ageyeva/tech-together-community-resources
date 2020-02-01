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
  .row div {
    vertical-align: top;
    text-align: left;
  }
`;

const view = "search";
const selectedProvider = null;
const style = {
  padding: 0,
  width: "300px",
  height: "100%",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
  margin: "5px"
};

export default function ForWomen() {
  return (
    <ForWomenStyled>
      <div className="ForWomen">
        <h1>For Women Page</h1> <br />
        <span>Sign Up</span>
        <span>Log In</span>
        <Row style={{ height: "550px", width: "100%" }}>
          {/* <Collapse in={view === "search"} dimension="width" timeout={0}> */}
          <div style={{ ...style }}>
            <Filter></Filter>
          </div>
          {/* </Collapse> */}
          <div style={{ ...style, width: "calc(100% - 700px)" }}>
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
