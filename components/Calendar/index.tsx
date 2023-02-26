import React, { useState, useEffect } from "react";
import { Block, Typography } from '@xprog/prensa'
import { map, orderBy } from 'lodash'
import axios from 'axios'

import { alignItemsProps, alignTextProps, alignTopProps, calendarContainerProps, elementsProps, flagProps, infoProps, itemProps, raceDateProps, raceCityProps, raceTitleProps, titleProps } from './styles'



const Calendar = () => {
  const [calendar, setCalendar] = useState([])

  useEffect(() => {
    async function fetchCalendar() {
      try {
        const response = await axios.post('http://localhost:3001/calendar/filter')
        setCalendar(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCalendar()
  }, [])

  const sortByCalendarOrder = (item) => {
    const order = parseInt(item.calendarOrder.substring(0, 2), 10) // extrai os dois primeiros dígitos da string calendarOrder e os converte em um número inteiro.
    return isNaN(order) ? Infinity : order // se a string não puder ser convertida em um número inteiro, retorna Infinity para colocá-la no final da lista.
  }

  return (
    <Block css={calendarContainerProps}>
      <Block css={alignTopProps}>
        <Typography css={infoProps} className="Calendar">Vem aí</Typography>
        <Typography css={titleProps}>Calendário 2023</Typography>
      </Block>
      <Block css={alignItemsProps}>
        {map(orderBy(calendar, [sortByCalendarOrder]), (item) => {
          return (
            <Block css={itemProps} key={item.calendarId}>
              <Block css={elementsProps}>
                <Block css={flagProps}>
                  <img src={`/static/${item.calendarFlag.toLowerCase()}.jpeg`} alt={item.calendarCountry} height='40px' width='70px' />
                </Block>
                <Block css={alignTextProps}>
                  <Typography css={raceTitleProps}>{item.calendarName}</Typography>
                  <Typography css={raceDateProps}>{item.calendarDate}</Typography>
                  <Typography css={infoProps}>{item.calendarInfo}</Typography>
                </Block>
              </Block>
            </Block>
          )
        })}
      </Block>
    </Block>
  )
}

export default Calendar

