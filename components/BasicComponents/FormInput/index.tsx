import Input from '@mui/joy/Input';
import { Block, Typography } from "@xprog/prensa"
import {useStyles} from '../../../brands/f1-app/theme'

import { inputItemProps, inputLabelProps } from "./styles"
import { FormInputType } from "./types"


export const FormInput: React.FC<FormInputType> = ({ onChange, name, value, label }) => {
  const classes = useStyles()
  return (
    <Block
      className={classes.root}
      css={inputItemProps}>
      <Typography
        className={classes.primary.main}
        css={inputLabelProps}
        variant="menuItem-default"
      >
        {label}
      </Typography>
      <Input
        color="primary"
        name={name}
        type='text'
        onChange={onChange}
        size="sm"
        value={value}
        variant="outlined"
      >
      </Input>
    </Block>
  )
}

