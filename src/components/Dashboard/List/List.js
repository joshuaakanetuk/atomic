import React from "react";

class List extends React.Component {
  static defaultProps = {
    cells: [],
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="list">
        <ul className="ineedspace">
          {this.props.cells.map((cell, i) => {
            return <li className="cell_group" key={i}>
                I {cell.verb} {cell.for ? "for" : ''} {cell.number}
                <br/>
                {cell.comment}
                <br/>
                <div className="cell_profileimage"></div>
                <small>{cell.date_created}</small>
                </li>
          })}
        </ul>
      </main>
    );
  }
}

export default List;
