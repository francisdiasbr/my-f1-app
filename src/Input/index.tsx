import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`
const Input = (props: any) => {
    return (
        <StyledInput {...props}></StyledInput>
    )
}

export {Input}