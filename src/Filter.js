import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";

const FilterStyled = styled.label`
  .Filter {
    padding: 10px;
  }
  input{
    padding: 0;
    margin: 0;
}
`;

export default function Filter() {
  return (
    <FilterStyled>
      <div className="Filter">
        Filter <br />
        Filter1:
        <input
          label="Hello"
          type="number"
          value="Hello"
          style={{
            border: "1px solid #d0d0d0",
            borderRadius: "4px",
            boxShadow: "inset 0px 1px 3px rgba(0, 0, 0, 0.15)",
            fontSize: "12px",
            color: "#333333",
            textAlign: "center",
            outline: "none",
            minHeight: "22px",
            boxSizing: "border-box",
            width: "88px"
          }}
        />
       
      </div>
    </FilterStyled>
  );
}
