/* eslint-disable eqeqeq */
import React, { Component } from "react";
import serve from "../services/api.js";
import token from "../services/token";

// Declare variables and functions here
// setError: () => {},
const DashboardContext = React.createContext({});

export default DashboardContext;

export class DashboardProvider extends Component {
  state = {
    user: {
      profile_image: '',
      full_name: ''
    },
    cells: [],
    overlay: false,
    STATUS: 0,
    cell: {
      type: "feel",
      id: "",
      verb: "",
      forBool: false,
      number: null,
      unit: null,
      date_created: "",
      comment: "",
    },
  };

  // after mounting set user
  componentDidMount() {
    serve.getUser().then((data) => {
      this.setState({
        user: {...this.state.user, full_name: data.full_name, profile_image: data.profile_image}
      })
    })
  }

  // function to clear error status
  clearError = () => {
    this.setState({
      error: false,
    });
  };

   // function to set state for conditional rendering
   setUser = () => {
    let user = JSON.parse(token.getUser());
    if (user) {
      this.setState({user
      });
    }
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

  deleteCell = (id) => {
    serve
      .deleteCell(id)
      .then((data) => {
        if(!data.ok) {
          alert("Error deleting cell.")
          return;
        }
        this.setState({
          cells: this.state.cells.filter((cell) => {
            return cell.id !== id;
          }),
        });

      })
      .catch((err) => {
        alert("Error deleting cell. Try refreshing and trying again.")
      });


  }

  // Clean state for new cell
  cleanCell = () => {
    this.setState({
      cell: {
        type: "feel",
        id: "",
        verb: "",
        forBool: false,
        number: null,
        unit: null,
        date_created: "",
        comment: "",
      },
    });
  };

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
      serve
        .updateCell(this.state.cell.id, this.state.cell)
        .then((data) => {
          let cells = [...this.state.cells];
          let cellId = cells.filter(
            (cell) => cell.id === this.state.cell.id
          )[0];
          let cellTemp = cells.indexOf(cellId);
          cells[cellTemp] = this.state.cell;
          this.setState({ cells });
        })
        .catch((err) => {
          token.clearAuthToken();
          token.clearUser();
          this.setState({
            error: true,
          });
        });
      //
    } else {
      serve
        .insertCell({
          ...this.state.cell,
        })
        .then((data) => {
          this.setState({
            cells: [...this.state.cells, data],
          });
        })
        .catch((err) => {
          token.clearAuthToken();
          token.clearUser();
          this.setState({
            error: true,
          });
        });
    }
  };

  // Update the state
  updateState = (obj) => {
    this.setState(obj);
  };

  toggleOverlay = (e) => {
    if (
      (e != undefined && e.target.className === "overlay") ||
      e.target.className === "plus" ||
      e.target.className === "cell_group" ||
      (e.target.className === "nextbutton" && this.state.STATUS + 1 === 3)
    ) {
      this.setState({
        overlay: this.state.overlay ? false : true,
      });
    }
  };

  render() {
    // Put functions in like this:
    // cells: this.state.cells
    const value = {
      user: this.state.user,
      cells: this.state.cells,
      overlay: this.state.overlay,
      STATUS: this.state.STATUS,
      cell: this.state.cell,
      toggleOverlay: this.toggleOverlay,
      updateState: this.updateState,
      submitCell: this.submitCell,
      cleanCell: this.cleanCell,
      prepCell: this.prepCell,
      getCells: this.getCells,
      clearError: this.clearError,
      setUser: this.setUser,
      deleteCell: this.deleteCell
    };

    return (
      <DashboardContext.Provider value={value}>
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}
