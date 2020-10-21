import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardContext from "../../context/DashboardContext";
import List from "./List/List.js"

class Dashboard extends React.Component {
    static contextType = DashboardContext;
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <>
      <section className="container">
          {/*  PLUS SIGN  */}
          <div onClick={() => {
            this.context.toggleOverlay();
          }} 
          className="plus">+ </div>
        {/* CELLS / STATS SELECTOR */}
        <Switch>
          <Route exact path="/dashboard" 
          render={() => (
              
              <List cells={this.context.cells}/>
          )} />
        </Switch>
      </section>
      </>
    );
  }
}

export default Dashboard;
