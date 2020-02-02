import React from "react";
import styled from "styled-components";

const ProviderCardStyled = styled.label`
  .provider-card {
    min-height: 112px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 18px 10px 24px;
  }

  .card-text {
    color: #70757a;
    display: inline-block;
    font-size: 13px;
    line-height: 16px;
    min-width: 1px;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 55%;
  }

  .card-title {
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
    color: black;
    font-weight: bold;
  }
  .card-action {
    width: 18%;
    margin: 5px 5px 5px 10px;
    text-align: center;
  }

  .action-image {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: -webkit-flex;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    display: flex;
    border: 1px solid #bdc1c6;
    border-radius: 36px;
    height: 36px;
    width: 36px;
    margin: 5px auto;
  }

  img {
    height: 20px;
    width: 20px;
  }
`;

export default function ProviderCard({ provider, onClick }) {
  return (
    <ProviderCardStyled>
      <div className="provider-card" key={provider.name}>
        <div className="card-text">
          <div className="card-title">{provider.name}</div>
          <div className="card-description">{provider.description}</div>
          <div className="card-description">{provider.address}</div>
        </div>
        <div className="card-action">
          <div className="action-image">
            <img
              alt="Website"
              jstcache="261"
              src="//www.gstatic.com/images/icons/material/system_gm/2x/public_gm_blue_20dp.png"
              className="section-result-action-icon"
              onClick={onClick}
            />
          </div>
          <div className="action-text">
            <a>Website</a>
          </div>
        </div>
        <div className="card-action">
          <div className="action-image">
            <img
              alt="Website"
              jstcache="261"
              src="//www.gstatic.com/images/icons/material/system/2x/directions_googblue_20dp.png"
              className="section-result-action-icon"
              onClick={onClick}
            />
          </div>
          <div className="action-text">
            <a>Directions</a>
          </div>
        </div>
      </div>
    </ProviderCardStyled>
  );
}
