import React from "react";
import {Block} from '@xprog/prensa'

import {nextRaceContainerProps} from './styles'
import LeftContainer from "./leftContainer";
import RightContainer from './rightContainer'

const NextRace = () => {
  return (
    <Block css={nextRaceContainerProps}>
      <LeftContainer/>
      <RightContainer/>
    </Block>
  )
}

export default NextRace