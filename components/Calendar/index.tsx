import React from "react";
import { Block, Typography } from '@xprog/prensa'
import { map } from 'lodash'
import Image from 'next/image'

import { alignItemsProps, alignTopProps, calendarContainerProps, infoProps, itemProps, raceDateProps, raceCityProps, raceTitleProps, titleProps } from './styles'
import mock from './calendario2023.json'

const getFlagUrl = (countryCode) => `https://www.countryflags.io/${countryCode}/flat/32.png`

const Calendar = () => {
  return (
    <Block css={calendarContainerProps}>
      <Block css={alignTopProps}>
        <Typography css={infoProps} className="Calendar">Vem aí</Typography>
        <Typography css={titleProps} className="Calendar">Calendário 2023</Typography>
      </Block>
      <Block css={alignItemsProps}>
        {map(mock, (corrida) => {
          return (
            <Block css={itemProps} key={corrida.id}>
              <Typography css={raceTitleProps}>{corrida.nome}</Typography>
              <Typography css={raceDateProps}>{corrida.data}</Typography>
              <Block>
                <img src={getFlagUrl(corrida.pais)} alt={`Bandeira de ${corrida.pais}`} width={32} height={32} />
                <Typography css={raceCityProps}>{corrida.cidade}</Typography>
              </Block>
            </Block>
          )
        })}
      </Block>
    </Block>
  )
}

export default Calendar

