import map from 'lodash/map'
import React from "react";
import { Block } from '@xprog/prensa'

import { newsContainerProps } from "./styles";
import data from './data.json'
import Item from "./item";
import Title from '../BasicComponents/Title'

type NewsBlock = {}

const News: React.FC<NewsBlock> = () => {
  return (
    <Block css={newsContainerProps}>
      <Title value='Últimas Notícias'/>
      {map(data, (item, key) => {
        return (
            <Item {...item} key={key} />
        )
      })}
    </Block>
  )
}

export default News