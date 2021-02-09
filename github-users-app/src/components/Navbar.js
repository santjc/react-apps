import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
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
        </div>
      </nav>
    );
  }
}
