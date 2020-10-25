import React from "react";
import { Link, withRouter } from "react-router-dom";
import token from "../../services/token";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="container">
        {/* Navigation Bar */}

        <main id="home">
          <section className="frontpage ineedspace">
            <h1>
              Measure <br /> your day.
            </h1>
            <h3>
              Use ATOMIC in order to track things you tend to forget about or
              want to know more of.
            </h3>
            <ul className="">
              {token.getAuthToken() ? (
                <>
                  <li>
                    <Link to="/dashboard">
                      <i class="ri-login-box-fill"></i>Dashboard
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">
                      <i class="ri-login-box-fill"></i>Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <i class="ri-group-fill"></i>Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </section>
          {/* NEED INSTRUCTIONS AS WELL */}
          {}
          <section className="features ineedspace">
            <ul className="">
              <li>
              <i class="twa twa-grinning-face"></i>
                  <br/>
                Create cells (or activity logs) of your feelings and activities
                over the course of a day.
              </li>
              <li>
              <i class="twa twa-atom-symbol"></i>
              <br/>
                Check a summary of all of your cells to see the total
                accumulated total of your activities.
              </li>
              <li>
              <i class="twa twa-person-running"></i>
              <br/>
                Keep track of the little things, but don't feel like you need to
                commit everyday.
              </li>
            </ul>
          </section>
          <section className="footer ineedspace">
            <div>
              <div>
                <i className="ri-donut-chart-fill"></i>ATOMIC
              </div>
            </div>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <a href="https://joshuaakanetuk.com">2020©️ Joshua Akan-Etuk</a>
              </li>
            </div>
          </section>
        </main>
      </section>
    );
  }
}

export default Home;
