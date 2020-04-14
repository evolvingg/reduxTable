import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log('render in persons:::');
    return (
        <div>
        {props.persons.map((person,index) => {
          return  <Person 
                key={person.id}
                click={(event)=> props.deletePersonHandler(event,index)}
                name={person.name} 
                age={person.age} 
                changeHandler = {(event) => props.changeHandler(event,person.id)}
                />
            })}
        </div>
    )
}

export default persons;