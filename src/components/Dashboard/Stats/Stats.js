import React from "react";
import DashboardContext from "../../../context/DashboardContext";
import isSameDay from "date-fns/isSameDay";
import { isSameYear } from "date-fns";

class Stats extends React.Component {
  static contextType = DashboardContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var counts = {};
    var days = {}
    var hours = {}

    var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    for (var i = 0; i < this.context.cells.length; i++) {
      var num = this.context.cells[i].verb;
      var day = new Date(this.context.cells[i].date_created).getDay();
      var hour = new Date(this.context.cells[i].date_created).getHours();
      counts[num] = counts[num] ? counts[num] + 1 : 1;
      days[day] = days[day] ? days[day] + 1 : 1;
      hours[hour] = days[hour] ? days[hour] + 1 : 1;

    }

    var output = [];
    var daysArray = [];
    var hoursArray = [];
    for (var property in counts) {
      output.push(property + ": " + counts[property] + " ");
    }

    for (var prope in days) {
      daysArray.push(DAYS[prope] + ": " + days[prope] + " ");
    }

    for (var value in hours) {
      hoursArray.push(value + ":00");
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
                  return isSameDay(new Date(cell.date_created), new Date());
                }).length
              }
            </span>
          </div>
          <div>
            <h3>Total Cells Logged This Month</h3>
            <span>
              {
                this.context.cells.filter((cell) => {
                  return isSameYear(new Date(cell.date_created), new Date());
                }).length
              }
            </span>
          </div>
          <div>
            <h3>Total Cells Logged This Year</h3>
            <span>
              {
                this.context.cells.filter((cell) => {
                  return isSameYear(new Date(cell.date_created), new Date());
                }).length
              }
            </span>
          </div>
          <div>
            <h3>Favorite Day To Do Things</h3>
            <span>
            {daysArray[0]}
            </span>
          </div>
          <div>
            <h3>Favorite Hour To Do Things</h3>
            <span>
            {hoursArray[0]}
            </span>
          </div>
          <div>
            <h3>Activities & Feelings Ranking</h3>
            {output.map((item, i) => {
              return <span key={i}>{item}</span>;
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default Stats;
