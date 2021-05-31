import React, { Component } from "react";

class Searchbar extends Component {
  handleChange = (event) => {
    this.props.callback(event.target.value);
  };

  // instead of passing this function you can write in the render :
  // onChange={(event) => this.props.handleChange(event.target.value)}

  render() {
    return (
      <input
        name="search"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Search food"
      />
    );
  }
}

export default Searchbar;
