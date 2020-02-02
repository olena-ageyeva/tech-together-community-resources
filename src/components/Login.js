import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { states } from "../data/mockdata";
import ProviderWidget from "./ProviderWidget";
import "./ProviderRegistration.scss";

export default class Login extends Component {
  state = {
    name: "",
    username: "",
    streetaddress1: "",
    streetaddress2: "",
    city: "",
    usState: "",
    type: "",
    description: "",
    zipcode: "",
    img:
      "https://image.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-260nw-1406263805.jpg"
  };

  render() {
    const { history } = this.props;
    return (
      <div className="provider-registration">
        <div className="provider-registration__form">
          <h1>WSP Registration Page </h1>
          <Form>
            <Form.Input
              onChange={e => this.setState({ name: e.target.value })}
              label="Name"
              placeholder="What's your name?"
            />
            <Form.Input
              onChange={e => this.setState({ username: e.target.value })}
              label="Username"
              placeholder="How would you like to appear on our portal?"
            />
            <Form.Input
              onChange={e => this.setState({ password: e.target.value })}
              label="Password"
              placeholder="Please enter your number"
              type="password"
            />
            <Form.Input
              onChange={e => this.setState({ streetaddress1: e.target.value })}
              label="Street Address Line 1"
              placeholder="Street Address Line 1"
            />
            <Form.Input
              onChange={e => this.setState({ streetaddress2: e.target.value })}
              label="Street Address Line 2"
              placeholder="Street Address Line 2"
            />
            <Form.Input
              onChange={e => this.setState({ city: e.target.value })}
              label="City"
              placeholder="City"
            />
            <Form.Select
              label="State"
              placeholder="State"
              value={this.state.usState}
              options={states}
              onChange={e => this.setState({ usState: e.target.innerText })}
            />
            <Form.Input
              onChange={e => this.setState({ zipcode: e.target.value })}
              label="Zipcode"
              placeholder="Zipcode"
            />
            <Form.Input
              onChange={e => this.setState({ type: e.target.value })}
              label="Your story"
              placeholder="Please describe your problems here"
            />
            <Form.TextArea
              onChange={e => this.setState({ description: e.target.value })}
              label="Help needed"
              placeholder="What services you think would be helpful for you now?"
            />
          </Form>
          <Button
            className="provider-registration__button"
            type="submit"
            onClick={() => history.push("/provider/1/details")}
          >
            Submit
          </Button>
        </div>
        <div>
          <h1>Preview</h1>
          <ProviderWidget {...this.state} />
        </div>
      </div>
    );
  }
}
