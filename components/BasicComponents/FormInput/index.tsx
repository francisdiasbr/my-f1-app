import { Block, Typography } from "@xprog/prensa"
import Input from '@mui/joy/Input';

import { inputItemProps, inputLabelProps } from "./styles"
import { FormInputType } from "./types"


export const FormInput: React.FC = ({ onChange, name, label, value }: any) => {

  return (
    <Block
      className='inputItem'
      css={inputItemProps}>
      <Typography
        className='inputLabel'
        css={inputLabelProps}
        variant="menuItem-default"
      >
        {label}
      </Typography>
      <Input
        size='sm'
        name={name}
        type='text'
        value={value}
        onChange={onChange}
        variant='outlined'
        >
      </Input>
    </Block>
  )
}

