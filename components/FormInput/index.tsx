import { Block, Typography } from "@xprog/prensa"
import { inputItemProps, inputLabelProps } from "./props"

export type FormInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

export const FormInput: React.FC<FormInputProps> = ({ onChange, name, value }) => {

  return (
    <Block
      className='inputItem'
      css={inputItemProps}>
      <Typography
        className='inputLabel'
        css={inputLabelProps}>
        {value}
      </Typography>
      <input
        name={name}
        type='text'
        onChange={onChange}>
      </input>
    </Block>
  )
}

