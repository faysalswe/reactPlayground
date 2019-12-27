import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(monsters => this.setState({ monsters: monsters }))
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())  
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={e => this.setState({search: e.target.value })}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
