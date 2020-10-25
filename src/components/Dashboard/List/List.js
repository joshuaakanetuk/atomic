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
      var ret = [];
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
                onClick={(e) => {
                  console.log("clicked")
                  this.context.prepCell(e, cell);
                }}
                className="cell_group"
                key={i}
              >
                I {cell.type === 'feel' ? " felt " : ""} {cell.verb} {cell.forBool != false || cell.forBool != ""  ? "for" : ""} {cell.number} .
                <br />
                {cell.comment}
                <br />
                <div style={{backgroundImage: `url('${this.context.user.profile_image}')`}} className="cell_profileimage"></div>
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
