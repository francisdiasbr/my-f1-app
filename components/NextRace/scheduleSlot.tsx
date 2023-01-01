import React from "react";
import { Block, Typography } from '@xprog/prensa'

import { scheduleSlotProps, slotDayProps, slotTimeProps, slotTitleProps } from './styles'

type ScheduleSlotProps = {
  name: string,
  date: string,
  time: string,
  image: string
}

export const ScheduleSlot: React.FC<ScheduleSlotProps> = ({
  name,
  date,
  time,
  image
}) => {
  return (
    <Block css={scheduleSlotProps} className="scheduleHeader">
      <Typography css={slotTitleProps}>{name}</Typography>
      <Typography css={slotTimeProps}>{time}</Typography>
      <Typography css={slotDayProps}>{date}</Typography>
      <img src={image} width='80px' />
    </Block>
  )
}
