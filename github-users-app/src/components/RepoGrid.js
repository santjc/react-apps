import "./Api";
import React from "react";

export default class RepoGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-xl">
        <ul className="grid-container">
          {this.props.repos.map(({ name, owner, stargazers_count, html_url }) => (
            <li key={name} className="grid-item">
              <div className="profile-pic"></div>
              <ul className="repo-data">
                <li>
                  <a href={html_url}>{name}</a>
                </li>
                <li>@{owner.login}</li>
                <li>{stargazers_count} stars</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
