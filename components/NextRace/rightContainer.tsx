import get from 'lodash/get';
import map from 'lodash/map';
import React from "react";
import { Block, Typography } from '@xprog/prensa'

import data from './data.json'
import { ScheduleSlot } from './scheduleSlot'
import { bottomTextProps, rightContainerProps, rightContainerTopProps, rightContainerBottomProps } from './styles'

let globalInterval

const RightContainer = () => {
  const [isFirstPage, setIsFirstPage] = React.useState(true)
  const firstItem = get(data, '[0]', false)

  React.useEffect(() => {
    if (!globalInterval) {
      globalInterval = setInterval(() => {
        setIsFirstPage(!isFirstPage)
      }, 4000)
    }
  }, [isFirstPage])

  if (!firstItem) {
    return <pre>no-info</pre>
  }
  const events = get(firstItem, 'events', false)
  const eventsPage1 = events.slice(0, 3)
  const eventsPage2 = events.slice(3, 5)

  const RenderSlots = () => {
    return (
      <>
        <Block css={{ display: isFirstPage ? 'flex' : 'none' }}>
          {map(eventsPage1, (event, key) => {
            return <ScheduleSlot {...event} />
          })}
        </Block>
        <Block css={{ display: isFirstPage ? 'none' : 'flex' }}>
          {map(eventsPage2, (event, key) => {
            return <ScheduleSlot {...event} />
          })}
        </Block>
      </>
    )
  }

  return (
    <Block css={rightContainerProps}>
      <Block css={rightContainerTopProps} className="rightInfo">
        <RenderSlots />
      </Block>
      <Block css={rightContainerBottomProps}>
        <Typography css={bottomTextProps}>Horário de Brasília (UTC - 3)</Typography>
      </Block>
    </Block>
  )
}

export default RightContainer