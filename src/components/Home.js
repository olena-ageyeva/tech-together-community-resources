import React, { Component } from "react";
import styled from "styled-components";

const HomeStyled = styled.label`
  div {
    margin: 20px;
  }
  h2{
    margin: 30px 0;
  }
`;

export default class Home extends Component {
  state = {};
  render() {
    return (
      <HomeStyled>
        <div>
          <h2>Welcome to Women Support Portal!</h2>
          <strong>
            <p>For Women:</p>
          </strong>
          <p>
            WSP is the platform where you can find all information you need at
            any stage of your life.
          <br/>
          
            Are you having a personal or family crisis? Are you a new mom? Are
            you looking for a job after a log gap taking care of your family? Are you being a victim of domestic violence?
          <br/>          
            We have all resources you need to make a next step to solving your
            problems!
          </p>
          <br/>
          <br/>
          <strong>
            <p>For Providers and Volunteers:</p>
          </strong>
          <p>WSP is a platform where you can follow your passion and make a difference. <br/>
            Do you offer servises such as counceling, legal support, housing, educational classes, babysitting, driving, delivering groceries or meals? <br/>

          We have a great opportunity for you to be a valuable contributor to your community! </p>
        </div>
      </HomeStyled>
    );
  }
}
