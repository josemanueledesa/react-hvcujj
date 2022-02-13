import React, { Component } from "react";
import { render } from "react-dom";
import Table from "./Table";
import Form from "./Form";
import Api from "./Api";
import "./style.css";

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = char => {
    this.setState({ characters: [...this.state.characters, char] });
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
        <Api />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));