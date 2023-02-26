import Button from '@mui/joy/button'
import { Block } from '@xprog/prensa'
import axios from 'axios'
import { first, get, map } from 'lodash'
import React, { useState } from 'react'

import { FormInput } from '../../BasicComponents/FormInput'
import Table from './Table'
import TextArea from '../../BasicComponents/TextArea'
import Title from '../../BasicComponents/Title'
import CustomAlert from '../../BasicComponents/MUIAlert'
import { titleStrings } from '../../BasicComponents/Title/data'
import { calendarFormFields, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { CalendarFormType, CalendarListType } from './types'

const initialFormValues: any = {
  calendarOrderLabel: '',
  calendarNameLabel: '',
  calendarCountryLabel: '',
  calendarDateLabel: '',
  calendarFlagLabel: '',
  calendarInfoLabel: '',
};

const Calendar = () => {
  const [formValues, setFormValues] = useState<CalendarFormType>(initialFormValues)
  const [calendarList, setCalendarList] = useState<CalendarListType>([])
  const [formIncomplete, setFormIncomplete] = useState<boolean>(false)

  const parseCalendarFromApi = (item) => {
    return {
      id: item._id,
      order: item.calendarOrder,
      name: item.calendarName,
      country: item.calendarCountry,
      date: item.calendarDate,
      flag: item.calendarFlag,
      info: item.calendarInfo,
    }
  }

  const loadCalendarFromApi = async () => {
    const requestCalendar = await axios.post('http://localhost:3001/calendar/filter')
    const resultCalendar = get(requestCalendar, 'data', [])
    const parsedCalendar = map(resultCalendar, (item) => parseCalendarFromApi(item))
    setCalendarList(parsedCalendar)
  }

  const loadCalendarById = async (id) => {
    const requestFilter = { filters: { _id: id } }
    const requestCalendar = await axios.post('http://localhost:3001/calendar/filter', requestFilter)
    const resultCalendar = get(requestCalendar, 'data', [])
    const parsedCalendar = map(resultCalendar, (item) => parseCalendarFromApi(item))
    const calendarSelected = first(parsedCalendar)
    setFormValues({
      ...formValues,
      calendarId: calendarSelected.id,
      calendarOrderLabel: calendarSelected.order,
      calendarNameLabel: calendarSelected.name,
      calendarCountryLabel: calendarSelected.country,
      calendarDateLabel: calendarSelected.date,
      calendarFlagLabel: calendarSelected.flag,
      calendarInfoLabel: calendarSelected.info,
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }

  const handleEditItem = async (id) => {
    await loadCalendarById(id)
  }

  const handleFormSubmit = async () => {
    if (!formValues?.calendarOrderLabel || !formValues?.calendarNameLabel || !formValues?.calendarCountryLabel || !formValues?.calendarDateLabel || !formValues?.calendarFlagLabel || !formValues?.calendarInfoLabel) {
      setFormIncomplete(true);
      return;
    }
    setFormIncomplete(false);
    const calendarBody = {
      _id: formValues?.calendarId,
      calendarOrder: formValues?.calendarOrderLabel,
      calendarName: formValues?.calendarNameLabel,
      calendarCountry: formValues?.calendarCountryLabel,
      calendarDate: formValues?.calendarDateLabel,
      calendarFlag: formValues?.calendarFlagLabel,
      calendarInfo: formValues?.calendarInfoLabel,
    }
    const result = await axios.post('http://localhost:3001/calendar/save', calendarBody)
    loadCalendarFromApi()
    setFormValues(initialFormValues);
  }

  React.useEffect(() => {
    loadCalendarFromApi()
  }, [])

  return (
    <Block
      className='sectionWrapper'
      css={sectionWrapperProps}>
      <Title value={titleStrings.calendarTitle} />
      <Block
        className='blockDisposition'
        css={blockDispositionProps}>
        <Block
          className='inputWrap'
          css={inputWrapProps}>
          {map(calendarFormFields, (item, key) =>
            item.type === 'textarea' ? (
              <TextArea
                {...item}
                key={key}
                onChange={handleInputChange}
                title='Informações sobre o evento'
                value={formValues[`${item.name}`]}
              />
            ) : (
              <FormInput
                {...item}
                key={key}
                onChange={handleInputChange}
                value={formValues[`${item.name}`]}
              />
            )
          )}
        </Block>
        <Button
          onClick={handleFormSubmit}
          color='info'
          variant='soft'
        >
          Enviar
        </Button>
        {formIncomplete && (
          <CustomAlert
            message='Todos os campos são obrigatórios.'
            onClose={() => {
              setFormIncomplete(false);
            }}
          />
        )}
      </Block>
      <Table
        headCells={headCells}
        handleEditItem={handleEditItem}
        rows={calendarList}
      />
    </Block>
  )
}

export default Calendar