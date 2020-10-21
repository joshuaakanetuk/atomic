import React, { Component } from "react";
import CELLS from '../LIST'

// Declare variables and functions here
// setError: () => {},
const DashboardContext = React.createContext({


});

export default DashboardContext;

export class DashboardProvider extends Component {
  state = {
    cells: CELLS,
    overlay: false
  };

  toggleOverlay = () => {
      this.setState({
          overlay: this.state.overlay ? false : true
      })
  }

  render() {
    // Put functions in like this:
    // projects: this.state.projects
    const value = {
        cells: this.state.cells,
        overlay: this.state.overlay,
        toggleOverlay: this.toggleOverlay
    }

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}
