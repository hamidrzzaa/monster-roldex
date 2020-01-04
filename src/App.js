import React from "react";
import "./App.style.css";
import CardList from "./components/CardList/CardList";
import SearchInput from "./components/SearchInput/SearchInput";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.getMonsters = this.getMonsters.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(() => ({ monsters: data }));
      });
  }
  handleInput(e) {
    const searchText = e.target.value;
    this.setState(
      () => ({ searchField: searchText }),
      () => console.log(this.state.searchField)
    );
  }
  getMonsters() {
    if (this.state.searchField) {
      return this.state.monsters.filter(monster => {
        if (
          monster.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return this.state.monsters;
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Monster Roldex</h1>
        <SearchInput
          handleInput={this.handleInput}
          searchField={this.state.searchField}
        />
        <CardList monsters={this.getMonsters()} />
      </div>
    );
  }
}

export default App;
