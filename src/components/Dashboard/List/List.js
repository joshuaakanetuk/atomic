import React from "react";
import DashboardContext from "../../../context/DashboardContext";
import {format} from 'date-fns'

class List extends React.Component {
  static defaultProps = {
    cells: [],
  };
  static contextType = DashboardContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const reverseArr = (input) => {
      var ret = new Array();
      for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
      }
      return ret;
    };

    return (
      <main className="list">
        <ul className="ineedspace">
          {reverseArr(this.props.cells).map((cell, i) => {
            return (
              <li
                onClick={() => {
                  console.log("clicked")
                  this.context.prepCell(cell);
                }}
                className="cell_group"
                key={i}
              >
                I {cell.verb} {cell.for ? "for" : ""} {cell.number}
                <br />
                {cell.comment}
                <br />
                <div className="cell_profileimage"></div>
                <small>{format(new Date(cell.date_created), "PPpp")}</small>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default List;
