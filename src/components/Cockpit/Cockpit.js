import React from 'react';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';

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


const cockpit = (props) => {
    return (
        <div>
            <header className={props.cssClasses.AppHeader}>
            <img src={logo} className={props.cssClasses.AppLogo} alt="logo" />
            </header>
            <h1>{props.title}</h1>
                {/* <TableParent /> */}
                {/* <button style={btnStyle} onClick={this.toggleHandler}>Switch Name</button> */}
            <StyledButton alt={props.showPersons} onClick={props.toggleHandler}>
            Switch Name
            </StyledButton>
        </div>
    )
}

export default cockpit;