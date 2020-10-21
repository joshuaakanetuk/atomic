import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="container">
        <main id="login">
          <form>
            <h2>Sign In</h2>
            <label>Username:</label>
            <input type="text"></input>
            <br />
            <label>Password:</label>
            <input type="text"></input>
            <br />
            <input type="submit"></input>
            <br />
          </form>
        </main>
      </section>
    );
  }
}

export default Login;
