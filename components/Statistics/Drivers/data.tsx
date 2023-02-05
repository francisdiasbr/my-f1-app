import { FormInputType } from 'components/BasicComponents/FormInput/types'

export const driversFormFields: Array<FormInputType> = [
  { name: 'driverNameLabel', label: 'Piloto' },
  { name: 'driverBirthLabel', label: 'Data de nascimento' },
  { name: 'driverCountryLabel', label: 'País' },
  { name: 'driverTeamLabel', label: 'Equipe' },
]

// data-table
interface Data {
  name: string;
  birth: string;
  country: string;
  team: string;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Piloto',
  },
  {
    id: 'birth',
    numeric: false,
    disablePadding: false,
    label: 'Data de nascimento',
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: 'País',
  },
  {
    id: 'team',
    numeric: false,
    disablePadding: false,
    label: 'Equipe',
  }
];