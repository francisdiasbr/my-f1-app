import { FormInputType } from 'components/BasicComponents/FormInput/types'

//type para os objetos do array calendarFormFields (data.tsx)
export type CalendarFormType = {
  calendarId?: string,
  calendarOrderLabel?: FormInputType,
  calendarNameLabel?: FormInputType,
  calendarCountryLabel?: FormInputType,
  calendarDateLabel?: FormInputType,
  calendarFlagLabel?: FormInputType,
  calendarInfoLabel?: FormInputType,
}

interface Calendar {
  id: string,
  order: string,
  name: string,
  country: string,
  date: string,
  flag: string,
  info: string,
}

export type CalendarListType = Calendar[];