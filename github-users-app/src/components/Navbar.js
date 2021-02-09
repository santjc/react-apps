import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.props);
    event.preventDefault();
    this.props.onSelectLanguage(this.state.inputValue);
  }
  render() {
    const languages = ["all", "javascript", "ruby", "python"];
    return (
      <nav>
        <div className="container">
          <ul>
            {languages.map((lang) => (
              <li
                key={lang}
                className={this.props.activeLang == lang ? "active" : null}
                onClick={() => this.props.onSelectLanguage(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit} className="search-form">
              <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                placeholder="Search a language"
              />
              <button class="submit-btn" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
        </div>
      </nav>
    );
  }
}
