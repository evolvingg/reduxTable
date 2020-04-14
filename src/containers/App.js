import React , { useState } from 'react';
//import './App.css';
import '../assets/css/main.css';
// import TableParent from './components/TableParent';
import cssClasses from './App.module.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


// const App = (props) => {
//     const [stateArr , modifyArr] = useState(
//       {
//         persons: [
//           {
//             name: 'Max',
//             age: 27
//           },
//           {
//             name: 'Muller',
//             age: 28
//           },
//           {
//             name: 'stephen',
//             age: 80
//           }
//         ]
//       }
//     )

//     const [otherState, modifyOther] = useState('some other state')
// console.log(stateArr,otherState);
//     const clickHandler = () => {
//       modifyArr({
//               persons: [
//                 {
//                   name: 'Maxmillan',
//                   age: 27
//                 },
//                 {
//                   name: 'Muller',
//                   age: 28
//                 },
//                 {
//                   name: 'stephen',
//                   age: 95
//                 }
//               ]
//             })
//           }
//   return (
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//     {/* <TableParent /> */}
//     <button onClick={clickHandler}>Switch Name</button>
//     <Person name={stateArr.persons[0].name} age={stateArr.persons[0].age}/>
//     <Person name={stateArr.persons[1].name} age={stateArr.persons[1].age}>My hobbies are singing</Person>
//     <Person name={stateArr.persons[2].name} age={stateArr.persons[2].age}/>
//   </div>
//   )
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('IN APP.js construc:::',props);
  }

  state = {
    persons: [
      {
        name: 'Max',
        age: 27,
        id:'jkf'
      },
      {
        name: 'Muller',
        age: 28,
        id:'wq'
      },
      {
        name: 'stephen',
        age: 80,
        id:'fdl'
      }
    ],
    otherState : '',
    showPersons: false
  }

  static getDerivedStateFromProps(state,props) {
    console.log('IN APP getderivedsta :',props);
    return state;
  }

  clickHandler = (newName) => {
    console.log('clicked::',this);
    this.setState({
      persons: [
        {
          name: newName,
          age: 27
        },
        {
          name: 'Muller',
          age: 28
        },
        {
          name: 'stephen',
          age: 95
        }
      ]
    })
  }

  changeHandler = ( event, personIndex) => {
    let persons = this.state.persons.slice(0);
    persons = persons.map((person) => {
        if(person.id === personIndex)
          person.name = event.target.value;
        return person;
    })
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (event,personIndex) => {
    let persons = this.state.persons.slice(0);
    console.log('here',personIndex,persons)
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }

  componentDidMount() {
    console.log('::::::::in app componentdidmount')
  }

  toggleHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({showPersons: !currentState})
  }
  

  render() {
    console.log('render in app:::');
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '8px'
    }

    // let persons = null ;
    // if(this.state.showPersons) {
    //   persons = (
    //       <div>
    //           {this.state.persons.map((person,index) => {
    //             return <ErrorBoundary key={person.id}>
    //             <Person 
    //             name={person.name} 
    //             age={person.age} 
    //             changeHandler = {(event) => this.changeHandler(event,person.id)}
    //             />
    //             </ErrorBoundary>
    //           })}
    //       </div>
    //   )
    // }
    return (
      <div className={cssClasses.App}>
        <Cockpit cssClasses = {cssClasses} 
                                showPersons = {this.state.showPersons} 
                                toggleHandler = {this.toggleHandler}
                                title = {this.props.appTitle}/>

        {this.state.showPersons && <Persons 
                                persons = {this.state.persons} 
                                changeHandler = {this.changeHandler}
                                deletePersonHandler = {this.deletePersonHandler}/>
                                }
      </div>
    );
  }
}

export default App;



