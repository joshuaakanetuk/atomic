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

    let LIST_OF_FEELINGS = FEELINGS.map((feeeling) => {
      return (emoji.search(feeeling)[0]) ? emoji.search(feeeling)[0].emoji + " " + feeeling : feeeling;
    })

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
            if(this.context.STATUS === 1 && this.context.cell.verb.length === 0) {
              alert('Select an option from the picker!')
              return;
            }

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
        ? LIST_OF_FEELINGS.map((feel, i) => {
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
                {feel}
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
                {done.toLowerCase()}
              </li>
            );
          });

    const feeloract = (
      <div className="activityContainer">
        <div>{this.context.cell.id ? "UPDATING CELL" : "ADD CELL"}</div>
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
        <div>{this.context.cell.id ? "UPDATING CELL" : "ADD CELL"}</div>
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
        <div className="modifiers">
          {this.context.cell.type === "do" ? (
            <>
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
              /><label> Done for</label>
              <br/>
              <input
                onChange={(e) =>
                  this.context.updateState({
                    cell: { ...this.context.cell, number: e.target.value },
                  })
                }
                value={this.context.cell.number}
                type="number"
              />
              <label> Number</label>
              <br/>
              <input
                onChange={(e) =>
                  this.context.updateState({
                    cell: { ...this.context.cell, unit: e.target.value },
                  })
                }
                value={this.context.cell.unit}
                type="text"
                placeholder=""
              />
              <label> Units</label>
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
        <div>{this.context.cell.id ? "UPDATING CELL" : "ADD CELL"}</div>
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

        return <>{COLLECTION[this.context.STATUS]}</>;
  }
}

export default Update;
