import { Block, Typography } from "@xprog/prensa"

import { inputItemProps, inputLabelProps, Input } from "./styles"
import { FormInputType } from "./types"


export const FormInput: React.FC<FormInputType> = ({ onChange, name, textValue, value }) => {

  return (
    <Block
      className='inputItem'
      css={inputItemProps}>
      <Typography
        className='inputLabel'
        css={inputLabelProps}
        variant="menuItem-default"
        >
        {value}
      </Typography>
      <Input
        name={name}
        type='text'
        value={textValue}
        onChange={onChange}>
      </Input>
    </Block>
  )
}

