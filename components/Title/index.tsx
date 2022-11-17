import { Block, Typography } from '@xprog/prensa'
import { titleProps } from './props'

export type TitleProps = {
  value: string
}

const Title = ({ value }) => {
  return (
    <Typography
      className='title'
      css={titleProps}>
      {value}
    </Typography>
  )
}

export default Title