import { FormInputType } from 'components/BasicComponents/FormInput/types'

export type DriverFormType = {
  driverId?: string,
  driverNameLabel?: FormInputType,
  driverBirthLabel?: FormInputType,
  driverCountryLabel?: FormInputType,
  driverTeamLabel?: FormInputType,
}

interface Driver {
  id: string,
  name: string,
  birth: string,
  country: string,
  team: string,
}

export type DriverListType = Driver[];