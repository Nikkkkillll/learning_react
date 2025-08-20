import { Component } from "react";

class SuccessComponent extends Component {
  componentDidMount() {
    alert("Success Component will render");
  }
  componentWillUnmount() {
    alert("Success Component will unmount");
  }
  render() {
    return (
      <div>
        <h2>Login Success....</h2>
      </div>
    );
  }
}

class ErrorComponent extends Component {
  componentDidMount() {
    alert("Error Component will render");
  }
  componentWillUnmount() {
    alert("Error Component will unmount");
  }
  render() {
    return (
      <div>
        <h2>Invalid Login...</h2>
      </div>
    );
  }
}

export default class LifeCycleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        UserName: "john_nit",
        Password: "john@11",
      },
      formDetails: {
        UserName: "",
        Password: "",
      },
      result: "",
    };
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleUserName(event) {
    this.setState({
      formDetails: {
        ...this.state.formDetails,
        UserName: event.target.value,
      },
    });
  }

  handlePassword(event) {
    this.setState({
      formDetails: {
        ...this.state.formDetails,
        Password: event.target.value,
      },
    });
  }

  handleLoginClick() {
    if (
      this.state.formDetails.UserName === this.state.userDetails.UserName &&
      this.state.formDetails.Password === this.state.userDetails.Password
    ) {
      this.setState({
        result: <SuccessComponent />,
      });
    } else {
      this.setState({
        result: <ErrorComponent />,
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <dl>
          <dt>User Name</dt>
          <dt>
            <input onChange={this.handleUserName} type="text" />
          </dt>
          <dt>Password</dt>
          <dt>
            <input onChange={this.handlePassword} type="password" />
          </dt>
        </dl>
        <button onClick={this.handleLoginClick}>Login</button>
        <div>{this.state.result}</div>
      </div>
    );
  }
}
