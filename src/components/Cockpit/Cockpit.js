import React, {useEffect,useRef} from 'react';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import cssClasses from './Cockpit.module.css';

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


const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    useEffect(() => {
        console.log('Cockpit useeffect called::');

    //    const timerId =  setTimeout(() => {
    //         alert('saved data to cloud;;;;;');
    //     }, 1000);
        toggleButtonRef.current.click(); 
        return () => {
            console.log('Cockpit cleanup performed|||');
            //clearTimeout(timerId);
        };
    },[]);

    useEffect(() => {
        console.log('Cockpit 2nd useeffect called::');

        return () => {
            console.log('Cockpit 2nd cleanup performed|||');
        };
    });

    const assignedClasses = [];
    let btnCls = '';
    if (props.showPersons) {
        btnCls = cssClasses.Red;
    }

    if(props.personsLength<=2) {
        assignedClasses.push(cssClasses.red); //classes = ['red']
    }

    if(props.personsLength<=1) {
        assignedClasses.push(cssClasses.bold); //classes = ['red','bold']
    }


    return (
                <div>
                    <p className={assignedClasses.join(" ")}>this is really working</p>
                    <header className={cssClasses.AppHeader}>
                    <img src={logo} className={cssClasses.AppLogo} alt="logo" />
                    </header>
                    <h1>{props.title}</h1>
                        {/* <TableParent /> */}
                        {/* <button style={btnStyle} onClick={this.toggleHandler}>Switch Name</button> */}
                    {/* <StyledButton alt={props.showPersons} onClick={props.toggleHandler}>
                    Switch Name
                    </StyledButton> */}
                    <button className={btnCls} ref={toggleButtonRef} onClick={props.toggleHandler}>
                        Switch Name
                    </button>
                </div>
    )
}

export default React.memo(Cockpit);
