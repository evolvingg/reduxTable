import React from 'react';
import classes from './Person.module.css';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eeeeee;
            box-shadow: 0 2px 3px #cccccc;
            padding: 16px;
            text-align: center;

            @media (min-width:500px) {
                width: 450px;
            }
`;

// const person = (pr) => {
//     // const rnd = Math.random();

//     // if(rnd>0.7) {
//     //     throw new Error('something went wrong');
//     // }
//     console.log('render in person:::');
//     return (
//         <StyledDiv onClick={pr.click}>
//             <p >I am {pr.name} and my age is {pr.age}</p>
//             <p>{pr.children}</p>
//             <input type="text" onChange = {pr.changeHandler} defaultValue={pr.name}/>
//         </StyledDiv>)
// }

// export default person;



class Person extends React.Component {
    constructor(props) {
        super(props);
        console.log('in constructor of person:::::::::');
        // 2nd approach for refs
        this.inputElementRef = React.createRef(); // any refernce object react gives
    }


  componentDidMount() {
    console.log('::::::::in Person.js componentdidmount',this.props.name);
    // this.inputElement.focus(); // 1st approach for refs
    this.inputElementRef.current.focus();
  }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Person.js shouldComponentUpdate:::::',nextProps.name)
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Person getSnapshotBeforeUpdate:::::')
        return ({message: 'snapshot'});
    }

    componentDidUpdate() {
        console.log('Person.js ComponentdidUpdate:::::',this.props.name)
    }

    componentWillUnmount() {
        console.log('componwent willunmount in Person');
    }

    render() {
        console.log('render in person:::',this.props.name);
        //approaches for rendering adjacent elements in react
        //1.
        // return (
        //     <StyledDiv >
        //         <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age} .Click this para</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange = {this.props.changeHandler} value={this.props.name} />
        //     </StyledDiv>
        // )
        //2.
        // return [
        //     <p onClick={this.props.click} key={"i1"}>I am {this.props.name} and my age is {this.props.age} .Click this para</p>,
        //     <p key={"i2"}>{this.props.children}</p>,
        //     <input key={"i3"} type="text" onChange = {this.props.changeHandler} value={this.props.name} />
        // ]
        //3.
        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age} .Click this para</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange = {this.props.changeHandler} 
                    value={this.props.name} 
                    //ref={(inputElem) => { this.inputElement = inputElem 
                        //setting a global propertyfor storing reference of input element
                        //this approach works on classbased components
                     //}}

                     ref={this.inputElementRef}
                    />
            </Aux>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changeHandler: PropTypes.func,
    click: PropTypes.func,
    children: PropTypes.element
}

export default withClass(Person, classes.Person);