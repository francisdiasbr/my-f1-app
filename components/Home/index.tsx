import React from 'react';
import {Block} from '@xprog/prensa'

import {HomeContainerProps} from './styles'
import News from '../News'

const Home = () => {
  return (
    <>
      <Block css={HomeContainerProps}>
        <News />
      </Block>
    </>
  )
}

export default Home