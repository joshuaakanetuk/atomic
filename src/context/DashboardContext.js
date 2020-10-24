import React, { Component } from "react";
import CELLS from "../LIST";
import { v4 as uuidv4 } from "uuid";
import serve from "../services/api.js"
import token from '../services/token'

// Declare variables and functions here
// setError: () => {},
const DashboardContext = React.createContext({});

export default DashboardContext;

export class DashboardProvider extends Component {
  state = {
    cells: [],
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

    // function to get all of the cells
    getCells = () => {
      serve
        .getCells()
        .then((data) => {
          this.setState({
            cells: data,
          });
        })
        .catch((err) => {
          token.clearAuthToken();
          token.clearUser();
          this.setState({
            error: true,
          });
        });
    };

  // Clean state for new cell
  cleanCell = () => {};

  // Set current cell for update
  prepCell = (e, cell) => {
    this.setState(
      {
        cell,
      },
      () => {
        this.toggleOverlay(e);
      }
    );
  };

  // Add cell to memory/database
  submitCell = () => {
    // need to find cell if updating
    if (this.state.cell.id.length > 1) {
      //
      let cells = [...this.state.cells];
      let cellId = cells.filter((cell) => cell.id === this.state.cell.id)[0];
      let cellTemp = cells.indexOf(cellId);
      cells[cellTemp] = this.state.cell;
      this.setState({ cells });
    } else {
      this.setState({
        cells: [
          ...this.state.cells,
          {
            ...this.state.cell,
            id: uuidv4(),
            date_created: new Date().toISOString(),
          },
        ],
      });
    }
  };

  // Update the state
  updateState = (obj) => {
    this.setState(obj);
  };

  toggleOverlay = (e) => {
    console.log(e)
    if(e!= undefined && e.target.className === 'overlay' || e.target.className === 'plus' || e.target.className === 'cell_group' || (e.target.className === 'nextbutton'  && this.state.STATUS + 1 === 3 )) {
      this.setState({
        overlay: this.state.overlay ? false : true,
      });
    }
  };

  render() {
    // Put functions in like this:
    // cells: this.state.cells
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
      getCells: this.getCells
    };

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}
