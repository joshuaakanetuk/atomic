import React from "react";
import FEELINGS from "../../../FEELINGS";
import ACTIVITIES from "../../../ACTIVITIES";
import emoji from "node-emoji";
import DashboardContext from "../../../context/DashboardContext";

class Update extends React.Component {
  static contextType = DashboardContext;
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const prevButton = (
      <div
        onClick={() => {
          this.context.updateState({ STATUS: --this.context.STATUS });
        }}
        className="nextbutton"
      >
        PREVIOUS
      </div>
    );

    const nextButton = (
      <div
        onClick={(e) => {
            if(this.context.STATUS + 1 === 3 ) {
               this.context.updateState({ STATUS: 0 })
                this.context.submitCell();
                this.context.toggleOverlay(e);
                return;
            }
            this.context.updateState({ STATUS: ++this.context.STATUS });
        }}
        className="nextbutton"
      >
        {this.context.STATUS < 2 ? "NEXT" : "FINISH"}
      </div>
    );

    //
    const picker =
      this.context.cell.type === "feel"
        ? FEELINGS.map((feel, i) => {
            return (
              <li
              key={i}
                className={
                  this.context.cell.verb === feel
                    ? "pickerItem active"
                    : "pickerItem"
                }
                onClick={() => {
                  this.context.updateState({ cell: { ...this.context.cell, verb: feel } });
                }}
              >
                {emoji.random().emoji + " " + feel}
              </li>
            );
          })
        : ACTIVITIES.map((done, i) => {
            return (
              <li
              key={i}
                className={
                  this.context.cell.verb === done
                    ? "pickerItem active"
                    : "pickerItem"
                }
                onClick={() => {
                  this.context.updateState({ cell: { ...this.context.cell, verb: done } });
                }}
              >
                {emoji.random().emoji + " " + done.toLowerCase()}
              </li>
            );
          });

    const feeloract = (
      <div className="activityContainer">
        <div className="feeldo">
          <div
            onClick={() => {
              this.context.updateState({ cell: { ...this.context.cell, type: "feel" } });
            }}
            className={this.context.cell.type === "feel" ? "active" : ""}
            id="feelings"
          >
            FEELINGS
          </div>

          <div
            onClick={() => {
              this.context.updateState({ cell: { ...this.context.cell, type: "do" } });
            }}
            className={this.context.cell.type === "do" ? "active" : ""}
            id="activities"
          >
            ACTIVITY
          </div>
        </div>
        {nextButton}
      </div>
    );

    const pickActivity = (
      <div className="activityContainer">
        <div className="header">
          <span className="pickerHeader">
            I{" "}
            {this.context.cell.type === "feel"
              ? "was feeling " + this.context.cell.verb + "."
              : this.context.cell.verb +
                (this.context.cell.forBool ? " for " : "") +
                (this.context.cell.number !== null
                  ? " " + this.context.cell.number + " "
                  : "") +
                (this.context.cell.unit !== null
                  ? " " + this.context.cell.unit
                  : "") +
                "."}
          </span>
        </div>
        <div className="choices">
          <ul className="picker">{picker}</ul>
        </div>
        <div>
          {this.context.cell.type === "do" ? (
            <>
              <label>For:</label>
              <input
                onChange={() =>
                  this.context.cell.forBool
                    ? this.context.updateState({
                        cell: { ...this.context.cell, forBool: false },
                      })
                    : this.context.updateState({
                        cell: { ...this.context.cell, forBool: true },
                      })
                }
                checked={this.context.cell.for}
                type="checkbox"
              />
              <input type="checkbox" />
              <input
                onChange={(e) =>
                  this.context.updateState({
                    cell: { ...this.context.cell, number: e.target.value },
                  })
                }
                value={this.context.cell.number}
                type="number"
              />
              <input
                onChange={(e) =>
                  this.context.updateState({
                    cell: { ...this.context.cell, unit: e.target.value },
                  })
                }
                value={this.context.cell.unit}
                type="text"
                placeholder="Enter unit of measurement..."
              />
            </>
          ) : (
            ""
          )}
        </div>

        {prevButton}
        {nextButton}
      </div>
    );

    const comment = (
      <div className="activityContainer">
        <textarea
          onChange={(e) =>
            this.context.updateState({
              cell: { ...this.context.cell, comment: e.target.value },
            })
          }
          value={this.context.cell.comment}
          placeholder="Add a comment..."
        ></textarea>
        {prevButton}
        {nextButton}
      </div>
    );

    const COLLECTION = [feeloract, pickActivity, comment];

    return <div className="contain">{COLLECTION[this.context.STATUS]}</div>;
  }
}

export default Update;
