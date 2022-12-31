import { Block, Typography } from '@xprog/prensa'
import React from 'react'
import Image from 'next/image'

import { NewsObject } from './types'
import {newsAuthorProps, newsContentProps, newsInfoProps, newsBlockWrapperProps, newsContainerProps, newsPreviewProps, newsTitleProps } from "./styles";


const Item: React.FC<NewsObject> = (item) => {
  return (
    <Block
      className='news-item'
      css={newsBlockWrapperProps}>
      <a title={item.title} style={{display: 'flex'}}>
        <img alt={item.title} src={item.url} style={{height: 128, width: 214, borderRadius: 4}}/>
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