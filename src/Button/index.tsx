import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  type: any;
}

const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 4px;
  border: 2px solid #005fdb;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: #ff8700;
      color: white;
    `}
`;

export { Button };
