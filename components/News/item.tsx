import { Block, Typography } from '@xprog/prensa'
import React from 'react'

import { NewsObjectType } from './types'
import { newsAuthorProps, newsContentProps, newsInfoProps, newsBlockWrapperProps, newsPreviewProps, newsTitleProps } from "./styles";


const Item: React.FC<NewsObjectType> = (item) => {
  return (
    <Block
      className='news-item'
      css={newsBlockWrapperProps}>
      <a style={{ display: 'flex' }}>
        <img alt={item.title} src={item.url} style={{ height: 128, width: 214, borderRadius: 4 }} />
      </a>
      <Block css={newsContentProps}>
        <Typography css={newsTitleProps}>{item.title}</Typography>
        <Typography css={newsPreviewProps}>{item.preview}</Typography>
        <Block css={newsInfoProps}>
          <Typography css={newsAuthorProps}>{item.author}</Typography>
          <Typography>{item.date}</Typography>
        </Block>
      </Block>
    </Block>
  )
}

export default Item