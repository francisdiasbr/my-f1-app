import React from 'react';
import { Block } from '@xprog/prensa'

import { leftColumnProps, rightColumnProps } from './styles'
import News from '../News'
import NextRace from 'components/NextRace';
import Spacer from 'components/BasicComponents/Spacer'

const Home = () => {
  return (
    <>
      <Block css={leftColumnProps}>
        <NextRace/>
        <Spacer/>
        <News/>
      </Block>
      <Block css={rightColumnProps}>
        <Spacer/>
      </Block>
    </>
  )
}

export default Home