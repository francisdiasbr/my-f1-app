import { FormInputType } from 'components/BasicComponents/FormInput/types'

export type TeamFormType = {
  teamId?: string,
  teamNameLabel?: FormInputType,
  teamCountryLabel?: FormInputType,
}

interface Team {
  id: string,
  name: string,
  country: string,
}

export type TeamListType = Team[];