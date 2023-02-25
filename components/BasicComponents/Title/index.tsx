import { Block, Typography } from '@xprog/prensa'
import { titleProps, titleWrapperProps } from './props'

export type TitleProps = {
  value: string
}

const Title = ({ value }) => {
  return (
    <Block
      css={titleWrapperProps}>
      <Typography
        className='title'
        css={titleProps}
      >
        {value}
      </Typography>
    </Block>
  )
}

export default Title