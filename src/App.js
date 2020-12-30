import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '' 
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json ())
      .then(list => this.setState({monsters: list}));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1> Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={ e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }

}

export default App;
