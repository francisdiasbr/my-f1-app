import { Block, Typography } from "@xprog/prensa"

import { inputItemProps, inputLabelProps, Input } from "./styles"
import { FormInputType } from "./types"


export const FormInput: React.FC<FormInputType> = ({ onChange, name, value }) => {

  return (
    <Block
      className='inputItem'
      css={inputItemProps}>
      <Typography
        className='inputLabel'
        css={inputLabelProps}>
        {value}
      </Typography>
      <Input
        name={name}
        type='text'
        onChange={onChange}>
      </Input>
    </Block>
  )
}

