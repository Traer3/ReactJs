import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 20px;
    border: 1px solid red;
    border-radius: 8px;
    color: green;
    background-color: lightgreen;
    cursor: pointer;
    width: 200px;
    height: 200px;
    text-align: center;

    &:hover {
        background-color: #5dd55d;
    }
`

const CSSinJSButton = ({children}) => {
    return <StyledButton>{children}</StyledButton>
};

export default CSSinJSButton;




