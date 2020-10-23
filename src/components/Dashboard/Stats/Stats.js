import React from "react";
import DashboardContext from "../../../context/DashboardContext";
import isSameDay from "date-fns/isSameDay";

class Stats extends React.Component {
  static contextType = DashboardContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var counts = {};

    for (var i = 0; i < this.context.cells.length; i++) {
      var num = this.context.cells[i].verb;
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    var output = [];
    for (var property in counts) {
      output.push(property + ": " + counts[property] + "; ");
    }

    return (
      <main id="stats">
        <section className="statsGrid">
          <div>
            <h3>Total Cells Logged</h3>
            <span>{this.context.cells.length}</span>
          </div>
          <div>
            <h3>Total Cells Logged Today</h3>
            <span>
              {
                this.context.cells.filter((cell) => {
                  console.log(
                    isSameDay(new Date(cell.date_created), new Date()),
                    cell
                  );
                  return isSameDay(new Date(cell.date_created), new Date());
                }).length
              }
            </span>
          </div>
          <div>
            <h3>Activities & Feelings Ranking</h3>
            {output.map((item) => {
              return <span>{item}</span>;
            })}
          </div>
          {/* Total logs */}
          {/* Total logs added today */}
          {/* Average logs daily */}
          {/* 3 Most done activities */}
          {/* 3 Most common feelings */}
        </section>
      </main>
    );
  }
}

export default Stats;
