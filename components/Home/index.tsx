import React from 'react';
import { Block } from '@xprog/prensa'

import { homeProps, leftColumnProps, rightColumnProps } from './styles'
import Calendar from '../Calendar'
import News from '../Materias'
import NextRace from '../NextRace'
import Spacer from '../BasicComponents/Spacer'

const Home = () => {
  return (
    <Block css={homeProps}>
      <Block css={leftColumnProps}>
        <News/>
        <Spacer/>
      </Block>
      <Block css={rightColumnProps}>
        <NextRace/>
        <Calendar/>
      </Block>
    </Block>
  )
}

export default Home