import React from 'react';
import {Block} from '@xprog/prensa'

import {HomeContainerProps} from './styles'
import News from '../News'
import NextRace from 'components/NextRace';

const Home = () => {
  return (
    <>
      <Block css={HomeContainerProps}>
        <NextRace />
        <News />
      </Block>
    </>
  )
}

export default Home