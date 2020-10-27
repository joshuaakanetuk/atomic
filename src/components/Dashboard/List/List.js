/* eslint-disable eqeqeq */
import React from "react";
import DashboardContext from "../../../context/DashboardContext";
import { format } from "date-fns";

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
                  this.context.prepCell(e, cell);
                }}
                className="cell_group"
                key={i}
              >
                <div className="cell_hero">
                  <div
                    style={{
                      backgroundImage: `url('${this.context.user.profile_image}')`,
                    }}
                    className="cell_profileimage"
                  ></div>
                  <span className="cell_hero_name">
                    {this.context.user.full_name}
                  </span>
                </div>
                <div className="cell_content">
                  I {cell.type === "feel" ? " felt " : ""} {cell.verb}
                  {cell.forBool != false || cell.forBool != "" ? " for " : ""}
                  {cell.number !== "false" ? " " + cell.number + " " : ""}
                  {cell.unit !== "false" ? " " + cell.unit : ""}.
                  <br />
                </div>
                <div className="cell_comment">{cell.comment}</div>
                <small title={format(new Date(cell.date_created), "PPpp")}>{format(new Date(cell.date_created), "PPpp")}</small>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default List;
