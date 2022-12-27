import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import Logout from './logout';

const Title = styled.title`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:auto;
    font-size: 1.5em;
    color: ${props => props.color};
    // border: 2px solid green;
    width: 90%;
    `;

const StyledNavbar = styled.nav`
    // display: flex;
    // justify-content: space-between;
    // margin: auto;
    padding-top:20px;
    // border: 2px solid red;
    text-align: right;
    color: ${props => props.color};
    `;

StyledNavbar.defaultProps = {
    color: COLORS.blue1
}
Title.defaultProps = {
    color: COLORS.blue1
}

function Navbar() {
    return (
        <Title>
            <h1>ASP - domaći</h1>
            <StyledNavbar>
                <Logout className="logout" key="logout" />
            </StyledNavbar>
        </Title>
    );
}

export default Navbar;