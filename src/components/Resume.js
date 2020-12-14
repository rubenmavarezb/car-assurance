import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { firstToUpp } from '../Helper'

const ResumeContainer = styled.div`
    padding:1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resume = ({data}) => {

    const {brand, year, plan} = data;

    if(brand === '' || year === '' || plan === '') return null;

    return ( 
        <ResumeContainer>
            <h2>Quote resume:</h2>
            <ul>
                <li>Brand: {firstToUpp(brand)}</li>
                <li>Year: {year}</li>
                <li>Plan: {firstToUpp(plan)}</li>
            </ul>
        </ResumeContainer>

     );
}

Resume.propTypes = {
    data: PropTypes.object.isRequired,
}
 
export default Resume;