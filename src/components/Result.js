import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
    background-color: rgb(127,234,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultContainer = styled.div`
    text-align: center;
    padding:.5rem;
    border:1px solid #26c6da;
    background-color: rgb(127,234,237);
    margin-top: 1rem;
    position: relative
`;

const Text = styled.p`
    color:#00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Results = ({quote}) => {

    return (
        (quote === 0) ? 
        <Message>Please select brand, year and a plan</Message> 
        :
        (<ResultContainer>
            <TransitionGroup
                component='span'
                className='resultado'
            >
                <CSSTransition
                    classNames='resultado'
                    key={quote}
                    timeout={{ enter:500, exit:500}}
                >
                    <Text>Total: <span>${quote}</span> </Text>
                </CSSTransition>
            </TransitionGroup>
        </ResultContainer>)
    );
}

Results.propTypes = {
    quote: PropTypes.number.isRequired,
}
 
export default Results;