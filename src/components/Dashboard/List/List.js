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
              <li className="cell_group" key={i}>
                <div className="cell_main">
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
                  <small title={format(new Date(cell.date_created), "PPpp")}>
                    {format(new Date(cell.date_created), "PPpp")}
                  </small>
                </div>
                <div
                  onClick={(e) => {
                    this.context.prepCell(e, cell);
                  }}
                  className="cell_edit_button"
                >
                  <i class="ri-edit-fill"></i>
                </div>
                <div
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    if (confirm("Do you want to delete this cell?")) {
                      this.context.deleteCell(cell.id);
                    }
                  }}
                  className="cell_delete_button"
                >
                  <i className="ri-delete-bin-fill"></i>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default List;
