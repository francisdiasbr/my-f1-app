import { FormInputType } from 'components/BasicComponents/FormInput/types'

export type RaceFormType = {
  raceId?: string,
  raceNameLabel?: FormInputType,
  raceDateLabel?: FormInputType,
  raceWinnerLabel?: FormInputType,
}

interface Race {
  id: string,
  name: string,
  date: string,
  winner: string,
}

export type RaceListType = Race[];