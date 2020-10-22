import React from "react";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      STATUS: 0,
      cell: {},
    };
  }
  render() {
    const feeloract = (
        <div class="activityContainer">
          <div id="feelings">FEELINGS</div>
          <div id="activities">ACTIVITY</div>
        </div>
    );
    
    const pickActivity = (
        <div class="activityContainer">
        </div>
    );

    const COLLECTION = [feeloract];

    return(<div className="contain" onClick={() => {this.setState({ STATUS: this.state.STATUS +1})} }>
        {COLLECTION[this.state.STATUS]}</div>)
        ;
  }
}

export default Update;
