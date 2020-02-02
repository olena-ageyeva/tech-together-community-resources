import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import Filter from "./Filter";
import SearchResult from "./SearchResult";
import Map from "./Map";
import { providerDatabase } from "../data/providerDatabase";

const ForWomenStyled = styled.label`
  .ForWomen {
    width: 100%;
    height: 100%;
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

const style = {
  padding: 0,
  width: "400px",
  height: "100%",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
  margin: "5px"
};



export default function ForWomen() {
  const [activeProvider, setActiveProvider] = useState(providerDatabase[0]);

function onChange(name) {
  setActiveProvider(
    providerDatabase.filter(provider => provider.name === name)[0]
  );
}
  return (
    <ForWomenStyled>
      <div className="ForWomen">
        <h1>Women Support Portal</h1> <br />
        <span>
          <a>Sign Up</a>
        </span>
        <span>
          <a>Log In</a>
        </span>
        <Row style={{ width: "100%", height: "100%" }}>
          <div style={{ ...style }}>
            <Filter provider={activeProvider} onChange={onChange}></Filter>
          </div>
          <div style={{ ...style, width: "calc(100% - 420px)" }}>
            <Map provider={activeProvider}></Map>
          </div>
        </Row>
      </div>
    </ForWomenStyled>
  );
}
