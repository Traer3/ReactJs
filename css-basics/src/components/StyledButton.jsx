import React from "react";
import styled from 'styled-components';

const ButtonButStyled = styled.button`

    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    font-size: 16px;
    

    &:hover {
        background-color: #45a049;
    }
    
    &::before{
        content: '✓';
        margin-right: 10px;
    }

`;

const StyledButton = ({children}) => {
    return <ButtonButStyled>{children}</ButtonButStyled>
}

export default StyledButton;

