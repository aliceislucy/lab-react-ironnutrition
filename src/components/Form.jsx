import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: this.state.quantity,
    };

    this.props.callback(newFood);
  };

  render() {
    return (
        <form className="Form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              value={this.state.calories}
              onChange={this.handleChange}
              name="calories"
              placeholder="calories"
              id="calories"
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              value={this.state.image}
              onChange={this.handleChange}
              name="image"
              id="image"
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="number"
              name="quantity"
              placeholder="quantity"
              id="quantity"
            />
          </div>
          <button>Submit</button>
        </form>
    );
  }
}

export default Form;
