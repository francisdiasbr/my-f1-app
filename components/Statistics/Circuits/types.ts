import { FormInputType } from 'components/BasicComponents/FormInput/types'

export type CircuitFormType = {
  circuitId?: string,
  circuitNameLabel?: FormInputType,
  circuitCountryLabel?: FormInputType,
  circuitCityLabel?: FormInputType,
}

interface Circuit {
  id: string,
  name: string,
  country: string,
  city: string,
}

export type CircuitListType = Circuit[];