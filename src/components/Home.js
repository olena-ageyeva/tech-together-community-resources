import React, { Component } from "react";
import styled from "styled-components";

const HomeStyled = styled.label`
  div {
    margin: 20px;
  }
  h2 {
    margin: 30px 0;
  }
  img {
    width: 50%;
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
            <br />
            Are you having a personal or family crisis? Are you a new mom? Are
            you looking for a job after a log gap taking care of your family?
            Are you being a victim of domestic violence?
            <br />
            We have all resources you need to make a next step to solving your
            problems!
          </p>
          <br />
          <br />
          <strong>
            <p>For Providers and Volunteers:</p>
          </strong>
          <p>
            WSP is a platform where you can follow your passion and make a
            difference. <br />
            Do you offer servises such as counceling, legal support, housing,
            educational classes, babysitting, driving, delivering groceries or
            meals? <br />
            We have a great opportunity for you to be a valuable contributor to
            your community!{" "}
          </p>

          <br />
          <br />
          <strong>
            <p>For Researchers:</p>
          </strong>
          <p>
            WSP is a perfect platform for collecting essential data about social
            patterns and social services demands. <br />
            Are you recearching domestic violence couses and trnds? Are you
            trying to understnd women's struggle after taking a long gap in the
            career focusing on rasing children?
            <br />
            We have all data you need to start digging in and research the trend
            and possible solutions to make women's life better!{" "}
          </p>
          <img src="https://miro.medium.com/max/8642/1*6mRa6Iwgcq9vEzIll9WWMw.jpeg" />
        </div>
      </HomeStyled>
    );
  }
}
