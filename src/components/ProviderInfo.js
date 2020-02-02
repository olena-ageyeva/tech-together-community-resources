import React from "react";
import styled from "styled-components";

const ProviderInfoStyled = styled.label`
  .info {
    height: 85%;
    width: 100%;
  }
  .ProviderInfo {
    width: 100%;
  }
  img {
    margin: 5px auto;
    width: 97%;
  }
  .card-text {
    min-height: 112px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 18px 10px 24px;
  }
  .card-title {
    font-family: "Google Sans", Roboto, Arial, sans-serif;
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 1.75rem;
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
  .action-image img {
    height: 20px;
    width: 20px;
  }
  .apply-button {
    border: 1px solid #1a73e8;
    border-radius: 17px;
    display: block;
    color: #1a73e8;
    font-size: 14px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 80%;
    margin: 35px auto;
  }
  .action-container{
      width: 100%;
      text-align: center;
  }
`;

export default function ProviderInfo({ provider }) {
  return (
    <ProviderInfoStyled>
      <div className="info">
        <img src="https://www.aane.org/wp-content/uploads/2018/09/31a4e7a0-4570-419a-a1b2-7f0d609edaa2.jpg" />
        <div className="ProviderInfo">
          <div className="card-text">
            <div className="card-title">{provider.name}</div>
            <div className="card-description">{provider.description}</div>
            <br />
            <div className="card-description">{provider.address}</div>
          </div>
          <div className="action-container">
          <div className="card-action">
            <div className="action-image">
              <img
                alt="Website"
                jstcache="261"
                src="//www.gstatic.com/images/icons/material/system_gm/2x/public_gm_blue_20dp.png"
                className="section-result-action-icon"
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
              />
            </div>
            <div className="action-text">
              <a>Directions</a>
            </div>
          </div>
          <div className="card-action">
            <div className="action-image">
              <img
                alt="Website"
                jstcache="261"
                src="//www.gstatic.com/images/icons/material/system_gm/2x/bookmark_border_gm_blue_18dp.png"
                className="section-result-action-icon"
              />
            </div>
            <div className="action-text">
              <a>Save</a>
            </div>
          </div>

          <div className="card-action">
            <div className="action-image">
              <img
                alt="Website"
                jstcache="261"
                src="//www.gstatic.com/images/icons/material/system_gm/2x/share_gm_blue_18dp.png"
                className="section-result-action-icon"
              />
            </div>
            <div className="action-text">
              <a>Share</a>
            </div>
          </div>
        </div>
        </div>
        <div className="apply-button">Apply for Service</div>
      </div>
    </ProviderInfoStyled>
  );
}
