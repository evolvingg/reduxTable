import React from 'react';
import Person from './Person/Person';

// const persons = (props) => {
//     console.log('render in persons:::');
//     return (
//         <div>
//         {props.persons.map((person,index) => {
//           return  <Person 
//                 key={person.id}
//                 click={(event)=> props.deletePersonHandler(event,index)}
//                 name={person.name} 
//                 age={person.age} 
//                 changeHandler = {(event) => props.changeHandler(event,person.id)}
//                 />
//             })}
//         </div>
//     )
// }

// export default persons;

// convering into classbased component

class Persons extends React.PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('Persons.js getderivedstatefromprops::::')
    //     return state;
    // }


  componentDidMount() {
    console.log('::::::::in Persons.js componentdidmount')
  }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Persons.js shouldComponentUpdate:::::')
    //     if(nextProps.persons !== this.props.persons || nextProps.deletePersonHandler !== this.props.deletePersonHandler || nextProps.changeHandler !== this.props.changeHandler) { //if props have changed
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    componentDidUpdate(prevProps, prevState, snapshot ) {
        console.log('Persons.js ComponentdidUpdate:::::');
        console.log('snap::',snapshot);
    } 

    getSnapshotBeforeUpdate() {
        console.log('Persons getSnapshotBeforeUpdate:::::');
        return ({message: 'snapshot'});
    }

    componentWillUnmount() {
        console.log('componwent willunmount in Persons');
    }

    render() {
        console.log('render in persons:::');
        return (
            this.props.persons.map((person, index) => {
                return    <Person 
                        key={person.id}
                        click={(event)=> this.props.deletePersonHandler(event,index)}
                        name={person.name} 
                        age={person.age} 
                        changeHandler = {(event) => this.props.changeHandler(event,person.id)}
                        />
                
            })
        )
    }
}

export default Persons;