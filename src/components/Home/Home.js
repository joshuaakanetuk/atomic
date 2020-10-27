import React from "react";
import { Link } from "react-router-dom";
import token from "../../services/token";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="container">
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
                      <i className="ri-login-box-fill"></i>Dashboard
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">
                      <i className="ri-login-box-fill"></i>Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <i className="ri-group-fill"></i>Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </section>
          {}
          <section className="features ineedspace">
            <ul className="">
              <li>
              <i className="twa twa-grinning-face"></i>
                  <br/>
                Create cells (or activity logs) of your feelings and activities
                over the course of a day.
              </li>
              <li>
              <i className="twa twa-atom-symbol"></i>
              <br/>
                Check a summary of all of your cells to see the total
                accumulated total of your activities.
              </li>
              <li>
              <i className="twa twa-person-running"></i>
              <br/>
                Keep track of the little things, but don't feel like you need to
                commit everyday.
              </li>
            </ul>
          </section>
          <section className="functions ineedspace">
            <h2>How to use ATOMIC</h2>
            <ul className="">
            <li>
              <i className="twa twa-person"></i>
              <br/>
                Create an account via the register page and sign in.
              </li>
              <li>
              <i className="twa twa-plus"></i>
                  <br/>
                Create cells by using the + in the bottom right corner. Update later by clicking on the cell.
              </li>
              <li>
              <i className="twa twa-goal-net"></i>
              <br/>
                Enter the information needed for cell completion listed in overlay dialog!
              </li>
              
            </ul>
          </section>
          <section className="footer ineedspace">
            <div>
              <div>
                <i className="ri-donut-chart-fill"></i>ATOMIC
              </div>
            </div>
            <div className="outbound">
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
                <a href="https://joshuaakanetuk.com">2020© Joshua Akan-Etuk</a>
              </li>
            </div>
          </section>
        </main>
      </section>
    );
  }
}

export default Home;
