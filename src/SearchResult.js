import React from "react";
import styled from "styled-components";

const SearchResultsStyled = styled.label`
  .SearchResult {
    padding: 10px;
  }

  input {
    padding: 0;
    margin: 0;
  }
`;

export default function SearchResult() {
  return (
    <SearchResultsStyled>
      <div className="SearchResult">Search Result</div>
    </SearchResultsStyled>
  );
}
