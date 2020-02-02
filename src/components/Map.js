import React from "react";
import styled from "styled-components";
import { ReactBingmaps } from "react-bingmaps";

const MapStyled = styled.label`
  .Map {
    padding: 10px;
    width: 100%;
    height: 100%;
    padding: 1px 3px 10px 0px;
  }
  .react-bingmaps {
    width: 100%;
    height: 95%;
  }
`;

export default function Map() {
  return (
    <MapStyled>
      <div className="Map">
        <ReactBingmaps bingmapKey="AtbnIFGDAScY1_eRGwODY5MG27Ic2Vys75vD-MaY1ZpOwco-_PpfoxKu8E01odNk"></ReactBingmaps>
      </div>
    </MapStyled>
  );
}
