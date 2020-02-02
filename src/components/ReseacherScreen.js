import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./ProviderScreen.scss";

export default class ReseacherScreen extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { password, username } = this.state;
    const { history } = this.props;
    const disabled = username === "" || password === "";
    return (
      <div
        className="provider-screen"
        onSubmit={() => history.push("/provider/1/details")}
      >
        <h1>Reseacher Portal</h1>
        <h3>Please login or register to get full access the WSP Portal</h3>
        <Form className="provider-screen__login-form">
          <Form.Field>
            <label>Username</label>
            <input
              placeholder="Username"
              onChange={e => this.setState({ username: e.target.value })}
              value={username}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Remember me" />
          </Form.Field>
          <div className="provider-screen__buttons">
            <Button disabled={disabled} type="submit">
              Login
            </Button>
            <p onClick={() => this.props.history.push("/woman/registration")}>
              Sign Up
            </p>
          </div>
        </Form>
      </div>
    );
  }
}
