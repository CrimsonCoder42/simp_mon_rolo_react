import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [stringField, setStringField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log('render')


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, [])


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }


  const onStringChange = (event) => {
    setStringField(event.target.value)
  }


  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLocaleLowerCase().includes(searchField);
  // })

  return (
    <div className="App">

      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />

      <SearchBox
        onChangeHandler={onStringChange}
        placeholder='set string'
      />

      <CardList monsters={filteredMonsters} />
    </div>

  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }

//   }

//   componentDidMount() {

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => {
//     this.setState({
//       monsters: data
//     })
//   })
//

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//       () => {
//         return { searchField };
//       }
//     )
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;

