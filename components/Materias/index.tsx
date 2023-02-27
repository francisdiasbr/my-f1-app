import React, { useState, useEffect } from 'react';
import { Block, Typography } from '@xprog/prensa'
import { map } from 'lodash'
import axios from 'axios'

import Title from '../BasicComponents/Title'
import { newsContainerProps, newsAuthorProps, newsContentProps, newsInfoProps, newsBlockWrapperProps, newsPreviewProps, newsTitleProps } from "./styles";

type NewsBlock = {}

const Materias: React.FC<NewsBlock> = () => {
  const [article, setArticle] = useState([])

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.post('http://localhost:3001/articles/filter')
        setArticle(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchArticles()
  }, [])

  return (
    <Block css={newsContainerProps}>
      <Title value='Últimas Notícias' />
      {map(article, (item) => {
        return (
          <Block
          className='news-item'
          css={newsBlockWrapperProps}>
          <Block css={newsContentProps}>
            <Typography css={newsTitleProps}>{item.articleName}</Typography>
            <Typography css={newsPreviewProps}>{item.articleTitle}</Typography>
            <Block css={newsInfoProps}>
              <Typography css={newsAuthorProps}>{item.articleText}</Typography>
            </Block>
          </Block>
        </Block>
        )
      })}
    </Block>
  )
}

export default Materias