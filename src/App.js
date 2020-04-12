import React , { useState } from 'react';
import logo from './logo.svg';
//import './App.css';
import './css/main.css';
// import TableParent from './components/TableParent';
import Person from './components/Person/Person';
import styled from 'styled-components';
import cssClasses from './App.module.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      cursor: pointer;
      padding: 8px;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
`;


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

  toggleHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({showPersons: !currentState})
  }
  

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '8px'
    }

    let persons = null ;
    if(this.state.showPersons) {
      persons = (
          <div>
              {this.state.persons.map((person,index) => {
                return <ErrorBoundary key={person.id}>
                <Person 
                name={person.name} 
                age={person.age} 
                changeHandler = {(event) => this.changeHandler(event,person.id)}
                />
                </ErrorBoundary>
              })}
          </div>
      )
    }
    return (
      <div className={cssClasses.App}>
        <header className={cssClasses.AppHeader}>
          <img src={logo} className={cssClasses.AppLogo} alt="logo" />
        </header>
        {/* <TableParent /> */}
        {/* <button 
        style={btnStyle}
        onClick={this.toggleHandler}>Switch Name</button> */}
        <StyledButton alt={this.state.showPersons} onClick={this.toggleHandler}>
        Switch Name
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;



