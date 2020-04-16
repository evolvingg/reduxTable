import React , { useState } from 'react';
//import './App.css';
import '../assets/css/main.css';
// import TableParent from './components/TableParent';
import cssClasses from './App.module.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(state,props) {
    console.log('IN APP getderivedsta :',props);
    return state;
  }

  changeHandler = ( event, personIndex) => {
    let persons = this.state.persons.slice(0);
    persons = persons.map((person) => {
        if(person.id === personIndex)
          person.name = event.target.value;
        return person;
    })
    // this.setState({
    //   persons: persons
    // })

    this.setState((prevState , props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
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

  loginHandler = () => {
    this.setState({authenticated: true})
  }
  
  componentDidUpdate(prevProps, prevState, snapshot ) {
    console.log('App.js ComponentdidUpdate:::::');
    console.log('snap::',snapshot);
 }
 
 static getDerivedStateFromProps(props, state) {
  console.log('App.js getderivedstatefromprops::::')
  return state;
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('App.js shouldComponentUpdate:::::');
  return true;
}

getSnapshotBeforeUpdate() {
  console.log('App getSnapshotBeforeUpdate:::::');
  return ({message: 'snapshot in APP'});
}

componentWillUnmount() {
  console.log('componwent willunmount in App');
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

    //1st withClass HoC approach
    // return (
    //   <WithClass classes={cssClasses.App}>
    //     <button onClick={() => this.setState({showCockpit: false})}>Remove cockpit</button>
    //     {this.state.showCockpit ? (<Cockpit 
    //                             showPersons = {this.state.showPersons} 
    //                             toggleHandler = {this.toggleHandler}
    //                             title = {this.props.appTitle}
    //                             personsLength = {this.state.persons.length}/>)
    //                             : null}

    //     {this.state.showPersons && <Persons 
    //                             persons = {this.state.persons} 
    //                             changeHandler = {this.changeHandler}
    //                             deletePersonHandler = {this.deletePersonHandler}/>
    //                             }
    //   </WithClass>
    // );
    return (
      <Aux>
        <button onClick={() => this.setState({showCockpit: false})}>Remove cockpit</button>
          {/* 1st curly brace for dynamic expression n 2nd one is for passing object */}
        <AuthContext.Provider value={
          {
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }
            }>   
          {this.state.showCockpit ? (<Cockpit 
                                  showPersons = {this.state.showPersons} 
                                  toggleHandler = {this.toggleHandler}
                                  title = {this.props.appTitle}
                                  personsLength = {this.state.persons.length}
                                  />)
                                  : null}

          {this.state.showPersons && <Persons 
                                  persons = {this.state.persons} 
                                  changeHandler = {this.changeHandler}
                                  deletePersonHandler = {this.deletePersonHandler}
                                  />
                                  }
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App , cssClasses.App);



