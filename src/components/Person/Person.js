import React from 'react';
import './Person.css';
import styled from 'styled-components';

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

const person = (pr) => {
    const rnd = Math.random();

    if(rnd>0.7) {
        throw new Error('something went wrong');
    }
    return (
        <StyledDiv>
            <p onClick={pr.click}>I am {pr.name} and my age is {pr.age}</p>
            <p>{pr.children}</p>
            <input type="text" onChange = {pr.changeHandler} defaultValue={pr.name}/>
        </StyledDiv>)
}

export default person;