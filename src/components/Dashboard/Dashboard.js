import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import DashboardContext from "../../context/DashboardContext";
import List from "./List/List.js";
import Profile from "./Profile/Profile";
import Stats from "./Stats/Stats";

class Dashboard extends React.Component {
  static contextType = DashboardContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.context.setUser()
    this.context.getCells();
  }
  render() {
    return (
      <>
        <section className="container">
        <div className="toggle">
        <NavLink exact to="/dashboard"> Dashboard </NavLink>
        <NavLink to="/dashboard/stats"> Stats </NavLink>
        </div>
          <div
            onClick={(e) => {
              this.context.updateState({STATUS: 0})
              this.context.cleanCell();
              this.context.toggleOverlay(e);
            }}
            className="plus"
          >
            +
          </div>
          <Switch>
            
            <Route
              exact
              path="/dashboard"
              render={() => <List cells={this.context.cells} />}
            />
            <Route path="/dashboard/stats" component={Stats} />
            <Route path="/dashboard/profile" component={Profile} />
          </Switch>
        </section>
      </>
    );
  }
}

export default Dashboard;
