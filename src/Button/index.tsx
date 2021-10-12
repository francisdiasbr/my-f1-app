import React from "react";
import styled, {css} from "styled-components";
 
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  type: any;
}

const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export {Button}