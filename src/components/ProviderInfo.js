import React from "react";
import styled from "styled-components";

const ProviderInfoStyled = styled.label`
  div {
    height: 85%;
    width: 100%;
  }
`;

export default function ProviderInfo() {
  return (
    <ProviderInfoStyled>
      <div className="ProviderInfo">Provider Info</div>
    </ProviderInfoStyled>
  );
}
