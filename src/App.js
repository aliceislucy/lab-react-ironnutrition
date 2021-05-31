import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Searchbar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';

class App extends React.Component {
  state = {
    foods: foodsJSON,
    formIsDisplayed: false,
    searchValue: '',
    todaysFood: [
      {

      }
    ],
  };

  handleSearchValue = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
  };

  formDisplayer = () => {
    this.setState({
      formIsDisplayed: !this.state.formIsDisplayed,
    });
  };

  AddNewFood = (newFood) => {
    this.setState({
      foods: [newFood, ...this.state.foods],
      formIsDisplayed: false,
    });
  };

  handleSelectFood = (food) => {
    this.setState({
      todaysFoods: [...this.state.todaysFoods, food],
    });
  };

  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    //you can also put the filter method above directly line 60
    //so this.state.foods.filter( food => blabla (everything line 38 to 41)).map *everything line 60*
    //it's a bit complicated to read tho

    return (
      <div className="App">
        <Searchbar
          value={this.state.searchValue}
          callback={this.handleSearchValue}
        />

        <br></br>

        <button onClick={this.formDisplayer}>Add new food</button>

        {this.state.formIsDisplayed && <Form callback={this.AddNewFood} />}

        {filteredFoods.map((food) => {
          return (
            <FoodBox
              food={food}
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
              selectFood={this.handleSelectFood}
            />
          );
        })}

        <TodaysFood />
      </div>
    );
  }
}

export default App;
