import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  type: any
}

const Button = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 8px;
  border: 1px solid black;
  box-sizing: border-box;
  color: #000;
  display: flex;
  flex-direction: column;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  line-height: 20px;
  margin: 10px 0px;
  max-width: 600px;
  padding: 10px 16px;
  position: relative;
  width: 100px;

  ${(props) =>
    props.primary &&
    css`
      background: #03265a;
      color: white;
    `}
`

export { Button }
