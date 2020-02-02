import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { states } from "../data/mockdata";
import ProviderWidget from "./ProviderWidget";
import "./ProviderRegistration.scss";

export default class ReseacherRegistration extends Component {
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoFVkWUnGBCb2pIw2aOMAFFWoczy-q1ssUUHtoAqa0vlZJl7NKg&s"
  };

  render() {
    const { history } = this.props;
    return (
      <div className="provider-registration">
        <div className="provider-registration__form">
          <h1>Register as a Reseacher</h1>
          <Form>
            <Form.Input
              onChange={e => this.setState({ name: e.target.value })}
              label="Name"
              placeholder="Name"
            />
            <Form.Input
              onChange={e => this.setState({ username: e.target.value })}
              label="Username"
              placeholder="Username"
            />
            <Form.Input
              onChange={e => this.setState({ password: e.target.value })}
              label="Password"
              placeholder="Password"
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
              label="Type of Service"
              placeholder="Type of Service"
            />
            <Form.TextArea
              onChange={e => this.setState({ description: e.target.value })}
              label="Description"
              placeholder="Tell us more about the services you offer"
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
