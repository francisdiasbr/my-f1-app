import { Block, Typography } from '@xprog/prensa'
import { PrensaEngineCSSProp } from '@xprog/prensa/types'

import { boxAreaProps, boxContainerProps, boxWrapProps, titleProps } from './props'
import { boxTitles } from './data'

type BoxProps = {
  css?: PrensaEngineCSSProp
}

const Box: React.FC<BoxProps> = (props) => {

  return (
    <Block
      className='boxContainer'
      css={boxContainerProps}>
      <Block
        className='boxWrap'
        css={boxWrapProps}>
        <Typography
          className='title'
          css={titleProps}>{boxTitles.defaultTitle}</Typography>
        <Block
          className='boxArea'
          css={boxAreaProps}></Block>
      </Block>
    </Block>
  )
}

Box.defaultProps = {
  css: {
    width: '100%'
  }
}

export default Box