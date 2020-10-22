import React, { Component } from "react";
import CELLS from "../LIST";

// Declare variables and functions here
// setError: () => {},
const DashboardContext = React.createContext({});

export default DashboardContext;

export class DashboardProvider extends Component {
  state = {
    cells: CELLS,
    overlay: false,
    STATUS: 0,
    cell: {
      type: "feel",
      id: "",
      verb: "",
      for: false,
      number: null,
      unit: null,
      date_created: "",
      comment: "",
    },
  };

  // Clean state for new cell
  cleanCell = () => {};

  // Set current cell for update
  prepCell = (cell) => {
    this.setState({
      cell
    })

  };

  // Add cell to memory/database
  submitCell = () => {
    // need to find cell if updating
    this.setState({
      cells: [...this.state.cells, { ...this.state.cell, date_created: new Date().toISOString() }],
    });
  };

  // Update the state
  updateState = (obj) => {
    this.setState(obj);
  };

  toggleOverlay = () => {
    this.setState({
      overlay: this.state.overlay ? false : true,
    });
  };

  render() {
    // Put functions in like this:
    // projects: this.state.projects
    const value = {
      cells: this.state.cells,
      overlay: this.state.overlay,
      STATUS: this.state.STATUS,
      cell: this.state.cell,
      toggleOverlay: this.toggleOverlay,
      updateState: this.updateState,
      submitCell: this.submitCell,
      cleanCell: this.cleanCell,
      prepCell: this.prepCell,
    };

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}
