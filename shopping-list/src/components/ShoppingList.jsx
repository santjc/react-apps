import React from "react";
import Category from "./Category";

export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["Lacteos", "Harinas", "Snacks", "Vegetales y Frutas"],
      input: "",
    };

    this.handleRemoveCategory = this.handleRemoveCategory.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  render() {
    return (
      <div className="container">
        <figure className="add-category">
          <h1 className="addcat-title">Add a Category</h1>
          <input
            type="text"
            onChange={this.updateInput}
            value={this.state.input}
          />
          <button onClick={this.handleAddCategory} type="submit">
            Add
          </button>
        </figure>
        <h1 className="header-title">Shopping List</h1>
        <div className="category-container">
          {this.state.categories.map((category) => (
            <Category
              ctgName={category}
              onRemoveCategory={this.handleRemoveCategory}
            />
          ))}
        </div>
      </div>
    );
  }

  handleAddCategory() {
    this.setState((currentState) => ({
      categories: currentState.categories.concat([currentState.input]),
      input: "",
    }));
  }

  handleRemoveCategory(oldCat) {
    this.setState((currentState) => {
      return {
        categories: currentState.categories.filter(
          (category) => category !== oldCat
        ),
      };
    });
  }

  updateInput(e) {
    const value = e.target.value;

    this.setState({
      input: value,
    });
  }
}
