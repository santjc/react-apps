import React from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";
import RepoGrid from "./RepoGrid";
import "./css/style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      activeLanguage: "all",
      selectedLanguage: false,
      loading: true,
    };

    this.handleSelectLanguage = this.handleSelectLanguage.bind(this);
    this.fetchRepos = this.fetchRepos.bind(this);
  }

  componentDidMount() {
    this.fetchRepos(this.state.activeLanguage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeLanguage != this.state.activeLanguage) {
      this.fetchRepos(this.state.activeLanguage);
    }
  }
  fetchRepos(lang) {
    this.setState({
      loading: true,
    });

    window.API.fetchPopularRepos(lang).then((repos) => {
      this.setState({
        loading: false,
        repos,
      });
    });
  }

  handleSelectLanguage(lang) {
    this.setState({
      activeLanguage: lang,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          onSelectLanguage={this.handleSelectLanguage}
          activeLang={this.state.activeLanguage}
        />
        {this.state.loading == true ? (
          <Loading />
        ) : (
          <RepoGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}
