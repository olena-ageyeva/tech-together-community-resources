import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
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

export default function ForWomen() {
  return (
    <ForWomenStyled>
      <div className="ForWomen">
        <h1>Women Support Portal</h1> <br />
        <span>Sign Up</span>
        <span>Log In</span>
        <Row style={{ height: "550px", width: "100%" }}>          
          <div style={{ ...style }}>
            <Filter></Filter>
          </div>         
          <div style={{ ...style, width: "calc(100% - 420px)" }}>
            <Map></Map>
          </div>
        </Row>
      </div>
    </ForWomenStyled>
  );
}
