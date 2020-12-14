import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//Styled components

const HeaderContainer = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const HeaderH1 = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family:'Slabo 27px', serif;
    text-align: center;
`;

///////////////////////////////////////////////

function Header({ title }) {
    return (
        <HeaderContainer>
            <HeaderH1>{title}</HeaderH1>
        </HeaderContainer>
    );
}


Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header;