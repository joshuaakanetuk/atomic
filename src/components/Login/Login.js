import React from "react";
import { withRouter } from "react-router-dom";
import auth from "../../services/auth";
import token from "../../services/token";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusMsg: "",
      error: "",
      user_name: "",
      password: "",
      full_name: "",
      loginStatus: this.props.match.path,
    };
  }

  // clear status messages
  clearMessages = () => {
    this.setState({
      statusMsg: "",
    });
  };

  // handler for submittion on page
  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password, full_name } = ev.target;

    if (this.state.loginStatus === "/login") {
      auth
        .postLogin({
          user_name: user_name.value,
          password: password.value,
        })
        .then((res) => {
          user_name.value = "";
          password.value = "";
          token.saveAuthToken(res.authToken);
          token.saveUser(JSON.stringify(res.user));
          this.props.history.push("/dashboard");
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    } else {
      auth
        .postUser({
          user_name: user_name.value,
          password: password.value,
          full_name: full_name.value,
        })
        .then((res) => {
          user_name.value = "";
          password.value = "";
          full_name.value = "";
          this.setState({
            statusMsg: "Registration complete. Feel free to login!",
          });
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    }
  };

  render() {
    return (
      <section className="container">
        <main id="login">
          <form onSubmit={this.handleSubmitJwtAuth}>
            {this.state.loginStatus === "/login" ? (
              <h2>Login</h2>
            ) : (
              <h2>Register</h2>
            )}
            <div style={{ margin: "6px 0", color: "red" }}>
              {this.state.statusMsg}
            </div>
            <div style={{ margin: "6px 0", color: "red" }}>
              {this.state.error}
            </div>
            <label>Username:</label>
            <input name="user_name" type="text"></input>
            <br />
            <label>Password:</label>
            <input name="password" type="password"></input>
            <br />
            {this.state.loginStatus !== "/login" ? (
              <>
                <label>Full Name:</label>
                <input name="full_name" type="text"></input>
                <br />
                <div className="reqs">Password must be at least 8 character and contain 1 upper case, lower case, number and a special character.</div>
              </>
            ) : (
              ""
            )}
            <input type="submit"></input>
            <br />
          </form>
        </main>
      </section>
    );
  }
}

export default withRouter(Login);
