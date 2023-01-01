import get from 'lodash/get';
import React from "react";
import { Block, Typography } from '@xprog/prensa'

import data from './data.json'
import { leftContainerProps, leftContainerTitleProps } from './styles'
import RaceLocation from './raceLocation'

const LeftContainer = () => {
  const firstItem = get(data, '[0]', false)
  if (!firstItem) {
    return <pre>no-race</pre>
  }
  return (
    <Block css={leftContainerProps}>
      <Typography css={leftContainerTitleProps} className="LeftContainer">Próxima Etapa</Typography>
      <Block>
        <RaceLocation {...firstItem} />
      </Block>
    </Block>
  )
}

export default LeftContainer