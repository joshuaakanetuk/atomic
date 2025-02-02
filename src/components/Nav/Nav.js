import React from "react";
import { Link, withRouter } from "react-router-dom";
import DashboardContext from "../../context/DashboardContext";
import token from "../../services/token";

class Nav extends React.Component {
  static contextType = DashboardContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="">
        <ul className="">
          <li>
            <a href="/">
              <i className="ri-donut-chart-fill"></i>
            </a>
          </li>

          {token.getAuthToken() ? (
            <>
            <li>
                <Link to="/dashboard/profile"> Profile </Link>
              </li>
              <li>
                <Link
                  to=""
                  onClick={() => {
                    token.clearAuthToken();
                    token.clearUser();
                    this.context.clearError();
                    this.props.history.push("/");
                  }}
                >
                  Logout
                </Link>
              </li>
              
            </>
          ) : (
            <>
              <li>
                <Link className="navButton" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="navButton" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
